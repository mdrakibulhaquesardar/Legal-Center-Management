import fs from 'node:fs';
import path from 'node:path';
import { siteConfig } from '../config/site';
import { parseMarkdownDocument } from './documents';
import type { AppMetadata, AppWithDocuments, DocumentMetadata } from './types';

const APPS_DIR = path.resolve(process.cwd(), 'apps');

/**
 * Validates and normalizes app metadata from app.json
 */
function validateAppMetadata(data: unknown, dirName: string): AppMetadata {
  if (typeof data !== 'object' || data === null) {
    throw new Error(`[Build Error] Invalid app.json in "apps/${dirName}": Expected a JSON object.`);
  }

  const raw = data as Record<string, unknown>;

  if (!raw.name || typeof raw.name !== 'string' || raw.name.trim() === '') {
    throw new Error(`[Build Error] Missing or invalid "name" in "apps/${dirName}/app.json".`);
  }

  if (!raw.slug || typeof raw.slug !== 'string' || raw.slug.trim() === '') {
    throw new Error(`[Build Error] Missing or invalid "slug" in "apps/${dirName}/app.json".`);
  }

  const slug = raw.slug.trim();
  if (slug !== dirName) {
    console.warn(`[Warning] Directory name "apps/${dirName}" does not match slug "${slug}". Using slug "${slug}".`);
  }

  return {
    name: raw.name.trim(),
    slug,
    packageName: typeof raw.packageName === 'string' ? raw.packageName.trim() : undefined,
    description: typeof raw.description === 'string' ? raw.description.trim() : undefined,
    developer: typeof raw.developer === 'string' ? raw.developer.trim() : siteConfig.developerName,
    email: typeof raw.email === 'string' ? raw.email.trim() : siteConfig.developerEmail,
    website: typeof raw.website === 'string' ? raw.website.trim() : siteConfig.websiteUrl,
    icon: typeof raw.icon === 'string' ? raw.icon.trim() : undefined,
    active: raw.active !== false, // default to true unless explicitly false
  };
}

/**
 * Loads all applications and their documents from the apps/ directory
 */
export function getAllApps(includeInactive = false): AppWithDocuments[] {
  if (!fs.existsSync(APPS_DIR)) {
    console.warn(`[Warning] "apps" directory not found at ${APPS_DIR}`);
    return [];
  }

  const entries = fs.readdirSync(APPS_DIR, { withFileTypes: true });
  const appDirs = entries.filter((e) => e.isDirectory() && !e.name.startsWith('.') && !e.name.startsWith('_'));

  const apps: AppWithDocuments[] = [];

  for (const dir of appDirs) {
    const dirPath = path.join(APPS_DIR, dir.name);
    const appJsonPath = path.join(dirPath, 'app.json');

    if (!fs.existsSync(appJsonPath)) {
      throw new Error(`[Build Error] Required file "app.json" missing in "apps/${dir.name}".`);
    }

    let parsedJson: unknown;
    try {
      const fileContent = fs.readFileSync(appJsonPath, 'utf-8');
      parsedJson = JSON.parse(fileContent);
    } catch (err) {
      throw new Error(`[Build Error] Malformed JSON in "apps/${dir.name}/app.json": ${(err as Error).message}`);
    }

    const appMetadata = validateAppMetadata(parsedJson, dir.name);

    if (!includeInactive && !appMetadata.active) {
      continue;
    }

    // Discover markdown files in the app folder
    const files = fs.readdirSync(dirPath);
    const mdFiles = files.filter(
      (file) =>
        file.endsWith('.md') &&
        !file.startsWith('.') &&
        !file.startsWith('_') &&
        !file.toLowerCase().includes('draft')
    );

    const documents: DocumentMetadata[] = [];
    for (const mdFile of mdFiles) {
      const docSlug = path.basename(mdFile, '.md');
      const docPath = path.join(dirPath, mdFile);
      const parsedDoc = parseMarkdownDocument(docPath, docSlug);
      documents.push(parsedDoc);
    }

    // Order common documents logically: privacy -> terms -> data-deletion -> support -> others
    const sortOrder = ['privacy', 'terms', 'data-deletion', 'support'];
    documents.sort((a, b) => {
      const indexA = sortOrder.indexOf(a.slug);
      const indexB = sortOrder.indexOf(b.slug);
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.title.localeCompare(b.title);
    });

    apps.push({
      app: appMetadata,
      documents,
      documentSlugs: documents.map((d) => d.slug),
    });
  }

  // Sort apps alphabetically by name
  return apps.sort((a, b) => a.app.name.localeCompare(b.app.name));
}

/**
 * Returns only active applications
 */
export function getActiveApps(): AppWithDocuments[] {
  return getAllApps(false);
}

/**
 * Returns single app by slug
 */
export function getAppBySlug(slug: string): AppWithDocuments | undefined {
  const apps = getAllApps(true);
  return apps.find((a) => a.app.slug === slug);
}

/**
 * Returns static path params and props for Astro getStaticPaths()
 */
export function getAllStaticDocRoutes() {
  const activeApps = getActiveApps();
  const routes = [];

  for (const { app, documents } of activeApps) {
    for (const doc of documents) {
      routes.push({
        params: {
          app: app.slug,
          document: doc.slug,
        },
        props: {
          app,
          doc,
          allDocs: documents,
        },
      });
    }
  }

  return routes;
}

