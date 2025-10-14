import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight, Lock, Mail } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import Link from 'next/link';

export default function PhishingProtectionAdvancedM365Security() {
  const m365Image = placeholderImages.find(p => p.id === 'advanced-m365-security-dashboard');

  return (
    <section className="py-20 sm:py-32 bg-secondary/20">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Advanced M365 Security</h2>
            <p className="mt-6 text-muted-foreground">
              Integrated with M365, it scans all emails (internal and external), augmenting EOP and MS Defender for unbeatable phishing protection.
            </p>
            <div className="mt-8 space-y-6">
                <div className="flex gap-4 items-start">
                    <div className="bg-background p-3 rounded-full mt-1 border">
                        <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Augments EOP and MS Defender</h3>
                        <p className="text-muted-foreground mt-1">Strengthen M365 security measures.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-background p-3 rounded-full mt-1 border">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Native and API-Based Integration</h3>
                        <p className="text-muted-foreground mt-1">Seamless communication and compatibility.</p>
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
          <AnimatedItem from="right" className="flex justify-center">
            {m365Image && (
              <Image
                src={m365Image.imageUrl}
                alt={m365Image.description}
                width={500}
                height={400}
                className="rounded-lg object-contain"
                data-ai-hint={m365Image.imageHint}
              />
            )}
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
