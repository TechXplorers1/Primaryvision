"use client";

import { Suspense } from "react";
import AnimatedSection from '@/components/animated-section';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import ManufacturingHero from '@/components/sections/manufacturing-hero';
import ManufacturingMain from '@/components/sections/manufacturing-main';

export default function ManufacturingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <ManufacturingHero />
        <AnimatedSection>
          {/* ✅ Wrap Suspense to handle useSearchParams safely */}
          <Suspense fallback={<div>Loading...</div>}>
            <ManufacturingMain />
          </Suspense>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}

