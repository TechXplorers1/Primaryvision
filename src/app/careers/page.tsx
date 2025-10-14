import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import CareersHero from '@/components/sections/careers-hero';
import CareersInfo from '@/components/sections/careers-info';
import JobOpenings from '@/components/sections/job-openings';

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <CareersHero />
        <AnimatedSection from="bottom">
            <CareersInfo />
        </AnimatedSection>
        <AnimatedSection from="bottom">
            <JobOpenings />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
