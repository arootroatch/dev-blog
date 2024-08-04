export interface HeroProps {
  alt: string;
  src: string;
  h1: string;
  desc?: string;
  date?: string;
  author?: string;
  updated?: string;
}
export interface Frontmatter {
  layout: string;
  title: string;
  author: string;
  description: string;
  date: string;
  updated: string;
  thumbnail: string;
  category: string[];
  gated?: boolean;
}

export interface Posts {
  content: string;
  data: Frontmatter;
  filePath: string;
}

export interface PostcardProps {
  key: string;
  title: string;
  image: string;
  description: string;
  date: string;
  as: string;
  href: string;
}

export interface PostScrollerProps {
  title: string;
  category: Posts[];
  allPostsButton?: boolean;
  id?: string;
  count?: number;
}

export interface SearchBarParams {
  posts: Posts[];
}

export interface Sitemap{
  url: string;
  lastModified?: string | Date | undefined;
  changeFrequency?: "yearly" | "always" | "hourly" | "daily" | "weekly" | "monthly" | "never" | undefined;
  priority?: number | undefined;
  // alternates?: { ...; } | undefined;
}

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXT_PUBLIC_HCAPTCHA_SITE_KEY: string;
      HCAPTCHA_SECRET: string;
    }
  }
}