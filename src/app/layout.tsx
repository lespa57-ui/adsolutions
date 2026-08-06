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
  metadataBase: new URL("https://www.adsolutions47.fr"),
  title: "Logiciel & Site Internet Sur Mesure - AD Solutions",
  description:
    "AD Solutions développe logiciels métier, applications web et sites internet sur mesure pour les entreprises du Lot-et-Garonne, d'Agen et de la Dordogne. Devis gratuit.",
  keywords: [
    "logiciel métier Lot-et-Garonne",
    "logiciel sur mesure Dordogne",
    "création logiciel sur mesure Lot-et-Garonne",
    "création site internet",
    "création site internet Agen",
    "agence web Agen",
    "création site vitrine",
    "création site e-commerce",
    "développement logiciel métier",
    "développement application métier",
    "automatisation entreprise",
    "développeur logiciel indépendant",
    "application web entreprise",
    "référencement naturel",
    "SEO",
    "ADSolutions",
    "AD Solutions",
    "Arnaud Darlay développeur",
    "logiciel personnalisé",
    "application desktop",
    "maintenance logiciel",
    "création site web Lot-et-Garonne",
    "développement application Dordogne",
    "Nouvelle-Aquitaine",
  ],
  authors: [{ name: "Arnaud Darlay – ADSolutions" }],
  creator: "ADSolutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Logiciel & Site Internet Sur Mesure - AD Solutions",
    description:
      "Logiciels métier, applications web et sites internet sur mesure pour automatiser vos tâches. Développeur indépendant à Agen, en Lot-et-Garonne et Dordogne.",
    type: "website",
    locale: "fr_FR",
    siteName: "ADSolutions",
    url: "https://www.adsolutions47.fr",
    images: [
      {
        url: "/LogoVF1-transparent.png",
        width: 1200,
        height: 630,
        alt: "ADSolutions – Logiciel métier sur mesure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logiciel & Site Internet Sur Mesure - AD Solutions",
    description:
      "Logiciels métier, applications web et sites internet sur mesure en Lot-et-Garonne, à Agen et en Dordogne.",
    images: ["/LogoVF1-transparent.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.adsolutions47.fr/#organization",
      name: "AD Solutions",
      url: "https://www.adsolutions47.fr",
      logo: "https://www.adsolutions47.fr/LogoVF1-transparent.png",
      email: "contact@adsolutions47.fr",
      founder: {
        "@type": "Person",
        name: "Arnaud Darlay",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.adsolutions47.fr/#localbusiness",
      name: "AD Solutions",
      image: "https://www.adsolutions47.fr/LogoVF1-transparent.png",
      url: "https://www.adsolutions47.fr",
      email: "contact@adsolutions47.fr",
      priceRange: "€€",
      areaServed: [
        { "@type": "AdministrativeArea", name: "Lot-et-Garonne" },
        { "@type": "AdministrativeArea", name: "Dordogne" },
        { "@type": "City", name: "Agen" },
      ],
      address: {
        "@type": "PostalAddress",
        addressRegion: "Nouvelle-Aquitaine",
        addressCountry: "FR",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.adsolutions47.fr/#website",
      name: "AD Solutions",
      url: "https://www.adsolutions47.fr",
      publisher: { "@id": "https://www.adsolutions47.fr/#organization" },
      inLanguage: "fr-FR",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
