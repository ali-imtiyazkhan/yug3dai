import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/src/content/siteConfig";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
  WHATSAPP_URL,
} from "@/src/lib/urls";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#dfedf1] text-[#3f4c7c] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-300 shadow-sm">
                <Image
                  src="/images/logo.jpg"
                  alt="Yug3DAI Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-bold tracking-tight text-[#18444f]">
                Yug3DAI
              </span>
            </Link>
            <p className="text-sm text-[#3f4c7c] max-w-sm leading-relaxed font-medium">
              Harness the Power of AI &amp; 3D Printing, Individually or Combined.
              Engineering custom software intelligence and additive manufacturing
              prototyping for visionary enterprises.
            </p>

            <div className="pt-2 text-xs text-[#3f4c7c] space-y-2">
              <p className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-[#18444f] shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{CONTACT_ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#18444f] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-[#18444f] font-semibold transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[#18444f] shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={CONTACT_PHONE_TEL}
                  className="hover:text-[#18444f] font-semibold transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </p>
            </div>
          </div>

          {/* Column 1: Our Services */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#18444f] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {siteConfig.footerLinks.services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#18444f] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.quoteAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#18444f] hover:underline font-bold inline-flex items-center gap-1"
                >
                  Instant 3D Quote &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: About Yug3DAI */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#18444f] mb-4">
              About Yug3DAI
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {siteConfig.footerLinks.about.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#18444f] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#18444f] transition-colors flex items-center gap-1.5 font-bold text-emerald-700"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Learn & Share */}
          <div>
            <h3 className="text-xs font-bold tracking-wider uppercase text-[#18444f] mb-4">
              Learn &amp; Share
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              {siteConfig.footerLinks.learn.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#18444f] transition-colors line-clamp-1"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-12 pt-8 border-t border-slate-300/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3f4c7c]">
          <p>
            &copy; {currentYear} &middot;{" "}
            <span className="font-bold text-[#18444f]">Yug3DAI</span> &middot;
            All rights reserved.
          </p>
          <div className="flex items-center gap-6 font-medium">
            <Link
              href="/privacy-policy"
              className="hover:text-[#18444f] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-[#18444f] transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="https://www.linkedin.com/company/yug3dai/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#18444f] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
