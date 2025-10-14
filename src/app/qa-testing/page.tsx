import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import QaTestingHero from '@/components/sections/qa-testing-hero';
import QaTestingMain from '@/components/sections/qa-testing-main';

export default function QaTestingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <QaTestingHero />
        <AnimatedSection>
          <QaTestingMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
