import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import MedicalCodingHero from '@/components/sections/medical-coding-hero';
import MedicalCodingMain from '@/components/sections/medical-coding-main';

export default function MedicalCodingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <MedicalCodingHero />
        <AnimatedSection>
          <MedicalCodingMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
