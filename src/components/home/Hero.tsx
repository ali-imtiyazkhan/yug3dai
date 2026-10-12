import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { QUOTE_APP_URL } from "@/src/lib/urls";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center justify-center py-20 lg:py-28 bg-white">
      {/* Background network image matching the theme screenshot */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-network-bg.png"
          alt="Honeycomb Molecular Network Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Soft center fade to keep text crisp and highly legible */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow */}
          <p className="text-sm sm:text-base font-semibold tracking-wide text-[#2f8095]">
            3D Printing Quotes In Seconds
          </p>

          {/* Main Title matching exact casing and break from screenshot */}
          <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight text-[#1D243C] leading-[1.12]">
            AI &amp; 3D Printing
            <span className="block mt-1 sm:mt-2">
              Individual Or Combined Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#3f4c7c] max-w-3xl mx-auto leading-relaxed pt-1">
            At Yug3DAI, Our Research-Backed Expertise Offers Top-Notch AI And 3D
            Printing Solutions. Whether Individual Or Synergized Services, We&apos;re
            Your Partner In Innovation. Dive Into The Future With Us.
          </p>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href={QUOTE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm hover:shadow transition-all"
            >
              Start 3D Printing Services
            </a>

            <Link
              href="/ai-services"
              className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-[#18444f] hover:bg-[#18444f]/5 text-[#18444f] text-base font-medium px-8 py-[13px] rounded-[6px] transition-all"
            >
              Explore <strong className="font-bold ml-1.5 mr-1">AI</strong>{" "}
              Capabilities
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
