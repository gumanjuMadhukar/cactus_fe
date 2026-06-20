export type IconKey =
  | "app-window"
  | "bar-chart"
  | "blocks"
  | "cloud"
  | "code"
  | "cpu"
  | "layers"
  | "line-chart"
  | "lock"
  | "palette"
  | "rocket"
  | "search"
  | "shield"
  | "smartphone"
  | "workflow";

export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  tagline?: string;
  description?: string;
  email?: string;
  phone?: string;
  location?: string;
  whatsapp?: string;
  nav?: NavItem[];
};

export type Stat = {
  value: string;
  label: string;
};

export type Service = {
  title: string;
  slug: string;
  iconKey: IconKey;
  eyebrow: string;
  short: string;
  description: string;
  features: string[];
};

export type ProcessStep = {
  title: string;
  iconKey: IconKey;
  text: string;
};

export type Project = {
  title: string;
  slug: string;
  category: string;
  image: string;
  summary: string;
  result: string;
  tags: string[];
};

export type Reason = {
  iconKey: IconKey;
  title: string;
  text: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  category: string;
  date: string;
  excerpt: string;
  content?: string;
};

export type ScrollPanel = {
  label: string;
  title: string;
  text: string;
};

export type Job = {
  title: string;
  slug: string;
  type: string;
  location: string;
  summary: string;
  requirements: string[];
};

export type HomePageData = {
  siteConfig: SiteConfig;
  stats: Stat[];
  services: Service[];
  processSteps: ProcessStep[];
  projects: Project[];
  techStack: string[];
  reasons: Reason[];
  testimonials: Testimonial[];
  blogs: BlogPost[];
  scrollStory: ScrollPanel[];
};
