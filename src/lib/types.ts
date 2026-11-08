export interface AppMetadata {
  name: string;
  slug: string;
  packageName?: string;
  description?: string;
  developer?: string;
  email?: string;
  website?: string;
  icon?: string;
  active?: boolean;
}

export interface DocumentMetadata {
  slug: string;
  title: string;
  lastUpdated?: string;
  rawContent: string;
  htmlContent: string;
}

export interface AppWithDocuments {
  app: AppMetadata;
  documents: DocumentMetadata[];
  documentSlugs: string[];
}

