import React from "react";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { homeContent } from "@/src/content/home";

export function PillarsSection() {
  const { aiPillar, threeDPillar } = homeContent;

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* AI Pillar Card */}
          <div className="relative rounded-[12px] p-8 sm:p-10 bg-white border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#2f8095] flex items-center justify-center font-bold text-lg mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D243C]">
                {aiPillar.title}
              </h2>

              <p className="mt-4 text-[#3f4c7c] text-sm sm:text-base leading-relaxed">
                {aiPillar.description}
              </p>

              {/* Tags grid */}
              <div className="mt-8 flex flex-wrap gap-2">
                {aiPillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-50 hover:bg-slate-100 text-[#1D243C] rounded-[6px] border border-slate-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={aiPillar.ctaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-sm sm:text-base font-semibold px-7 py-3 rounded-[6px] shadow-sm transition-all"
              >
                {aiPillar.ctaText} &rarr;
              </Link>
            </div>
          </div>

          {/* 3D Printing Pillar Card */}
          <div className="relative rounded-[12px] p-8 sm:p-10 bg-white border border-slate-200 shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#2f8095] flex items-center justify-center font-bold text-lg mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D243C]">
                {threeDPillar.title}
              </h2>

              <p className="mt-4 text-[#3f4c7c] text-sm sm:text-base leading-relaxed">
                {threeDPillar.description}
              </p>

              {/* Tags grid */}
              <div className="mt-8 flex flex-wrap gap-2">
                {threeDPillar.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs font-semibold bg-slate-50 hover:bg-slate-100 text-[#1D243C] rounded-[6px] border border-slate-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4 justify-between">
              <a
                href={threeDPillar.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-sm sm:text-base font-semibold px-7 py-3 rounded-[6px] shadow-sm transition-all"
              >
                {threeDPillar.ctaText} &rarr;
              </a>
              <Link
                href="/3d-services"
                className="text-xs font-semibold text-[#18444f] hover:underline"
              >
                Explore 3D Services
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
