import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/src/components/ui/Container";
import { blogPosts } from "@/src/content/posts";

export function BlogPreviewSection() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-xl space-y-3">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#dfedf1] text-[#18444f] border border-[#c4e0e8]">
              Learn Centre
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1D243C]">
              Latest from the Learn Centre
            </h2>
            <p className="text-base text-[#3f4c7c]">
              Stay Ahead: Gain Insights from the Learn Centre&apos;s Latest engineering &amp; tech guides.
            </p>
          </div>
          <Link
            href="/learn-centre"
            className="mt-4 md:mt-0 font-bold text-[#18444f] hover:text-[#2f8095] flex items-center gap-1.5 text-base"
          >
            View all articles &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
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
                  <h3 className="text-lg font-bold text-[#1D243C] group-hover:text-[#2f8095] transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#3f4c7c] line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#18444f] hover:text-[#2f8095] transition-colors"
                  >
                    Read Full Guide &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
