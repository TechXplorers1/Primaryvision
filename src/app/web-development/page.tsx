import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import WebDevelopmentHero from '@/components/sections/web-development-hero';
import WebDevelopmentMain from '@/components/sections/web-development-main';

export default function WebDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <WebDevelopmentHero />
        <AnimatedSection>
          <WebDevelopmentMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
