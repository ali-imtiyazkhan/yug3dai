import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";

export function AiSection() {
  const capabilities = [
    {
      title: "Data-driven Solutions",
      description:
        "Transform unstructured and historical enterprise data into strategic, predictive decision intelligence.",
      icon: (
        <svg
          className="w-8 h-8 text-[#2f8095]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Research and Development",
      description:
        "Custom AI algorithm research, model feasibility experiments, and cutting-edge exploratory engineering.",
      icon: (
        <svg
          className="w-8 h-8 text-[#2f8095]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      title: "Natural Language Processing and Computer Vision Projects",
      description:
        "End-to-end vision pipelines for defect detection alongside advanced language and document understanding.",
      icon: (
        <svg
          className="w-8 h-8 text-[#2f8095]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "AI Consulting and Strategy",
      description:
        "Actionable roadmap creation for AI adoption, risk mitigation, and architecture evaluation.",
      icon: (
        <svg
          className="w-8 h-8 text-[#2f8095]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "MLOps and LLMOps Implementation",
      description:
        "Scalable CI/CD pipelines, automated model monitoring, evaluation frameworks, and low-latency deployment.",
      icon: (
        <svg
          className="w-8 h-8 text-[#2f8095]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Training and Workshops",
      description:
        "Tailored technical training for engineering teams to master modern AI tooling and best practices.",
      icon: (
        <svg
          className="w-8 h-8 text-[#2f8095]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <Container>
        {/* Top Split Banner: Cybernetic Brain on left, Heading + Text + CTA on right matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Cybernetic AI Brain illustration using image-8.avif */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square">
              <Image
                src="/image-8.avif"
                alt="Cybernetic AI Brain on Circuit Board"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Heading, description and button */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#1D243C] leading-[1.2]">
              Unleash The Potential Of Advanced AI Solutions
            </h2>

            <p className="text-base sm:text-lg text-[#3f4c7c] leading-relaxed max-w-2xl">
              Dive Into Our Diverse AI Services, Spanning NLP, Computer Vision, And
              Data-Driven Strategies. With Specialized Deep Learning, Machine
              Learning, And Emotion Analysis Expertise, We Ensure Your Business
              Leads In The AI-Driven World. Join Us In Shaping Tomorrow&apos;s
              Technological Landscape.
            </p>

            <div className="pt-2">
              <Link
                href="/ai-services"
                className="inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm hover:shadow transition-all"
              >
                Know More About AI Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Capabilities Cards Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="p-8 rounded-[8px] bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 text-center flex flex-col items-center group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cap.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1D243C] mb-3 group-hover:text-[#2f8095] transition-colors leading-snug">
                {cap.title}
              </h3>
              <p className="text-sm text-[#3f4c7c] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
