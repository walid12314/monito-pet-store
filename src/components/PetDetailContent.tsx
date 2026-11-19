"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PETS } from "@/components/PetShowcase";

const SHIBA_GALLERY_IMAGES = [
  "/images/detail/shiba-1.png",
  "/images/detail/shiba-2.png",
  "/images/detail/shiba-3.png",
  "/images/detail/shiba-4.png",
  "/images/detail/shiba-5.png",
  "/images/detail/shiba-6.png",
];

const CUSTOMER_PHOTOS = [
  { id: "cust-1", src: "/images/customers/customer-1.png", alt: "Happy customer holding puppy 1" },
  { id: "cust-2", src: "/images/customers/customer-2.png", alt: "Happy customer holding puppy 2" },
  { id: "cust-3", src: "/images/customers/customer-3.png", alt: "Happy customer holding puppy 3" },
  { id: "cust-4", src: "/images/customers/customer-4.png", alt: "Happy customer holding puppy 4" },
  { id: "cust-5", src: "/images/customers/customer-5.png", alt: "Happy customer holding puppy 5" },
];

const PET_SPECIFICATIONS = [
  { label: "SKU", value: ": #1000078" },
  { label: "Gender", value: ": Female" },
  { label: "Age", value: ": 2 Months" },
  { label: "Size", value: ": Small" },
  { label: "Color", value: ": Appricot & Tan" },
  { label: "Vaccinated", value: ": Yes" },
  { label: "Dewormed", value: ": Yes" },
  { label: "Cert", value: ": Yes (MKA)" },
  { label: "Microchip", value: ": Yes" },
  { label: "Location", value: ": Vietnam" },
  { label: "Published Date", value: ": 12-Oct-2022" },
];

export function PetDetailContent({ slug }: { slug?: string }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeCustomerSlide, setActiveCustomerSlide] = useState(0);

  // Use matched pet metadata if navigating from a specific card, defaulting to Figma's Shiba Inu Sepia
  const matchedPet = FEATURED_PETS.find((p) => p.slug === slug);
  const petName = matchedPet ? matchedPet.name : "Shiba Inu Sepia";
  const petPrice = matchedPet ? matchedPet.price : "34.000.000 VND";

  const handlePrevImage = () => {
    setActiveImageIdx((prev) =>
      prev === 0 ? SHIBA_GALLERY_IMAGES.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setActiveImageIdx((prev) =>
      prev === SHIBA_GALLERY_IMAGES.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="w-full">
      {/* ================= SECTION 1: MAIN PET DETAIL CARD (106:1286 — "Frame 92") ================= */}
      <section
        aria-labelledby="pet-detail-heading"
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[20px]"
      >
        <div className="w-full max-w-[1180px] mx-auto bg-[#FDFDFD] border border-[#EBEEEF] rounded-[20px] px-4 sm:px-[20px] py-[22px] flex flex-col lg:flex-row gap-[34px]">
          {/* Left Column (108:1522 — "Frame 116"): width 560px, gap-[17px] */}
          <div className="w-full lg:w-[560px] flex flex-col gap-[17px] shrink-0">
            {/* Gallery & Thumbnails (108:1523 — "Frame 93") */}
            <div className="flex flex-col gap-[12px]">
              {/* Main Photo (108:1524): 560x476, rounded-[10px] */}
              <div className="relative w-full h-[320px] sm:h-[420px] lg:w-[560px] lg:h-[476px] rounded-[10px] overflow-hidden bg-[#F5F5F5]">
                <Image
                  src={SHIBA_GALLERY_IMAGES[activeImageIdx]}
                  alt={`${petName} photo ${activeImageIdx + 1}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                />

                {/* Prev Slider Button (108:1532 — "Frame 90"): 42x42, left: 16px */}
                <button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                  className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-xs flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M15 19L8 12L15 5"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* Next Slider Button (108:1534 — "Frame 91"): 42x42, right: 16px */}
                <button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Next image"
                  className="absolute right-[16px] top-1/2 -translate-y-1/2 w-[42px] h-[42px] rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-xs flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M9 5L16 12L9 19"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* 6-Thumbnail Strip (108:1525 — "Frame 89"): 6 × 94x94, rounded-[6px], 12px gap */}
              <div className="grid grid-cols-6 gap-[8px] sm:gap-[12px] w-full">
                {SHIBA_GALLERY_IMAGES.map((imgSrc, idx) => {
                  const isSelected = activeImageIdx === idx;
                  return (
                    <button
                      key={imgSrc}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      aria-label={`View thumbnail ${idx + 1}`}
                      className={`relative aspect-square lg:w-[94px] lg:h-[94px] rounded-[6px] overflow-hidden transition-all cursor-pointer ${
                        isSelected
                          ? "ring-[3px] ring-[#F1D092]"
                          : "opacity-80 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${petName} thumbnail ${idx + 1}`}
                        fill
                        sizes="94px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Health & Identification Guarantee Bar (108:1536 — "Frame 108"): 560x48, rounded-[10px], px-[12px] py-[9px] */}
            <div
              className="flex flex-col sm:flex-row sm:items-center justify-between w-full min-h-[48px] rounded-[10px] px-[12px] py-[9px] gap-3"
              style={{
                background:
                  "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
              }}
            >
              {/* Left Badge (108:1537): 30x30 icon + "100% health guarantee for pets" */}
              <div className="flex items-center gap-[9px]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-[30px] h-[30px] shrink-0"
                >
                  <circle cx="15" cy="15" r="13" fill="#F1D092" fillOpacity="0.45" />
                  <path
                    d="M9 17.5C9 14.5 11.5 12 15 12C18.5 12 21 14.5 21 17.5C21 20.5 18.5 22 15 22C11.5 22 9 20.5 9 17.5Z"
                    stroke="#002A48"
                    strokeWidth="1.6"
                  />
                  <circle cx="11" cy="10" r="1.6" fill="#FFB775" stroke="#002A48" strokeWidth="1.2" />
                  <circle cx="15" cy="8.5" r="1.6" fill="#FFB775" stroke="#002A48" strokeWidth="1.2" />
                  <circle cx="19" cy="10" r="1.6" fill="#FFB775" stroke="#002A48" strokeWidth="1.2" />
                  <path
                    d="M15 15V19M13 17H17"
                    stroke="#FF564F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[14px] leading-[20px] font-bold text-[#002A48]">
                  100% health guarantee for pets
                </span>
              </div>

              {/* Right Badge (108:1550): 30x30 icon + "100% guarantee of pet identification" */}
              <div className="flex items-center gap-[9px]">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-[30px] h-[30px] shrink-0"
                >
                  <circle cx="15" cy="15" r="13" fill="#F1D092" fillOpacity="0.45" />
                  <rect
                    x="7"
                    y="9"
                    width="16"
                    height="12"
                    rx="2"
                    fill="#FFB775"
                    stroke="#002A48"
                    strokeWidth="1.5"
                  />
                  <circle cx="11.5" cy="15" r="2.2" fill="#002A48" />
                  <path
                    d="M16 13.5H20M16 16.5H19"
                    stroke="#002A48"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[14px] leading-[20px] font-bold text-[#002A48]">
                  100% guarantee of pet identification
                </span>
              </div>
            </div>

            {/* Social Share Row (108:1605 — "Frame 112"): px-[10px] py-[6px], gap-[21px] */}
            <div className="flex items-center gap-[21px] px-[10px] py-[6px]">
              <div className="inline-flex items-center gap-[8px] text-[#002A48]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="w-[20px] h-[20px]"
                >
                  <circle cx="14.5" cy="4.5" r="2.2" stroke="#002A48" strokeWidth="1.6" />
                  <circle cx="5.5" cy="10" r="2.2" stroke="#002A48" strokeWidth="1.6" />
                  <circle cx="14.5" cy="15.5" r="2.2" stroke="#002A48" strokeWidth="1.6" />
                  <path
                    d="M7.5 8.8L12.5 5.7M7.5 11.2L12.5 14.3"
                    stroke="#002A48"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[14px] leading-[20px] font-bold text-[#002A48]">
                  Share:
                </span>
              </div>

              {/* 4 Social Icons (108:1609 — "Frame 25"): #99A2A5, gap ~15.6px */}
              <div className="flex items-center gap-[16px] text-[#99A2A5]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  className="hover:text-[#003459] transition-colors"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Twitter"
                  className="hover:text-[#003459] transition-colors"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Instagram"
                  className="hover:text-[#003459] transition-colors"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on YouTube"
                  className="hover:text-[#003459] transition-colors"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (108:1519 — "Frame 115"): width 517px, gap-[18px] */}
          <div className="w-full lg:w-[517px] flex flex-col gap-[18px]">
            {/* Breadcrumb (106:1258 — "Frame 88"): Home > Dog > Large Dog > Shiba Inu Sepia */}
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-[6px]"
            >
              {[
                { label: "Home", href: "/" },
                { label: "Dog", href: "/category" },
                { label: "Large Dog", href: "/category?size=large" },
                { label: petName, href: "#" },
              ].map((crumb, idx, arr) => {
                const isLast = idx === arr.length - 1;
                return (
                  <div
                    key={crumb.label}
                    className="inline-flex items-center gap-[6px]"
                  >
                    {isLast ? (
                      <span
                        aria-current="page"
                        className="text-[14px] leading-[20px] font-medium text-[#667479]"
                      >
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="text-[14px] leading-[20px] font-medium text-[#667479] hover:text-[#003459] transition-colors"
                      >
                        {crumb.label}
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

            {/* SKU, Title & Price Stack (108:1518 — "Frame 114"): gap-[6px] */}
            <div className="flex flex-col gap-[6px]">
              <div className="flex flex-col gap-[2px]">
                <span className="text-[14px] leading-[20px] font-medium text-[#99A2A5]">
                  SKU #1000078
                </span>
                <h1
                  id="pet-detail-heading"
                  className="text-[24px] leading-[36px] font-bold text-[#00171F]"
                >
                  {petName}
                </h1>
              </div>
              <p className="text-[20px] leading-[32px] font-bold text-[#002A48]">
                {petPrice}
              </p>
            </div>

            {/* Action Buttons Row (117:1724 — "Frame 138"): gap-[18px] */}
            <div className="flex flex-wrap items-center gap-[18px]">
              {/* Contact Us Solid Button (117:1719): min-w-[138px] h-[44px], bg-[#003459], rounded-[57px] */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap min-w-[138px] h-[44px] pt-[14px] pb-[10px] px-[28px] rounded-[57px] bg-[#003459] hover:bg-[#002A48] text-[16px] leading-[24px] font-bold text-[#FDFDFD] transition-colors shrink-0"
              >
                Contact us
              </Link>

              {/* Chat with Monito Outline Button (117:1729): min-w-[217px] h-[44px], 2px border #002A48, rounded-[57px] */}
              <button
                type="button"
                className="inline-flex items-center justify-center whitespace-nowrap min-w-[217px] h-[44px] pt-[14px] pb-[10px] pl-[24px] pr-[28px] gap-[10px] rounded-[57px] border-[2px] border-[#002A48] hover:bg-[#002A48]/5 text-[16px] leading-[24px] font-bold text-[#002A48] transition-colors shrink-0 cursor-pointer"
              >
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
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z"
                    stroke="#002A48"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="8.5" cy="12" r="1.2" fill="#002A48" />
                  <circle cx="12" cy="12" r="1.2" fill="#002A48" />
                  <circle cx="15.5" cy="12" r="1.2" fill="#002A48" />
                </svg>
                <span>Chat with Monito</span>
              </button>
            </div>

            {/* 12-Row Specification Table (108:1303 — "Frame 98"): 517px wide */}
            <dl className="flex flex-col w-full">
              {PET_SPECIFICATIONS.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[150px_1fr] sm:grid-cols-[194px_1fr] items-center min-h-[42px] py-[8px] px-[10px] border-b border-[#EBEEEF] text-[14px] leading-[20px] font-medium text-[#667479]"
                >
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}

              {/* Row 12: Additional Information (108:1349): min-h-[102px] */}
              <div className="grid grid-cols-[150px_1fr] sm:grid-cols-[194px_1fr] items-start min-h-[102px] py-[8px] px-[10px] border-b border-[#EBEEEF] text-[14px] leading-[20px] font-medium text-[#667479]">
                <dt>Additional Information</dt>
                <dd className="whitespace-pre-line">
                  {`: Pure breed Shih Tzu.\n  Good body structure.\n  With MKA cert and Microchip.\n  Father from champion lineage.`}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: OUR LOVELY CUSTOMER (108:6569 — "Frame 117") ================= */}
      <section
        aria-labelledby="lovely-customer-heading"
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[20px]"
      >
        <div className="w-full max-w-[1180px] mx-auto bg-[#FDFDFD] rounded-[20px] pt-[24px] pb-[26px] px-4 sm:px-[31px] flex flex-col gap-[24px] overflow-hidden">
          <div className="flex flex-col gap-[12px]">
            <h2
              id="lovely-customer-heading"
              className="text-[24px] leading-[36px] font-bold text-[#00171F]"
            >
              Our lovely customer
            </h2>

            {/* 5-Photo Horizontal Strip (108:6704 — "Frame 129"): 248x340 cards, rounded-[10px], 12px gap */}
            <div className="flex items-center gap-[12px] overflow-x-auto pb-2">
              {CUSTOMER_PHOTOS.map((photo) => (
                <div
                  key={photo.id}
                  className="relative w-[220px] sm:w-[248px] h-[340px] rounded-[10px] overflow-hidden bg-[#F5F5F5] shrink-0"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="248px"
                    className="object-cover hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Pagination Dots (108:6701 — "Frame 127"): 97.5x9, gap-[6px] */}
          <div
            role="tablist"
            aria-label="Customer gallery slides"
            className="flex items-center justify-center gap-[6px]"
          >
            {[0, 1, 2, 3, 4, 5].map((dotIdx) => {
              const isActive = activeCustomerSlide === dotIdx;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setActiveCustomerSlide(dotIdx)}
                  aria-label={`Customer slide ${dotIdx + 1}`}
                  className={`h-[9px] rounded-[7.5px] transition-all cursor-pointer ${
                    isActive
                      ? "w-[22.5px] bg-[#003459]"
                      : "w-[9px] bg-[#CCD1D2] hover:bg-[#99A2A5]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: SEE MORE PUPPIES (108:1626 — "Frame 52") ================= */}
      <section
        aria-labelledby="see-more-puppies-heading"
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[60px] pb-[60px]"
      >
        {/* Header Stack (108:1627 — "Frame 5"): gap-[2px], mb-[28px] */}
        <div className="flex flex-col gap-[2px] mb-[28px]">
          <span className="text-[16px] leading-[24px] font-medium text-[#000000]">
            Whats new?
          </span>
          <h2
            id="see-more-puppies-heading"
            className="text-[24px] leading-[36px] font-bold text-[#003459] capitalize"
          >
            See More Puppies
          </h2>
        </div>

        {/* 4-Card Row (108:1630, 108:1633, 108:1637, 108:1641): 4 × 280x378, 20px gap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] justify-items-center">
          {FEATURED_PETS.slice(0, 4).map((pet) => (
            <article
              key={pet.id}
              className="group flex flex-col w-full max-w-[280px] lg:h-[378px] bg-[#FDFDFD] rounded-[12px] pt-[8px] px-[8px] pb-0 gap-[8px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_32px_-2px_rgba(0,0,0,0.12)] transition-shadow"
            >
              <Link
                href={`/pets/${pet.slug}`}
                className="relative block w-full aspect-square lg:w-[264px] lg:h-[264px] rounded-[10px] overflow-hidden bg-[#FFFFFF] shrink-0"
              >
                <Image
                  src={pet.image}
                  alt={`${pet.code} - ${pet.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 264px"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </Link>

              <div className="flex flex-col w-full pt-[8px] px-[8px] pb-[20px] gap-[4px]">
                <h3 className="text-[16px] leading-[24px] font-bold text-[#00171F] truncate">
                  <Link
                    href={`/pets/${pet.slug}`}
                    className="hover:text-[#003459] transition-colors"
                  >
                    {pet.code} - {pet.name}
                  </Link>
                </h3>

                <div className="flex flex-wrap items-center gap-[4px] text-[12px] leading-[18px] text-[#667479]">
                  <div className="inline-flex items-start gap-[6px]">
                    <span className="font-medium">Gene:</span>
                    <span className="font-bold">{pet.gene}</span>
                  </div>
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-[18px] h-[18px] font-medium text-[#667479]"
                  >
                    •
                  </span>
                  <div className="inline-flex items-start gap-[5px]">
                    <span className="font-medium">Age:</span>
                    <span className="font-bold">{pet.age}</span>
                  </div>
                </div>

                <p className="text-[14px] leading-[20px] font-bold text-[#00171F]">
                  {pet.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PetDetailContent;
