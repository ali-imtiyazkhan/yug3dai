export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceDetail {
  slug: string;
  title: string;
  navTitle?: string;
  category: "ai" | "3d-printing";
  tagline: string;
  description: string;
  heroImage: string;
  features: {
    title: string;
    description: string;
    bullets?: string[];
  }[];
  ctaText?: string;
  ctaHref?: string;
  quoteCta?: boolean;
  seo: {
    title: string;
    description: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string; // Markdown or formatted HTML/string
  coverImage: string;
  category: string;
  readTime: string;
  seo: {
    title: string;
    description: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}
