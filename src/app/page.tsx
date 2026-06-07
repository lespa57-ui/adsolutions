import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import CredibilityBanner from "@/components/sections/CredibilityBanner";
import ProblemsSection from "@/components/sections/ProblemsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ExemplesSection from "@/components/sections/ExemplesSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AvantagesSection from "@/components/sections/AvantagesSection";
import BehindSection from "@/components/sections/BehindSection";
import MethodeSection from "@/components/sections/MethodeSection";
import RealisationsSection from "@/components/sections/RealisationsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CredibilityBanner />
      <ProblemsSection />
      <ServicesSection />
      <ExemplesSection />
      <SolutionsSection />
      <AvantagesSection />
      <BehindSection />
      <MethodeSection />
      <RealisationsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
