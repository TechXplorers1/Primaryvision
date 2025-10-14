import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import { ShieldCheck } from '../icons/shield-check';
import { MailCheck } from '../icons/mail-check';
import Link from 'next/link';

export default function PhishingProtectionAnalysis() {
  const analysisImage = placeholderImages.find(p => p.id === 'phishing-analysis-dashboard');

  return (
    <section id="solutions" className="py-20 sm:py-32 bg-secondary/20">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {analysisImage && (
              <Image
                src={analysisImage.imageUrl}
                alt={analysisImage.description}
                width={500}
                height={400}
                className="rounded-lg object-contain"
                data-ai-hint={analysisImage.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI &amp; LLM Driven Analysis</h2>
            <p className="mt-6 text-muted-foreground">
              VisionProtection employs layers of analysis and machine learning (ML) models to detect phishing emails. Curated feeds identify malicious URLs.
            </p>
            <div className="mt-8 space-y-6">
                <div className="flex gap-4 items-start">
                    <div className="bg-background p-3 rounded-full mt-1 border">
                        <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Next-Gen Phishing Protection</h3>
                        <p className="text-muted-foreground mt-1">Cutting-edge defense against phishing threats.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-background p-3 rounded-full mt-1 border">
                        <MailCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">High Detection Accuracy</h3>
                        <p className="text-muted-foreground mt-1">Catches threats Microsoft misses.</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-black">
                    Get Started
                </Button>
                <Button size="lg" variant="link" asChild>
                    <Link href="#">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
