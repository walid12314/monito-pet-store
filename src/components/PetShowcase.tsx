import Image from "next/image";
import Link from "next/link";

export interface PetItem {
  id: string;
  code: string;
  name: string;
  slug: string;
  gene: "Male" | "Female";
  age: string;
  price: string;
  priceNumeric: number;
  image: string;
}

export const FEATURED_PETS: PetItem[] = [
  {
    id: "98:1002",
    code: "MO231",
    name: "Pomeranian White",
    slug: "mo231-pomeranian-white",
    gene: "Male",
    age: "02 months",
    price: "6.900.000 VND",
    priceNumeric: 6900000,
    image: "/images/pets/pet-1-pomeranian-white.png",
  },
  {
    id: "98:1180",
    code: "MO502",
    name: "Poodle Tiny Yellow",
    slug: "mo502-poodle-tiny-yellow",
    gene: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    priceNumeric: 3900000,
    image: "/images/pets/pet-2-poodle-tiny-yellow.png",
  },
  {
    id: "98:1210",
    code: "MO102",
    name: "Poodle Tiny Sepia",
    slug: "mo102-poodle-tiny-sepia",
    gene: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    priceNumeric: 4000000,
    image: "/images/pets/pet-3-poodle-tiny-sepia.png",
  },
  {
    id: "98:1225",
    code: "MO512",
    name: "Alaskan Malamute Grey",
    slug: "mo512-alaskan-malamute-grey",
    gene: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    priceNumeric: 8900000,
    image: "/images/pets/pet-4-alaskan-malamute-grey.png",
  },
  {
    id: "98:1240",
    code: "MO231",
    name: "Pembroke Corgi Cream",
    slug: "mo231-pembroke-corgi-cream",
    gene: "Male",
    age: "02 months",
    price: "7.900.000 VND",
    priceNumeric: 7900000,
    image: "/images/pets/pet-5-pembroke-corgi-cream.png",
  },
  {
    id: "98:1150",
    code: "MO502",
    name: "Pembroke Corgi Tricolor",
    slug: "mo502-pembroke-corgi-tricolor",
    gene: "Female",
    age: "02 months",
    price: "9.000.000 VND",
    priceNumeric: 9000000,
    image: "/images/pets/pet-6-pembroke-corgi-tricolor.png",
  },
  {
    id: "98:1195",
    code: "MO231",
    name: "Pomeranian White",
    slug: "mo231-pomeranian-white-female",
    gene: "Female",
    age: "02 months",
    price: "6.500.000 VND",
    priceNumeric: 6500000,
    image: "/images/pets/pet-7-pomeranian-white-2.png",
  },
  {
    id: "98:1165",
    code: "MO512",
    name: "Poodle Tiny Dairy Cow",
    slug: "mo512-poodle-tiny-dairy-cow",
    gene: "Male",
    age: "02 months",
    price: "5.000.000 VND",
    priceNumeric: 5000000,
    image: "/images/pets/pet-8-poodle-tiny-dairy-cow.png",
  },
];

export function PetShowcase() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Pets at Monito",
    itemListElement: FEATURED_PETS.map((pet, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: `${pet.code} - ${pet.name}`,
        image: `https://monito.com${pet.image}`,
        sku: pet.code,
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          price: pet.priceNumeric,
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <section
      aria-labelledby="new-pets-heading"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-10 lg:pt-[60px] pb-10 lg:pb-[60px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Section Header Row (Figma Node 19:176 & 31:282, 28px bottom margin) */}
      <div className="flex items-end justify-between mb-5 lg:mb-[28px]">
        {/* Left Title Stack (gap: 2px) */}
        <div className="flex flex-col gap-[2px]">
          <span className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-medium text-[#000000]">
            Whats new?
          </span>
          <h2
            id="new-pets-heading"
            className="text-[20px] sm:text-[24px] leading-[32px] sm:leading-[36px] font-bold text-[#003459] capitalize"
          >
            Take a look at some of our pets
          </h2>
        </div>

        {/* Right Outline Button (Figma Node 31:282: 151x44, px-28 py-12, gap-8, r-57, 1.5px stroke #003459) */}
        <Link
          href="/category"
          className="hidden sm:inline-flex items-center justify-center whitespace-nowrap h-[44px] px-[28px] py-[12px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-[#FDFDFD] text-[14px] leading-[20px] font-medium transition-colors shrink-0"
        >
          <span>View more</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] h-[20px] shrink-0"
            aria-hidden="true"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* 4x2 Pet Cards Grid (Figma: 4 cols of 280px, 20px col & row gap = 1180px x 776px) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-[20px]">
        {FEATURED_PETS.map((pet) => (
          <article
            key={pet.id}
            className="group bg-[#FDFDFD] rounded-[6px] pt-[8px] px-[8px] pb-0 flex flex-col gap-[8px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_32px_-2px_rgba(0,0,0,0.14)] transition-shadow duration-200"
          >
            <Link
              href={`/pets/${pet.slug}`}
              className="flex flex-col gap-[8px] h-full"
            >
              {/* Pet Image Frame (Figma Frame 7: 264x264, cornerRadius: 10, bg: #FFFFFF) */}
              <div className="relative w-full aspect-square rounded-[4px] overflow-hidden bg-white shrink-0">
                <Image
                  src={pet.image}
                  alt={`${pet.code} - ${pet.name}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 264px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Text Content Frame (Figma Frame 15: pt-8 px-8 pb-20, inner Frame 14 gap-4) */}
              <div className="w-full px-[4px] sm:px-[8px] pt-[8px] pb-[16px] sm:pb-[20px] flex flex-col">
                <div className="flex flex-col gap-[4px]">
                  {/* Pet Title (16px / 24px, Bold 700, #00171F) */}
                  <h3 className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-bold text-[#00171F] group-hover:text-[#003459] transition-colors truncate">
                    {pet.code} - {pet.name}
                  </h3>

                  {/* Metadata Row (Figma Frame 12: 12px / 18px, #667479, gap-4) */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-x-[4px] gap-y-[2px] text-[12px] leading-[18px] text-[#667479]">
                    <div className="inline-flex items-center gap-[6px]">
                      <span className="font-medium">Gene:</span>
                      <span className="font-bold">{pet.gene}</span>
                    </div>

                    {/* Dot Separator (Figma 98:562: 18x18 box with ~2.7px dot) */}
                    <span
                      className="hidden sm:inline-flex w-[18px] h-[18px] items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <span className="w-[3px] h-[3px] rounded-full bg-[#667479]" />
                    </span>

                    <div className="inline-flex items-center gap-[6px]">
                      <span className="font-medium">Age:</span>
                      <span className="font-bold">{pet.age}</span>
                    </div>
                  </div>

                  {/* Price (14px / 20px, Bold 700, #00171F) */}
                  <p className="text-[14px] leading-[20px] font-bold text-[#00171F] pt-0.5 sm:pt-0">
                    {pet.price}
                  </p>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Mobile-only "View more" button */}
      <div className="mt-4 sm:hidden">
        <Link
          href="/category"
          className="flex items-center justify-center w-full h-[44px] px-[28px] py-[12px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[#003459] text-[14px] leading-[20px] font-medium"
        >
          <span>View more</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] h-[20px] shrink-0"
            aria-hidden="true"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}

