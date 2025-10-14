import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

export default function AiThreatPrioritization() {
  const threatImage = placeholderImages.find(p => p.id === 'ai-threat-prioritization-dashboard');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Threat Intelligence
            </h2>
            <p className="mt-6 text-muted-foreground">
                Phishing protection using AI and a large language model (LLM) with proprietary threat intelligence currently not found in any other anti-phishing solution on the market from the leading cloud-based email security solutions provider for over 20 years. Unbeatable anti-phishing accuracy for zero-day attacks, with minimal false positive results.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Learn More
              </Button>
            </div>
          </AnimatedItem>
          <AnimatedItem from="right" className="flex justify-center">
            {threatImage && (
              <Image
                src={threatImage.imageUrl}
                alt={threatImage.description}
                width={500}
                height={400}
                className="rounded-lg object-contain"
                data-ai-hint={threatImage.imageHint}
              />
            )}
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
