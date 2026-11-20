import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PET_KNOWLEDGE_DATA } from "@/components/PetKnowledge";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PET_KNOWLEDGE_DATA.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article =
    PET_KNOWLEDGE_DATA.find((a) => a.slug === slug) ?? PET_KNOWLEDGE_DATA[0];

  return {
    title: `${article.title} | Monito Pet Knowledge`,
    description: article.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

async function BlogDetailBody({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article =
    PET_KNOWLEDGE_DATA.find((a) => a.slug === slug) ?? PET_KNOWLEDGE_DATA[0];

  return (
    <div className="w-full">
      <article className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[20px] pb-[60px]">
        <div className="w-full max-w-[1180px] mx-auto bg-[#FDFDFD] border border-[#EBEEEF] rounded-[20px] p-6 sm:p-10 flex flex-col gap-6">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-[6px]"
          >
            {[
              { label: "Home", href: "/" },
              { label: "Pet Knowledge", href: "/blog" },
            ].map((crumb) => (
              <div
                key={crumb.label}
                className="inline-flex items-center gap-[6px]"
              >
                <Link
                  href={crumb.href}
                  className="text-[14px] leading-[20px] font-medium text-[#667479] hover:text-[#003459] transition-colors"
                >
                  {crumb.label}
                </Link>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-[24px] h-[24px] shrink-0"
                >
                  <path
                    d="M10 8L14 12L10 16"
                    stroke="#667479"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            ))}
            <span
              aria-current="page"
              className="text-[14px] leading-[20px] font-medium text-[#667479] line-clamp-1"
            >
              {article.title}
            </span>
          </nav>

          {/* Category Pill & Article Title */}
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center justify-center px-[12px] py-[4px] rounded-[28px] bg-[#00A7E7] text-[12px] leading-[18px] font-bold text-[#FDFDFD]">
              {article.category}
            </span>
            <h1 className="text-[28px] leading-[38px] sm:text-[36px] sm:leading-[48px] font-bold text-[#003459]">
              {article.title}
            </h1>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-[260px] sm:h-[420px] lg:h-[480px] rounded-[16px] overflow-hidden bg-[#F5F5F5]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1180px) 100vw, 1100px"
              className="object-cover"
            />
          </div>

          {/* Article Lead & Content */}
          <div className="flex flex-col gap-4 max-w-[840px] text-[16px] leading-[26px] text-[#242B33]">
            <p className="text-[18px] leading-[28px] font-bold text-[#00171F]">
              {article.excerpt}
            </p>
            <p>
              At Monito, our veterinary and pet-care specialists believe every
              pet deserves attentive nutrition, daily mental enrichment, and a
              safe, welcoming environment. Understanding your dog&apos;s breed
              traits and developmental stages makes training joyful and
              rewarding for the whole family.
            </p>
            <div className="p-5 rounded-[12px] bg-[#FCEED5]/60 border border-[#F1D092] flex flex-col gap-2">
              <h2 className="text-[18px] leading-[26px] font-bold text-[#003459]">
                Key Takeaways for Pet Parents
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-[15px] leading-[24px] text-[#242B33] font-medium">
                <li>
                  Schedule regular veterinary checkups, vaccinations, and
                  deworming during the first 12 months.
                </li>
                <li>
                  Choose age-appropriate, nutrient-dense meals and introduce new
                  foods gradually over 7–10 days.
                </li>
                <li>
                  Provide durable chew toys and positive reinforcement to guide
                  healthy habits early.
                </li>
              </ul>
            </div>
          </div>

          {/* Back to Blog CTA */}
          <div className="pt-4 border-t border-[#EBEEEF] flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center justify-center whitespace-nowrap h-[44px] px-[28px] py-[12px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[14px] leading-[20px] font-medium text-[#003459] hover:bg-[#003459]/5 transition-colors"
            >
              <span>← Back to Pet Knowledge</span>
            </Link>
            <Link
              href="/category"
              className="inline-flex items-center justify-center whitespace-nowrap h-[44px] px-[28px] py-[12px] rounded-[57px] bg-[#003459] hover:bg-[#002A48] text-[14px] leading-[20px] font-bold text-[#FDFDFD] transition-colors"
            >
              Explore Our Puppies
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <Suspense fallback={<div className="min-h-[600px] max-w-[1180px] mx-auto" />}>
        <BlogDetailBody params={params} />
      </Suspense>
      <Footer />
    </main>
  );
}

