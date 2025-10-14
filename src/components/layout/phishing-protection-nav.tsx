'use client';

import Link from "next/link";
import { Button } from "../ui/button";

const navLinks = [
    { href: '#benefits', label: 'Overview' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#features', label: 'Features' },
    { href: '#faq', label: 'FAQ' },
];

export default function PhishingProtectionNav() {
    return (
        <section className="sticky top-20 z-40 bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60 shadow-sm">
            <div className="container max-w-screen-xl">
                <div className="flex items-center justify-between h-16">
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map(link => (
                             <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <div className="ml-auto">
                        <Button>Get Started</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
