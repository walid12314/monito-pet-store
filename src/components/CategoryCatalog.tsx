"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export interface CategoryPetCard {
  id: string;
  title: string;
  gender: "Male" | "Female";
  age: string;
  price: string;
  priceNumeric: number;
  image: string;
  color: string;
  breedSize: "Small" | "Medium" | "Large";
  slug: string;
}

/**
 * Exact 15 Pet Cards from Figma Node `54:2541` ("Category" page, 3 cols × 5 rows)
 * Each card matches its exact Figma text layers and overlaid `image 2`..`image 21` photo.
 */
export const CATEGORY_PETS_DATA: CategoryPetCard[] = [
  // Row 1 (y: 237)
  {
    id: "cat-pet-1",
    title: "MO502 - Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    priceNumeric: 3900000,
    image: "/images/pets/pet-2-poodle-tiny-yellow.png",
    color: "Apricot",
    breedSize: "Small",
    slug: "mo502-poodle-tiny-yellow",
  },
  {
    id: "cat-pet-2",
    title: "MO102 - Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    priceNumeric: 4000000,
    image: "/images/pets/pet-3-poodle-tiny-sepia.png",
    color: "Red",
    breedSize: "Small",
    slug: "mo102-poodle-tiny-sepia",
  },
  {
    id: "cat-pet-3",
    title: "MO512 - Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    priceNumeric: 8900000,
    image: "/images/pets/pet-4-alaskan-malamute-grey.png",
    color: "Silver",
    breedSize: "Large",
    slug: "mo512-alaskan-malamute-grey",
  },

  // Row 2 (y: 633)
  {
    id: "cat-pet-4",
    title: "MO502 - Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    priceNumeric: 3900000,
    image: "/images/pets/pet-5-pembroke-corgi-cream.png",
    color: "Tan",
    breedSize: "Medium",
    slug: "mo231-pembroke-corgi-cream",
  },
  {
    id: "cat-pet-5",
    title: "MO102 - Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    priceNumeric: 4000000,
    image: "/images/pets/pet-6-pembroke-corgi-tricolor.png",
    color: "Black & White",
    breedSize: "Medium",
    slug: "mo502-pembroke-corgi-tricolor",
  },
  {
    id: "cat-pet-6",
    title: "MO512 - Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    priceNumeric: 8900000,
    image: "/images/pets/pet-7-pomeranian-white-2.png",
    color: "Black & White",
    breedSize: "Small",
    slug: "mo231-pomeranian-white-2",
  },

  // Row 3 (y: 1029)
  {
    id: "cat-pet-7",
    title: "MO502 - Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    priceNumeric: 3900000,
    image: "/images/pets/pet-8-poodle-tiny-dairy-cow.png",
    color: "Black & White",
    breedSize: "Small",
    slug: "mo512-poodle-tiny-dairy-cow",
  },
  {
    id: "cat-pet-8",
    title: "MO102 - Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    priceNumeric: 4000000,
    image: "/images/pets/pet-4-alaskan-malamute-grey.png",
    color: "Silver",
    breedSize: "Large",
    slug: "mo512-alaskan-malamute-grey",
  },
  {
    id: "cat-pet-9",
    title: "MO512 - Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    priceNumeric: 8900000,
    image: "/images/pets/pet-1-pomeranian-white.png",
    color: "Tan",
    breedSize: "Small",
    slug: "mo231-pomeranian-white",
  },

  // Row 4 (y: 1425)
  {
    id: "cat-pet-10",
    title: "MO502 - Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    priceNumeric: 3900000,
    image: "/images/pets/pet-2-poodle-tiny-yellow.png",
    color: "Apricot",
    breedSize: "Small",
    slug: "mo502-poodle-tiny-yellow",
  },
  {
    id: "cat-pet-11",
    title: "MO102 - Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    priceNumeric: 4000000,
    image: "/images/pets/pet-3-poodle-tiny-sepia.png",
    color: "Red",
    breedSize: "Small",
    slug: "mo102-poodle-tiny-sepia",
  },
  {
    id: "cat-pet-12",
    title: "MO512 - Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    priceNumeric: 8900000,
    image: "/images/pets/pet-4-alaskan-malamute-grey.png",
    color: "Silver",
    breedSize: "Large",
    slug: "mo512-alaskan-malamute-grey",
  },

  // Row 5 (y: 1821)
  {
    id: "cat-pet-13",
    title: "MO502 - Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    priceNumeric: 3900000,
    image: "/images/pets/pet-5-pembroke-corgi-cream.png",
    color: "Tan",
    breedSize: "Medium",
    slug: "mo231-pembroke-corgi-cream",
  },
  {
    id: "cat-pet-14",
    title: "MO102 - Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    priceNumeric: 4000000,
    image: "/images/pets/pet-6-pembroke-corgi-tricolor.png",
    color: "Black & White",
    breedSize: "Medium",
    slug: "mo502-pembroke-corgi-tricolor",
  },
  {
    id: "cat-pet-15",
    title: "MO512 - Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    priceNumeric: 8900000,
    image: "/images/pets/pet-7-pomeranian-white-2.png",
    color: "Black",
    breedSize: "Small",
    slug: "mo231-pomeranian-white-2",
  },
];

const COLOR_OPTIONS = [
  { label: "Red", hex: "#FF564F" },
  { label: "Apricot", hex: "#FFB672" },
  { label: "Black", hex: "#242B33" },
  { label: "Black & White", split: ["#242B33", "#D2D2D2"] as const },
  { label: "Silver", hex: "#CECECE" },
  { label: "Tan", hex: "#FFF7CE" },
];

const BREED_OPTIONS: Array<"Small" | "Medium" | "Large"> = [
  "Small",
  "Medium",
  "Large",
];

function FilterCheckbox({
  checked,
  onChange,
  label,
  swatch,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  swatch?: React.ReactNode;
}) {
  return (
    <label className="inline-flex items-center gap-[10px] cursor-pointer select-none group">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span
        className={`flex items-center justify-center w-[16px] h-[16px] rounded-[4px] border transition-colors shrink-0 ${
          checked
            ? "bg-[#003459] border-[#003459]"
            : "bg-[#FFFFFF] border-[#CCD1D2] group-hover:border-[#003459]"
        }`}
      >
        {checked && (
          <svg
            width="10"
            height="8"
            viewBox="0 0 10 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1.5 4L3.8 6.3L8.5 1.5"
              stroke="#FDFDFD"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {swatch}
      <span className="text-[14px] leading-[20px] font-medium text-[#00171F]">
        {label}
      </span>
    </label>
  );
}

export function CategoryCatalog() {
  const [selectedGenders, setSelectedGenders] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [sortBy, setSortBy] = useState<"popular" | "price-asc" | "price-desc">(
    "popular"
  );
  const [activePage, setActivePage] = useState<number>(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleItem = (
    list: string[],
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    value: string
  ) => {
    setList((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const filteredPets = useMemo(() => {
    let result = [...CATEGORY_PETS_DATA];

    if (selectedGenders.length > 0) {
      result = result.filter((p) => selectedGenders.includes(p.gender));
    }
    if (selectedColors.length > 0) {
      result = result.filter((p) => selectedColors.includes(p.color));
    }
    if (selectedBreeds.length > 0) {
      result = result.filter((p) => selectedBreeds.includes(p.breedSize));
    }
    const minVal = minPrice ? Number(minPrice) * 1000000 : null;
    const maxVal = maxPrice ? Number(maxPrice) * 1000000 : null;
    if (minVal !== null && !Number.isNaN(minVal) && minVal > 0) {
      result = result.filter((p) => p.priceNumeric >= minVal);
    }
    if (maxVal !== null && !Number.isNaN(maxVal) && maxVal > 0) {
      result = result.filter((p) => p.priceNumeric <= maxVal);
    }

    if (sortBy === "price-asc") {
      result.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }

    return result;
  }, [
    selectedGenders,
    selectedColors,
    selectedBreeds,
    minPrice,
    maxPrice,
    sortBy,
  ]);

  const filterSidebarContent = (
    <div className="flex flex-col w-full lg:w-[280px]">
      {/* Group 1: Gender (102:1963 — pb-[16px], border-b #EBEEEF, gap-[10px]) */}
      <div className="flex flex-col gap-[10px] pb-[16px] border-b border-[#EBEEEF]">
        <h3 className="text-[16px] leading-[24px] font-bold text-[#00171F]">
          Gender
        </h3>
        <div className="flex flex-col gap-[8px]">
          {(["Male", "Female"] as const).map((g) => (
            <FilterCheckbox
              key={g}
              label={g}
              checked={selectedGenders.includes(g)}
              onChange={() => toggleItem(selectedGenders, setSelectedGenders, g)}
            />
          ))}
        </div>
      </div>

      {/* Group 2: Color (102:1983 — py-[16px], border-b #EBEEEF, gap-[10px]) */}
      <div className="flex flex-col gap-[10px] py-[16px] border-b border-[#EBEEEF]">
        <h3 className="text-[16px] leading-[24px] font-bold text-[#00171F]">
          Color
        </h3>
        <div className="flex flex-col gap-[8px]">
          {COLOR_OPTIONS.map((c) => (
            <FilterCheckbox
              key={c.label}
              label={c.label}
              checked={selectedColors.includes(c.label)}
              onChange={() =>
                toggleItem(selectedColors, setSelectedColors, c.label)
              }
              swatch={
                c.split ? (
                  <span
                    aria-hidden="true"
                    className="w-[15px] h-[15px] rounded-full shrink-0 overflow-hidden inline-flex"
                  >
                    <span
                      className="w-1/2 h-full"
                      style={{ backgroundColor: c.split[0] }}
                    />
                    <span
                      className="w-1/2 h-full"
                      style={{ backgroundColor: c.split[1] }}
                    />
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    className="w-[15px] h-[15px] rounded-full shrink-0 border border-black/5"
                    style={{ backgroundColor: c.hex }}
                  />
                )
              }
            />
          ))}
        </div>
      </div>

      {/* Group 3: Price (104:2017 — py-[16px], border-b #EBEEEF, gap-[10px]) */}
      <div className="flex flex-col gap-[10px] py-[16px] border-b border-[#EBEEEF]">
        <h3 className="text-[16px] leading-[24px] font-bold text-[#00171F]">
          Price
        </h3>
        {/* Frame 77 (104:2051): 280x40, 2 inputs of 135x40 with 10px gap */}
        <div className="grid grid-cols-2 gap-[10px] w-full">
          <div className="relative flex items-center justify-between h-[40px] p-[10px] border-b border-[#EBEEEF]">
            <input
              type="number"
              min="0"
              step="0.5"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              placeholder="Min"
              aria-label="Minimum price in million VND"
              className="w-full bg-transparent text-[14px] leading-[20px] font-medium text-[#242B33] placeholder:text-[#242B33] focus:outline-none"
            />
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-[14px] h-[14px] text-[#242B33] shrink-0 pointer-events-none"
            >
              <path
                d="M4.5 5.5L7 3L9.5 5.5M4.5 8.5L7 11L9.5 8.5"
                stroke="#242B33"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="relative flex items-center justify-between h-[40px] p-[10px] border-b border-[#EBEEEF]">
            <input
              type="number"
              min="0"
              step="0.5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              placeholder="Max"
              aria-label="Maximum price in million VND"
              className="w-full bg-transparent text-[14px] leading-[20px] font-medium text-[#242B33] placeholder:text-[#242B33] focus:outline-none"
            />
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-[14px] h-[14px] text-[#242B33] shrink-0 pointer-events-none"
            >
              <path
                d="M4.5 5.5L7 3L9.5 5.5M4.5 8.5L7 11L9.5 8.5"
                stroke="#242B33"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Group 4: Breed (104:2091 — py-[16px], border-b #EBEEEF, gap-[10px]) */}
      <div className="flex flex-col gap-[10px] py-[16px] border-b border-[#EBEEEF]">
        <h3 className="text-[16px] leading-[24px] font-bold text-[#00171F]">
          Breed
        </h3>
        <div className="flex flex-col gap-[8px]">
          {BREED_OPTIONS.map((b) => (
            <FilterCheckbox
              key={b}
              label={b}
              checked={selectedBreeds.includes(b)}
              onChange={() => toggleItem(selectedBreeds, setSelectedBreeds, b)}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="pet-catalog"
      aria-labelledby="catalog-category-heading"
      className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[35px] pb-[60px]"
    >
      {/* Top Header Row (y: 184 -> 223, 14px gap to y: 237 grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-[20px] items-center mb-[14px]">
        {/* Left Heading: "Filter" (102:1718) */}
        <div className="hidden lg:block">
          <h2 className="text-[24px] leading-[36px] font-bold text-[#003459]">
            Filter
          </h2>
        </div>

        {/* Right Header Bar: "Small Dog" + "52 puppies" + Sort Dropdown */}
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          <div className="flex items-baseline gap-[14px]">
            <h2
              id="catalog-category-heading"
              className="text-[24px] leading-[36px] font-bold text-[#003459]"
            >
              Small Dog
            </h2>
            <span className="text-[14px] leading-[20px] font-medium text-[#667479]">
              52 puppies
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="lg:hidden inline-flex items-center gap-2 h-[34px] px-4 rounded-[20px] border border-[#CCD1D2] text-[14px] leading-[20px] font-bold text-[#002A48]"
            >
              <span>Filter</span>
            </button>

            {/* Sort Pill Dropdown (102:1717 — "Frame 68"): 165x34, rounded-[20px], 1px solid #CCD1D2 */}
            <div className="relative inline-flex items-center">
              <label htmlFor="catalog-sort-select" className="sr-only">
                Sort by
              </label>
              <select
                id="catalog-sort-select"
                value={sortBy}
                onChange={(e) =>
                  setSortBy(
                    e.target.value as "popular" | "price-asc" | "price-desc"
                  )
                }
                className="appearance-none min-w-[165px] h-[34px] rounded-[20px] border border-[#CCD1D2] bg-transparent pl-[20px] pr-[36px] pt-[6px] pb-[4px] text-[14px] leading-[20px] font-medium text-[#667479] focus:outline-none focus:border-[#003459] cursor-pointer"
              >
                <option value="popular">Sort by: Popular</option>
                <option value="price-asc">Sort by: Price Low</option>
                <option value="price-desc">Sort by: Price High</option>
              </select>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="pointer-events-none absolute right-[10px] w-[24px] h-[24px]"
              >
                <path
                  d="M8 10L12 14L16 10"
                  stroke="#667479"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Filter Panel */}
      {isMobileFilterOpen && (
        <div className="lg:hidden mb-6 p-4 rounded-[12px] bg-[#FDFDFD] border border-[#EBEEEF] shadow-sm">
          {filterSidebarContent}
        </div>
      )}

      {/* Two-Column Main Area: 280px Filter Sidebar + 880px 3-Col Pet Grid (20px gap) */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-[20px] items-start">
        {/* Left Filter Sidebar (102:1992 — "Frame 73") */}
        <aside aria-label="Pet Filters" className="hidden lg:block">
          {filterSidebarContent}
        </aside>

        {/* Right Column: 3×5 Pet Cards Grid + Pagination */}
        <div className="flex flex-col w-full">
          {/* 3-Column Pet Grid: 280x378 cards, 20px col gap, 18px row gap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-[20px] gap-y-[18px] justify-items-center">
            {filteredPets.map((pet) => (
              <article
                key={pet.id}
                className="group flex flex-col w-full max-w-[280px] lg:h-[378px] bg-[#FDFDFD] rounded-[12px] pt-[8px] px-[8px] pb-0 gap-[8px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_32px_-2px_rgba(0,0,0,0.12)] transition-shadow"
              >
                {/* Pet Photo (264x264, rounded-[10px]) */}
                <Link
                  href={`/pets/${pet.slug}`}
                  className="relative block w-full aspect-square lg:w-[264px] lg:h-[264px] rounded-[10px] overflow-hidden bg-[#FFFFFF] shrink-0"
                >
                  <Image
                    src={pet.image}
                    alt={pet.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 264px"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>

                {/* Pet Info Container (width 264px, pt-[8px] px-[8px] pb-[20px], gap-[4px]) */}
                <div className="flex flex-col w-full pt-[8px] px-[8px] pb-[20px] gap-[4px]">
                  {/* Title: 16px/24px Bold #00171F */}
                  <h3 className="text-[16px] leading-[24px] font-bold text-[#00171F] truncate">
                    <Link
                      href={`/pets/${pet.slug}`}
                      className="hover:text-[#003459] transition-colors"
                    >
                      {pet.title}
                    </Link>
                  </h3>

                  {/* Gene & Age Row: 12px/18px #667479, gap-[4px] */}
                  <div className="flex flex-wrap items-center gap-[4px] text-[12px] leading-[18px] text-[#667479]">
                    <div className="inline-flex items-start gap-[6px]">
                      <span className="font-medium">Gene:</span>
                      <span className="font-bold">{pet.gender}</span>
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

                  {/* Price: 14px/20px Bold #00171F */}
                  <p className="text-[14px] leading-[20px] font-bold text-[#00171F]">
                    {pet.price}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Bar (104:2916 — "Frame 85"): 356x34, 40px below Row 5, gap-[12px] */}
          <nav
            aria-label="Pagination"
            className="flex items-center justify-center gap-[12px] mt-[40px]"
          >
            {/* Left Arrow (104:2906): 34x34, rounded-[8px] */}
            <button
              type="button"
              onClick={() => setActivePage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
              className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-[8px] text-[#002A48] hover:bg-[#003459]/10 transition-colors cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-[24px] h-[24px]"
              >
                <path
                  d="M17 12H7M7 12L11 16M7 12L11 8"
                  stroke="#002A48"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Page Numbers: 1, 2, 3, 4, ..., 28 */}
            {([1, 2, 3, 4, "...", 28] as const).map((page, idx) => {
              if (page === "...") {
                return (
                  <span
                    key={`ellipsis-${idx}`}
                    className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-[10px] text-[18px] leading-[24px] font-bold text-[#002A48] select-none"
                  >
                    ...
                  </span>
                );
              }
              const isCurrent = activePage === page;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setActivePage(page)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`inline-flex items-center justify-center w-[34px] h-[34px] text-[18px] leading-[24px] font-bold transition-colors cursor-pointer ${
                    isCurrent
                      ? "rounded-[8px] bg-[#003459] text-[#FDFDFD]"
                      : "rounded-[10px] text-[#002A48] hover:bg-[#003459]/10"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Right Arrow (104:2920): 34x34, rounded-[8px] */}
            <button
              type="button"
              onClick={() => setActivePage((p) => Math.min(28, p + 1))}
              aria-label="Next page"
              className="inline-flex items-center justify-center w-[34px] h-[34px] rounded-[8px] text-[#002A48] hover:bg-[#003459]/10 transition-colors cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-[24px] h-[24px]"
              >
                <path
                  d="M7 12H17M17 12L13 8M17 12L13 16"
                  stroke="#002A48"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default CategoryCatalog;

