import MobileNav from '@/components/MobileNav';
import HeroSection from '@/components/HeroSection';
import WhyLevplanSection from '@/components/WhyLevplanSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PartnersSection from '@/components/PartnersSection';
import RoadmapSection from '@/components/RoadmapSection';
import FAQSection from '@/components/FAQSection';
import StartNowSection from '@/components/StartNowSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full bg-white">
      <MobileNav />
      <HeroSection />
      <WhyLevplanSection />
      <PartnersSection />
      <TestimonialsSection />
      <RoadmapSection />
      <FAQSection />
      <StartNowSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
