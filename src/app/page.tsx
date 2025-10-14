import AnimatedSection, { AnimatedItem } from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import Cta from '@/components/sections/cta';
import Hero from '@/components/sections/hero';
import Insights from '@/components/sections/insights';
import QuickIntro from '@/components/sections/quick-intro';
import Services from '@/components/sections/services';
import WhoWeAre from '@/components/sections/who-we-are';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedSection from="bottom">
          <Services />
        </AnimatedSection>
        <WhoWeAre />
        <AnimatedSection from="bottom">
          <QuickIntro />
        </AnimatedSection>
        <AnimatedSection from="bottom">
          <Insights />
        </AnimatedSection>
        <AnimatedSection from="bottom">
          <Cta />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
