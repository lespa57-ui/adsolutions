import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

type Crumb = {
  name: string;
  path: string;
};

export default function ServicePageLayout({
  breadcrumbs,
  children,
}: {
  breadcrumbs: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <Header />
      <main className="bg-[#050A1A] min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
