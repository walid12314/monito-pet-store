import Image from "next/image";
import Link from "next/link";

export interface PetSellerBrand {
  id: string;
  name: string;
  image: string;
  width: number;
  height: number;
  slotPaddingClass: string;
}

export const PET_SELLERS_DATA: PetSellerBrand[] = [
  {
    id: "seller-sheba",
    name: "Sheba",
    image: "/images/sellers/seller-1-sheba.png",
    width: 88,
    height: 64,
    slotPaddingClass: "px-[16px]",
  },
  {
    id: "seller-whiskas",
    name: "Whiskas",
    image: "/images/sellers/seller-2-whiskas.png",
    width: 114,
    height: 114,
    slotPaddingClass: "p-[10px]",
  },
  {
    id: "seller-bakers",
    name: "Bakers",
    image: "/images/sellers/seller-3-bakers.png",
    width: 104,
    height: 46,
    slotPaddingClass: "p-[10px]",
  },
  {
    id: "seller-felix",
    name: "Felix",
    image: "/images/sellers/seller-4-felix.png",
    width: 92,
    height: 64,
    slotPaddingClass: "p-[10px]",
  },
  {
    id: "seller-goodboy",
    name: "Good Boy",
    image: "/images/sellers/seller-5-goodboy.png",
    width: 92,
    height: 92,
    slotPaddingClass: "p-[10px]",
  },
  {
    id: "seller-butchers",
    name: "Butcher's",
    image: "/images/sellers/seller-6-butchers.png",
    width: 130,
    height: 56,
    slotPaddingClass: "p-[10px]",
  },
  {
    id: "seller-pedigree",
    name: "Pedigree",
    image: "/images/sellers/seller-7-pedigree.png",
    width: 116,
    height: 72,
    slotPaddingClass: "p-[10px]",
  },
];

export function PetSellers() {
  return (
    <section
      aria-labelledby="pet-sellers-heading"
      className="hidden sm:flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[40px] pb-[40px] gap-[15px]"
    >
      {/* Header Row (Frame 43 - 78:504): 1178x44, space-between, items-center */}
      <div className="flex items-center justify-between w-full gap-[15px]">
        {/* Left Title Group (Frame 6 - 78:451): Horizontal row, items-end, gap-[8px] */}
        <div className="flex flex-wrap items-end gap-[8px]">
          <span className="text-[16px] leading-[31px] font-medium text-[#000000]">
            Proud to be part of
          </span>
          <h2
            id="pet-sellers-heading"
            className="text-[24px] leading-[36px] font-bold text-[#003459]"
          >
            Pet Sellers
          </h2>
        </div>

        {/* Right Action Button (Button M - 78:500): 201x44, rounded-[57px], 1.5px solid #003459 */}
        <Link
          href="/sellers"
          className="inline-flex items-center justify-center whitespace-nowrap h-[44px] px-[28px] py-[12px] gap-[8px] rounded-[57px] border-[1.5px] border-[#003459] text-[14px] leading-[20px] font-medium text-[#003459] hover:bg-[#003459]/5 transition-colors shrink-0"
        >
          <span>View all our sellers</span>
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

      {/* Partner Logos Row (Frame 40 - 78:460): 1180x112, 7 equal slots, 20px gap */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-[20px] items-center w-full lg:h-[112px]">
        {PET_SELLERS_DATA.map((brand) => (
          <div
            key={brand.id}
            className={`flex items-center justify-center w-full h-[112px] ${brand.slotPaddingClass}`}
          >
            <div
              className="relative shrink-0"
              style={{
                width: `${brand.width}px`,
                height: `${brand.height}px`,
              }}
            >
              <Image
                src={brand.image}
                alt={`${brand.name} logo`}
                fill
                sizes={`${brand.width}px`}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PetSellers;

