import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { homeContent } from "@/src/content/home";
import { QUOTE_APP_URL } from "@/src/lib/urls";

export function ThreeDSection() {
  const { threeDSection } = homeContent;

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: 3 Services Cards */}
          <div className="lg:col-span-7 order-2 lg:order-1 space-y-5">
            {threeDSection.capabilities.map((cap) => (
              <Link
                key={cap.title}
                href={cap.href}
                className="block p-7 rounded-[8px] bg-white border border-slate-200 hover:border-[#18444f] shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#1D243C] group-hover:text-[#2f8095] transition-colors flex items-center gap-2">
                      {cap.title}
                      <span className="text-[#2f8095] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                        &rarr;
                      </span>
                    </h3>
                    <p className="text-sm sm:text-base text-[#3f4c7c] leading-relaxed max-w-xl">
                      {cap.description}
                    </p>
                  </div>
                  <div className="hidden sm:flex w-10 h-10 rounded-full bg-slate-50 items-center justify-center text-[#18444f] border border-slate-200 shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={QUOTE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm hover:shadow transition-all"
              >
                Upload CAD for Instant Quote &rarr;
              </a>
              <Link
                href={threeDSection.ctaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#18444f] hover:bg-[#18444f]/5 text-[#18444f] text-base font-semibold px-7 py-3 rounded-[6px] transition-all"
              >
                {threeDSection.ctaText}
              </Link>
            </div>
          </div>

          {/* Right Column: Heading & 3D Illustration */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sky-50 text-[#2f8095] border border-sky-100">
              Additive Manufacturing
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#1D243C] leading-[1.2]">
              {threeDSection.title}
            </h2>

            <p className="text-base sm:text-lg text-[#3f4c7c] leading-relaxed">
              {threeDSection.description}
            </p>

            <div className="relative w-full aspect-square max-w-md mx-auto rounded-[12px] overflow-hidden border border-slate-100 shadow-md bg-white p-4">
              <Image
                src={threeDSection.image}
                alt="3D Printing & Prototyping"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
