'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';
import { ArrowRight, Mic, PlayCircle, Users } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import Link from 'next/link';

export default function PhishingProtectionMspStories() {
    const mspImage = placeholderImages.find(p => p.id === 'msp-success-story');

    return (
        <section className="py-20 sm:py-32">
            <div className="container max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <AnimatedItem from="left">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">MSP Success Stories</h2>
                        <p className="mt-6 text-muted-foreground">
                            Check out the latest testimonial videos from our MSP Partners.
                        </p>
                        <div className="mt-8 space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="bg-secondary p-3 rounded-md mt-1">
                                    <Mic className="h-6 w-6 text-secondary-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Hear From Our MSPs</h3>
                                    <p className="text-muted-foreground mt-1">Discover what OnSite has to say about Phishing Protection as part of their Primary Vision solution suite.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="bg-secondary p-3 rounded-md mt-1">
                                    <Users className="h-6 w-6 text-secondary-foreground" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Customer Testimonials</h3>
                                    <p className="text-muted-foreground mt-1">Watch all of our video testimonials from MSP partners and see how Primary Vision has been instrumental in their success!</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <Button size="lg" className="bg-cyan-400 hover:bg-cyan-500 text-black">
                                Explore Success Stories
                            </Button>
                            <Button size="lg" variant="link">
                                Primary Vision Plans <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </AnimatedItem>
                    <AnimatedItem from="right" className="flex justify-center">
                        {mspImage && (
                            <div className="relative w-full max-w-lg aspect-video">
                                <Image
                                    src={mspImage.imageUrl}
                                    alt={mspImage.description}
                                    fill
                                    className="object-cover rounded-xl"
                                    data-ai-hint={mspImage.imageHint}
                                />
                                 <div className="absolute inset-0 bg-black/30 rounded-xl flex flex-col items-center justify-center text-white p-4">
                                    <PlayCircle className="h-16 w-16 opacity-80 cursor-pointer hover:opacity-100 transition-opacity"/>
                                    <div className="absolute bottom-4 left-4 text-left">
                                        <h3 className="text-xl font-bold">OnSite - IT Team</h3>
                                    </div>
                                </div>
                            </div>
                        )}
                    </AnimatedItem>
                </div>
            </div>
        </section>
    );
}
