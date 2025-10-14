import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import SourcingBenefits from '@/components/sections/sourcing-benefits';
import SourcingHero from '@/components/sections/sourcing-hero';
import SourcingMain from '@/components/sections/sourcing-main';

export default function OurSourcingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <SourcingHero />
        <AnimatedSection>
          <SourcingMain />
        </AnimatedSection>
        <AnimatedSection>
          <SourcingBenefits />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
