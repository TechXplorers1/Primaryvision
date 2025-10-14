import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import FinanceBankingHero from '@/components/sections/finance-banking-hero';
import FinanceBankingMain from '@/components/sections/finance-banking-main';

export default function FinanceBankingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <FinanceBankingHero />
        <AnimatedSection>
          <FinanceBankingMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
