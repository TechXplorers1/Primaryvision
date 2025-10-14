import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import UxUiDesignHero from '@/components/sections/ux-ui-design-hero';
import UxUiDesignMain from '@/components/sections/ux-ui-design-main';

export default function UxUiDesignPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <UxUiDesignHero />
        <AnimatedSection>
          <UxUiDesignMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
