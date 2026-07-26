"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { X } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const phone = COMPANY.phone.replace(/\D/g, "");

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
Refactor WhatsAppWidget for improved state handling
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () =>
      document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="mr-4 w-80 overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl"
          >
            <div className="relative bg-[#25D366] p-6 text-white">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                  <SiWhatsapp className="text-3xl text-[#25D366]" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    eSmart Fetch
                  </h3>

                  <p className="text-sm text-white/90">
                    Typically replies in minutes
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <div className="rounded-2xl bg-gray-100 p-4">
                <p className="text-sm font-medium">
                  👋 Hi there!
                </p>

                <p className="mt-2 text-sm text-gray-600">
                  Welcome to eSmart Fetch.
                  <br />
                  How can we help you today?
                </p>
              </div>

              <a
                href={`https://wa.me/${phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] py-4 font-semibold text-white transition hover:bg-[#1ebe5d]"
              >
                <SiWhatsapp className="text-2xl" />
                Start WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
          },
        }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-lg"
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />

        <SiWhatsapp className="relative text-3xl text-white" />
      </motion.button>
    </div>
  );
}