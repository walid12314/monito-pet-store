import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FCEED5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Monito - Pets for Best | Find Your Best Companion & Pet Essentials",
  description:
    "Explore 200+ healthy pets, puppies, corgis, kittens, along with premium pet foods and care accessories. One more friend, thousands more fun!",
  keywords: [
    "pet ecommerce",
    "buy puppies",
    "corgi dogs",
    "pet supplies",
    "Monito pets",
    "cat adoption",
    "dog food",
  ],
  authors: [{ name: "Monito Pets" }],
  creator: "Monito",
  publisher: "Monito Pet Store",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://monito-pets.example.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Monito - Pets for Best | One More Friend, Thousands More Fun!",
    description:
      "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. 200+ different pets that can meet your needs!",
    url: "https://monito-pets.example.com",
    siteName: "Monito Pet Store",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-banner.png",
        width: 1200,
        height: 630,
        alt: "Monito - Pets for Best",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monito - Pets for Best",
    description:
      "One More Friend, Thousands More Fun! Discover over 200+ loving pets and essentials at Monito.",
    images: ["/images/hero-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://monito-pets.example.com/#organization",
        name: "Monito Pet Store",
        url: "https://monito-pets.example.com",
        logo: {
          "@type": "ImageObject",
          url: "https://monito-pets.example.com/images/hero-banner.png",
        },
        sameAs: [
          "https://facebook.com/monitopets",
          "https://instagram.com/monitopets",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://monito-pets.example.com/#website",
        url: "https://monito-pets.example.com",
        name: "Monito Pets",
        publisher: {
          "@id": "https://monito-pets.example.com/#organization",
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://monito-pets.example.com/search?q={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-neutral-text antialiased selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
