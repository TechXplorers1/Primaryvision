import Link from "next/link";
import { Eye, Users, MessageSquare, KeyRound, Grid3x3, AppWindow } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "../animated-section";
import { Card, CardContent } from "../ui/card";

const features = [
    {
        icon: <Eye className="h-6 w-6 text-muted-foreground" />,
        label: "Live Incident View",
        href: "#"
    },
    {
        icon: <Users className="h-6 w-6 text-muted-foreground" />,
        label: "User Reporting Tool (Outlook Add In)",
        href: "#"
    },
    {
        icon: <MessageSquare className="h-6 w-6 text-muted-foreground" />,
        label: "Teams Incident Notifications",
        href: "#"
    },
    {
        icon: <KeyRound className="h-6 w-6 text-muted-foreground" />,
        label: "Single Sign On (SSO)",
        href: "#"
    },
    {
        icon: <Grid3x3 className="h-6 w-6 text-muted-foreground" />,
        label: "M365 Licensing & Billing",
        href: "#"
    },
    {
        icon: <AppWindow className="h-6 w-6 text-muted-foreground" />,
        label: "Microsoft Connection Status",
        href: "#"
    }
];

export default function PhishingProtectionAdditionalFeatures() {
    return (
        <section className="py-20 sm:py-32 bg-cyan-50/50">
            <div className="container max-w-screen-xl">
                <AnimatedSection from="bottom" className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Additional <span className="text-cyan-500">Features</span></h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <AnimatedItem from="bottom" key={index} delay={index * 0.05}>
                            <Link href={feature.href}>
                                <Card className="hover:shadow-lg transition-shadow bg-background">
                                    <CardContent className="p-8 flex items-center gap-4">
                                        {feature.icon}
                                        <span className="font-medium flex-1">{feature.label}</span>
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
