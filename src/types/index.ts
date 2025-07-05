export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export interface TabItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  active: boolean;
}

export type Theme = 'dark' | 'light' | 'pink';