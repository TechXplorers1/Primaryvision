import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import MediaAdvertisingHero from '@/components/sections/media-advertising-hero';
import MediaAdvertisingMain from '@/components/sections/media-advertising-main';

export default function MediaAdvertisingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <MediaAdvertisingHero />
        <AnimatedSection>
          <MediaAdvertisingMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
