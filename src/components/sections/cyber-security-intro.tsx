'use client';

import { CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "../animated-section";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
    "Leading Cybersecurity Platform",
    "Microsoft 365 Protection",
    "AI Driven Email Security"
];

export default function CyberSecurityIntro() {
    return (
        <AnimatedSection as="section" className="py-20 sm:py-32">
            <div className="container max-w-screen-xl text-center">
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Cybersecurity <br />
                    <span className="text-primary">solutions to protect</span><br />
                    your business
                </h2>

                <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4">
                    {features.map(feature => (
                        <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <span className="font-medium">{feature}</span>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Button size="lg">
                        Get a Quote
                        <motion.div
                            animate={{ translateX: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                        >
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </motion.div>
                    </Button>
                </div>
            </div>
        </AnimatedSection>
    )
}
