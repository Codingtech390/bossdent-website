"use client";

import { Phone } from "lucide-react";

export default function StickyContact() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      {/* CALL BUTTON */}
      <a
        href="tel:+919810768600"
        className="group relative flex items-center justify-center
                   w-14 h-14 rounded-full
                   bg-gradient-to-br from-blue-600 to-blue-800
                   text-white shadow-2xl
                   hover:scale-110 hover:shadow-blue-300/50
                   transition-all duration-300"
      >
        <Phone size={31} strokeWidth={2.2} />
      </a>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919810768600"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center
                   w-14 h-14 rounded-full
                   bg-[#25D366]
                   text-white shadow-2xl
                   hover:scale-110 hover:shadow-green-300/50
                   transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="33"
          height="33"
          fill="currentColor"
        >
          <path d="M16.04 2C8.85 2 3 7.85 3 15.04c0 2.65.78 5.11 2.13 7.18L3 30l7.98-2.09a13 13 0 005.06 1.01h.01c7.19 0 13.04-5.85 13.04-13.04S23.23 2 16.04 2zm7.58 18.38c-.32.91-1.88 1.74-2.61 1.85-.67.1-1.5.15-2.43-.15-.57-.18-1.3-.42-2.24-.83-3.94-1.7-6.5-5.67-6.7-5.93-.2-.26-1.6-2.12-1.6-4.05s1-2.87 1.35-3.26c.35-.39.76-.48 1.01-.48h.73c.23 0 .53-.09.83.63.32.77 1.08 2.66 1.18 2.85.1.2.17.43.03.7-.13.26-.2.42-.4.65-.2.23-.42.52-.6.7-.2.2-.4.42-.17.83.23.42 1.02 1.69 2.2 2.74 1.52 1.35 2.8 1.77 3.2 1.97.4.2.63.17.86-.1.23-.26 1-1.17 1.27-1.57.26-.4.52-.33.86-.2.35.13 2.2 1.04 2.57 1.23.38.2.63.29.72.45.1.17.1.97-.23 1.88z" />
        </svg>
      </a>
    </div>
  );
}
