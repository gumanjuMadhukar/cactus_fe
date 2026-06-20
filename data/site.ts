import type { BlogPost, HomePageData, Job, ProcessStep, Project, Reason, Service, SiteConfig, Stat, Testimonial } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Cactus IT Solution",
  shortName: "Cactus",
  url: "https://www.cactusitsol.com.np",
  email: "info@cactusitsolution.com",
  phone: "+977 9840786886",
  location: "Kathmandu, Nepal",
  tagline: "IT Services & Digital Solutions",
  description:
    "We help startups, SMBs, and growing teams build reliable software, modern websites, mobile apps, data dashboards, and digital growth systems.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" }
  ]
};

export const stats: Stat[] = [
  { value: "50-200", label: "Employee-ready HRM scale" },
  { value: "6+", label: "Core digital service lines" },
  { value: "24/7", label: "Support-ready architecture" },
  { value: "API", label: "Laravel CMS ready" }
];

export const services: Service[] = [
  {
    title: "Web Application Development",
    slug: "web-application-development",
    iconKey: "code",
    eyebrow: "Scalable product engineering",
    short: "Modern, secure web applications built for performance, growth, and long-term maintainability.",
    description:
      "We build web applications with clean architecture, secure authentication, role management, optimized performance, and business-ready modules.",
    features: ["Clean architecture", "Scalable modules", "Secure auth", "Performance optimization"]
  },
  {
    title: "Website Design & Development",
    slug: "website-design-development",
    iconKey: "app-window",
    eyebrow: "Premium digital presence",
    short: "High-converting websites with strong design, SEO foundations, CMS control, and fast page speed.",
    description:
      "We create modern websites that clearly explain your brand, look premium on every device, and give your team content control through a CMS.",
    features: ["Next.js frontend", "Laravel CMS", "SEO structure", "Landing pages"]
  },
  {
    title: "Data Analysis & Business Intelligence",
    slug: "data-analysis-business-intelligence",
    iconKey: "bar-chart",
    eyebrow: "Decisions backed by data",
    short: "Dashboards, reports, KPI tracking, and analytics systems that make business performance easier to understand.",
    description:
      "We help teams convert raw data into useful dashboards, performance reports, and decision-making tools for managers and business owners.",
    features: ["Dashboards", "KPI reporting", "Power BI", "Data automation"]
  },
  {
    title: "Digital Marketing",
    slug: "digital-marketing",
    iconKey: "line-chart",
    eyebrow: "Growth with clarity",
    short: "SEO, paid ads, landing pages, analytics, and content systems designed to bring qualified leads.",
    description:
      "We connect your website, SEO, advertising, analytics, and conversion flows so digital marketing becomes easier to measure and improve.",
    features: ["SEO", "Paid ads", "Analytics", "Conversion pages"]
  },
  {
    title: "Custom Software Solutions",
    slug: "custom-software-solutions",
    iconKey: "blocks",
    eyebrow: "Built around your workflow",
    short: "Custom CRM, HRM, booking, reporting, automation, and internal systems tailored to your team.",
    description:
      "We design and build software that replaces manual work, messy spreadsheets, and disconnected tools with a clear business system.",
    features: ["CRM", "HRM", "Admin systems", "Workflow automation"]
  },
  {
    title: "IT Consulting & Automation",
    slug: "it-consulting-automation",
    iconKey: "workflow",
    eyebrow: "Practical technology planning",
    short: "Technology roadmaps, system audits, process automation, and scalable architecture planning.",
    description:
      "We help businesses understand what to build, what to improve, and how to automate operations without over-engineering.",
    features: ["System audit", "Automation", "Cloud planning", "Process improvement"]
  }
];

export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    iconKey: "search",
    text: "We understand your business goals, users, operations, current systems, and the exact problem the technology needs to solve."
  },
  {
    title: "Plan",
    iconKey: "layers",
    text: "We shape the sitemap, data model, CMS structure, APIs, user roles, and delivery roadmap before development starts."
  },
  {
    title: "Design",
    iconKey: "palette",
    text: "We create clean screens, strong content flow, responsive layouts, and a premium digital experience."
  },
  {
    title: "Develop",
    iconKey: "cpu",
    text: "We build Next.js frontend pages, Laravel backend modules, CMS admin panels, APIs, and database-driven business tools."
  },
  {
    title: "Launch & Grow",
    iconKey: "rocket",
    text: "We test, deploy, monitor, improve SEO, review analytics, and add new features as your business grows."
  }
];

export const projects: Project[] = [
  {
    title: "SaaS Analytics Dashboard",
    slug: "saas-analytics-dashboard",
    category: "Dashboard / BI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    summary: "A KPI-driven dashboard for real-time business visibility and reporting.",
    result: "Cleaner reporting, faster decisions, and better team visibility.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
  },
  {
    title: "E-commerce Platform Revamp",
    slug: "ecommerce-platform-revamp",
    category: "Website / Conversion",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    summary: "Performance-focused redesign and checkout optimization for higher conversion.",
    result: "Faster shopping flow, cleaner product pages, and stronger campaign landing pages.",
    tags: ["React", "Node.js", "AWS", "Analytics"]
  },
  {
    title: "Mobile Field Operations App",
    slug: "mobile-field-operations-app",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1200&q=80",
    summary: "Offline-first mobile app for task tracking, audits, and field reporting.",
    result: "Reduced manual reporting and improved field team accountability.",
    tags: ["React Native", "Firebase", "API", "UX"]
  },
  {
    title: "SEO + Paid Ads Growth Sprint",
    slug: "seo-paid-ads-growth-sprint",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    summary: "A 90-day growth sprint to improve rankings, traffic, and qualified leads.",
    result: "Clearer tracking, stronger landing pages, and higher-quality inquiries.",
    tags: ["SEO", "Paid Ads", "Power BI", "Python"]
  },
  {
    title: "IT Automation Suite",
    slug: "it-automation-suite",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    summary: "Automations to reduce repetitive tasks and improve operational reliability.",
    result: "Lower admin workload and more predictable operations.",
    tags: ["Node.js", "GCP", "Automation", "APIs"]
  },
  {
    title: "Custom CRM for SMB",
    slug: "custom-crm-for-smb",
    category: "CRM / Business Software",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    summary: "A lightweight CRM tailored to a sales team's exact workflow.",
    result: "Better lead tracking, cleaner follow-ups, and improved sales visibility.",
    tags: ["Next.js", "Laravel", "PostgreSQL", "CRM"]
  }
];

export const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Laravel",
  "MySQL",
  "PostgreSQL",
  "Filament",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Power BI",
  "Docker"
];

export const reasons: Reason[] = [
  {
    iconKey: "shield",
    title: "Reliable engineering",
    text: "Clean code, secure practices, testing discipline, and production-ready delivery for real business use."
  },
  {
    iconKey: "workflow",
    title: "Fast iteration cycles",
    text: "Clear milestones, agile planning, and practical decisions so improvements can ship without unnecessary delay."
  },
  {
    iconKey: "lock",
    title: "Scalable architecture",
    text: "Frontend, backend, CMS, CRM, HRM, and reporting modules are structured to grow with your company."
  },
  {
    iconKey: "bar-chart",
    title: "Partnership mindset",
    text: "We communicate clearly, document well, and treat your business outcome as the main measure of success."
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Cactus helped us turn a rough product idea into a clean platform that our team can actually manage.",
    name: "Aarav Sharma",
    role: "Founder, SaaS Startup"
  },
  {
    quote: "The CMS and lead system made our marketing work much faster. We can now update content without waiting for developers.",
    name: "Nisha Thapa",
    role: "Marketing Lead, Service Brand"
  },
  {
    quote: "They understood the business problem first, then built the technology around it. That made the whole project easier.",
    name: "Kabir Joshi",
    role: "Operations Director"
  }
];

export const blogs: BlogPost[] = [
  {
    title: "Why growing companies need modular software, not scattered tools",
    slug: "growing-companies-modular-software",
    category: "Business Software",
    date: "2026-06-01",
    excerpt: "A modular business platform can connect CMS, CRM, HRM, projects, leads, and reporting without turning into a messy system.",
    content: "A growing company needs systems that can expand without becoming difficult to maintain. A modular Laravel backend lets the CMS start small while keeping room for CRM, HRM, project management, support, and reports."
  },
  {
    title: "How a Laravel CMS gives your team better control",
    slug: "laravel-cms-team-control",
    category: "CMS",
    date: "2026-05-21",
    excerpt: "A custom CMS gives your business the freedom to manage pages, services, blogs, careers, leads, and SEO from one dashboard.",
    content: "A Laravel CMS can help your team manage the full website from one secure admin panel. Pages, services, projects, blogs, careers, media, SEO metadata, redirects, and inquiries can all be controlled without touching frontend code."
  },
  {
    title: "What makes a good MVP for a startup app?",
    slug: "good-mvp-startup-app",
    category: "Startup",
    date: "2026-05-10",
    excerpt: "A strong MVP focuses on the core user problem, simple flows, measurable usage, and a technical base that can grow.",
    content: "A good MVP does not try to include every idea at once. It focuses on the main problem, the key user action, simple onboarding, measurable usage, and a backend structure that can grow when the idea proves itself."
  }
];

export const scrollStory = [
  {
    label: "Strategy",
    title: "We map the business problem before touching the interface.",
    text: "Strong software starts with clear goals, real users, workflows, content, data, and the outcome the business needs."
  },
  {
    label: "Experience",
    title: "We create smooth digital journeys that feel premium and easy.",
    text: "Every section, form, button, and animation should help users understand your value faster."
  },
  {
    label: "System",
    title: "We prepare the frontend for Laravel CMS, CRM, and HRM control.",
    text: "The website can start with static data, then move into a modular backend where every page, lead, employee, and deal is controlled from the admin system."
  }
];

export const jobs: Job[] = [
  {
    title: "Frontend Developer",
    slug: "frontend-developer",
    type: "Full-time",
    location: "Kathmandu / Remote",
    summary: "Build modern Next.js interfaces with clean components, animation, and strong frontend performance.",
    requirements: ["React and Next.js experience", "Strong Tailwind CSS skills", "Basic animation knowledge", "Good eye for detail"]
  },
  {
    title: "Laravel Developer",
    slug: "laravel-developer",
    type: "Full-time",
    location: "Kathmandu / Remote",
    summary: "Create secure Laravel APIs, CMS modules, admin dashboards, and database-driven business tools.",
    requirements: ["Laravel API experience", "MySQL knowledge", "Authentication and validation", "Clean controller/service structure"]
  },
  {
    title: "Digital Marketing Executive",
    slug: "digital-marketing-executive",
    type: "Full-time",
    location: "Kathmandu",
    summary: "Support SEO, paid ads, analytics reporting, landing pages, and campaign performance tracking.",
    requirements: ["SEO basics", "Paid ads knowledge", "Analytics reporting", "Clear communication"]
  }
];

export const staticHomeData: HomePageData = {
  siteConfig,
  stats,
  services,
  processSteps,
  projects,
  techStack,
  reasons,
  testimonials,
  blogs,
  scrollStory
};
