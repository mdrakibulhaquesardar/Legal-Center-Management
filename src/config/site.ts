export interface SiteConfig {
  developerName: string;
  developerEmail: string;
  websiteUrl: string;
  title: string;
  description: string;
  logoText: string;
  githubUrl?: string;
  playStoreUrl?: string;
}

export const siteConfig: SiteConfig = {
  developerName: "Hridoy Legal Services & Development",
  developerEmail: "developer@legalcenter.example.com",
  websiteUrl: "https://legal.example.com",
  title: "Legal Center | App Privacy & Terms Directory",
  description: "Official privacy policies, terms of service, data deletion instructions, and support center for mobile applications.",
  logoText: "LegalCenter",
  githubUrl: "https://github.com",
  playStoreUrl: "https://play.google.com/store/apps/dev",
};

