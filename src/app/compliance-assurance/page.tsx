import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ComplianceAssuranceMain from '@/components/sections/compliance-assurance-main';

export default function ComplianceAssurancePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AnimatedSection>
          <ComplianceAssuranceMain />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
