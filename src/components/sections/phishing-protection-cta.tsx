'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../animated-section';

export default function PhishingProtectionCta() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden bg-cyan-50/50">
        <div className="container max-w-screen-xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900">
                        Ready to get started?
                    </h2>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">Get Started</Button>
                        <Button size="lg" variant="link" className="text-gray-900">
                            Speak to an Expert <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card className="bg-cyan-400/80 border-cyan-400 text-gray-900">
                        <CardHeader>
                            <CardTitle>Great Value Bundles</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-800">
                                Check out the various bundles available for the best value.
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link href="#" className="font-semibold flex items-center group">
                                Bundle Pricing <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </CardFooter>
                    </Card>
                    <Card className="bg-cyan-400/80 border-cyan-400 text-gray-900">
                        <CardHeader>
                            <CardTitle>VisionProtection for MSPs</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-gray-800">
                                Discover key VisionProtection features tailored for MSPs!
                            </CardDescription>
                        </CardContent>
                        <CardFooter>
                            <Link href="#" className="font-semibold flex items-center group">
                                Book a Demo <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  );
}
