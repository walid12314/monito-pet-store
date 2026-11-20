import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PRODUCTS_DATA } from "@/components/ProductShowcase";
import { MonitoChatTrigger } from "@/components/MonitoChatDrawer";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product =
    PRODUCTS_DATA.find((p) => p.slug === slug) ?? PRODUCTS_DATA[0];

  return {
    title: `${product.name} | Monito Pets for Best`,
    description: `Buy ${product.name} (${product.category}) for ${product.price} at Monito — includes ${product.giftText}.`,
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

async function ProductDetailBody({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product =
    PRODUCTS_DATA.find((p) => p.slug === slug) ?? PRODUCTS_DATA[0];
  const productIndex = PRODUCTS_DATA.findIndex((p) => p.id === product.id);
  const skuCode = `#20000${(productIndex >= 0 ? productIndex : 0) + 11}`;

  const specs = [
    { label: "SKU", value: `: ${skuCode}` },
    { label: "Category", value: `: ${product.category}` },
    ...(product.size ? [{ label: "Size / Weight", value: `: ${product.size}` }] : []),
    { label: "Special Promotion", value: `: ${product.giftText}` },
    { label: "Availability", value: ": In Stock" },
    { label: "Quality Guarantee", value: ": 100% Authentic Pet Supply" },
    { label: "Delivery", value: ": Nationwide Shipping" },
  ];

  const relatedProducts = PRODUCTS_DATA.filter((p) => p.id !== product.id).slice(
    0,
    4
  );

  return (
    <div className="w-full">
      {/* Main Product Detail Card (Matches Figma Frame 92 — 1180px rounded-[20px]) */}
      <section
        aria-labelledby="product-detail-heading"
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[20px]"
      >
        <div className="w-full max-w-[1180px] mx-auto bg-[#FDFDFD] border border-[#EBEEEF] rounded-[20px] px-4 sm:px-[20px] py-[22px] flex flex-col lg:flex-row gap-[34px]">
          {/* Left Column: 560px Product Photo & Guarantee Bar */}
          <div className="w-full lg:w-[560px] flex flex-col gap-[17px] shrink-0">
            <div className="relative flex items-center justify-center w-full h-[360px] sm:h-[440px] lg:w-[560px] lg:h-[476px] rounded-[10px] overflow-hidden bg-[#FFFFFF] border border-[#EBEEEF]">
              <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="400px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Free Gift Banner */}
            <div className="flex items-center w-full min-h-[44px] bg-[#FCEED5] rounded-[10px] px-[14px] py-[10px] gap-[8px]">
              <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-[#003459] text-[#FDFDFD] text-[12px] font-bold">
                FREE GIFT
              </span>
              <span className="text-[14px] leading-[20px] font-bold text-[#002A48]">
                {product.giftText} included with every order
              </span>
            </div>

            {/* Health & Quality Guarantee Bar */}
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between w-full min-h-[48px] rounded-[10px] px-[12px] py-[9px] gap-3"
              style={{
                background:
                  "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
              }}
            >
              <span className="text-[14px] leading-[20px] font-bold text-[#002A48]">
                ✓ 100% quality guarantee for pet products
              </span>
              <span className="text-[14px] leading-[20px] font-bold text-[#002A48]">
                ✓ Vet-approved nutrition & safety
              </span>
            </div>
          </div>

          {/* Right Column: Breadcrumb, SKU, Title, Price, CTAs & Spec Table */}
          <div className="w-full lg:w-[517px] flex flex-col gap-[18px]">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-[6px]"
            >
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: product.category, href: "/products" },
              ].map((crumb, idx) => (
                <div
                  key={`${crumb.label}-${idx}`}
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
                {product.name}
              </span>
            </nav>

            {/* SKU, Title & Price */}
            <div className="flex flex-col gap-[6px]">
              <div className="flex flex-col gap-[2px]">
                <span className="text-[14px] leading-[20px] font-medium text-[#99A2A5]">
                  SKU {skuCode}
                </span>
                <h1
                  id="product-detail-heading"
                  className="text-[24px] leading-[36px] font-bold text-[#00171F]"
                >
                  {product.name}
                </h1>
              </div>
              <p className="text-[20px] leading-[32px] font-bold text-[#002A48]">
                {product.price}
              </p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-[18px]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap min-w-[138px] h-[44px] pt-[14px] pb-[10px] px-[28px] rounded-[57px] bg-[#003459] hover:bg-[#002A48] text-[16px] leading-[24px] font-bold text-[#FDFDFD] transition-colors shrink-0"
              >
                Order Now
              </Link>

              <MonitoChatTrigger
                item={{
                  type: "product",
                  name: product.name,
                  sku: `SKU ${skuCode}`,
                  price: product.price,
                  image: product.image,
                  badgeText: product.giftText,
                }}
              />
            </div>

            {/* Specification Table */}
            <dl className="flex flex-col w-full">
              {specs.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[150px_1fr] sm:grid-cols-[194px_1fr] items-center min-h-[42px] py-[8px] px-[10px] border-b border-[#EBEEEF] text-[14px] leading-[20px] font-medium text-[#667479]"
                >
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section
        aria-labelledby="related-products-heading"
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[60px] pb-[60px]"
      >
        <div className="flex flex-col gap-[2px] mb-[28px]">
          <span className="text-[16px] leading-[24px] font-medium text-[#000000]">
            Hard to choose right products for your pets?
          </span>
          <h2
            id="related-products-heading"
            className="text-[24px] leading-[36px] font-bold text-[#003459]"
          >
            See More Products
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center">
          {relatedProducts.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col w-full max-w-[280px] lg:h-[446px] bg-[#FDFDFD] rounded-[12px] pt-[8px] px-[8px] pb-0 gap-[8px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_32px_-2px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <Link
                href={`/products/${item.slug}`}
                className="relative flex items-center justify-center w-full aspect-square lg:w-[264px] lg:h-[264px] rounded-[10px] overflow-hidden bg-[#FFFFFF] shrink-0"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="264px"
                  className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="flex flex-col justify-between flex-1 w-full pt-[8px] px-[8px] pb-[20px] gap-[10px]">
                <div className="flex flex-col gap-[4px]">
                  <h3 className="text-[16px] leading-[24px] font-bold text-[#00171F] line-clamp-2">
                    <Link
                      href={`/products/${item.slug}`}
                      className="hover:text-[#003459] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </h3>

                  <div className="flex flex-wrap items-center gap-[4px] text-[12px] leading-[18px] text-[#667479]">
                    <span className="font-medium">Product:</span>
                    <span className="font-bold">{item.category}</span>
                    {item.size && (
                      <>
                        <span className="px-1">•</span>
                        <span className="font-medium">Size:</span>
                        <span className="font-bold">{item.size}</span>
                      </>
                    )}
                  </div>

                  <p className="text-[14px] leading-[20px] font-bold text-[#00171F]">
                    {item.price}
                  </p>
                </div>

                <div className="flex items-center w-full h-[34px] bg-[#FCEED5] rounded-[8px] pt-[6px] pb-[4px] px-[10px] gap-[6px]">
                  <span className="text-[14px] leading-[20px] font-bold text-[#003459]">
                    •
                  </span>
                  <span className="text-[14px] leading-[20px] font-bold text-[#002A48] truncate">
                    {item.giftText}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />
      <Suspense fallback={<div className="min-h-[600px] max-w-[1180px] mx-auto" />}>
        <ProductDetailBody params={params} />
      </Suspense>
      <Footer />
    </main>
  );
}

