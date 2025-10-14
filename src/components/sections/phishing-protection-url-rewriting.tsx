import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight, Link as LinkIcon, Clock } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import Link from 'next/link';

export default function PhishingProtectionUrlRewriting() {
  const urlImage = placeholderImages.find(p => p.id === 'url-rewriting-dashboard');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {urlImage && (
              <Image
                src={urlImage.imageUrl}
                alt={urlImage.description}
                width={500}
                height={400}
                className="rounded-lg object-contain"
                data-ai-hint={urlImage.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">URL Rewriting</h2>
            <p className="mt-6 text-muted-foreground">
              VisionProtection rewrites URLs to ensure Link Lock protection. It inspects and rewrites all URLs to detect links to malicious sites, ensuring safety.
            </p>
            <div className="mt-8 space-y-6">
                <div className="flex gap-4 items-start">
                    <div className="bg-secondary p-3 rounded-md mt-1">
                        <LinkIcon className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Link Lock Service</h3>
                        <p className="text-muted-foreground mt-1">Link rewriting provides a defense against harmful URLs.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-secondary p-3 rounded-md mt-1">
                        <Clock className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Time of Click Protection</h3>
                        <p className="text-muted-foreground mt-1">Safeguard users by inspecting and evaluating URLs.</p>
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
