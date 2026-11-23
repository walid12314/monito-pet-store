import { Suspense } from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { CategoryBanner } from "@/components/CategoryBanner";
import { CategoryCatalog } from "@/components/CategoryCatalog";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Small Dog Puppies for Sale | Monito Pets for Best",
  description:
    "Browse 52+ adorable small dog puppies including Pomeranian, Poodle, Pembroke Corgi, and Alaskan Malamute with 100% health guarantee.",
  alternates: {
    canonical: "/category",
  },
};

export default function CategoryPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <CategoryBanner />
      <Suspense fallback={<div className="min-h-[800px] max-w-[1180px] mx-auto" />}>
        <CategoryCatalog />
      </Suspense>
      <Footer />
    </main>
  );
}

