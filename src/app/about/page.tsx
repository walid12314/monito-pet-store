import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PetSellers } from "@/components/PetSellers";
import { AdoptionBanner } from "@/components/AdoptionBanner";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Monito | Pets for Best",
  description:
    "Learn about Monito Pets for Best — our mission to connect loving families with healthy, certified puppies and premium pet care products.",
  alternates: {
    canonical: "/about",
  },
};

const TRUST_HIGHLIGHTS = [
  {
    stat: "200+",
    title: "Certified Pet Breeds",
    description:
      "Every puppy comes with complete vaccination records, deworming history, microchip ID, and MKA pedigree certification.",
  },
  {
    stat: "100%",
    title: "Health & ID Guarantee",
    description:
      "Comprehensive veterinary health checks and lifetime identification support so you can welcome your new friend with confidence.",
  },
  {
    stat: "10k+",
    title: "Happy Pet Families",
    description:
      "Trusted by thousands of pet parents for healthy companions, nutrition-first food, and expert care guidance.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      {/* Breadcrumb & About Hero Section */}
      <section
        aria-labelledby="about-monito-heading"
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[12px] pb-[60px]"
      >
        <div className="w-full max-w-[1180px] mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-[6px] h-[24px] mb-[16px]"
          >
            <Link
              href="/"
              className="text-[14px] leading-[20px] font-medium text-[#667479] hover:text-[#003459] transition-colors"
            >
              Home
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
            <span
              aria-current="page"
              className="text-[14px] leading-[20px] font-medium text-[#667479]"
            >
              About
            </span>
          </nav>

          {/* Main About Card */}
          <div
            className="relative overflow-hidden rounded-[20px] p-6 sm:p-10 lg:p-[48px] flex flex-col lg:flex-row items-center justify-between gap-8"
            style={{
              background:
                "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
            }}
          >
            {/* Left Copy */}
            <div className="flex flex-col items-start max-w-[540px] gap-4 z-10">
              <span className="inline-flex items-center px-[12px] py-[4px] rounded-[28px] bg-[#003459] text-[12px] leading-[18px] font-bold text-[#FDFDFD]">
                Our Story
              </span>
              <h1
                id="about-monito-heading"
                className="text-[32px] leading-[44px] sm:text-[44px] sm:leading-[56px] font-extrabold text-[#003459]"
              >
                One More Friend, Thousands More Fun!
              </h1>
              <p className="text-[16px] leading-[24px] font-medium text-[#242B33]">
                Having a pet means you have more joy, a new friend, and a happy
                companion who will always be with you to have fun. At Monito —
                Pets for Best, we connect caring families with over 200+
                certified pets and vet-approved supplies tailored to your
                lifestyle.
              </p>
              <div className="flex flex-wrap items-center gap-[16px] pt-2">
                <Link
                  href="/category"
                  className="inline-flex items-center justify-center whitespace-nowrap min-w-[163px] h-[48px] pt-[14px] pb-[10px] px-[28px] rounded-[57px] bg-[#003459] hover:bg-[#002A48] text-[16px] leading-[24px] font-medium text-[#FDFDFD] transition-colors"
                >
                  Explore Puppies
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center whitespace-nowrap min-w-[161px] h-[48px] pt-[14px] pb-[10px] px-[28px] rounded-[57px] border-[1.5px] border-[#003459] hover:bg-[#003459]/5 text-[16px] leading-[24px] font-medium text-[#003459] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full max-w-[480px] h-[260px] sm:h-[320px] shrink-0 z-10">
              <Image
                src="/images/girl-kissing-puppy.png"
                alt="Happy pet parent holding an adorable puppy"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* 3-Column Mission & Trust Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[40px]">
            {TRUST_HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 p-6 rounded-[16px] bg-[#FDFDFD] border border-[#EBEEEF] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.06)]"
              >
                <span className="text-[36px] leading-[48px] font-extrabold text-[#003459]">
                  {item.stat}
                </span>
                <h2 className="text-[18px] leading-[26px] font-bold text-[#00171F]">
                  {item.title}
                </h2>
                <p className="text-[14px] leading-[20px] font-normal text-[#667479]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PetSellers />
      <div className="pb-[60px]">
        <AdoptionBanner />
      </div>
      <Footer />
    </main>
  );
}

