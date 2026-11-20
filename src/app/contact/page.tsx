import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Us | Monito Pets for Best",
  description:
    "Get in touch with Monito Pets for Best for puppy adoption inquiries, veterinary health certificates, and pet care advice.",
  alternates: {
    canonical: "/contact",
  },
};

const CONTACT_METHODS = [
  {
    label: "Customer Support Hotline",
    value: "+84 (028) 3822 9999",
    subtext: "Mon – Sun: 8:00 AM – 8:00 PM (ICT)",
  },
  {
    label: "Email Inquiries",
    value: "hello@monito.pets",
    subtext: "We respond to all puppy & product inquiries within 24 hours",
  },
  {
    label: "Monito Pet Showroom",
    value: "District 1, Ho Chi Minh City, Vietnam",
    subtext: "Book a private visit to meet our puppies in person",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFDFD]">
      <Navbar />

      <section
        aria-labelledby="contact-monito-heading"
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[130px] pt-[12px] pb-[60px]"
      >
        <div className="w-full max-w-[1180px] mx-auto">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-[6px] h-[24px] mb-[16px]"
          >
            <Link
              href="/"
              className="text-[14px] leading-[20px] font-medium text-[#667479] hover:text-[#003459] transition-colors"
            >
              Home
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
            <span
              aria-current="page"
              className="text-[14px] leading-[20px] font-medium text-[#667479]"
            >
              Contact
            </span>
          </nav>

          {/* Main Contact Card (1180px rounded-[20px]) */}
          <div className="w-full bg-[#FDFDFD] border border-[#EBEEEF] rounded-[20px] p-6 sm:p-10 lg:p-[40px] grid grid-cols-1 lg:grid-cols-[440px_1fr] gap-[40px] shadow-[0px_4px_28px_-2px_rgba(0,0,0,0.06)]">
            {/* Left Column: Contact Info & Guarantee Box */}
            <div
              className="flex flex-col justify-between rounded-[16px] p-6 sm:p-8 gap-8"
              style={{
                background:
                  "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
              }}
            >
              <div className="flex flex-col gap-3">
                <span className="inline-flex items-center w-fit px-[12px] py-[4px] rounded-[28px] bg-[#003459] text-[12px] leading-[18px] font-bold text-[#FDFDFD]">
                  Chat with Monito
                </span>
                <h1
                  id="contact-monito-heading"
                  className="text-[28px] leading-[38px] sm:text-[32px] sm:leading-[42px] font-extrabold text-[#003459]"
                >
                  We&apos;d Love to Help You Find Your Best Friend
                </h1>
                <p className="text-[14px] leading-[20px] font-medium text-[#242B33]">
                  Have questions about a specific puppy, MKA pedigree
                  certification, vaccination records, or nutrition products?
                  Reach out to our pet specialists anytime.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {CONTACT_METHODS.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 pb-4 border-b border-[#003459]/10 last:border-b-0 last:pb-0"
                  >
                    <span className="text-[12px] leading-[18px] font-bold uppercase tracking-wider text-[#667479]">
                      {item.label}
                    </span>
                    <span className="text-[16px] leading-[24px] font-bold text-[#00171F]">
                      {item.value}
                    </span>
                    <span className="text-[12px] leading-[18px] font-medium text-[#242B33]">
                      {item.subtext}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <form action="#" className="flex flex-col justify-center gap-5">
              <div className="flex flex-col gap-1">
                <h2 className="text-[24px] leading-[36px] font-bold text-[#003459]">
                  Send Us a Message
                </h2>
                <p className="text-[14px] leading-[20px] font-medium text-[#667479]">
                  Fill out the form below and our Monito advisor will get back
                  to you shortly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-[14px] leading-[20px] font-bold text-[#00171F]"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full h-[48px] bg-[#FFFFFF] border border-[#99A2A5] rounded-[8px] px-[20px] py-[14px] text-[14px] leading-[20px] font-medium text-[#00171F] placeholder:text-[#99A2A5] focus:outline-none focus:border-[#003459]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-[14px] leading-[20px] font-bold text-[#00171F]"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full h-[48px] bg-[#FFFFFF] border border-[#99A2A5] rounded-[8px] px-[20px] py-[14px] text-[14px] leading-[20px] font-medium text-[#00171F] placeholder:text-[#99A2A5] focus:outline-none focus:border-[#003459]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="text-[14px] leading-[20px] font-bold text-[#00171F]"
                  >
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+84 ..."
                    className="w-full h-[48px] bg-[#FFFFFF] border border-[#99A2A5] rounded-[8px] px-[20px] py-[14px] text-[14px] leading-[20px] font-medium text-[#00171F] placeholder:text-[#99A2A5] focus:outline-none focus:border-[#003459]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-topic"
                    className="text-[14px] leading-[20px] font-bold text-[#00171F]"
                  >
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    className="w-full h-[48px] bg-[#FFFFFF] border border-[#99A2A5] rounded-[8px] px-[20px] text-[14px] leading-[20px] font-medium text-[#00171F] focus:outline-none focus:border-[#003459]"
                  >
                    <option value="puppy">Puppy Adoption / Purchase</option>
                    <option value="product">Pet Food & Supplies</option>
                    <option value="visit">Schedule a Showroom Visit</option>
                    <option value="support">General Support</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-[14px] leading-[20px] font-bold text-[#00171F]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us which puppy or product you are interested in..."
                  className="w-full bg-[#FFFFFF] border border-[#99A2A5] rounded-[8px] px-[20px] py-[14px] text-[14px] leading-[20px] font-medium text-[#00171F] placeholder:text-[#99A2A5] focus:outline-none focus:border-[#003459] resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center whitespace-nowrap min-w-[180px] h-[48px] pt-[14px] pb-[10px] px-[28px] rounded-[57px] bg-[#003459] hover:bg-[#002A48] text-[16px] leading-[24px] font-bold text-[#FDFDFD] transition-colors cursor-pointer"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

