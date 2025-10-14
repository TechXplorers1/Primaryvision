import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PenetrationTestingMain from '@/components/sections/penetration-testing-main';

export default function PenetrationTestingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <PenetrationTestingMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
