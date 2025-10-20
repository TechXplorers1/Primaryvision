"use client";

import { Suspense } from "react";
import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import AiThreatPrioritization from '@/components/sections/ai-threat-prioritization';
import CyberSecurityAdvancedProtection from '@/components/sections/cyber-security-advanced-protection';
import CyberSecurityBundles from '@/components/sections/cyber-security-bundles';
import CyberSecurityHero from '@/components/sections/cyber-security-hero';
import CyberSecurityIntro from '@/components/sections/cyber-security-intro';
import CyberSecuritySolutions from '@/components/sections/cyber-security-solutions';

export default function CyberSecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <CyberSecurityHero />
        <CyberSecurityIntro />

        <AnimatedSection>
          <Suspense fallback={<div>Loading...</div>}>
            <CyberSecuritySolutions />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection>
          <Suspense fallback={<div>Loading...</div>}>
            <CyberSecurityBundles />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection>
          <Suspense fallback={<div>Loading...</div>}>
            <CyberSecurityAdvancedProtection />
          </Suspense>
        </AnimatedSection>

        <AnimatedSection>
          <Suspense fallback={<div>Loading...</div>}>
            <AiThreatPrioritization />
          </Suspense>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
