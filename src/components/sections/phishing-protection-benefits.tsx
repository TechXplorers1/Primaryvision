import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnimatedSection, { AnimatedItem } from "../animated-section";

const benefits = [
    {
        title: "Quick Deployment",
        description: "Protection up and running in 10 minutes and is managed from a single interface."
    },
    {
        title: "Native M365 Integration",
        description: "VisionProtection is inline within M365 and scans all emails, internal and external."
    },
    {
        title: "Banner Notifications",
        description: "Banners at the top of unsafe emails to alert users to to malicious content."
    },
    {
        title: "Insightful Reporting",
        description: "Threat data and analytics help customers to assess their risk profile."
    },
    {
        title: "Industry Leading Support Team",
        description: "Committed to your success from day one, with our dedicated support teams."
    },
    {
        title: "High Detection Accuracy",
        description: "Best-in-class phishing protection for M365 with additional layer of security."
    }
];

export default function PhishingProtectionBenefits() {
    return (
        <section id="benefits" className="py-20 sm:py-32 bg-secondary/20">
            <div className="container max-w-screen-xl">
                <AnimatedSection from="bottom" className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Benefits of VisionProtection Phishing Protection</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <AnimatedItem from="bottom" key={benefit.title} delay={index * 0.05}>
                            <Card className="h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle>{benefit.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground">{benefit.description}</p>
                                </CardContent>
                                <CardFooter>
                                    <Link href="#" className="flex items-center text-primary font-medium group">
                                        Learn More
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
        </section>
    )
}
