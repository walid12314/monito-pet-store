import Image from "next/image";
import Link from "next/link";

export interface ProductItem {
  id: string;
  name: string;
  category: "Dog Food" | "Cat Food" | "Toy" | "Costume";
  size?: string;
  price: string;
  priceNumeric: number;
  giftText: string;
  image: string;
  /**
   * Figma `scaleMode` & `imageTransform` rendering mode inside the 264×264 white frame:
   * - Card 1 (98:1262): scaled to 222×222 centered (a = 1.189189)
   * - Card 2 (98:1291): scaled to 238×238 centered (a = 1.109244)
   * - Card 5 (98:1417): scaled to 202×202 centered (a = 1.306931)
   * - Cards 3, 4, 6, 7, 8: full 264×264 cover
   */
  imageSizePx?: number;
  slug: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-1",
    name: "Reflex Plus Adult Cat Food Salmon",
    category: "Dog Food",
    size: "385gm",
    price: "140.000 VND",
    priceNumeric: 140000,
    giftText: "Free Toy & Free Shaker",
    image: "/images/products/product-1-reflex-plus-salmon-dog.png",
    imageSizePx: 222,
    slug: "reflex-plus-adult-cat-food-salmon-dog-385gm",
  },
  {
    id: "prod-2",
    name: "Reflex Plus Adult Cat Food Salmon",
    category: "Cat Food",
    size: "1.5kg",
    price: "165.000 VND",
    priceNumeric: 165000,
    giftText: "Free Toy & Free Shaker",
    image: "/images/products/product-2-reflex-plus-salmon-cat.png",
    imageSizePx: 238,
    slug: "reflex-plus-adult-cat-food-salmon-cat-1-5kg",
  },
  {
    id: "prod-3",
    name: "Cat scratching ball toy kitten sisal rope ball",
    category: "Toy",
    price: "1.100.000 VND",
    priceNumeric: 1100000,
    giftText: "Free Cat Food",
    image: "/images/products/product-3-cat-scratching-ball.png",
    slug: "cat-scratching-ball-toy-kitten-sisal-rope-ball",
  },
  {
    id: "prod-4",
    name: "Cute Pet Cat Warm Nest",
    category: "Toy",
    price: "410.000 VND",
    priceNumeric: 410000,
    giftText: "Free Cat Food",
    image: "/images/products/product-4-cute-pet-cat-warm-nest.png",
    slug: "cute-pet-cat-warm-nest",
  },
  {
    id: "prod-5",
    name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    category: "Dog Food",
    size: "385gm",
    price: "350.000 VND",
    priceNumeric: 350000,
    giftText: "Free Toy & Free Shaker",
    image: "/images/products/product-5-naturvet-salmon-oil.png",
    imageSizePx: 202,
    slug: "naturvet-dogs-omega-gold-plus-salmon-oil",
  },
  {
    id: "prod-6",
    name: "Costumes Fashion Pet Clother Cowboy Rider",
    category: "Costume",
    size: "1.5kg",
    price: "500.000 VND",
    priceNumeric: 500000,
    giftText: "Free Toy & Free Shaker",
    image: "/images/products/product-6-costumes-cowboy-rider.png",
    slug: "costumes-fashion-pet-clother-cowboy-rider",
  },
  {
    id: "prod-7",
    name: "Costumes Chicken Drumsti ck Headband",
    category: "Costume",
    price: "400.000 VND",
    priceNumeric: 400000,
    giftText: "Free Cat Food",
    image: "/images/products/product-7-costumes-chicken-headband.png",
    slug: "costumes-chicken-drumstick-headband",
  },
  {
    id: "prod-8",
    name: "Plush Pet Toy",
    category: "Toy",
    price: "250.000 VND",
    priceNumeric: 250000,
    giftText: "Free Food & Shaker",
    image: "/images/products/product-8-plush-pet-toy.png",
    slug: "plush-pet-toy",
  },
];

/**
 * Exact 10-layer multicolor Gift Box SVG from Figma Node `I98:1262;98:586` (20×20px)
 */
function GiftBoxIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-[20px] h-[20px] shrink-0"
    >
      {/* 98:590 & 98:591 - Top ribbon bow loops */}
      <path
        d="M10.2 5.8C10.2 5.8 11.4 0.4 13.3 1.3C14.8 2.0 13.7 5.2 10.2 5.8Z"
        fill="#FE9923"
      />
      <path
        d="M9.6 5.8C9.6 5.8 6.4 0.0 4.2 1.5C2.5 2.7 5.3 6.2 9.6 5.8Z"
        fill="#FE8821"
      />
      {/* 98:588 - Red gift box base (#FC1A40) */}
      <rect
        x="3.38"
        y="9.41"
        width="15.23"
        height="10.59"
        rx="1.2"
        fill="#FC1A40"
      />
      {/* 98:589 - Darker red left shadow half (#C60034) */}
      <path
        d="M3.38 10.61C3.38 9.95 3.92 9.41 4.58 9.41H11.00V20.00H4.58C3.92 20.00 3.38 19.46 3.38 18.80V10.61Z"
        fill="#C60034"
      />
      {/* 98:595 & 98:598 - Vertical yellow/orange ribbon on base box */}
      <rect x="9.24" y="9.41" width="3.52" height="10.59" fill="#FCBF29" />
      <rect x="9.24" y="9.41" width="1.76" height="10.59" fill="#FE9923" />
      {/* 98:592 & 98:593 - Tilted pink/red gift box lid */}
      <g transform="rotate(-14 10 6.8)">
        <rect
          x="1.4"
          y="4.8"
          width="17.2"
          height="4.2"
          rx="1.1"
          fill="#FF3E75"
        />
        <path
          d="M1.4 5.9C1.4 5.29 1.89 4.8 2.5 4.8H10.0V9.0H2.5C1.89 9.0 1.4 8.51 1.4 7.9V5.9Z"
          fill="#FC1A40"
        />
        {/* 98:596 & 98:599 - Yellow/orange ribbon on lid */}
        <rect x="8.24" y="4.8" width="3.52" height="4.2" fill="#FCBF29" />
        <rect x="8.24" y="4.8" width="1.76" height="4.2" fill="#FE9923" />
      </g>
    </svg>
  );
}

export function ProductShowcase() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Our Pet Products",
    description: "Hard to choose right products for your pets? Explore our top pet food, toys, and costumes.",
    numberOfItems: PRODUCTS_DATA.length,
    itemListElement: PRODUCTS_DATA.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        category: product.category,
        image: `https://monito.example.com${product.image}`,
        offers: {
          "@type": "Offer",
          priceCurrency: "VND",
          price: product.priceNumeric,
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <section
      aria-labelledby="our-products-heading"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[60px] pb-[60px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Section Header Row (y: 1753 -> 1815, 28px gap to grid) */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-[28px]">
        {/* Frame 6 (89:425): 2px vertical gap */}
        <div className="flex flex-col gap-[2px]">
          <p className="text-[16px] leading-[24px] font-medium text-[#000000]">
            Hard to choose right products for your pets?
          </p>
          <h2
            id="our-products-heading"
            className="text-[24px] leading-[36px] font-bold text-[#003459]"
          >
            Our Products
          </h2>
        </div>

        {/* Button M (89:548): 151x44, 1.5px border #003459, rounded-[57px], px-[28px] py-[12px] gap-[8px] */}
        <Link
          href="/products"
          className="hidden sm:inline-flex items-center justify-center whitespace-nowrap min-w-[151px] h-[44px] px-[28px] py-[12px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[14px] leading-[20px] font-medium text-[#003459] hover:bg-[#003459]/5 transition-colors shrink-0"
        >
          <span>View more</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-[20px] h-[20px] shrink-0"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              stroke="#003459"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* 8-Card Grid (Frame 54 & Frame 55): 4 cols × 2 rows, 20px gap */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center">
        {PRODUCTS_DATA.map((product) => (
          <article
            key={product.id}
            className="group flex flex-col w-full max-w-[280px] lg:h-[446px] bg-[#FDFDFD] rounded-[12px] pt-[8px] px-[8px] pb-0 gap-[8px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_32px_-2px_rgba(0,0,0,0.12)] transition-shadow"
          >
            {/* Image Frame (98:568): 264x264, rounded-[10px], white background */}
            <Link
              href={`/products/${product.slug}`}
              className="relative flex items-center justify-center w-full aspect-square lg:w-[264px] lg:h-[264px] rounded-[10px] overflow-hidden bg-[#FFFFFF] shrink-0"
            >
              {product.imageSizePx ? (
                <div
                  className="relative transition-transform duration-300 group-hover:scale-[1.03]"
                  style={{
                    width: `${product.imageSizePx}px`,
                    height: `${product.imageSizePx}px`,
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="264px"
                    className="object-contain"
                  />
                </div>
              ) : (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 264px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              )}
            </Link>

            {/* Text & Promo Container (98:570): width 264px, pt-[8px] px-[8px] pb-[20px], gap-[10px] */}
            <div className="flex flex-col w-full pt-[8px] px-[8px] pb-[20px] gap-[10px]">
              {/* Info Stack (98:571): width 248px, gap-[4px] */}
              <div className="flex flex-col gap-[4px]">
                {/* Product Title (98:572): 16px/24px Bold #00171F */}
                <h3 className="text-[16px] leading-[24px] font-bold text-[#00171F] line-clamp-2">
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-[#003459] transition-colors"
                  >
                    {product.name}
                  </Link>
                </h3>

                {/* Metadata Row (98:573): 12px/18px #667479, gap-[4px] */}
                <div className="flex flex-wrap items-center gap-[4px] text-[12px] leading-[18px] text-[#667479]">
                  <div className="inline-flex items-start gap-[6px]">
                    <span className="font-medium">Product:</span>
                    <span className="font-bold">{product.category}</span>
                  </div>

                  {product.size && (
                    <>
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center justify-center w-[18px] h-[18px] font-medium text-[#667479]"
                      >
                        •
                      </span>
                      <div className="inline-flex items-start gap-[5px]">
                        <span className="font-medium">Size:</span>
                        <span className="font-bold">{product.size}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Price (98:584): 14px/20px Bold #00171F */}
                <p className="text-[14px] leading-[20px] font-bold text-[#00171F]">
                  {product.price}
                </p>
              </div>

              {/* Free Gift Promo Badge (Frame 49 - 98:585): 248x34, bg-[#FCEED5], rounded-[8px], pt-[6px] pb-[4px] px-[10px], gap-[2px] */}
              <div className="flex items-center w-full h-[34px] bg-[#FCEED5] rounded-[8px] pt-[6px] pb-[4px] px-[10px] gap-[2px]">
                <GiftBoxIcon />
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-[20px] h-[20px] text-[14px] leading-[20px] font-bold text-[#003459] shrink-0"
                >
                  •
                </span>
                <span className="text-[14px] leading-[20px] font-bold text-[#002A48] truncate">
                  {product.giftText}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Mobile-only View More button */}
      <div className="mt-5 sm:hidden">
        <Link
          href="/products"
          className="flex items-center justify-center w-full h-[44px] px-[28px] py-[12px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[14px] leading-[20px] font-medium text-[#003459]"
        >
          <span>View more</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-[20px] h-[20px]"
          >
            <path
              d="M8.33337 6.66666L11.6667 9.99999L8.33337 13.3333"
              stroke="#003459"
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
