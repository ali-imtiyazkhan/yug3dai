import React from "react";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { homeContent } from "@/src/content/home";

export function IndiaOverviewSection() {
  const { indiaOverview } = homeContent;

  return (
    <section className="py-16 sm:py-24 bg-[#f4f8fa] border-t border-b border-slate-200/60 relative overflow-hidden">
      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#dfedf1] text-[#18444f] border border-[#c4e0e8]">
            Pan-India Additive Manufacturing
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#1D243C]">
            {indiaOverview.title}
          </h2>

          <div className="text-[#3f4c7c] text-base sm:text-lg leading-relaxed space-y-4 max-w-3xl mx-auto">
            <p>{indiaOverview.paragraph1}</p>
            <p>{indiaOverview.paragraph2}</p>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={indiaOverview.ctaQuote.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm hover:shadow transition-all"
            >
              {indiaOverview.ctaQuote.text} &rarr;
            </a>
            <Link
              href={indiaOverview.ctaServices.href}
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#18444f] hover:bg-[#18444f]/5 text-[#18444f] text-base font-semibold px-8 py-3 rounded-[6px] transition-all"
            >
              {indiaOverview.ctaServices.text}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
