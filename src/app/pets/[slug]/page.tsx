import { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PetDetailContent } from "@/components/PetDetailContent";
import { Footer } from "@/components/Footer";
import { FEATURED_PETS } from "@/components/PetShowcase";

interface PetDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [
    { slug: "shiba-inu-sepia" },
    ...FEATURED_PETS.map((pet) => ({ slug: pet.slug })),
  ];
}

export async function generateMetadata({
  params,
}: PetDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const matched = FEATURED_PETS.find((p) => p.slug === slug);
  const title = matched
    ? `${matched.code} - ${matched.name}`
    : "Shiba Inu Sepia — SKU #1000078";

  return {
    title: `${title} | Monito Pets for Best`,
    description: `Adopt or purchase ${title} at Monito with 100% health guarantee and 100% guarantee of pet identification.`,
    alternates: {
      canonical: `/pets/${slug}`,
    },
  };
}

async function PetDetailBody({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <PetDetailContent slug={slug} />;
}

export default function PetDetailPage({ params }: PetDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <Suspense fallback={<div className="min-h-[826px] max-w-[1180px] mx-auto" />}>
        <PetDetailBody params={params} />
      </Suspense>
      <Footer />
    </main>
  );
}
