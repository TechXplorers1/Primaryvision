"use client";

import { Suspense } from "react";
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
          {/* ✅ Suspense fixes the useSearchParams build error */}
          <Suspense fallback={<div>Loading...</div>}>
            <GetAQuote />
          </Suspense>
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
