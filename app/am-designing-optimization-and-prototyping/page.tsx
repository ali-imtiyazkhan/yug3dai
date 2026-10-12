import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/src/content/services";
import { ServicePageTemplate } from "@/src/components/services/ServicePageTemplate";

const service = getService("am-designing-optimization-and-prototyping");

export const metadata: Metadata = {
  title:
    service?.seo.title || "AM Designing, Optimization & Prototyping - Yug3DAI",
  description: service?.seo.description,
  alternates: {
    canonical: "/am-designing-optimization-and-prototyping",
  },
  openGraph: {
    title: service?.seo.title,
    description: service?.seo.description,
    images: [service?.heroImage || "/images/am-designing.png"],
  },
};

export default function AmDesigningPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
