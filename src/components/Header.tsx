"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navConfig, type NavItem } from "@/config/site";

const visibleNav = navConfig.filter((item) => item.visible);

function getVisibleChildren(item: NavItem): NavItem[] {
  if (!item.children) return [];
  return item.children.filter((child) => child.visible);
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-[#050A1A] border-b ${
          scrolled || mobileOpen
            ? "border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.6)]"
            : "border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-28">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Retour à l'accueil">
              <Image
                src="/LogoVF1-transparent.png"
                alt="ADSolutions"
                width={260}
                height={65}
                sizes="(max-width: 768px) 160px, 260px"
                className="object-contain w-[140px] h-[44px] md:w-[260px] md:h-[65px]"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {visibleNav.map((link) => {
                const children = getVisibleChildren(link);
                if (children.length > 1) {
                  return (
                    <div key={link.href} className="relative group">
                      <Link
                        href={link.href}
                        className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5 flex items-center gap-1 ${
                          pathname === link.href || pathname.startsWith(link.href + "/")
                            ? "text-white"
                            : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.label}
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-50">
                          <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                      <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="rounded-xl bg-[#0a1129] border border-white/10 shadow-2xl py-2 min-w-[200px]">
                          {children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                                pathname === child.href
                                  ? "text-white bg-white/8"
                                  : "text-white/70 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-white/5 ${
                      pathname === link.href
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex">
              <a
                href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20-%20ADSolutions"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 transition-all duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">Demander un devis</span>
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden relative z-[101] p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90] bg-[#050A1A]/95 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="fixed top-20 left-0 right-0 z-[95] md:hidden"
            >
              <div className="mx-4 rounded-2xl bg-gradient-to-b from-[#0a1129] to-[#050A1A] border border-white/10 shadow-2xl overflow-hidden">
                {/* Navigation Links */}
                <nav className="flex flex-col p-2">
                  {visibleNav.map((link, index) => {
                    const children = getVisibleChildren(link);
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={link.href}
                          onClick={handleNavClick}
                          className={`block w-full px-4 py-4 text-base font-medium rounded-xl transition-all duration-200 ${
                            pathname === link.href
                              ? "text-white bg-white/8"
                              : "text-white/80 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.label}
                        </Link>
                        {children.length > 1 && (
                          <div className="flex flex-col ml-4 border-l border-white/8 pl-2">
                            {children.filter((c) => c.href !== link.href).map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={handleNavClick}
                                className={`block w-full px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
                                  pathname === child.href
                                    ? "text-white bg-white/8"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Divider */}
                <div className="mx-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* CTA Button */}
                <div className="p-4">
                  <a
                    href="mailto:contact@adsolutions47.fr?subject=Demande%20de%20devis%20-%20ADSolutions"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 text-base font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-pink-600 hover:from-blue-500 hover:via-violet-500 hover:to-pink-500 shadow-lg shadow-violet-500/25 transition-all duration-300"
                  >
                    <span>Demander un devis</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>

                {/* Contact Info */}
                <div className="px-4 pb-4 pt-2">
                  <p className="text-center text-xs text-white/40">
                    contact@adsolutions47.fr
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
