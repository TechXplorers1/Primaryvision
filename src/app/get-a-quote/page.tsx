import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import GetAQuote from '@/components/sections/get-a-quote';

export default function GetAQuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
            <GetAQuote />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
