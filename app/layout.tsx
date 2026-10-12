import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/src/components/layout/Header";
import { Footer } from "@/src/components/layout/Footer";
import { WhatsAppButton } from "@/src/components/layout/WhatsAppButton";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/src/lib/urls";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - ${SITE_TAGLINE}`,
    template: `%s - ${SITE_NAME}`,
  },
  description:
    "Yug3DAI bridges cutting-edge Artificial Intelligence and Additive Manufacturing. Rapid prototyping, CAD engineering, custom 3D printing in India, and AI research solutions.",
  keywords: [
    "3D Printing Services India",
    "Rapid Prototyping",
    "Artificial Intelligence Development",
    "CAD Engineering",
    "FDM 3D Printing",
    "SLA 3D Printing",
    "SLS 3D Printing",
    "Additive Manufacturing",
    "MLOps",
    "Yug3DAI",
  ],
  authors: [{ name: "Yug3DAI" }],
  creator: "Yug3DAI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description:
      "AI & 3D Printing Individual or Combined Excellence. Rapid prototyping and custom AI innovation.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 377,
        height: 369,
        alt: "Yug3DAI Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - ${SITE_TAGLINE}`,
    description:
      "AI & 3D Printing Individual or Combined Excellence. Rapid prototyping and custom AI innovation.",
    images: ["/images/logo.jpg"],
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1D243C] selection:bg-[#2f8095] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
