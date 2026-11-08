# Project: LegalCenter

Build a complete, production-ready centralized legal document website for an independent mobile app developer.

## Project Goal
I release multiple Flutter/Android applications on Google Play. I need one permanent website to host all applications' Privacy Policies, Terms & Conditions, Data Deletion Policies, and Support pages.

I do NOT need an admin dashboard, authentication, database, backend API, CMS, or any complex system.

I want to manage everything using Markdown files in a single GitHub repository. When I add or edit a Markdown file and push to GitHub, Cloudflare Pages should automatically deploy the updated website.

## Technology Stack
- Astro (latest stable version)
- TypeScript
- Tailwind CSS
- Markdown / MDX for legal documents
- GitHub for source control
- Cloudflare Pages for hosting
- Static Site Generation (SSG)
- No paid services or external database

## Architecture
Use a data-driven architecture. Each application must have its own directory containing app metadata and legal Markdown documents.

Required folder structure:

legal-center/
├── public/
├── apps/
│   ├── app-one/
│   │   ├── app.json
│   │   ├── privacy.md
│   │   ├── terms.md
│   │   ├── data-deletion.md
│   │   └── support.md
│   └── app-two/
│       ├── app.json
│       ├── privacy.md
│       └── terms.md
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── AppCard.astro
│   │   └── LegalDocumentLayout.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   └── [app]/[document].astro
│   ├── lib/
│   │   ├── apps.ts
│   │   └── documents.ts
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md

You may adjust the folder structure if Astro requires a better implementation, but preserve the separation between app content and website code.

## URL Requirements
Every application must have permanent, clean URLs.

Examples:
- /app-one/privacy
- /app-one/terms
- /app-one/data-deletion
- /app-one/support
- /app-two/privacy
- /app-two/terms

Never generate unstable URLs or numeric IDs.

## Homepage
Create a clean, modern homepage that:
- Introduces the developer and the LegalCenter website.
- Lists all registered applications automatically from the apps directory.
- Shows each app name, description, icon, and available legal document links.
- Has a clean responsive card-based layout.
- Includes a search field to filter applications.
- Does not show apps that are marked inactive.

## Application Metadata
Each app.json should support:

{
  "name": "Example App",
  "slug": "example-app",
  "packageName": "com.example.app",
  "description": "Example mobile application",
  "developer": "Developer Name",
  "email": "support@example.com",
  "website": "https://example.com",
  "icon": "/icons/example-app.png",
  "active": true
}

All metadata must be optional where appropriate, except name and slug.

## Legal Document Rendering
- Read Markdown files from the corresponding app directory.
- Render them as clean, accessible HTML.
- Support headings, paragraphs, lists, tables, links, and code where appropriate.
- Show application name and document title.
- Show last updated date.
- Provide navigation between available documents for the same app.
- Include a link back to the homepage.
- Provide a print-friendly layout.
- Include SEO title and description.
- Use safe Markdown rendering and sanitize any HTML.
- Never expose draft or unpublished files.

## Design Requirements
Create a premium, minimal, modern SaaS-style documentation website.

Visual style:
- Clean flat UI
- White/light background
- Neutral gray borders
- Subtle shadows
- Excellent typography
- Comfortable reading width
- Responsive mobile-first design
- Consistent spacing
- Minimal animations
- Accessible contrast
- Dark mode support

Avoid:
- Overly colorful gradients
- Excessive animations
- Unnecessary dashboard UI
- Complex navigation
- Decorative elements that distract from legal content

The legal document page should prioritize readability rather than visual decoration.

## Developer Configuration
Create a single global configuration file for:
- Developer name
- Developer email
- Website URL
- Logo
- Default SEO metadata

Do not repeat global developer information in every app when it can be inherited from configuration.

## Cloudflare Pages Deployment
Configure the project for Cloudflare Pages static hosting.

Requirements:
- GitHub repository integration.
- Automatic deployment on every push to the main branch.
- Production build command: npm run build
- Build output directory: dist
- Custom domain support, e.g. legal.example.com
- HTTPS support.
- No server runtime or database required.

Ensure that dynamic-looking routes are generated at build time using Astro static paths.

## Documentation
Write a detailed README.md containing:
1. Local development setup.
2. How to add a new application.
3. How to add or edit a Privacy Policy.
4. How to add Terms & Conditions.
5. How to add a Data Deletion page.
6. How to remove or deactivate an app.
7. How to deploy to Cloudflare Pages.
8. How to connect a custom domain.
9. How to preview changes locally.

Include copy-paste commands and practical examples.

## Quality Requirements
- TypeScript strict mode.
- Reusable components.
- Clean and maintainable code.
- No unnecessary dependencies.
- Validate app metadata and document paths.
- Show a friendly 404 page for missing applications/documents.
- Build must fail on invalid configuration rather than silently publishing broken links.
- Test all generated routes.
- Do not leave placeholder implementation or TODO-only files.

## Important Restrictions
- No admin dashboard.
- No authentication.
- No database.
- No CMS.
- No backend API.
- No paid third-party service.
- No unnecessary Cloudflare Workers or Functions.
- Do not hardcode application lists in UI components.

## Execution Instructions
Do not just provide an architecture or code snippets.

Actually create the complete working project in the current workspace.

Work in stages:
1. Initialize the Astro project.
2. Configure Tailwind and TypeScript.
3. Implement application discovery from the apps directory.
4. Implement static legal routes.
5. Build homepage and legal document layouts.
6. Add example applications with clearly labeled sample content.
7. Add README and Cloudflare deployment instructions.
8. Run npm install and npm run build.
9. Fix every build error.
10. Verify all expected URLs are generated.

At the end, report:
- Files created.
- Features implemented.
- Build/test results.
- Exact steps to publish through GitHub and Cloudflare Pages.

The final result must be a functional, deployable website, not just a prototype.