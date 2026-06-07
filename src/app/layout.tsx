import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ADSolutions – Logiciel métier sur mesure Lot-et-Garonne & Dordogne",
  description:
    "ADSolutions développe des logiciels métier sur mesure, applications web, sites internet et outils d'automatisation pour les entreprises du Lot-et-Garonne et de la Dordogne. Développeur indépendant, devis gratuit.",
  keywords: [
    "logiciel métier Lot-et-Garonne",
    "logiciel sur mesure Dordogne",
    "création logiciel sur mesure Lot-et-Garonne",
    "création site internet professionnel",
    "développement application métier",
    "création logiciel entreprise",
    "automatisation entreprise",
    "développeur logiciel indépendant",
    "application web entreprise",
    "ADSolutions",
    "Arnaud Darlay développeur",
    "logiciel personnalisé",
    "application desktop",
    "maintenance logiciel",
    "création site web Lot-et-Garonne",
    "développement application Dordogne",
  ],
  authors: [{ name: "Arnaud Darlay – ADSolutions" }],
  creator: "ADSolutions",
  openGraph: {
    title: "ADSolutions – Logiciel métier sur mesure Lot-et-Garonne & Dordogne",
    description:
      "Logiciels métier sur mesure, applications web et sites internet pour automatiser vos tâches et gagner du temps. Développeur indépendant, accompagnement local.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
