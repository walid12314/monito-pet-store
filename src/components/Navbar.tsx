"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Category", href: "/category" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="relative w-full max-w-[1440px] mx-auto h-[100px] z-30 flex items-center select-none">
      <div className="w-full px-4 sm:px-8 lg:px-[130px] flex items-center justify-between">
        {/* Left Cluster: Logo & Navigation Links (Figma itemSpacing: 48px) */}
        <div className="flex items-center gap-4 lg:gap-12">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -ml-2 text-[#003459] lg:hidden rounded-lg hover:bg-black/5"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Official Monito Logo: 115px x 40px */}
          <Link
            href="/"
            className="inline-flex items-center shrink-0"
            aria-label="Monito Pets for Best Home"
          >
            <Image
              src="/images/logo.svg"
              alt="Monito Pets for Best"
              width={115}
              height={40}
              priority
              className="w-[115px] h-[40px] object-contain"
            />
          </Link>

          {/* Desktop Navigation Links: Exact 48px gap */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-12"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#003459] hover:text-[#002A48] font-bold text-base transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Cluster: Search, Join CTA & Currency (Figma itemSpacing: 14px) */}
        <div className="flex items-center gap-3.5">
          {/* Search Input: Exact Figma 280px x 44px */}
          <form
            onSubmit={handleSearch}
            role="search"
            className="hidden md:flex items-center relative w-[220px] lg:w-[280px] h-11"
          >
            <Search className="absolute left-4 w-5 h-5 text-[#667479] pointer-events-none stroke-[1.75]" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search something here!"
              aria-label="Search pets and supplies"
              className="w-full h-11 pl-12 pr-5 bg-[#FDFDFD] border border-[#CCD1D2]/60 text-sm text-[#242B33] placeholder:text-[#99A2A5] rounded-full shadow-xs focus:outline-none focus:ring-2 focus:ring-[#003459]/20 font-medium"
            />
          </form>

          {/* Join the Community Button: Exact Figma 203px x 44px, r: 57px, fill: #003459 */}
          <Link
            href="/community"
            className="hidden sm:inline-flex items-center justify-center whitespace-nowrap min-w-[180px] lg:min-w-[203px] px-6 h-11 rounded-full bg-[#003459] hover:bg-[#002A48] text-[#FDFDFD] text-base font-bold shadow-xs hover:shadow-md transition-all active:scale-[0.98] shrink-0"
          >
            Join the community
          </Link>

          {/* Currency Selector: Exact Figma Frame 44 (104px x 44px) */}
          <div className="flex items-center gap-1.5 h-11 px-2 shrink-0 cursor-pointer select-none">
            <div className="w-4 h-4 rounded-full overflow-hidden flex items-center justify-center bg-[#D80027] relative shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-2.5 h-2.5 text-[#FFDA44] fill-current"
              >
                <polygon points="12,2 15,9 22,9 16.5,13.5 18.5,21 12,16.5 5.5,21 7.5,13.5 2,9 9,9" />
              </svg>
            </div>
            <span className="tracking-wide text-[#002A48] font-medium text-base">
              VND
            </span>
            <ChevronDown className="w-4 h-4 text-[#002A48] stroke-[2.2]" />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[100px] bg-black/40 backdrop-blur-xs z-50 lg:hidden animate-in fade-in duration-200">
          <div className="bg-[#FCEED5] p-6 shadow-2xl border-b border-black/5 space-y-4">
            <nav className="flex flex-col gap-3 font-bold text-[#003459] text-base">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-xl hover:bg-white/60 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-3 border-t border-black/10">
              <Link
                href="/community"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center whitespace-nowrap h-11 px-6 rounded-full bg-[#003459] text-white text-sm font-bold shadow-xs"
              >
                Join the community
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

