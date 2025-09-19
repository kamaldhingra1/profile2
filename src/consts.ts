import type { Metadata, Site, Socials } from "@types";

const webURL = "https://kamaldhingra1.github.io/profile2";

export const SITE: Site = {
  TITLE: "Kamal Dhingra",
  TITLE2: "Cyber, AI Security Architecture & Beyond..",
  FULLURL: "https://kamaldhingra1.github.io/profile2",
  FULLURL_B: "https://kamaldhingra1.github.io/profile2/blog",
  FULLURL_P: "https://kamaldhingra1.github.io/profile2/projects",
  FULLURL_T: "https://kamaldhingra1.github.io/profile2/tags",
  DESCRIPTION: "Blog on Cyber, AI Security & Beyond..",
  EMAIL: "dhingra_kk@yahoo.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Cyber, AI Security Architecture & Beyond..",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/kamaldhingra/",
  },

  {
    NAME: "Web",
    HREF: webURL,
  },
    {
    NAME: "GitHub",
    HREF: "https://github.com/kamaldhingra1",
  },
];
