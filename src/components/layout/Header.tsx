"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/src/content/siteConfig";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Desktop nav items (excluding Contact Us which is rendered as the primary header button)
  const navItems = [
    { label: "About Yug3DAI", href: "/about-yug3dai" },
    { label: "AI Services", href: "/ai-services" },
    {
      label: "3D Printing",
      href: "/3d-services",
      children: [
        { label: "3D Printing Services", href: "/3d-services" },
        {
          label: "AM Designing & Prototyping",
          href: "/am-designing-optimization-and-prototyping",
        },
        {
          label: "AM Application Engineering",
          href: "/am-application-engineering",
        },
        { label: "CAD Engineering Service", href: "/cad-engineering-service" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Name matching the theme screenshot */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="Yug3DAI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#18444f] group-hover:text-[#2f8095] transition-colors">
              Yug3DAI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-1.5 text-base font-medium text-[#1D243C] hover:text-[#2f8095] transition-colors py-2"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-0 mt-1 w-64 rounded-xl shadow-xl bg-white border border-slate-100 py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm font-medium text-[#1D243C] hover:bg-slate-50 hover:text-[#2f8095] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-[#1D243C] hover:text-[#2f8095] transition-colors"
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Contact Us Button matching the exact theme styling */}
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-6 py-2.5 rounded-[6px] shadow-sm hover:shadow transition-all"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <Link
              href="/contact-us"
              className="bg-[#18444f] text-white text-sm font-semibold px-4 py-2 rounded-[6px]"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2">
          {siteConfig.nav.map((item) => (
            <div key={item.label} className="py-1">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-semibold text-[#1D243C] hover:bg-slate-50 rounded-lg"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-6 space-y-1 mt-1 border-l-2 border-slate-100 ml-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-sm text-[#3f4c7c] hover:text-[#2f8095]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-slate-100">
            <a
              href="https://3dquote.yug3dai.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full bg-[#18444f] text-white font-semibold py-3 rounded-[6px]"
            >
              Start 3D Printing Services (3DQuote)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
