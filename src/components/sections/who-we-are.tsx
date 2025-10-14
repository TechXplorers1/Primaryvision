'use client';

import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function WhoWeAre() {
  const teamImage = placeholderImages.find(p => p.id === 'team-collaboration');
  
  return (
    <AnimatedSection as="section" id="who-we-are" className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who we are?</h2>
            <p className="mt-6 text-muted-foreground">
              Primary Vision is a one-stop solution for your Cloud Native initiatives. Whether you are a growth stage startup in Silicon Valley or an enterprise spanning across the globe, fast-tracking your journey to the Cloud is our holy grail.
            </p>
            <p className="mt-4 text-muted-foreground">
              Primary Vision's accomplished team with expertise in Cloud Native technologies has deployed production grade platforms for major banks, telcos across North America and APAC and acted as Cloud Native enablers for Oil & Gas, and Federal governments globally. Deeply invested in R&D, and with extensive team expertise, Primary Vision is committed to bring futuristic tech to our clients.
            </p>
            <p className="mt-4 text-muted-foreground">
              Be it containerization, or employing DevOps methodology or any other service ranging from increasing visibility with end-to-end monitoring, security to cloud compliance, manageability, service levels & cost optimization and support and training your team, Primary Vision is here to support optimal realization of your business vision.
            </p>
            <div className="mt-8">
                <Button asChild>
                    <Link href="/about">
                        Read More
                        <motion.div
                          animate={{ translateX: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        >
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </motion.div>
                    </Link>
                </Button>
            </div>
          </AnimatedItem>
          <AnimatedItem from="right" className="flex justify-center">
            {teamImage && (
              <Image
                src={teamImage.imageUrl}
                alt={teamImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover"
                data-ai-hint={teamImage.imageHint}
              />
            )}
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
