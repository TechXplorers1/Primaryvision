import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import AutomotiveHero from '@/components/sections/automotive-hero';
import AutomotiveMain from '@/components/sections/automotive-main';

export default function AutomotivePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AutomotiveHero />
        <AnimatedSection>
          <AutomotiveMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
