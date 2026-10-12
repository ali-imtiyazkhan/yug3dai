import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { SectionHeading } from "@/src/components/ui/SectionHeading";
import { blogPosts } from "@/src/content/posts";

export const metadata: Metadata = {
  title: "Learn Centre - 3D Printing & AI Guides - Yug3DAI",
  description:
    "Explore in-depth technical guides, cost breakdowns, and comparisons on 3D printing technologies (FDM, SLA, SLS), materials (PLA, ABS, PETG), and Artificial Intelligence.",
  alternates: {
    canonical: "/learn-centre",
  },
  openGraph: {
    title: "Learn Centre - 3D Printing & AI Guides - Yug3DAI",
    description:
      "Explore in-depth technical guides, cost breakdowns, and comparisons on 3D printing technologies and Artificial Intelligence.",
  },
};

export default function LearnCentrePage() {
  return (
    <div className="py-12 sm:py-20 bg-white">
      <Container>
        <SectionHeading
          pill="Learn &amp; Share"
          title="Yug3DAI Learn Centre"
          description="Insights, comprehensive comparisons, and cost guides on 3D printing engineering and artificial intelligence."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-[10px] overflow-hidden border border-slate-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#18444f]/90 backdrop-blur-sm text-white px-3 py-1 rounded-[4px] text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#3f4c7c]">
                    <time dateTime={post.date}>{post.date}</time>
                    <span>&bull;</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#1D243C] group-hover:text-[#2f8095] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-sm text-[#3f4c7c] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#18444f] hover:text-[#2f8095] transition-colors"
                  >
                    Read Full Article &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
