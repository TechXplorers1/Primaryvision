import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import DataAnalyticsHero from '@/components/sections/data-analytics-hero';
import DataAnalyticsMain from '@/components/sections/data-analytics-main';

export default function DataAnalyticsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <DataAnalyticsHero />
        <AnimatedSection>
          <DataAnalyticsMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
