import { Shield, Mail, Dna, Archive, UserCheck, Lock, ArrowRight, Rss } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import AnimatedSection, { AnimatedItem } from "../animated-section";
import Link from "next/link";
import { cn } from "@/lib/utils";

const solutions = [
    { 
        icon: <Lock className="h-8 w-8" />, 
        title: "Phishing and Malware Prevention", 
        description: "VisionProtection provides next-generation phishing protection & remediation. Our proprietary machine-learning algorithm integrates with Microsoft 365, catching and remediating sophisticated phishing.", 
        link: "Phishing Protection",
        href: "/phishing-protection",
        dark: false
    },
    { 
        icon: <Shield className="h-8 w-8" />, 
        title: "Email Phishing Protection", 
        description: "VisionProtection integrates with Microsoft Outlook via API and scans emails for the most dangerous malicious threats. Multiple layers of analysis and detection methods, offer unbeatable anti-phishing accuracy.", 
        link: "Phishing Protection",
        href: "/phishing-protection",
        dark: true
    },
    { 
        icon: <Shield className="h-8 w-8" />, 
        title: "Primary Vision Solutions Bundles",
        description: "Primary Vision provides flexible bundle solutions and plans designed to enhance your security posture through a consolidated, layered approach—ensuring comprehensive protection for your customers.",
        link: "Bundles",
        href: "#",
        dark: false
    },
    { 
        icon: <Mail className="h-8 w-8" />, 
        title: "Email Anti Spam Solution", 
        description: "SpamTitan advanced spam protection protects your business by blocking spam, viruses, malware, ransomware and links to malicious websites from your emails. Microsoft 365 friendly.",
        link: "Email Anti-Spam",
        href: "#",
        dark: true
    },
    { 
        icon: <Dna className="h-8 w-8" />, 
        title: "DNS Threat Protection and Content Filtering",
        description: "WebTitan provides AI driven threat protection and advanced web content controls. DNS Filtering is one of the best ways to protect your users against online threats such as phishing and malware.",
        link: "DNS Filtering",
        href: "#",
        dark: false
    },
    { 
        icon: <Rss className="h-8 w-8" />, 
        title: "Email Archiving for M365",
        description: "ArcTitan email archiving is Office 365 integrated and automated with lightening fast email search, easy to set-up and cost friendly deployments. Email encryption ensures protection against data loss.",
        link: "Email Archiving",
        href: "#",
        dark: true
    },
];

export default function CyberSecuritySolutions() {
    return (
        <section className="py-20 sm:py-32">
            <div className="container max-w-screen-xl">
                <AnimatedSection from="bottom" className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Leading Cybersecurity Solutions</h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <AnimatedItem from="bottom" delay={index * 0.05} key={solution.title}>
                            <Card className={cn(
                                "h-full flex flex-col", 
                                solution.dark ? "bg-card text-card-foreground" : "bg-secondary/20 text-secondary-foreground"
                            )}>
                                <CardHeader>
                                    <div className={cn(
                                        "h-12 w-12 rounded-md flex items-center justify-center mb-4",
                                        solution.dark ? "bg-primary/10 text-primary" : "bg-primary text-primary-foreground"
                                    )}>
                                        {solution.icon}
                                    </div>
                                    <CardTitle>{solution.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className={solution.dark ? 'text-muted-foreground' : 'text-foreground/80'}>{solution.description}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Link href={solution.href} className="flex items-center font-medium text-primary group">
                                        {solution.link}
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
