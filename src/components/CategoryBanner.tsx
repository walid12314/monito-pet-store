import Image from "next/image";
import Link from "next/link";

const BREADCRUMB_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Dog", href: "/category?pet=dog" },
  { label: "Small Dog", href: "/category?pet=dog&size=small" },
];

export function CategoryBanner() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: BREADCRUMB_ITEMS.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `https://monito.example.com${item.href}`,
    })),
  };

  return (
    <section
      aria-labelledby="category-banner-heading"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[7px]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb Bar (104:2927 — "Frame 88"): 204x24, gap-[6px], 9px above Banner */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-[6px] h-[24px] mb-[9px]"
      >
        {BREADCRUMB_ITEMS.map((item, idx) => {
          const isLast = idx === BREADCRUMB_ITEMS.length - 1;
          return (
            <div key={item.label} className="inline-flex items-center gap-[6px]">
              {isLast ? (
                <span
                  aria-current="page"
                  className="text-[14px] leading-[20px] font-medium text-[#667479]"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[14px] leading-[20px] font-medium text-[#667479] hover:text-[#003459] transition-colors"
                >
                  {item.label}
                </Link>
              )}

              {!isLast && (
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
              )}
            </div>
          );
        })}
      </nav>

      {/* Category Hero Banner (65:2308 — "Banner"): 1180x378, rounded-[20px], overflow-hidden */}
      <div
        className="relative isolate w-full max-w-[1180px] mx-auto min-h-[378px] lg:h-[378px] rounded-[20px] overflow-hidden"
        style={{
          background:
            "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
        }}
      >
        {/* Exact Analytical Vector Background (Warm Cream Gradient + Rotated #002A48 Navy Rectangle 1) */}
        <img
          src="/images/category-banner-bg.svg"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        />

        {/* Mobile/Tablet dark navy bottom/right backdrop */}
        <div
          aria-hidden="true"
          className="lg:hidden pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -top-[40px] left-0 right-0 h-[340px] rounded-b-[45px] bg-[#002A48]" />
        </div>

        {/* Right Content Block (Light/White Theme on #002A48 Navy) */}
        <div className="relative z-20 flex flex-col items-start lg:items-end px-6 pt-8 pb-4 lg:p-0 lg:block lg:w-full lg:h-full">
          {/* Heading Line 1 (65:2311): left: 692px, top: 64px, 52px/68px ExtraBold #FDFDFD */}
          <h1
            id="category-banner-heading"
            className="lg:absolute lg:left-[692px] lg:top-[64px] text-[36px] leading-[48px] lg:text-[52px] lg:leading-[68px] font-extrabold text-[#FDFDFD] capitalize whitespace-nowrap"
          >
            One More Friend
          </h1>

          {/* Heading Line 2 (65:2312): left: 741px, top: 134px, 36px/54px Bold #FDFDFD */}
          <p className="mt-1 lg:mt-0 lg:absolute lg:left-[741px] lg:top-[134px] text-[24px] leading-[36px] lg:text-[36px] lg:leading-[54px] font-bold text-[#FDFDFD] capitalize whitespace-nowrap">
            Thousands More Fun!
          </p>

          {/* Description (65:2313): left: 701px, top: 196px, width: 394px, 12px/18px Medium #CCD1D2, text-right */}
          <p className="mt-2 lg:mt-0 lg:absolute lg:left-[701px] lg:top-[196px] lg:w-[394px] max-w-[394px] text-[12px] leading-[18px] font-medium text-[#CCD1D2] lg:text-right">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          {/* CTA Buttons Row @ top: 274px (Outline "View Intro" @ left: 764px, Solid "Explore Now" @ left: 945px) */}
          <div className="mt-5 lg:mt-0 flex flex-wrap items-center gap-[16px] lg:gap-[20px] lg:absolute lg:left-[764px] lg:top-[274px]">
            {/* Button L Outline (65:2315): 161x48, 1.5px border #FDFDFD, rounded-[57px], pt-[14px] pb-[10px] px-[28px] gap-[8px] */}
            <button
              type="button"
              className="group inline-flex items-center justify-center whitespace-nowrap min-w-[161px] h-[48px] pt-[14px] pb-[10px] px-[28px] gap-[8px] rounded-[57px] border-[1.5px] border-[#FDFDFD] text-[16px] leading-[24px] font-medium text-[#FDFDFD] hover:bg-[#FDFDFD]/10 transition-colors shrink-0 cursor-pointer"
            >
              <span className="whitespace-nowrap">View Intro</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-[24px] h-[24px] shrink-0"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#FDFDFD"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.5 9.5L14.5 12L10.5 14.5V9.5Z"
                  fill="#FDFDFD"
                  stroke="#FDFDFD"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Button L Solid (65:2314): 163x48, bg-[#FDFDFD], text #00171F, rounded-[57px], pt-[14px] pb-[10px] px-[28px] */}
            <Link
              href="#pet-catalog"
              className="inline-flex items-center justify-center whitespace-nowrap min-w-[163px] h-[48px] pt-[14px] pb-[10px] px-[28px] rounded-[57px] bg-[#FDFDFD] hover:bg-[#FCEED5] text-[16px] leading-[24px] font-medium text-[#00171F] transition-colors shrink-0"
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* Left Foreground Image (65:2321 — "group-portrait-adorable-puppies 1")
            Exact Figma position: left: 51px, top: 77px, width: 650px, height: 301px */}
        <div className="relative z-10 w-full max-w-[650px] h-[220px] sm:h-[260px] mx-auto mt-2 lg:mt-0 lg:mx-0 lg:absolute lg:left-[51px] lg:top-[77px] lg:w-[650px] lg:h-[301px] pointer-events-none select-none">
          <Image
            src="/images/category-puppies.png"
            alt="Group portrait of adorable small dog puppies"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 650px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

export default CategoryBanner;

