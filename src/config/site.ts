export type NavItem = {
  label: string;
  href: string;
  visible: boolean;
  children?: NavItem[];
};

export type FooterColumn = {
  title: string;
  links: NavItem[];
};

export type SitemapEntry = {
  url: string;
  lastModified: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

const BASE_URL = "https://www.adsolutions47.fr";

export const siteConfig = {
  name: "ADSolutions",
  url: BASE_URL,
  email: "contact@adsolutions47.fr",
};

export const navConfig: NavItem[] = [
  { label: "Accueil", href: "/", visible: true },
  {
    label: "Solutions",
    href: "/logiciels-sur-mesure",
    visible: true,
    children: [
      { label: "Logiciels sur mesure", href: "/logiciels-sur-mesure", visible: true },
      { label: "CRM sur mesure", href: "/crm-sur-mesure", visible: false },
      { label: "ERP sur mesure", href: "/erp-sur-mesure", visible: false },
      { label: "Logiciel de gestion", href: "/logiciel-de-gestion", visible: false },
      { label: "Logiciel de production", href: "/logiciel-de-production", visible: false },
      { label: "GMAO sur mesure", href: "/gmao-sur-mesure", visible: true },
    ],
  },
  {
    label: "Applications web",
    href: "/applications-web",
    visible: true,
    children: [
      { label: "Applications web", href: "/applications-web", visible: true },
      { label: "Portail client", href: "/portail-client", visible: false },
      { label: "Extranet", href: "/extranet", visible: false },
      { label: "Intranet", href: "/intranet", visible: false },
    ],
  },
  {
    label: "Sites internet",
    href: "/sites-internet",
    visible: true,
    children: [
      { label: "Sites internet", href: "/sites-internet", visible: true },
      { label: "Site vitrine", href: "/site-vitrine", visible: false },
      { label: "Site e-commerce", href: "/site-e-commerce", visible: false },
      { label: "Refonte de site", href: "/refonte-de-site", visible: false },
    ],
  },
  { label: "Réalisations", href: "/realisations", visible: true },
  { label: "Contact", href: "/contact", visible: true },
];

export const footerConfig: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Logiciels sur mesure", href: "/logiciels-sur-mesure", visible: true },
      { label: "Applications web", href: "/applications-web", visible: true },
      { label: "Sites internet", href: "/sites-internet", visible: true },
      { label: "Maintenance", href: "/maintenance", visible: false },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "CRM sur mesure", href: "/crm-sur-mesure", visible: false },
      { label: "ERP sur mesure", href: "/erp-sur-mesure", visible: false },
      { label: "Portail client", href: "/portail-client", visible: false },
      { label: "Site e-commerce", href: "/site-e-commerce", visible: false },
      { label: "GMAO sur mesure", href: "/gmao-sur-mesure", visible: true },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Réalisations", href: "/realisations", visible: true },
      { label: "FAQ", href: "/#faq", visible: true },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "Accueil", href: "/", visible: true },
      { label: "Contact", href: "/contact", visible: true },
      { label: "Mentions légales", href: "/mentions-legales", visible: true },
    ],
  },
];

export const sitemapEntries: SitemapEntry[] = [
  { url: `${BASE_URL}`, lastModified: "2026-08-06", changeFrequency: "weekly", priority: 1 },
  { url: `${BASE_URL}/logiciels-sur-mesure`, lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/applications-web`, lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/sites-internet`, lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/realisations`, lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/contact`, lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/mentions-legales`, lastModified: "2026-08-06", changeFrequency: "yearly", priority: 0.3 },
  { url: `${BASE_URL}/gmao-sur-mesure`, lastModified: "2026-08-06", changeFrequency: "monthly", priority: 0.9 },
];
