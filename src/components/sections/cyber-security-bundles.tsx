import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import { Button } from '../ui/button';

export default function CyberSecurityBundles() {
  const bundlesImage = placeholderImages.find(p => p.id === 'cyber-security-bundles');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Bundles Built for Today's Cybersecurity Challenges
            </h2>
            <p className="mt-6 text-muted-foreground">
                Our new tailored, scalable bundles are purpose-built for MSPs and businesses facing growing security demands. Designed to cut through complexity, reduce vendor overload, and support compliance, these solutions help you stay ahead of evolving cyber threats. Simplify your security - get started with the right bundle.
            </p>
            <div className="mt-8">
              <Button size="lg">
                Learn More
              </Button>
            </div>
          </AnimatedItem>
          <AnimatedItem from="right" className="flex justify-center">
            {bundlesImage && (
              <Image
                src={bundlesImage.imageUrl}
                alt={bundlesImage.description}
                width={500}
                height={400}
                className="rounded-lg object-contain"
                data-ai-hint={bundlesImage.imageHint}
              />
            )}
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
