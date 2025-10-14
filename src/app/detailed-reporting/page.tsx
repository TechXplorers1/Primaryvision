import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import DetailedReportingMain from '@/components/sections/detailed-reporting-main';

export default function DetailedReportingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <DetailedReportingMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
