import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Pet Products | Monito Pets for Best",
  description:
    "Explore premium pet food, toys, and costumes at Monito with free gifts on every order.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <ProductShowcase />
      <Footer />
    </main>
  );
}

