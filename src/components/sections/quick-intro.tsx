'use client';

import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import { motion } from 'framer-motion';

const introItems = [
    {
        id: 'about-us-intro',
        title: "About Us",
        description: "We believe a great company has a positive impact in the world, and on the people who build it."
    },
    {
        id: 'vision-mission-intro',
        title: "Vision & Mission",
        description: "We continually thrive on new ideas and better implementation strategies to help our clients innovate and transform their businesses."
    },
    {
        id: 'our-products-intro',
        title: "Our products",
        description: "Klusternetes most advanced platform for kubernetes self-service and multi-tenancy, cost optimization on auto-pilot, enterprise-grade access control and secure kubernetes multi-tenancy."
    }
]

export default function QuickIntro() {
  return (
    <section id="quick-intro" className="py-20 sm:py-32 bg-secondary/50">
      <div className="container max-w-screen-xl">
        <AnimatedSection from="bottom" className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Quick intro</h2>
        </AnimatedSection>
        <AnimatedSection as="div" from="bottom" className="grid grid-cols-1 md:grid-cols-3 gap-12" staggerChildren={0.1}>
            {introItems.map((item) => {
                const image = placeholderImages.find(p => p.id === item.id);
                return (
                    <AnimatedItem from="bottom" key={item.id}>
                        <Card className="bg-transparent border-none shadow-none text-center h-full">
                            <CardHeader className="flex flex-col items-center">
                                {image && (
                                    <div className="mb-6 h-32 w-32 flex items-center justify-center">
                                        <Image
                                            src={image.imageUrl}
                                            alt={item.title}
                                            width={128}
                                            height={128}
                                            className="object-contain"
                                            data-ai-hint={image.imageHint}
                                        />
                                    </div>
                                )}
                                <CardTitle>{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.description}</p>
                            </CardContent>
                        </Card>
                    </AnimatedItem>
                )
            })}
        </AnimatedSection>
      </div>
    </section>
  );
}
