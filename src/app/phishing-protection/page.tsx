import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import PhishingProtectionNav from '@/components/layout/phishing-protection-nav';
import PhishingProtectionAnalysis from '@/components/sections/phishing-protection-analysis';
import PhishingProtectionAutoRemediation from '@/components/sections/phishing-protection-auto-remediation';
import PhishingProtectionBenefits from '@/components/sections/phishing-protection-benefits';
import PhishingProtectionCta from '@/components/sections/phishing-protection-cta';
import PhishingProtectionHero from '@/components/sections/phishing-protection-hero';
import PhishingProtectionMspStories from '@/components/sections/phishing-protection-msp-stories';
import PhishingProtectionUrlRewriting from '@/components/sections/phishing-protection-url-rewriting';
import PhishingProtectionAdvancedM365Security from '@/components/sections/phishing-protection-advanced-m365-security';
import PhishingProtectionBec from '@/components/sections/phishing-protection-bec';
import PhishingProtectionDidYouKnow from '@/components/sections/phishing-protection-did-you-know';
import PhishingProtectionRelatedFeatures from '@/components/sections/phishing-protection-related-features';
import PhishingProtectionAdditionalFeatures from '@/components/sections/phishing-protection-additional-features';
import PhishingProtectionFaq from '@/components/sections/phishing-protection-faq';

export default function PhishingProtectionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <PhishingProtectionHero />
        <PhishingProtectionNav />
        <AnimatedSection>
            <PhishingProtectionBenefits />
        </AnimatedSection>
        <AnimatedSection>
            <PhishingProtectionMspStories />
        </AnimatedSection>
        <AnimatedSection>
            <PhishingProtectionAnalysis />
        </AnimatedSection>
        <AnimatedSection>
          <PhishingProtectionAutoRemediation />
        </AnimatedSection>
        <AnimatedSection>
          <PhishingProtectionCta />
        </AnimatedSection>
        <AnimatedSection>
          <PhishingProtectionUrlRewriting />
        </AnimatedSection>
        <AnimatedSection>
          <PhishingProtectionAdvancedM365Security />
        </AnimatedSection>
        <AnimatedSection>
          <PhishingProtectionBec />
        </AnimatedSection>
        <AnimatedSection>
            <PhishingProtectionDidYouKnow />
        </AnimatedSection>
        <AnimatedSection>
            <PhishingProtectionRelatedFeatures />
        </AnimatedSection>
        <AnimatedSection>
            <PhishingProtectionAdditionalFeatures />
        </AnimatedSection>
        <AnimatedSection>
            <PhishingProtectionFaq />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
