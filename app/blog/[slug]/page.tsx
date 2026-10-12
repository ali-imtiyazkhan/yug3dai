import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/src/components/ui/Container";
import { blogPosts, getBlogPost } from "@/src/content/posts";
import { QUOTE_APP_URL } from "@/src/lib/urls";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found - Yug3DAI",
    };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      publishedTime: post.date,
      images: [post.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [post.coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  // Clean WordPress content: remove inline WordPress block comments and styling hooks
  const cleanContent = post.content
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "");

  return (
    <article className="py-12 sm:py-20 bg-white">
      <Container size="narrow">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/learn-centre"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#18444f] hover:text-[#2f8095] hover:underline"
          >
            &larr; Back to Learn Centre
          </Link>
        </div>

        {/* Header */}
        <header className="space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#dfedf1] text-[#18444f] border border-[#c4e0e8]">
              {post.category}
            </span>
            <span className="text-xs text-[#3f4c7c]">
              {post.readTime}
            </span>
            <span className="text-xs text-slate-300">&bull;</span>
            <time
              dateTime={post.date}
              className="text-xs text-[#3f4c7c]"
            >
              {post.date}
            </time>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1D243C] leading-tight">
            {post.title}
          </h1>

          <p className="text-lg text-[#3f4c7c] leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full rounded-[10px] overflow-hidden mb-12 border border-slate-200 shadow-md">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none space-y-6 text-[#3f4c7c] leading-relaxed
            [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-extrabold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[#1D243C]
            [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-[#1D243C]
            [&_p]:my-4 [&_p]:leading-relaxed [&_p]:text-[#3f4c7c]
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-4 [&_ul]:space-y-2
            [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-4 [&_ol]:space-y-2
            [&_li]:my-1
            [&_table]:w-full [&_table]:border-collapse [&_table]:my-6
            [&_th]:border [&_th]:border-slate-200 [&_th]:p-3 [&_th]:bg-[#f4f8fa] [&_th]:font-bold [&_th]:text-[#1D243C] [&_th]:text-left
            [&_td]:border [&_td]:border-slate-200 [&_td]:p-3 [&_td]:text-[#3f4c7c]
            [&_strong]:font-bold [&_strong]:text-[#1D243C]
            [&_a]:text-[#18444f] [&_a]:underline font-normal"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

        {/* Article End Quote CTA */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="rounded-[10px] bg-[#f4f8fa] border border-slate-200 p-8 sm:p-10 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#1D243C]">
              Looking for High-Precision 3D Printing in India?
            </h3>
            <p className="text-sm text-[#3f4c7c] max-w-lg mx-auto">
              Get rapid quotes and manufacturing feasibility feedback for FDM, DLP, SLS, and MJF parts directly on our 3DQuote platform.
            </p>
            <div className="pt-2">
              <a
                href={QUOTE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#18444f] hover:bg-[#133740] text-white text-base font-semibold px-8 py-3.5 rounded-[6px] shadow-sm transition-all"
              >
                Instant CAD Quotation on 3DQuote &rarr;
              </a>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}
