import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/src/content/services";
import { ServicePageTemplate } from "@/src/components/services/ServicePageTemplate";

const service = getService("3d-services");

export const metadata: Metadata = {
  title: service?.seo.title || "3D Printing Services - Yug3DAI",
  description: service?.seo.description,
  alternates: {
    canonical: "/3d-services",
  },
  openGraph: {
    title: service?.seo.title,
    description: service?.seo.description,
    images: [service?.heroImage || "/images/3d-services.png"],
  },
};

export default function ThreeDServicesPage() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
