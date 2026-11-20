"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export interface ChatContextItem {
  type: "pet" | "product";
  name: string;
  sku: string;
  price: string;
  image: string;
  badgeText?: string;
}

interface ChatMessage {
  id: string;
  sender: "advisor" | "user";
  text: string;
  timestamp: string;
}

const PET_QUICK_REPLIES = [
  "Is this puppy still available?",
  "Can I see vaccination & MKA cert?",
  "Schedule a video call / visit",
  "How does the 100% health guarantee work?",
];

const PRODUCT_QUICK_REPLIES = [
  "Is this product in stock?",
  "How do I get the Free Gift?",
  "Is this suitable for a 2-month puppy?",
  "How fast is nationwide delivery?",
];

function getAdvisorReply(question: string, item: ChatContextItem): string {
  const q = question.toLowerCase();
  if (q.includes("available") || q.includes("stock")) {
    return `Yes! ${item.name} (${item.sku}) is currently available at our Monito showroom for ${item.price}. Would you like us to reserve it for 24 hours or arrange a live video call?`;
  }
  if (q.includes("vaccination") || q.includes("mka") || q.includes("cert")) {
    return `${item.name} has completed age-appropriate core vaccinations and deworming, and comes with an official MKA pedigree certificate plus registered microchip ID. We can send the scanned vet booklet to your email or WhatsApp right away!`;
  }
  if (q.includes("video") || q.includes("visit") || q.includes("schedule")) {
    return `We'd love to host you! Our showroom is open daily from 8:00 AM – 8:00 PM, or we can do a live WhatsApp video call with ${item.name} within 15 minutes. Tap "Continue on WhatsApp" below or share your preferred time!`;
  }
  if (q.includes("guarantee") || q.includes("health")) {
    return `Every Monito pet includes our 100% Health Guarantee (full veterinary screening + 14-day viral coverage) and 100% Guarantee of Pet Identification (verified microchip & lineage).`;
  }
  if (q.includes("gift") || q.includes("free")) {
    return `Every order of ${item.name} automatically includes "${item.badgeText || "Free Pet Gift"}" in your cart at no extra cost!`;
  }
  if (q.includes("suitable") || q.includes("puppy") || q.includes("feeding")) {
    return `Yes! ${item.name} is vet-recommended and formulated with gentle, digestible ingredients suitable for both young puppies and adult pets.`;
  }
  if (q.includes("delivery") || q.includes("shipping")) {
    return `We offer same-day express delivery in Ho Chi Minh City and 1–3 day temperature-controlled nationwide shipping across Vietnam.`;
  }
  return `Thanks for asking about ${item.name} (${item.sku})! One of our senior Monito pet specialists is reviewing your message. You can also tap "Continue on WhatsApp" below for instant photo/video updates!`;
}

export function MonitoChatTrigger({
  item,
  buttonClassName,
}: {
  item: ChatContextItem;
  buttonClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={
          buttonClassName ||
          "inline-flex items-center justify-center whitespace-nowrap min-w-[217px] h-[44px] pt-[14px] pb-[10px] pl-[24px] pr-[28px] gap-[10px] rounded-[57px] border-[2px] border-[#002A48] hover:bg-[#002A48]/5 text-[16px] leading-[24px] font-bold text-[#002A48] transition-colors shrink-0 cursor-pointer"
        }
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

      {isOpen && (
        <MonitoChatDrawer item={item} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}

export function MonitoChatDrawer({
  item,
  onClose,
}: {
  item: ChatContextItem;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: "welcome-1",
      sender: "advisor",
      text: `Hi there! 👋 Welcome to Monito — Pets for Best. I see you're interested in ${item.name} (${item.sku} — ${item.price}). How can I help you today?`,
      timestamp: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: trimmed,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const replyText = getAdvisorReply(trimmed, item);
      setMessages((prev) => [
        ...prev,
        {
          id: `adv-${Date.now()}`,
          sender: "advisor",
          text: replyText,
          timestamp: "Just now",
        },
      ]);
      setIsTyping(false);
    }, 550);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const quickReplies =
    item.type === "pet" ? PET_QUICK_REPLIES : PRODUCT_QUICK_REPLIES;

  const whatsappText = encodeURIComponent(
    `Hi Monito! I'm interested in ${item.name} (${item.sku} - ${item.price}). Could you share more details?`
  );
  const whatsappUrl = `https://wa.me/842838229999?text=${whatsappText}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="monito-chat-title"
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Slide-out Chat Panel */}
      <div
        className="relative flex flex-col w-full max-w-[420px] h-full bg-[#FDFDFD] shadow-2xl border-l border-[#EBEEEF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 1. Drawer Header (#003459 Navy) */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#003459] text-[#FDFDFD]">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#FCEED5] text-[#003459] font-extrabold text-base shrink-0">
              M
              <span
                aria-hidden="true"
                className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-[#34C759] ring-2 ring-[#003459]"
              />
            </div>
            <div className="flex flex-col">
              <h2
                id="monito-chat-title"
                className="text-[16px] leading-[22px] font-bold text-[#FDFDFD]"
              >
                Monito Pet Advisor
              </h2>
              <span className="text-[12px] leading-[16px] font-medium text-[#FCEED5]">
                Online • Typical reply: Instant
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#FDFDFD] transition-colors cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* 2. Pinned Pet/Product Context Card (#FCEED5 Cream) */}
        <div
          className="flex items-center gap-3 px-4 py-3 border-b border-[#F1D092]"
          style={{
            background:
              "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
          }}
        >
          <div className="relative w-[52px] h-[52px] rounded-[8px] overflow-hidden bg-white border border-[#EBEEEF] shrink-0">
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="52px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[11px] leading-[14px] font-bold uppercase tracking-wider text-[#667479]">
              Inquiring About • {item.sku}
            </span>
            <p className="text-[14px] leading-[20px] font-bold text-[#00171F] truncate">
              {item.name}
            </p>
            <p className="text-[13px] leading-[18px] font-bold text-[#003459]">
              {item.price}
            </p>
          </div>
        </div>

        {/* 3. Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FDFDFD]">
          {messages.map((msg) => {
            const isUser = msg.sender === "user";
            return (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  isUser ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-[16px] px-4 py-2.5 text-[14px] leading-[20px] font-medium ${
                    isUser
                      ? "bg-[#003459] text-[#FDFDFD] rounded-br-[4px]"
                      : "bg-[#F5F7F8] text-[#00171F] border border-[#EBEEEF] rounded-bl-[4px]"
                  }`}
                >
                  {msg.text}
                </div>
                <span className="mt-1 text-[11px] leading-[14px] text-[#99A2A5] px-1">
                  {msg.sender === "advisor" ? "Monito Advisor" : "You"} •{" "}
                  {msg.timestamp}
                </span>
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-1.5 px-4 py-2.5 w-fit rounded-[16px] bg-[#F5F7F8] border border-[#EBEEEF] text-[13px] font-medium text-[#667479]">
              <span className="w-2 h-2 rounded-full bg-[#003459] animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#003459] animate-bounce [animation-delay:150ms]" />
              <span className="w-2 h-2 rounded-full bg-[#003459] animate-bounce [animation-delay:300ms]" />
            </div>
          )}

          {/* Quick-Reply Chips */}
          <div className="pt-2">
            <p className="text-[12px] leading-[16px] font-bold text-[#667479] mb-2">
              Quick questions:
            </p>
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => sendMessage(q)}
                  className="text-left text-[12px] leading-[16px] font-bold text-[#003459] bg-[#FCEED5]/50 hover:bg-[#003459] hover:text-[#FDFDFD] border border-[#003459]/30 rounded-full px-3 py-1.5 transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          <div ref={messagesEndRef} />
        </div>

        {/* 4. WhatsApp Handoff & Input Footer */}
        <div className="p-3 bg-[#FDFDFD] border-t border-[#EBEEEF] flex flex-col gap-2.5">
          {/* WhatsApp Handoff Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-[38px] rounded-[57px] bg-[#28C76F]/15 hover:bg-[#28C76F]/25 text-[#1E8E4E] text-[13px] leading-[18px] font-bold transition-colors"
          >
            <span>Continue on WhatsApp (+84 28 3822 9999)</span>
            <span>→</span>
          </a>

          {/* Message Input Form */}
          <form
            onSubmit={handleFormSubmit}
            className="flex items-center gap-2 w-full"
          >
            <label htmlFor="monito-chat-input" className="sr-only">
              Type your message
            </label>
            <input
              id="monito-chat-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`Ask about ${item.name}...`}
              className="flex-1 h-[44px] bg-[#FFFFFF] border border-[#99A2A5] rounded-[57px] px-4 text-[14px] leading-[20px] font-medium text-[#00171F] placeholder:text-[#99A2A5] focus:outline-none focus:border-[#003459]"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="inline-flex items-center justify-center w-[44px] h-[44px] rounded-full bg-[#003459] hover:bg-[#002A48] text-[#FDFDFD] transition-colors shrink-0 cursor-pointer"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

