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
  developerName: "NexCode Studio",
  developerEmail: "contact@nexcode.studio",
  websiteUrl: "https://nexcode.studio",
  title: "NexCode Studio | Legal Center & App Policies",
  description: "Official privacy policies, terms of service, data deletion instructions, and support center for mobile applications developed by NexCode Studio.",
  logoText: "NexCode Legal",
  githubUrl: "https://github.com",
  playStoreUrl: "https://play.google.com/store/apps/dev",
};
