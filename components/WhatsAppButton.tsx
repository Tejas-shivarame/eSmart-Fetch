"use client";

import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";

export function WhatsAppButton() {
  const phoneNumber ="919916172599";


  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
    >
      <SiWhatsapp className="h-7 w-7" />
    </Link>
  );
}