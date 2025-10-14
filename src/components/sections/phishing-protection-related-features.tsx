import Link from "next/link";
import { ArrowRight, Link as LinkIcon, Shield, Bot, Search, Eye, Cog, QrCode, UserCog, Grid3x3 } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "../animated-section";
import { Card, CardContent } from "../ui/card";

const features = [
    {
        icon: <UserCog className="h-6 w-6 text-muted-foreground" />,
        label: "Advanced Phishing Protection",
        href: "#"
    },
    {
        icon: <LinkIcon className="h-6 w-6 text-muted-foreground" />,
        label: "Multiple Layers of AI Driven Analysis",
        href: "#"
    },
    {
        icon: <Shield className="h-6 w-6 text-muted-foreground" />,
        label: "Zero Day Threat Protection",
        href: "#"
    },
    {
        icon: <Bot className="h-6 w-6 text-muted-foreground" />,
        label: "Auto Remediation",
        href: "#"
    },
    {
        icon: <Grid3x3 className="h-6 w-6 text-muted-foreground" />,
        label: "Real Time Visibility",
        href: "#"
    },
    {
        icon: <Search className="h-6 w-6 text-muted-foreground" />,
        label: "High Detection Accuracy",
        href: "#"
    },
    {
        icon: <QrCode className="h-6 w-6 text-muted-foreground" />,
        label: "QR Phishing",
        href: "#"
    },
    {
        icon: <Eye className="h-6 w-6 text-muted-foreground" />,
        label: "Spam, Malware, Extortion & Graymail Protection",
        href: "#"
    },
    {
        icon: <Cog className="h-6 w-6 text-muted-foreground" />,
        label: "Threat Coach",
        href: "#"
    }
];

export default function PhishingProtectionRelatedFeatures() {
    return (
        <section id="features" className="py-20 sm:py-32">
            <div className="container max-w-screen-xl">
                <AnimatedSection from="bottom" className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related <span className="text-cyan-500">Features</span></h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <AnimatedItem from="bottom" key={index} delay={index * 0.05}>
                            <Link href={feature.href}>
                                <Card className="hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            {feature.icon}
                                            <span className="font-medium">{feature.label}</span>
                                        </div>
                                        <ArrowRight className="h-5 w-5 text-muted-foreground" />
                                    </CardContent>
                                </Card>
                            </Link>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
        </section>
    )
}
