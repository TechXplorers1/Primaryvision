import { Webhook, Shield, Mail, Archive } from "lucide-react";
import AnimatedSection from "../animated-section";

const stats = [
    {
        icon: <Webhook className="h-8 w-8 text-primary" />,
        value: "90%",
        label: "cyber attacks begin with phishing"
    },
    {
        icon: <Shield className="h-8 w-8 text-primary" />,
        value: "10 minutes",
        label: "to seamlessly install VisionProtection"
    },
    {
        icon: <Mail className="h-8 w-8 text-primary" />,
        value: "$10.5 trillion",
        label: "estimated global cybercrime cost"
    },
    {
        icon: <Archive className="h-8 w-8 text-primary" />,
        value: "295 days",
        label: "to stop & spot a phishing attack"
    }
];

export default function PhishingProtectionDidYouKnow() {
    return (
        <section className="py-20 sm:py-32 bg-cyan-50/50">
            <div className="container max-w-screen-xl">
                <AnimatedSection from="bottom" className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Did You <span className="text-cyan-500">Know?</span></h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 relative">
                            {index < stats.length -1 && <div className="absolute right-0 top-0 bottom-0 w-px bg-border hidden lg:block" />}
                            <div className="p-4 bg-background rounded-full border">
                                {stat.icon}
                            </div>
                            <p className="text-4xl font-bold text-primary">{stat.value}</p>
                            <p className="text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
