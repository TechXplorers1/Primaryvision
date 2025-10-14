import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import HealthCareHero from '@/components/sections/health-care-hero';
import HealthCareMain from '@/components/sections/health-care-main';

export default function HealthCarePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HealthCareHero />
        <AnimatedSection>
          <HealthCareMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
