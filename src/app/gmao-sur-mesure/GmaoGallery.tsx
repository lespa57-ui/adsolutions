"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/GMAO Dashbord.png",
    alt: "Tableau de bord de la GMAO sur mesure",
    title: "Tableau de bord",
    description:
      "Vue d'ensemble de la maintenance avec indicateurs clés, demandes en attente, statistiques et suivi des coûts.",
  },
  {
    src: "/GMAO Demandes.png",
    alt: "Gestion des demandes d'intervention dans la GMAO",
    title: "Demandes d'intervention",
    description:
      "Gestion centralisée des demandes d'intervention avec niveaux d'urgence, statuts et historique.",
  },
  {
    src: "/GMAO Calendrier.png",
    alt: "Planning de maintenance de la GMAO sur mesure",
    title: "Planning de maintenance",
    description:
      "Calendrier interactif permettant de planifier les interventions préventives et correctives.",
  },
  {
    src: "/GMAO interventions.png",
    alt: "Suivi des interventions dans la GMAO sur mesure",
    title: "Interventions",
    description:
      "Suivi détaillé des interventions réalisées avec temps passés, techniciens et coûts associés.",
  },
  {
    src: "/GMAO Machines.png",
    alt: "Gestion du parc machines dans la GMAO sur mesure",
    title: "Parc machines",
    description:
      "Inventaire complet des équipements avec leur état, leur historique et les interventions en cours.",
  },
  {
    src: "/GMAO Stocks.png",
    alt: "Gestion du stock de pièces détachées dans la GMAO sur mesure",
    title: "Gestion du stock",
    description:
      "Gestion des pièces détachées, niveaux de stock, fournisseurs et alertes de réapprovisionnement.",
  },
];

export default function GmaoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length
    );
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryItems.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, goPrev, goNext]);

  return (
    <>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Découvrez la GMAO{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                en images
              </span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Quelques aperçus de l'application développée sur mesure. Chaque interface est adaptée aux
              besoins de l'entreprise afin de simplifier la gestion de la maintenance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <motion.button
                key={item.src}
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group glass rounded-2xl border border-white/8 hover:border-violet-500/30 transition-all duration-300 overflow-hidden text-left"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full glass border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all z-[102]"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all z-[102]"
              aria-label="Image précédente"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/30 transition-all z-[102]"
              aria-label="Image suivante"
            >
              <ChevronRight size={24} />
            </button>

            <div
              className="relative z-[101] flex h-full w-full flex-col items-center justify-center px-4 py-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-[min(92vw,1500px)] h-[min(78vh,900px)]">
                <Image
                  src={galleryItems[lightboxIndex].src}
                  alt={galleryItems[lightboxIndex].title}
                  fill
                  priority
                  sizes="92vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-white font-semibold text-lg mb-1">
                  {galleryItems[lightboxIndex].title}
                </h3>
                <p className="text-white/50 text-sm max-w-xl mx-auto">
                  {galleryItems[lightboxIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
