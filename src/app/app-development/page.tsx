import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import AppDevelopmentHero from '@/components/sections/app-development-hero';
import AppDevelopmentMain from '@/components/sections/app-development-main';

export default function AppDevelopmentPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AppDevelopmentHero />
        <AnimatedSection>
          <AppDevelopmentMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
