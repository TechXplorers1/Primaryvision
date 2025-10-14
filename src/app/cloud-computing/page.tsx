import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import CloudComputingHero from '@/components/sections/cloud-computing-hero';
import CloudComputingMain from '@/components/sections/cloud-computing-main';

export default function CloudComputingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <CloudComputingHero />
        <AnimatedSection>
          <CloudComputingMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
