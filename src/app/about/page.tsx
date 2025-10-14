import AnimatedSection from '@/components/animated-section';
import AboutHero from '@/components/sections/about-hero';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import TechnologyGoal from '@/components/sections/technology-goal';
import VisionMission from '@/components/sections/vision-mission';
import OurSolutions from '@/components/sections/our-solutions';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AnimatedSection from="bottom">
          <TechnologyGoal />
        </AnimatedSection>
        <VisionMission />
        <AnimatedSection from="bottom">
          <OurSolutions />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
