import type { UrlProxy } from "node_modules/astro/dist/assets/fonts/definitions";

export type Site = {
  TITLE: string;
  FULLURL: string;
  FULLURL_B: string;
  FULLURL_P: string;
  DESCRIPTION: string;
  EMAIL: string;
  NUM_POSTS_ON_HOMEPAGE: number;
  NUM_PROJECTS_ON_HOMEPAGE: number;
};

export type Metadata = {
  TITLE: string;
  DESCRIPTION: string;
};

export type Socials = {
  NAME: string;
  HREF: string;
}[];
