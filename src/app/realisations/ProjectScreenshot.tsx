"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type ProjectScreenshotProps = {
  src: string;
  alt: string;
};

export default function ProjectScreenshot({ src, alt }: ProjectScreenshotProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Agrandir la capture d'écran : ${alt}`}
        className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/8 mb-4 group cursor-pointer transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.35)] hover:border-violet-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center rounded-lg transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 animate-[fadeIn_0.2s_ease-out]"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer l'aperçu"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white cursor-pointer transition-colors z-10"
          >
            <X size={20} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-violet-500/30 shadow-[0_0_60px_rgba(124,58,237,0.25)] animate-[scaleIn_0.25s_ease-out]"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain bg-[#050A1A]"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
}
