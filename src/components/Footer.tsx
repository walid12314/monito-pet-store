import Link from "next/link";

const FOOTER_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Category", href: "/category" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="w-full max-w-[1640px] mx-auto rounded-t-[20px] lg:rounded-t-[40px] px-4 sm:px-8 lg:px-[130px] pt-[40px] lg:pt-[80px] pb-[40px]"
      style={{
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      }}
    >
      <div className="w-full max-w-[1180px] mx-auto">
        {/* Upper Block (Frame 28 - 101:1260): Newsletter + Nav/Social Row, pb-[40px], 1px bottom border #CCD1D2 */}
        <div className="flex flex-col gap-[40px] pb-[40px] border-b border-[#CCD1D2]">
          {/* Newsletter Registration Box (Frame 23 - 101:1261): 1180x136, bg-[#003459], rounded-[16px], p-[32px], gap-[20px] */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:h-[136px] bg-[#003459] rounded-[16px] p-[16px] sm:p-[24px] lg:p-[32px] gap-[16px] lg:gap-[20px]">
            {/* Left Heading (101:1262): 389x72, 24px/36px Bold #FDFDFD, Title Case */}
            <h2 className="w-full lg:w-[389px] text-[20px] leading-[32px] lg:text-[24px] lg:leading-[36px] font-bold text-[#FDFDFD] capitalize shrink-0">
              Register Now So You Don&apos;t Miss Our Programs
            </h2>

            {/* Right Form Box (Frame 24 - 101:1263): 707x72, bg-white, rounded-[14px], p-[12px], gap-[12px] */}
            <form
              action="#"
              className="flex flex-col sm:flex-row items-center w-full lg:w-[707px] lg:h-[72px] bg-[#FFFFFF] rounded-[14px] p-[12px] gap-[12px]"
            >
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Enter your Email
              </label>
              {/* Input (101:1264): 508x48, bg-white, 1px solid #99A2A5, rounded-[8px], px-[28px] py-[14px] */}
              <input
                id="footer-newsletter-email"
                name="email"
                type="email"
                required
                placeholder="Enter your Email"
                className="w-full sm:flex-1 h-[48px] bg-[#FFFFFF] border border-[#99A2A5] rounded-[8px] px-[28px] py-[14px] text-[14px] leading-[20px] font-medium text-[#00171F] placeholder:text-[#99A2A5] focus:outline-none focus:border-[#003459]"
              />

              {/* Submit Button (Button L - 101:1265): 163x48, bg-[#003459], rounded-[8px], pt-[14px] pb-[10px] px-[28px] */}
              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap w-full sm:min-w-[163px] sm:w-auto h-[48px] bg-[#003459] hover:bg-[#002A48] transition-colors rounded-[8px] pt-[14px] pb-[10px] px-[28px] text-[16px] leading-[24px] font-medium text-[#FDFDFD] shrink-0 cursor-pointer"
              >
                Subcribe Now
              </button>
            </form>
          </div>

          {/* Navigation & Social Row (Frame 27 - 101:1266): 1180x24, justify-between */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">
            {/* Left Navigation Links (Frame 2 - 101:1267): gap-[60px] */}
            <nav
              aria-label="Footer Navigation"
              className="flex flex-wrap items-center justify-center gap-8 sm:gap-[60px]"
            >
              {FOOTER_NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[16px] leading-[24px] font-medium text-[#00171F] hover:text-[#003459] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Social Icons (Frame 25 - 101:1272): 216x24, gap-[40px] */}
            <div className="flex items-center gap-[40px]">
              {/* Facebook - Negative (101:1273) */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-[#00171F] hover:text-[#003459] transition-colors"
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
                    d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Twitter - Negative (101:1274) */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-[#00171F] hover:text-[#003459] transition-colors"
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
                    d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* Instagram - Negative (101:1275) */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-[#00171F] hover:text-[#003459] transition-colors"
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
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* YouTube - Negative (101:1276) */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#00171F] hover:text-[#003459] transition-colors"
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
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Brand Bar (Frame 26 - 101:1232): 1180x40, 40px top margin */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-[36px] lg:pt-[40px] gap-4">
          {/* Left Copyright (101:1233) */}
          <p className="text-[14px] leading-[20px] font-medium text-[#667479] order-3 md:order-1">
            © 2022 Monito. All rights reserved.
          </p>

          {/* Center Brand Logo (101:1235): 115x40, centered horizontally */}
          <Link
            href="/"
            aria-label="Monito - Pets for Best Home"
            className="order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2 shrink-0"
          >
            <img
              src="/images/logo.svg"
              alt="Monito Pets for Best"
              width={115}
              height={40}
              className="w-[115px] h-[40px] block"
            />
          </Link>

          {/* Right Legal Links (101:1234) */}
          <div className="flex items-center gap-[32px] text-[14px] leading-[20px] font-medium text-[#667479] order-2 md:order-3">
            <Link
              href="/terms"
              className="hover:text-[#003459] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#003459] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
