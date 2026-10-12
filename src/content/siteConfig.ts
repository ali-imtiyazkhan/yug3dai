import { NavItem } from "@/src/types";
import { QUOTE_APP_URL, SITE_URL } from "@/src/lib/urls";

export const siteConfig = {
  name: "Yug3DAI",
  tagline: "AI & 3D Printing Individual or Combined Excellence",
  description:
    "Explore Yug3DAI, where innovative technologies meet visionary solutions in AI and additive manufacturing.",
  url: SITE_URL,
  quoteAppUrl: QUOTE_APP_URL,
  nav: [
    { label: "About Yug3DAI", href: "/about-yug3dai" },
    { label: "AI Services", href: "/ai-services" },
    {
      label: "3D Printing",
      href: "/3d-services",
      children: [
        { label: "3D Printing Services", href: "/3d-services" },
        {
          label: "AM Designing & Prototyping",
          href: "/am-designing-optimization-and-prototyping",
        },
        {
          label: "AM Application Engineering",
          href: "/am-application-engineering",
        },
        { label: "CAD Engineering Service", href: "/cad-engineering-service" },
      ],
    },
    { label: "Learn Centre", href: "/learn-centre" },
    { label: "Contact Us", href: "/contact-us" },
  ] as NavItem[],
  footerLinks: {
    services: [
      { label: "AI Services", href: "/ai-services" },
      { label: "3D Printing Services", href: "/3d-services" },
      {
        label: "AM Designing & Prototyping",
        href: "/am-designing-optimization-and-prototyping",
      },
      {
        label: "AM Application Engineering",
        href: "/am-application-engineering",
      },
      { label: "CAD Engineering", href: "/cad-engineering-service" },
    ],
    about: [
      { label: "About Us", href: "/about-yug3dai" },
      { label: "Mission & Vision", href: "/about-yug3dai#mission" },
      { label: "Contact Us", href: "/contact-us" },
    ],
    learn: [
      { label: "Learn Centre", href: "/learn-centre" },
      {
        label: "FDM vs SLA vs SLS Comparison",
        href: "/blog/fdm-vs-sla-vs-sls-complete-comparison-guide-for-2026",
      },
      {
        label: "3D Printing Cost in India",
        href: "/blog/how-much-does-3d-printing-cost-in-india-in-2026",
      },
      {
        label: "PLA vs ABS vs PETG Material Guide",
        href: "/blog/pla-vs-abs-vs-petg-which-3d-printing-material-is-best-for-your-project",
      },
      {
        label: "Is 3D Printing Too Complex?",
        href: "/blog/is-3d-printing-too-complex-expensive",
      },
    ],
  },
  social: {
    facebook: "",
    twitter: "",
    linkedin: "https://www.linkedin.com/company/yug3dai/",
    youtube: "",
  },
};
