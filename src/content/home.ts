import { QUOTE_APP_URL } from "@/src/lib/urls";

export const homeContent = {
  hero: {
    tagline: "AI & 3D Printing Individual or Combined Excellence",
    title: "Bridging the Gap Between Digital Intelligence & Physical Reality",
    description:
      "Yug3DAI delivers enterprise-grade Artificial Intelligence and industrial 3D printing services. Accelerate development, optimize designs, and manufacture custom parts with precision.",
    ctaPrimary: {
      text: "Get Instant 3D Quote",
      href: QUOTE_APP_URL,
      external: true,
    },
    ctaSecondary: {
      text: "Explore AI Services",
      href: "/ai-services",
      external: false,
    },
  },
  aiPillar: {
    title: "AI Services",
    description:
      "We provide AI development, machine learning, computer vision, NLP, MLOps, and consulting services to help businesses automate processes and build intelligent products.",
    tags: [
      "Data-Driven Solutions",
      "Natural Language Processing (NLP)",
      "Computer Vision Systems",
      "MLOps & LLMOps Implementation",
      "Machine Learning Solutions",
      "Generative AI Applications",
      "Research & Development",
      "AI Consulting & Strategy",
    ],
    ctaText: "Know More About AI Services",
    ctaHref: "/ai-services",
  },
  threeDPillar: {
    title: "3D Printing & Rapid Prototyping Services",
    description:
      "We offer rapid prototyping, CAD engineering, Industrial 3D printing services, and custom 3D printing solutions for startups, researchers, and industries across India.",
    tags: [
      "3D Printing Services",
      "Rapid Prototyping",
      "Product Design & Development",
      "CAD Engineering Services",
      "STL & STEP File Processing",
      "Custom 3D Printed Parts",
      "Industrial Manufacturing Support",
    ],
    ctaText: "Get Instant 3D Quote",
    ctaHref: QUOTE_APP_URL,
    quoteApp: true,
  },
  aiSection: {
    title: "Unleash the Potential of Advanced AI Solutions",
    description:
      "Dive into our diverse AI services, spanning NLP, Computer Vision, and data-driven strategies. With specialized deep learning, machine learning, and emotion analysis expertise, we ensure your business leads in the AI-driven world. Join us in shaping tomorrow's technological landscape.",
    image: "/images/ai-services.png",
    ctaText: "Know More About AI Services",
    ctaHref: "/ai-services",
    capabilities: [
      {
        title: "Data-driven Solutions",
        description:
          "Transform unstructured and historical enterprise data into strategic, predictive decision intelligence.",
      },
      {
        title: "Research and Development",
        description:
          "Custom AI algorithm research, model feasibility experiments, and cutting-edge exploratory engineering.",
      },
      {
        title: "NLP & Computer Vision Projects",
        description:
          "End-to-end vision pipelines for defect detection alongside advanced language and document understanding.",
      },
      {
        title: "AI Consulting and Strategy",
        description:
          "Actionable roadmap creation for AI adoption, risk mitigation, and architecture evaluation.",
      },
      {
        title: "MLOps and LLMOps Implementation",
        description:
          "Scalable CI/CD pipelines, automated model monitoring, evaluation frameworks, and low-latency deployment.",
      },
      {
        title: "Training and Workshops",
        description:
          "Tailored technical training for engineering teams to master modern AI tooling and best practices.",
      },
    ],
  },
  threeDSection: {
    title: "3D Printing: Prototyping & Design Perfected",
    description:
      "At Yug3DAI, 3D printing is the bridge between your vision and reality. Our expertise in prototyping and custom designing ensures that each creation not only embodies precision but also resonates with your unique vision. Trust us to breathe life into your ideas with unparalleled craftsmanship.",
    image: "/images/3d-services.png",
    ctaText: "Know More about 3D Printing",
    ctaHref: "/3d-services",
    capabilities: [
      {
        title: "Designing & Prototyping",
        description:
          "Transforming your traditional part into optimized additive manufacturing geometry with lightweight lattice structures.",
        href: "/am-designing-optimization-and-prototyping",
      },
      {
        title: "Application Engineering",
        description:
          "Material consultation, tolerance planning, and matching the right technology (FDM, DLP, SLS, MJF) to your application.",
        href: "/am-application-engineering",
      },
      {
        title: "CAD Engineering Services",
        description:
          "Part concept development, parametric 3D modeling, photorealistic rendering, and Finite Element Analysis (FEA).",
        href: "/cad-engineering-service",
      },
    ],
  },
  indiaOverview: {
    title: "3D Printing Services in India | FDM, DLP & Prototyping",
    paragraph1:
      "3D Printing has become an important technology for product development, engineering, prototyping and modern manufacturing. From creating an initial prototype to developing functional components, businesses can use additive manufacturing to move from a digital design to a physical part with greater flexibility.",
    paragraph2:
      "Yug3DAI provides 3D Printing Services in India, combining 3D printing technologies, engineering expertise, material knowledge and design capabilities to support businesses, product developers and engineering teams.",
    ctaQuote: {
      text: "Instant CAD Quote (3DQuote)",
      href: QUOTE_APP_URL,
    },
    ctaServices: {
      text: "View All 3D Services",
      href: "/3d-services",
    },
  },
};
