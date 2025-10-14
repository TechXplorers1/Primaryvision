'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const heroImage = placeholderImages.find(p => p.id === 'cloud-native-journey');

  const title = "Accelerate your Cloud native Journey";
  const titleWords = title.split(' ');

  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const titleWord = {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
        },
      },
  };


  return (
    <AnimatedSection as="section" className="relative bg-primary w-full text-left overflow-hidden">
        <div className="container max-w-screen-xl grid lg:grid-cols-2 gap-8 items-center py-20 lg:py-32">
            <div className="relative z-10 flex flex-col items-start">
                <motion.h1 
                  className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl"
                  variants={titleContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {titleWords.map((word, index) => (
                    <motion.span key={index} variants={titleWord} className="inline-block mr-2.5">
                      {word}
                    </motion.span>
                  ))}
                </motion.h1>
                <AnimatedItem from="bottom" delay={0.2}>
                  <p className="mt-6 max-w-2xl text-lg text-primary-foreground/80">
                  Over years of solid experience, Primary Vision is one of the trusted technology development partners to design, deliver and support business vision from beginning to the end.
                  </p>
                </AnimatedItem>
                <AnimatedItem from="bottom" delay={0.3}>
                  <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Button size="lg" variant="secondary" className="shadow-lg" asChild>
                      <Link href="#services">
                        Know More
                        <motion.div
                          animate={{ translateX: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        >
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </motion.div>
                      </Link>
                  </Button>
                  </div>
                </AnimatedItem>
            </div>
            <AnimatedItem from="right" className="relative h-64 lg:h-auto lg:self-stretch">
                {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-contain"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
                )}
            </AnimatedItem>
      </div>
    </AnimatedSection>
  );
}
