'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight, PlayCircle } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import { VisionProtectionLogo } from '../logo-vision-protection';
import Link from 'next/link';

export default function PhishingProtectionHero() {
  const heroImage = placeholderImages.find(p => p.id === 'phishing-protection-video');
  
  return (
    <AnimatedSection as="section" className="relative w-full text-left bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
        <div className="container max-w-screen-xl grid lg:grid-cols-2 gap-8 items-center py-20 lg:py-32">
            <div className="relative z-10 flex flex-col items-start">
                <AnimatedItem>
                    <VisionProtectionLogo className="h-10 w-auto mb-4" />
                </AnimatedItem>
                <AnimatedItem from="bottom" delay={0.1}>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        VisionProtection Powerful Phishing Protection for M365
                    </h1>
                </AnimatedItem>
                <AnimatedItem from="bottom" delay={0.2}>
                  <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                    Discover the powerful potential of our new phishing protection and remediation solution for Microsoft 365.
                  </p>
                </AnimatedItem>
                <AnimatedItem from="bottom" delay={0.3}>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-black">
                        Request a Demo
                    </Button>
                    <Button size="lg" variant="link">
                        Speak to an Expert <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </AnimatedItem>
            </div>
            <AnimatedItem from="right" className="relative h-64 lg:h-auto lg:self-stretch">
                {heroImage && (
                    <div className="relative w-full h-full">
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            className="object-cover rounded-xl"
                            priority
                            data-ai-hint={heroImage.imageHint}
                        />
                        <div className="absolute inset-0 bg-black/30 rounded-xl flex flex-col items-center justify-center text-white p-4">
                            <VisionProtectionLogo className="h-8 w-auto" />
                            <PlayCircle className="h-16 w-16 mt-4 opacity-80 cursor-pointer hover:opacity-100 transition-opacity"/>
                            <div className="mt-4 text-center">
                                <h3 className="text-xl font-bold">Advanced Phishing Protection</h3>
                            </div>
                        </div>
                    </div>
                )}
            </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
