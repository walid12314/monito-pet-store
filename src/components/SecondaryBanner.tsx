import Image from "next/image";
import Link from "next/link";

export function SecondaryBanner() {
  return (
    <section
      aria-label="Explore more friends promotional banner"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px]"
    >
      {/* Banner Container (Figma Node 31:360: 1180x378, cornerRadius: 20, fill: #003459) */}
      <div className="relative isolate w-full max-w-[1180px] mx-auto lg:h-[378px] rounded-[20px] bg-[#003459] overflow-hidden select-none">
        {/* Desktop Lossless SVG Background (Rectangle 9 #FCEED5 & Rectangle 1 #002A48) */}
        <div className="hidden lg:block absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/secondary-banner-bg.svg"
            alt=""
            fill
            className="w-full h-full object-cover"
          />
        </div>

        {/* Mobile/Tablet Background Layer */}
        <div className="lg:hidden absolute inset-0 z-0 pointer-events-none bg-[#FCEED5]">
          <div className="absolute bottom-[-120px] left-[-10%] w-[120%] h-[320px] rounded-[60px] bg-[#002A48] rotate-[12deg]" />
        </div>

        {/* Right Content Column (Desktop: exact Figma coordinates; Mobile: centered top stack) */}
        <div className="relative z-20 px-6 pt-8 pb-4 lg:p-0 flex flex-col items-center text-center lg:block">
          {/* Heading Line 1 (Figma Node 37:371: left 692, top 64, w 403, h 68, 52px/68px XBold 800, #003459) */}
          <h2 className="lg:absolute lg:left-[692px] lg:top-[64px] lg:w-[403px] text-[36px] sm:text-[44px] lg:text-[52px] leading-[46px] sm:leading-[54px] lg:leading-[68px] font-extrabold text-[#003459] capitalize lg:text-right whitespace-nowrap">
            One More Friend
          </h2>

          {/* Heading Line 2 (Figma Node 37:372: left 741, top 134, w 354, h 54, 36px/54px Bold 700, #003459) */}
          <p className="lg:absolute lg:left-[741px] lg:top-[134px] lg:w-[354px] text-[24px] sm:text-[30px] lg:text-[36px] leading-[36px] sm:leading-[44px] lg:leading-[54px] font-bold text-[#003459] capitalize lg:text-right whitespace-nowrap mt-0.5 lg:mt-0">
            Thousands More Fun!
          </p>

          {/* Description (Figma Node 37:381: left 701, top 196, w 394, h 54, 12px/18px Medium 500, RIGHT aligned, #242B33) */}
          <p className="lg:absolute lg:left-[701px] lg:top-[196px] lg:w-[394px] text-[12px] leading-[18px] font-medium text-[#242B33] lg:text-right max-w-[394px] mt-3 lg:mt-0">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          {/* Action Buttons (Figma Nodes 37:383 & 37:382: top 274, left 764 & 945, gap 20px) */}
          <div className="mt-6 lg:mt-0 flex flex-wrap items-center justify-center gap-[16px] lg:gap-[20px] lg:absolute lg:left-[764px] lg:top-[274px]">
            {/* Outline Button: "View Intro" (161x48, r-57, 1.5px #003459, gap 8px) */}
            <button
              type="button"
              className="group inline-flex items-center justify-center w-[161px] h-[48px] pt-[14px] pb-[10px] px-[28px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[#003459] text-[16px] leading-[24px] font-medium hover:bg-[#003459]/5 active:scale-95 transition-all shrink-0"
              aria-label="View video introduction"
            >
              <span className="whitespace-nowrap">View Intro</span>
              {/* Media / Play_Circle (24x24 container, 18x18 circle stroke 1.5px #003459) */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[24px] shrink-0 group-hover:scale-105 transition-transform"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#003459"
                  strokeWidth="1.5"
                />
                <path
                  d="M10.5 9.5L14.5 12L10.5 14.5V9.5Z"
                  fill="#003459"
                  stroke="#003459"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Primary Button: "Explore Now" (163x48, r-57, fill #003459, text #FDFDFD) */}
            <Link
              href="/category"
              className="inline-flex items-center justify-center w-[163px] h-[48px] pt-[14px] pb-[10px] px-[28px] rounded-[57px] bg-[#003459] hover:bg-[#002A48] text-[#FDFDFD] text-[16px] leading-[24px] font-medium active:scale-95 transition-all shrink-0 whitespace-nowrap"
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* Left Foreground Cutout Image (Figma Node 40:68: left 20px, top 36px, width 513px, height 342px) */}
        <div className="relative lg:absolute lg:left-[20px] lg:top-[36px] w-full sm:w-[420px] lg:w-[513px] h-[260px] sm:h-[300px] lg:h-[342px] mx-auto z-10 pointer-events-none">
          <Image
            src="/images/girl-kissing-puppy.png"
            alt="Young woman in denim overalls holding up and kissing a cute puppy"
            fill
            sizes="(max-width: 1024px) 420px, 513px"
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
}

