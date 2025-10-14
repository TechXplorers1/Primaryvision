import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function CareersHero() {
    const heroImage = placeholderImages.find(p => p.id === 'careers-hero-illustration');

    return (
        <AnimatedSection as="section" className="bg-secondary/20 py-20 sm:py-32">
            <div className="container max-w-screen-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedItem from="left">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Join Our Team &amp; Build The <span className="text-primary">Future</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground">
                            We are always looking for talented individuals to join our team. If you are passionate about technology and innovation, we would love to hear from you.
                        </p>
                    </AnimatedItem>
                    <AnimatedItem from="right" className="flex justify-center">
                        {heroImage && (
                            <Image
                                src={heroImage.imageUrl}
                                alt={heroImage.description}
                                width={500}
                                height={400}
                                className="object-contain"
                                data-ai-hint={heroImage.imageHint}
                            />
                        )}
                    </AnimatedItem>
                </div>
            </div>
        </AnimatedSection>
    );
}
