import { Metadata } from "next";
import { Hero } from "@/src/components/home/Hero";
import { PillarsSection } from "@/src/components/home/PillarsSection";
import { AiSection } from "@/src/components/home/AiSection";
import { ThreeDSection } from "@/src/components/home/ThreeDSection";
import { IndiaOverviewSection } from "@/src/components/home/IndiaOverviewSection";
import { BlogPreviewSection } from "@/src/components/home/BlogPreviewSection";
import { SITE_NAME, SITE_TAGLINE } from "@/src/lib/urls";

export const metadata: Metadata = {
  title: `${SITE_NAME} - ${SITE_TAGLINE}`,
  description:
    "Yug3DAI - AI & 3D Printing Individual or Combined Excellence. Rapid prototyping, CAD engineering, custom 3D printing in India, and AI research solutions.",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PillarsSection />
      <AiSection />
      <ThreeDSection />
      <IndiaOverviewSection />
      <BlogPreviewSection />
    </>
  );
}
