# Yug3DAI (Next.js Replatform)

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

> **Yug3DAI** — *AI & 3D Printing Individual or Combined Excellence.*  
> Official web platform migrated from WordPress to a modern, high-performance **Next.js App Router** architecture.

---

## 🌟 What is Yug3DAI?

**Yug3DAI** is an advanced engineering and technology consultancy bridging two frontier technologies: **Artificial Intelligence (AI)** and **Additive Manufacturing / 3D Printing (AM)**. 

Whether engaged individually or synthesized together, Yug3DAI delivers end-to-end solutions ranging from conceptual design to functional prototyping, industrial AM application engineering, and custom AI systems development.

### Core Service Offerings

1. **3D Printing & Additive Manufacturing (AM)**
   - **3D Printing Services**: Rapid prototyping, functional parts, and small-batch production using FDM, SLA, and SLS technologies.
   - **AM Designing, Optimization & Prototyping**: Design for Additive Manufacturing (DfAM), topology optimization, lightweighting, and iterative prototyping.
   - **AM Application Engineering**: Material selection, end-to-end additive manufacturing workflow integration, and industrial scalability.
   - **CAD Engineering Services**: 3D CAD modeling, reverse engineering, legacy blueprint digitization, and manufacturing drawings.

2. **Artificial Intelligence Services**
   - **AI Research & Development**: Concept validation, custom algorithm development, and exploratory AI prototyping.
   - **Custom AI Solutions**: Machine learning models, predictive intelligence, and operational workflow automations.

3. **Knowledge & Learn Centre**
   - Comprehensive technical guides and engineering resources (e.g., FDM vs. SLA vs. SLS comparison, material selection guides for PLA/ABS/PETG, and 3D printing cost economics in India).

---

## 🚀 About This Codebase

This repository contains the full Next.js rebuild of `yug3dai.com`, engineered for **sub-second page load times**, **superior SEO performance**, and **type-safe content management**.

### Key Architectural Highlights

- **Next.js App Router & React Server Components (RSC):** Static generation and minimal client-side JavaScript overhead.
- **Type-Safe Content Store:** Content is separated into modular TypeScript files (`src/content/`), removing reliance on cumbersome external CMS systems while ensuring zero runtime DB overhead.
- **SEO & Search Visibility:**
  - Automated dynamic `sitemap.ts` and `robots.ts`.
  - Comprehensive OpenGraph and meta descriptions on all pages.
  - Complete 301 redirect map for legacy WordPress URLs in `next.config.ts` to preserve historical rankings and backlinks.
- **Lead Capture & Communication:** Contact form route handlers (`app/api/contact/route.ts`) and direct WhatsApp customer interaction components.

---

## 📂 Project Structure

```text
yug3dai-next/
├── app/                                # Next.js App Router pages & endpoints
│   ├── (site pages)
│   │   ├── 3d-services/                # 3D Printing Services overview
│   │   ├── about-yug3dai/              # Company about & mission
│   │   ├── ai-services/                # AI R&D and solution offerings
│   │   ├── am-application-engineering/ # Application engineering detail
│   │   ├── am-designing-optimization...# DfAM & prototyping
│   │   ├── cad-engineering-service/    # CAD & reverse engineering
│   │   ├── contact-us/                 # Contact form & details
│   │   ├── learn-centre/               # Knowledge hub & blog index
│   │   ├── blog/[slug]/                # Dynamic blog post reader
│   │   └── privacy-policy/             # Privacy policy
│   ├── api/
│   │   └── contact/route.ts            # Contact form submission API
│   ├── layout.tsx                      # Root layout (Header, Footer, WhatsApp)
│   ├── page.tsx                        # Homepage
│   ├── robots.ts                       # Robots.txt generator
│   └── sitemap.ts                      # Dynamic XML sitemap generator
├── src/
│   ├── components/                     # Reusable UI components
│   │   ├── forms/                      # Contact and inquiry forms
│   │   ├── home/                       # Homepage section components
│   │   ├── layout/                     # Global Header, Footer, WhatsApp button
│   │   ├── services/                   # Service template components
│   │   └── ui/                         # Atomic UI elements (Buttons, Container, etc.)
│   ├── content/                        # Static data & site content
│   │   ├── about.ts                    # About page copy and values
│   │   ├── contact.ts                  # Contact info & metadata
│   │   ├── home.ts                     # Homepage copy & highlights
│   │   ├── posts.ts                    # Learn Centre articles & guides
│   │   ├── services.ts                 # Service details, features, FAQs
│   │   └── siteConfig.ts               # Navigation, socials, site metadata
│   ├── lib/                            # Helper utilities & configuration constants
│   └── types/                          # TypeScript interfaces and type definitions
├── public/
│   └── images/                         # Optimized images, graphics, and logos
├── docs/                               # Migration plan, inventory & legacy content dumps
├── next.config.ts                      # Next.js config with legacy 301 redirects
└── package.json
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 16** | Full-stack React framework (App Router, Turbopack) |
| **React 19** | Component architecture & modern server actions/components |
| **TypeScript 5** | Strict type safety across content models and components |
| **Tailwind CSS 4** | Modern, utility-first responsive styling |

---

## 💻 Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or newer (v20+ recommended)
- **npm** (or `pnpm` / `yarn` / `bun`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ali-imtiyazkhan/yug3dai.git
   cd yug3dai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

- `npm run dev` — Starts the local development server with Turbopack.
- `npm run build` — Compiles and builds the production application.
- `npm run start` — Starts the Next.js production server.
- `npm run lint` — Runs ESLint checks.

---

## 🚢 Deployment

The application is optimized for deployment on **Vercel**, **Netlify**, or any Node.js / containerized environment:

```bash
npm run build
```

---

## 📄 License & Ownership

Proprietary — All rights reserved by **Yug3DAI**.
