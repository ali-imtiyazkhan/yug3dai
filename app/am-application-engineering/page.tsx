import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/src/content/services";
import { ServicePageTemplate } from "@/src/components/services/ServicePageTemplate";

const service = getService("am-application-engineering");

export const metadata: Metadata = {
  title: service?.seo.title || "AM Application Engineering - Yug3DAI",
  description: service?.seo.description,
  alternates: {
    canonical: "/am-application-engineering",
  },
  openGraph: {
    title: service?.seo.title,
    description: service?.seo.description,
    images: [service?.heroImage || "/images/am-engineering.png"],
  },
};

export default function AmApplicationEngineeringPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
