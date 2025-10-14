import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import { Button } from '../ui/button';

export default function CyberSecurityAdvancedProtection() {
  const protectionImage = placeholderImages.find(p => p.id === 'advanced-phishing-protection');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {protectionImage && (
              <Image
                src={protectionImage.imageUrl}
                alt={protectionImage.description}
                width={500}
                height={400}
                className="rounded-lg object-contain"
                data-ai-hint={protectionImage.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Advanced Phishing and BEC Protection
            </h2>
            <p className="mt-6 text-muted-foreground">
                VisionProtection is a next-generation phishing protection and remediation solution that integrates directly with Microsoft 365, catching and remediating sophisticated phishing attacks Microsoft misses. Post-delivery remediation (PDR) allows you to remove all phishing emails from your user's inbox, removing risk instantly. Our curated and unique email threat intelligence data is unmatched in visibility, coverage, and accuracy.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Learn More
              </Button>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
