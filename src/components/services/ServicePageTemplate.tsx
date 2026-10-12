import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { ServiceDetail } from "@/src/types";
import { QUOTE_APP_URL } from "@/src/lib/urls";

interface ServicePageTemplateProps {
  service: ServiceDetail;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <div className="py-12 sm:py-20 bg-white">
      {/* Hero section */}
      <section className="pb-16 sm:pb-24 border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#dfedf1] text-[#18444f] border border-[#c4e0e8]">
                {service.category === "ai"
                  ? "Artificial Intelligence"
                  : "Additive Manufacturing"}
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1D243C] leading-tight">
                {service.title}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#2f8095]">
                {service.tagline}
              </p>
              <p className="text-base sm:text-lg text-[#3f4c7c] leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                {service.quoteCta ? (
                  <a
                    href={QUOTE_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm hover:shadow transition-all"
                  >
                    {service.ctaText || "Instant 3D Quote"} &rarr;
                  </a>
                ) : (
                  <Link
                    href={service.ctaHref || "/contact-us"}
                    className="w-full sm:w-auto inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm hover:shadow transition-all"
                  >
                    {service.ctaText || "Get In Touch"} &rarr;
                  </Link>
                )}
                {service.category === "3d-printing" && (
                  <Link
                    href="/contact-us"
                    className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#18444f] hover:bg-[#18444f]/5 text-[#18444f] text-base font-semibold px-7 py-3 rounded-[6px] transition-all"
                  >
                    Technical Consultation
                  </Link>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-[12px] overflow-hidden border border-slate-200 shadow-md bg-white p-6">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed Features & Capabilities */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <Container>
          <SectionHeading
            pill="Capabilities"
            title="Service Specifications &amp; Features"
            description="Engineered to meet stringent industrial specifications and deliver high precision."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div
                key={feature.title}
                className="p-8 rounded-[8px] bg-white border border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#dfedf1] text-[#18444f] font-bold flex items-center justify-center text-sm mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#1D243C] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#3f4c7c] leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>

                {feature.bullets && feature.bullets.length > 0 && (
                  <div className="pt-4 border-t border-slate-100">
                    <ul className="space-y-2 text-xs sm:text-sm text-[#3f4c7c]">
                      {feature.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="text-[#2f8095] font-bold">&#10003;</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Call to action section */}
      <section className="py-16 bg-[#f4f8fa]">
        <Container>
          <div className="rounded-[12px] bg-white border border-slate-200 p-8 sm:p-14 text-center space-y-6 shadow-sm">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#1D243C] max-w-2xl mx-auto">
              Ready to Accelerate Your Project with Yug3DAI?
            </h2>
            <p className="text-[#3f4c7c] max-w-xl mx-auto text-sm sm:text-base">
              Upload your files, request consultation, or speak with an engineering specialist today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              {service.category === "3d-printing" ? (
                <>
                  <a
                    href={QUOTE_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm transition-all"
                  >
                    Upload CAD on 3DQuote &rarr;
                  </a>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center border-2 border-[#18444f] hover:bg-[#18444f]/5 text-[#18444f] text-base font-semibold px-8 py-3 rounded-[6px] transition-all"
                  >
                    Contact Engineering Team
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm transition-all"
                  >
                    Contact Us for AI Consultation &rarr;
                  </Link>
                  <Link
                    href="/about-yug3dai"
                    className="inline-flex items-center justify-center border-2 border-[#18444f] hover:bg-[#18444f]/5 text-[#18444f] text-base font-semibold px-8 py-3 rounded-[6px] transition-all"
                  >
                    Learn About Yug3DAI
                  </Link>
                </>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
