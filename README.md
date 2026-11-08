# LegalCenter ⚖️

A centralized, production-grade legal document website for mobile app developers. Host all your Android/Flutter applications' **Privacy Policies**, **Terms & Conditions**, **Data Deletion Policies**, and **Support Pages** on permanent, clean URLs to satisfy Google Play Store compliance.

Built with **Astro (SSG)**, **TypeScript**, and **Tailwind CSS**. Zero backend, zero database, zero CMS, and 100% free hosting via **GitHub Pages** or **Cloudflare Pages**.

---

## 🚀 Key Features

* **File-Driven Architecture:** Manage everything by adding Markdown (`.md`) files and an `app.json` inside `apps/<app-slug>/`.
* **Zero Maintenance:** Push to GitHub ➔ Automatic build & deployment via GitHub Actions or Cloudflare Pages.
* **Google Play Store Ready:**
  * Permanent, clean, human-readable URLs (e.g., `/habit-forge/privacy`, `/habit-forge/data-deletion`).
  * Dedicated Data & Account Deletion policies meeting Google Play Data Safety requirements.
* **Fast & Light:** 100% Static Site Generation (SSG). Sub-millisecond page loads with zero runtime servers.
* **Modern UI & Dark Mode:** Minimal SaaS design, responsive layout, live client-side search, and dark mode support.
* **Print & PDF Optimized:** `@media print` styles allow users or app reviewers to print or save clean PDF copies with one click.
* **Build-Time Verification:** Build automatically fails if metadata is missing or URLs are broken, preventing broken live links.

---

## 📁 Project Structure

```text
legal-center/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── apps/                         # Applications repository
│   ├── habit-forge/              # App 1
│   │   ├── app.json              # App metadata
│   │   ├── privacy.md            # Privacy Policy
│   │   ├── terms.md              # Terms & Conditions
│   │   ├── data-deletion.md      # Data Deletion Request Guide
│   │   └── support.md            # App Support & FAQ
│   └── audio-flow/               # App 2
│       ├── app.json
│       ├── privacy.md
│       └── terms.md
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── icons/                    # App icons (SVGs or PNGs)
├── src/
│   ├── config/
│   │   └── site.ts               # Global developer & website configuration
│   ├── components/               # Header, Footer, AppCard, SearchBar, DocTabs, etc.
│   ├── layouts/                  # BaseLayout and LegalDocumentLayout
│   ├── lib/                      # App discovery & markdown rendering engine
│   ├── pages/                    # Dynamic SSG routes ([app]/[document].astro)
│   └── styles/
│       └── global.css            # Tailwind directives & typography
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md
```

---

## 🛠️ 1. Local Development Setup

### Prerequisites
* Node.js (v18.14.0 or v20+ / v22+)
* Git

### Installation
Clone your repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/<your-username>/legal-center.git
cd legal-center

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:4321` in your browser. Live reloading is automatically enabled.

---

## ➕ 2. How to Add a New Application

To add a new application to your legal portal:

1. Create a new folder inside `apps/` with a URL-friendly slug:
   ```bash
   mkdir apps/my-new-app
   ```
2. Create an `app.json` file inside `apps/my-new-app/app.json`:
   ```json
   {
     "name": "My New App",
     "slug": "my-new-app",
     "packageName": "com.developer.mynewapp",
     "description": "Short description of your application.",
     "developer": "Your Developer Name",
     "email": "support@mynewapp.com",
     "website": "https://mynewapp.com",
     "icon": "/icons/my-new-app.png",
     "active": true
   }
   ```
   > **Note:** Only `name` and `slug` are mandatory. Other fields will fall back to the global developer settings in `src/config/site.ts` if omitted.

3. Drop your app icon into `public/icons/my-new-app.png` (or `.svg`).

---

## 📝 3. How to Add or Edit a Privacy Policy

1. Inside your app folder (e.g. `apps/my-new-app/`), create `privacy.md`:
   ```markdown
   ---
   title: Privacy Policy
   lastUpdated: November 8, 2026
   ---

   # Privacy Policy for My New App

   **Effective Date:** November 8, 2026

   ## 1. Information We Collect
   Describe the data your app collects (e.g., Device ID, analytics, permissions)...

   ## 2. How We Use Data
   Describe lawful purposes for data processing...
   ```
2. The page will be automatically generated at:
   ```text
   https://<your-domain>/my-new-app/privacy
   ```

---

## 📜 4. How to Add Terms & Conditions

1. In the app folder, create `terms.md`:
   ```markdown
   ---
   title: Terms & Conditions
   lastUpdated: November 8, 2026
   ---

   # Terms and Conditions for My New App

   ## 1. Acceptance of Terms
   By using My New App, you agree to these terms...
   ```
2. The page will be automatically generated at:
   ```text
   https://<your-domain>/my-new-app/terms
   ```

---

## 🗑️ 5. How to Add a Data Deletion Page (Google Play Compliance)

Google Play Store requires a public URL detailing how users can request account and data deletion.

1. In the app folder, create `data-deletion.md`:
   ```markdown
   ---
   title: Data Deletion Policy
   lastUpdated: November 8, 2026
   ---

   # User Data & Account Deletion Policy

   ## 1. How to Delete Data from within the App
   1. Open My New App.
   2. Navigate to Settings > Account.
   3. Tap "Delete Account".

   ## 2. How to Request Deletion via Email / Web
   Users can email support@mynewapp.com with the subject "Data Deletion Request".
   All associated user data will be deleted within 7 business days.
   ```
2. The page will be automatically generated at:
   ```text
   https://<your-domain>/my-new-app/data-deletion
   ```

---

## 🚫 6. How to Remove or Deactivate an App

You can hide an application from the website without deleting its Markdown files:

Open `apps/<app-slug>/app.json` and set `"active": false`:
```json
{
  "name": "Old App",
  "slug": "old-app",
  "active": false
}
```
* Inactive apps will not appear on the homepage.
* Inactive apps will not be published to live routes.

---

## 🌐 7. Deploy to GitHub Pages (Recommended with GitHub Pro)

With GitHub Pro, you can host your site directly from a **Private** or **Public** repository for free using GitHub Actions.

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "Initial commit of Legal Center"
git branch -M main
git remote add origin https://github.com/<your-username>/legal-center.git
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Go to your repository on **GitHub.com**.
2. Click **Settings** ➔ **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** ➔ **Source**, select **GitHub Actions**.
4. That's it! The included `.github/workflows/deploy.yml` workflow will automatically build and publish your site upon every `git push`.

---

## ☁️ 8. Deploy to Cloudflare Pages (Alternative)

If you prefer Cloudflare Pages:

1. Log into your [Cloudflare Dashboard](https://dash.cloudflare.com/) and go to **Workers & Pages**.
2. Click **Create Application** ➔ **Pages** ➔ **Connect to Git**.
3. Select your `legal-center` repository.
4. Set the build configuration:
   * **Framework preset:** `Astro`
   * **Build command:** `npm run build`
   * **Build output directory:** `dist`
5. Click **Save and Deploy**. Cloudflare Pages will automatically build and update the site on every push to `main`.

---

## 🔗 9. How to Connect a Custom Domain

### On GitHub Pages:
1. In repository **Settings** ➔ **Pages** ➔ **Custom domain**, enter your domain (e.g., `legal.yourdomain.com`).
2. In your DNS provider (e.g., Cloudflare, Namecheap), add a **CNAME** record:
   * **Type:** `CNAME`
   * **Name:** `legal`
   * **Target:** `<your-username>.github.io`
3. Check the box **Enforce HTTPS** in GitHub Pages settings.

### On Cloudflare Pages:
1. Go to your project in **Workers & Pages**.
2. Navigate to the **Custom domains** tab and click **Set up a custom domain**.
3. Enter your domain (e.g. `legal.yourdomain.com`) and Cloudflare will automatically configure DNS and SSL certificates.

---

## 🧪 10. Preview and Verify Changes Locally

Before pushing changes to GitHub, test your production build:

```bash
# Run strict TypeScript and Astro type check
npm run check

# Build static production bundle
npm run build

# Preview the built site locally
npm run preview
```

Open `http://localhost:4321` to verify all links and layouts.

