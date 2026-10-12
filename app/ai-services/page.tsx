import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/src/content/services";
import { ServicePageTemplate } from "@/src/components/services/ServicePageTemplate";

const service = getService("ai-services");

export const metadata: Metadata = {
  title: service?.seo.title || "AI Services - Yug3DAI",
  description: service?.seo.description,
  alternates: {
    canonical: "/ai-services",
  },
  openGraph: {
    title: service?.seo.title,
    description: service?.seo.description,
    images: [service?.heroImage || "/images/ai-services.png"],
  },
};

export default function AiServicesPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
