import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { aboutContent } from "@/src/content/about";

export const metadata: Metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
  alternates: {
    canonical: "/about-yug3dai",
  },
  openGraph: {
    title: aboutContent.seo.title,
    description: aboutContent.seo.description,
    images: [aboutContent.heroImage],
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      {/* Hero section */}
      <section className="pb-16 sm:pb-24 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#dfedf1] text-[#18444f] border border-[#c4e0e8]">
                {aboutContent.subtitle}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1D243C] leading-tight">
                {aboutContent.intro.heading}
              </h1>
              <div className="space-y-4 text-base sm:text-lg text-[#3f4c7c] leading-relaxed">
                {aboutContent.intro.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-[12px] overflow-hidden border border-slate-200 shadow-md bg-white p-6">
                <Image
                  src={aboutContent.heroImage}
                  alt="About Yug3DAI"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision section */}
      <section id="mission" className="py-16 sm:py-24 bg-[#f4f8fa] border-b border-slate-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <SectionHeading
              pill={aboutContent.vision.subheading}
              title={aboutContent.vision.heading}
            />
            <div className="space-y-4 text-base sm:text-lg text-[#3f4c7c] leading-relaxed text-left sm:text-center">
              {aboutContent.vision.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars / Commitment */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <SectionHeading
            pill="Core Values"
            title="Our Commitment to Innovation"
            description="How our combined proficiency delivers tangible real-world business advantages."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutContent.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-8 rounded-[8px] bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#dfedf1] text-[#18444f] flex items-center justify-center font-bold text-lg mb-6">
                  {pillar.title.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-[#1D243C] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#3f4c7c] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="py-16 bg-[#f4f8fa] border-t border-slate-100">
        <Container>
          <div className="rounded-[12px] bg-white border border-slate-200 p-8 sm:p-12 text-center space-y-6 shadow-sm">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1D243C] max-w-2xl mx-auto">
              {aboutContent.callToAction.heading}
            </h2>
            <div>
              <Link
                href={aboutContent.callToAction.href}
                className="inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm transition-all"
              >
                {aboutContent.callToAction.buttonText} &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
