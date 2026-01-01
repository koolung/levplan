import MobileNav from '@/components/MobileNav';
import LoadingAnimation from '@/components/LoadingAnimation';
import HeroSection from '@/components/HeroSection';
import ResearchSection from '@/components/ResearchSection';
import WhyLevplanSection from '@/components/WhyLevplanSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import RoadmapSection from '@/components/RoadmapSection';
import CalendlySection from '@/components/CalendlySection';
import FAQSection from '@/components/FAQSection';
import StartNowSection from '@/components/StartNowSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="w-full bg-white">
      <LoadingAnimation />
      <MobileNav />
      <HeroSection />
      <ResearchSection />
      {/* <WhyLevplanSection /> */}
      <TestimonialsSection />
      <PartnersSection />
      {/* <RoadmapSection /> */}
      <CalendlySection />
      {/* <FAQSection /> */}
      <StartNowSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
