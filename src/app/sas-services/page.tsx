import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import SasServicesHero from '@/components/sections/sas-services-hero';
import SasServicesMain from '@/components/sections/sas-services-main';

export default function SasServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <SasServicesHero />
        <AnimatedSection>
          <SasServicesMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
