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

export function HeroBanner() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/category?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="relative isolate w-full max-w-[1640px] mx-auto min-h-[695px] lg:h-[695px] rounded-b-[40px] overflow-hidden select-none">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-bg.svg"
          alt=""
          fill
          priority
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ================= 2. FIGMA HEADER (57px Mobile / 100px Desktop, px-[130px]) ================= */}
      <header className="relative w-full h-[57px] lg:h-[100px] z-30 flex items-center">
        <div className="relative w-full px-4 sm:px-8 lg:px-[130px] flex items-center justify-between">
          {/* Left Cluster: Logo & Navigation Links (Figma itemSpacing: 48px) */}
          <div className="flex items-center gap-4 lg:gap-12">
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 -ml-1.5 text-[#00171F] lg:hidden rounded-lg hover:bg-black/5"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Official Monito Logo: 92x32 centered on mobile, 115x40 on desktop */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 inline-flex items-center shrink-0"
              aria-label="Monito Pets for Best Home"
            >
              <Image
                src="/images/logo.svg"
                alt="Monito Pets for Best"
                width={115}
                height={40}
                priority
                className="w-[92px] h-[32px] lg:w-[115px] lg:h-[40px] object-contain"
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
            {/* Mobile Search Icon (Figma 42:235: 23x23 on right of 57px mobile header) */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Open search"
              className="md:hidden p-1.5 -mr-1.5 text-[#00171F] hover:text-[#003459]"
            >
              <Search className="w-[23px] h-[23px] stroke-[2]" />
            </button>

            {/* Search Input: Exact Figma 280px x 44px, bg: #FDFDFD, icon: #667479, placeholder: #99A2A5 */}
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
                className="w-full h-11 pl-12 pr-5 bg-[#FDFDFD] text-sm text-[#242B33] placeholder:text-[#99A2A5] rounded-full shadow-xs focus:outline-none focus:ring-2 focus:ring-[#003459]/20 font-medium"
              />
            </form>

            {/* Join the Community Button: Exact Figma 203px x 44px, r: 57px, fill: #003459 */}
            <Link
              href="/community"
              className="hidden sm:inline-flex items-center justify-center w-[180px] lg:w-[203px] h-11 rounded-full bg-[#003459] hover:bg-[#002A48] text-[#FDFDFD] text-base font-bold shadow-xs hover:shadow-md transition-all active:scale-[0.98] shrink-0"
            >
              Join the community
            </Link>

            {/* Currency Selector: Exact Figma Frame 44 (104px x 44px, flag 16px, VND wt:500 #002A48) */}
            <div className="hidden lg:flex items-center gap-1.5 h-11 px-2 shrink-0 cursor-pointer select-none">
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
          <div className="fixed inset-0 top-[57px] lg:top-[100px] bg-black/40 backdrop-blur-xs z-50 lg:hidden animate-in fade-in duration-200">
            <div className="bg-[#FCEED5] p-6 shadow-2xl border-b border-black/5 space-y-4">
              <form onSubmit={handleSearch} role="search" className="relative flex items-center w-full">
                <Search className="absolute left-4 w-5 h-5 text-[#667479] pointer-events-none stroke-[1.75]" />
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search something here!"
                  aria-label="Search pets and supplies"
                  className="w-full h-11 pl-12 pr-5 bg-[#FDFDFD] text-sm text-[#242B33] placeholder:text-[#99A2A5] rounded-full shadow-xs focus:outline-none focus:ring-2 focus:ring-[#003459]/20 font-medium"
                />
              </form>
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
                  className="w-full inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#003459] text-white text-sm font-bold shadow-xs"
                >
                  Join the community
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ================= 3. FIGMA HERO CONTENT & MODEL POSITION ================= */}
      {/* 
        Exact Figma Coordinates:
        - Text begins at top: 180px, left: 130px
        - Woman + Corgi starts at left: 530px, top: 84px, width: 944px, height: 693px
      */}
      <div className="relative w-full h-[calc(100%-100px)]">
        {/* Left Column: Typography & Action Buttons */}
        <div className="relative z-20 px-4 sm:px-8 lg:px-0 lg:absolute lg:left-[130px] lg:top-[80px] max-w-[480px]">
          {/* Heading Line 1: 60px / 68px lh / 800 weight / #002A48 */}
          <h1
            id="hero-heading"
            className="text-[#002A48] text-4xl sm:text-5xl lg:text-[60px] font-extrabold leading-[1.13] lg:leading-[68px] tracking-tight"
          >
            One More Friend
          </h1>

          {/* Heading Line 2: 46px / 60px lh / 700 weight / #002A48 */}
          <p className="text-[#002A48] text-2xl sm:text-3xl lg:text-[46px] font-bold leading-[1.2] lg:leading-[60px] tracking-tight mt-1">
            Thousands More Fun!
          </p>

          {/* Subtitle: 16px / 24px lh / 500 weight / #242B33 / max-w 480px */}
          <p className="mt-4 sm:mt-6 text-[#242B33] font-medium text-sm sm:text-base leading-6 max-w-[480px]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>

          {/* Action Buttons: Exact 161px & 163px widths, 48px height, 20px gap */}
          <div className="mt-8 sm:mt-[34px] flex flex-wrap items-center gap-5">
            {/* Button 1: "View Intro" */}
            <button
              type="button"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-[161px] h-12 rounded-full border-[1.5px] border-[#003459] text-[#003459] font-medium text-base hover:bg-[#003459]/5 active:scale-95 transition-all"
              aria-label="View video introduction"
            >
              <span>View Intro</span>
              <div className="w-6 h-6 rounded-full border-[1.5px] border-[#003459] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <svg
                  viewBox="0 0 24 24"
                  className="w-3 h-3 text-[#003459] fill-current ml-0.5"
                  aria-hidden="true"
                >
                  <polygon points="7,5 19,12 7,19" />
                </svg>
              </div>
            </button>

            {/* Button 2: "Explore Now" */}
            <Link
              href="/category"
              className="inline-flex items-center justify-center w-full sm:w-[163px] h-12 rounded-full bg-[#003459] hover:bg-[#002A48] text-white font-bold text-base shadow-xs hover:shadow-md active:scale-95 transition-all"
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* Right Column: Original 2x Retina Model & Corgi Cutout (Figma: top: 84px, left: 530px, w: 944px, h: 693px) */}
        <div className="relative lg:absolute lg:left-[530px] lg:top-[-16px] w-full lg:w-[944px] h-[380px] sm:h-[480px] lg:h-[693px] pointer-events-none z-10">
          <Image
            src="/images/corgi-girl-cutout.png"
            alt="Joyful girl in grey hoodie laughing and holding Welsh Corgi dog"
            width={944}
            height={693}
            priority
            fetchPriority="high"
            quality={100}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 h-full w-auto max-w-none object-contain object-bottom"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 944px"
          />
        </div>
      </div>
    </div>
  );
}
