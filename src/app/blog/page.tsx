import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PetKnowledge } from "@/components/PetKnowledge";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Useful Pet Knowledge & Care Guides | Monito Pets for Best",
  description:
    "Read helpful pet care guides, puppy diet tips, and breed identification articles from Monito.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <PetKnowledge />
      <Footer />
    </main>
  );
}

