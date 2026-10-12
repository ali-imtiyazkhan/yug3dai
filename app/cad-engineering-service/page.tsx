import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/src/content/services";
import { ServicePageTemplate } from "@/src/components/services/ServicePageTemplate";

const service = getService("cad-engineering-service");

export const metadata: Metadata = {
  title: service?.seo.title || "CAD Engineering Service - Yug3DAI",
  description: service?.seo.description,
  alternates: {
    canonical: "/cad-engineering-service",
  },
  openGraph: {
    title: service?.seo.title,
    description: service?.seo.description,
    images: [service?.heroImage || "/images/cad-engineering.png"],
  },
};

export default function CadEngineeringPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
