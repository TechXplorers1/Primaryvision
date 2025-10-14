'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import AnimatedSection from "../animated-section";
import { PlusCircle } from "lucide-react";
  
const faqs = [
    {
        question: "What is VisionProtection?",
        answer: "VisionProtection is a next-generation phishing protection and remediation solution that integrates directly with Microsoft 365. It's designed to catch and remediate sophisticated phishing attacks that Microsoft's built-in security might miss."
    },
    {
        question: "Is VisionProtection a Phishing Prevention Solution for MSP's?",
        answer: "Yes, VisionProtection is designed with Managed Service Providers (MSPs) in mind. It offers multi-tenancy support, streamlined management, and robust reporting features, allowing MSPs to provide powerful phishing protection to their clients efficiently."
    },
    {
        question: "How Does a Phishing Prevention Solution Work?",
        answer: "A phishing prevention solution like VisionProtection works by analyzing incoming emails in real-time. It uses multiple layers of detection, including AI, machine learning, and threat intelligence, to identify malicious links, attachments, and fraudulent language. If a threat is detected, it can automatically quarantine the email or alert the user."
    },
    {
        question: "Does my Organization Need an Anti-Phishing Solution?",
        answer: "Absolutely. Phishing is one of the most common cyber attack vectors. Even with employee training, sophisticated attacks can bypass traditional security. An anti-phishing solution provides a critical layer of defense to protect your organization's data, finances, and reputation from these threats."
    }
]

export default function PhishingProtectionFaq() {
    return (
        <section id="faq" className="py-20 sm:py-32">
            <div className="container max-w-screen-xl">
                <AnimatedSection from="bottom" className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions (FAQs)</h2>
                </AnimatedSection>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem value={`item-${index}`} key={index} className="bg-white/5 border-none rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                                <AccordionTrigger className="p-6 text-left hover:no-underline">
                                    <span className="flex-1 font-medium">{faq.question}</span>
                                    <PlusCircle className="h-6 w-6 text-cyan-500 transition-transform duration-200 group-data-[state=open]:rotate-45" />
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="px-6 pb-6 text-muted-foreground">
                                        {faq.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
