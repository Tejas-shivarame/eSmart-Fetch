"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";
import { X } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const digits = COMPANY.phone.replace(/[^\d]/g, "");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, x: 80, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 22,
            }}
            className="mr-4 w-80 overflow-hidden rounded-3xl border border-white/20 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
          >
            {/* Header */}
            <div className="relative bg-[#25D366] px-6 py-5 text-white">
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 rounded-full p-1 transition hover:bg-white/20"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
                    <SiWhatsapp className="text-3xl text-[#25D366]" />
                  </div>

                  <span className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full border-2 border-[#25D366] bg-green-400" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold">eSmart Fetch</h3>
                  <p className="text-sm text-white/90">
                    Typically replies in minutes
                  </p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="space-y-5 p-6">
              <div className="rounded-2xl bg-gray-100 p-4">
                <p className="text-sm text-gray-700">👋 Hi there!</p>

                <p className="mt-2 text-sm text-gray-600">
                  Welcome to eSmart Fetch.
                  <br />
                  How can we help you today?
                </p>
              </div>

              <a
                href={`https://wa.me/${digits}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-5 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-300"
              >
                <SiWhatsapp className="text-2xl" />
                Start WhatsApp Chat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        animate={{ y: [0, -5, 0] }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
          },
          scale: {
            type: "spring",
            stiffness: 400,
          },
        }}
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_15px_35px_rgba(37,211,102,0.45)]"
      >
        <motion.span
          animate={{
            scale: [1, 1.7, 1],
            opacity: [0.35, 0, 0.35],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute inset-0 rounded-full bg-[#25D366]"
        />

        <SiWhatsapp className="relative text-3xl text-white" />
      </motion.button>
    </div>
  );
}