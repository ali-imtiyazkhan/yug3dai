import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/fdm-vs-sla-vs-sls-complete-comparison-guide-for-2026",
        destination: "/blog/fdm-vs-sla-vs-sls-complete-comparison-guide-for-2026",
        permanent: true,
      },
      {
        source: "/how-much-does-3d-printing-cost-in-india-in-2026",
        destination: "/blog/how-much-does-3d-printing-cost-in-india-in-2026",
        permanent: true,
      },
      {
        source: "/pla-vs-abs-vs-petg-which-3d-printing-material-is-best-for-your-project",
        destination:
          "/blog/pla-vs-abs-vs-petg-which-3d-printing-material-is-best-for-your-project",
        permanent: true,
      },
      {
        source: "/is-3d-printing-too-complex-expensive",
        destination: "/blog/is-3d-printing-too-complex-expensive",
        permanent: true,
      },
      {
        source: "/what-is-ai",
        destination: "/blog/what-is-ai",
        permanent: true,
      },
      {
        source: "/how-ai-can-help-humanity",
        destination: "/blog/how-ai-can-help-humanity",
        permanent: true,
      },
      {
        source: "/data-driven-solution",
        destination: "/ai-services",
        permanent: true,
      },
      {
        source: "/3d-printing-services-in-india-fdm-dlp-prototyping-yug3dai",
        destination: "/3d-services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
