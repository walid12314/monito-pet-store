import Image from "next/image";
import Link from "next/link";

/**
 * Exact `fontisto:paw` vector icon (Node 78:513 / 78:514 — 42×38px, solid #003459)
 */
function PawIcon() {
  return (
    <svg
      width="42"
      height="38"
      viewBox="0 0 42 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-[42px] h-[38px] shrink-0"
    >
      {/* Top-left inner toe */}
      <ellipse
        cx="15.2"
        cy="8.2"
        rx="4.3"
        ry="6.4"
        transform="rotate(-14 15.2 8.2)"
        fill="#003459"
      />
      {/* Top-right inner toe */}
      <ellipse
        cx="26.8"
        cy="8.2"
        rx="4.3"
        ry="6.4"
        transform="rotate(14 26.8 8.2)"
        fill="#003459"
      />
      {/* Far-left outer toe */}
      <ellipse
        cx="6.4"
        cy="17.2"
        rx="4.1"
        ry="5.8"
        transform="rotate(-32 6.4 17.2)"
        fill="#003459"
      />
      {/* Far-right outer toe */}
      <ellipse
        cx="35.6"
        cy="17.2"
        rx="4.1"
        ry="5.8"
        transform="rotate(32 35.6 17.2)"
        fill="#003459"
      />
      {/* Main central metacarpal pad */}
      <path
        d="M21 15.5C15.6 15.5 12.6 20.1 10.1 24.5C7.9 28.4 8.7 34.8 13.8 35.8C16.6 36.3 18.7 34.4 21 34.4C23.3 34.4 25.4 36.3 28.2 35.8C33.3 34.8 34.1 28.4 31.9 24.5C29.4 20.1 26.4 15.5 21 15.5Z"
        fill="#003459"
      />
    </svg>
  );
}

export function AdoptionBanner() {
  return (
    <section
      aria-labelledby="adoption-banner-heading"
      className="hidden md:block w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px]"
    >
      {/* Banner Frame (78:487): 1180x378, rounded-[20px], #FFB775 base */}
      <div className="relative isolate w-full max-w-[1180px] mx-auto min-h-[378px] lg:h-[378px] rounded-[20px] overflow-hidden bg-[#FFB775]">
        {/* Exact Analytical Vector Background (Rectangle 9 #FCEED5 & Rectangle 1 Gradient) */}
        <img
          src="/images/adoption-banner-bg.svg"
          alt=""
          aria-hidden="true"
          className="hidden lg:block absolute inset-0 w-full h-full object-cover pointer-events-none select-none z-0"
        />

        {/* Mobile/Tablet fallback decorative shapes */}
        <div
          aria-hidden="true"
          className="lg:hidden pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute -top-[220px] -left-[140px] w-[680px] h-[560px] rounded-[75px] bg-[#FCEED5] rotate-[25.23deg]" />
        </div>

        {/* Left Content Block (x: 407..868 relative to banner x: 335) */}
        <div className="relative z-20 flex flex-col items-start px-6 pt-8 pb-6 lg:p-0 lg:block lg:w-full lg:h-full">
          {/* Heading "Adoption" (78:490) @ left: 85px, top: 64px + Paw Icon (78:513) @ left: 326px, top: 74px */}
          <div className="flex items-center gap-[16px] lg:absolute lg:left-[85px] lg:top-[64px]">
            <h2
              id="adoption-banner-heading"
              className="text-[36px] leading-[48px] lg:text-[52px] lg:leading-[68px] font-extrabold text-[#003459] capitalize"
            >
              Adoption
            </h2>
            <div className="lg:mt-[2px]">
              <PawIcon />
            </div>
          </div>

          {/* Subheading (78:491) @ left: 85px, top: 134px */}
          <p className="mt-1 lg:mt-0 lg:absolute lg:left-[85px] lg:top-[134px] text-[24px] leading-[36px] lg:text-[36px] lg:leading-[54px] font-bold text-[#003459] capitalize">
            We Need Help. So Do They.
          </p>

          {/* Description (78:492) @ left: 85px, top: 196px */}
          <p className="mt-2 lg:mt-0 lg:absolute lg:left-[85px] lg:top-[196px] max-w-[394px] text-[12px] leading-[18px] font-medium text-[#242B33]">
            Adopt a pet and give it a home,
            <br />
            it will be love you back unconditionally.
          </p>

          {/* CTA Buttons Row @ top: 274px (Solid "Explore Now" @ left: 72px, Outline "View Intro" @ left: 255px) */}
          <div className="mt-6 lg:mt-0 flex flex-wrap items-center gap-[20px] lg:absolute lg:left-[72px] lg:top-[274px]">
            {/* Button L Solid (78:493): 163x48, bg-[#003459], rounded-[57px], pt-[14px] pb-[10px] px-[28px] */}
            <Link
              href="/adoption"
              className="inline-flex items-center justify-center whitespace-nowrap min-w-[163px] h-[48px] pt-[14px] pb-[10px] px-[28px] rounded-[57px] bg-[#003459] text-[16px] leading-[24px] font-medium text-[#FDFDFD] hover:bg-[#002A48] transition-colors shrink-0"
            >
              Explore Now
            </Link>

            {/* Button L Outline (78:494): 161x48, 1.5px border #003459, rounded-[57px], pt-[14px] pb-[10px] px-[28px] gap-[8px] */}
            <Link
              href="#adoption-intro"
              className="inline-flex items-center justify-center whitespace-nowrap min-w-[161px] h-[48px] pt-[14px] pb-[10px] px-[28px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[16px] leading-[24px] font-medium text-[#003459] hover:bg-[#003459]/5 transition-colors shrink-0"
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
            </Link>
          </div>
        </div>

        {/* Right Foreground Image (78:512 — "pngegg (4) 1")
            Solved unrotated size: 538.53px × 358.79px
            Centered at (899.22px, 196.21px) => left: 629.95px, top: 16.82px
            Transform: rotate(54.0712deg) scaleX(-1) */}
        <div
          className="hidden lg:block absolute z-10 pointer-events-none select-none"
          style={{
            left: "629.95px",
            top: "16.82px",
            width: "538.53px",
            height: "358.79px",
            transform: "rotate(54.0712deg) scaleX(-1)",
            transformOrigin: "center center",
          }}
        >
          <Image
            src="/images/adoption-paw-hand.png"
            alt="Human hand holding a dog paw in adoption support"
            fill
            sizes="539px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AdoptionBanner;

