import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight, MailX, Users, UserCog } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import Link from 'next/link';

export default function PhishingProtectionAutoRemediation() {
  const remediationImage = placeholderImages.find(p => p.id === 'auto-remediation-dashboard');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Auto Remediation</h2>
            <p className="mt-6 text-muted-foreground">
              Post Delivery Remediation allows MSPs to swiftly eliminate threats from users' inboxes, promptly removing malicious mail that has already been delivered.
            </p>
            <div className="mt-8 space-y-6">
                <div className="flex gap-4 items-start">
                    <div className="bg-secondary p-3 rounded-md mt-1">
                        <MailX className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Instant Inbox Threat Removal</h3>
                        <p className="text-muted-foreground mt-1">Identify and remove emails containing malicious URLs.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-secondary p-3 rounded-md mt-1">
                        <Users className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Tenant-Wide Instant Remediation</h3>
                        <p className="text-muted-foreground mt-1">Robust cross-tenant features for detection and response.</p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="bg-secondary p-3 rounded-md mt-1">
                        <UserCog className="h-6 w-6 text-secondary-foreground" />
                    </div>
                    <div>
                        <h3 className="font-semibold">Manual Remediation</h3>
                        <p className="text-muted-foreground mt-1">Manual Remediation options also available.</p>
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
            {remediationImage && (
              <Image
                src={remediationImage.imageUrl}
                alt={remediationImage.description}
                width={500}
                height={400}
                className="rounded-lg object-contain"
                data-ai-hint={remediationImage.imageHint}
              />
            )}
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
