import fs from 'node:fs';
import matter from 'gray-matter';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { url } from './paths';
import type { DocumentMetadata } from './types';

// Map common slugs to friendly default titles
const DEFAULT_TITLES: Record<string, string> = {
  privacy: 'Privacy Policy',
  terms: 'Terms & Conditions',
  'data-deletion': 'Data Deletion Policy',
  support: 'Support & Help Center',
};

export function formatDocTitle(slug: string): string {
  if (DEFAULT_TITLES[slug]) {
    return DEFAULT_TITLES[slug];
  }
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function parseMarkdownDocument(filePath: string, slug: string): DocumentMetadata {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Document file not found: ${filePath}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContents);

  // Determine Title: 1. frontmatter.title, 2. First # Heading in markdown, 3. formatDocTitle(slug)
  let docTitle = frontmatter.title as string | undefined;
  if (!docTitle) {
    const firstHeadingMatch = content.match(/^#\s+(.+)$/m);
    if (firstHeadingMatch) {
      docTitle = firstHeadingMatch[1].trim();
    } else {
      docTitle = formatDocTitle(slug);
    }
  }

  // Determine Last Updated Date
  let lastUpdated = (frontmatter.lastUpdated || frontmatter.updated || frontmatter.date) as string | undefined;
  if (!lastUpdated) {
    const dateMatch = content.match(/(?:last updated|effective date|updated on)[:\s]+([A-Za-z0-9, ]+)/i);
    if (dateMatch) {
      lastUpdated = dateMatch[1].trim();
    }
  }

  // Parse Markdown to HTML
  const rawHtml = marked.parse(content, { async: false }) as string;

  // Sanitize HTML
  const cleanHtml = sanitizeHtml(rawHtml, {
    allowedTags: [
      ...sanitizeHtml.defaults.allowedTags,
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
      'code',
      'pre',
      'span',
      'div',
      'p',
      'img',
      'figure',
      'figcaption',
    ],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      a: ['href', 'name', 'target', 'rel', 'class'],
      img: ['src', 'alt', 'title', 'class', 'width', 'height', 'loading'],
      div: ['class', 'id'],
      p: ['class'],
      th: ['align'],
      td: ['align'],
      span: ['class'],
      code: ['class'],
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform('a', {
        rel: 'noopener noreferrer',
      }),
      img: (_tagName, attribs) => {
        let src = attribs.src || '';
        if (src.startsWith('/') && !src.startsWith('//')) {
          src = url(src);
        }
        return {
          tagName: 'img',
          attribs: {
            ...attribs,
            src,
            loading: 'lazy',
            class: (attribs.class ? attribs.class + ' ' : '') + 'rounded-lg max-w-full h-auto',
          },
        };
      },
    },
  });

  return {
    slug,
    title: docTitle,
    lastUpdated,
    rawContent: content,
    htmlContent: cleanHtml,
  };
}

