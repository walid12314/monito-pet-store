import { HeroBanner } from "@/components/HeroBanner";
import { PetShowcase } from "@/components/PetShowcase";
import { SecondaryBanner } from "@/components/SecondaryBanner";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PetSellers } from "@/components/PetSellers";
import { AdoptionBanner } from "@/components/AdoptionBanner";
import { PetKnowledge } from "@/components/PetKnowledge";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <HeroBanner />
      <PetShowcase />
      <SecondaryBanner />
      <ProductShowcase />
      <PetSellers />
      <AdoptionBanner />
      <PetKnowledge />
      <Footer />
    </main>
  );
}
