import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "@/src/lib/urls";

export const contactContent = {
  title: "Contact Us",
  subtitle:
    "Have a question, need an engineering consultation, or looking for custom solutions? Reach out to our team.",
  seo: {
    title: "Contact Us - Yug3DAI",
    description:
      "Get in touch with Yug3DAI for cutting-edge AI services and high-precision 3D printing & rapid prototyping solutions.",
  },
  details: {
    address: {
      label: "Our Office",
      value: CONTACT_ADDRESS,
    },
    email: {
      label: "Email Us",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    phone: {
      label: "Call Us",
      value: CONTACT_PHONE,
      href: CONTACT_PHONE_TEL,
    },
    whatsapp: {
      label: "Chat on WhatsApp",
      href: WHATSAPP_URL,
    },
  },
};
