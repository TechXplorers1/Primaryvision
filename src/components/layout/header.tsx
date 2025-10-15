'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ChevronDown, Menu, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import React from 'react';

const serviceLinks = [
    { href: '/medical-coding', label: 'Medical Coding' },
    { href: '/web-development', label: 'Web Development' },
    { href: '/app-development', label: 'APP Development' },
    { href: '/cloud-computing', label: 'Cloud Computing' },
    { href: '/qa-testing', label: 'QA & Testing' },
    { href: '/data-analytics', label: 'Data Analytics' },
    { href: '/ux-ui-design', label: 'UX/UI Design' },
    { href: '/sas-services', label: 'SAS Services' },
];

const cyberSecurityLinks = [
    { href: '/detailed-reporting', label: 'Detailed Reporting' },
    { href: '/compliance-assurance', label: 'Compliance Assurance' },
    { href: '/in-depth-vulnerability-scanning', label: 'In-Depth Vulnerability Scanning' },
    { href: '/penetration-testing', label: 'Penetration Testing' },
]

const industryLinks = [
    { href: '/health-care', label: 'Health Care' },
    { href: '/manufacturing', label: 'Manufacturing' },
    { href: '/finance-banking', label: 'Finance & Banking' },
    { href: '/automotive', label: 'Automotive' },
    { href: '/media-advertising', label: 'Media and Advertising' },
];

const navLinks = [
  { href: '/our-sourcing', label: 'Outsourcing' },
  { href: '/careers', label: 'Careers' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  const handleLinkClick = (href: string) => {
    setIsSheetOpen(false);
    
    // For anchor links, we need to handle the push and scroll
    const [path, hash] = href.split('#');
    if (hash) {
      if (window.location.pathname === path) {
        // If we are on the same page, just scroll
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If on a different page, navigate first
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-xl items-center">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-8 w-auto" />
          </Link>
        </div>
        
        <nav className="hidden gap-6 md:flex items-center ml-auto">

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 focus:outline-none">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Link href="/cyber-security" onClick={(e) => { e.preventDefault(); handleLinkClick('/cyber-security'); }} className="w-full text-left">Cyber Security</Link>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            {cyberSecurityLinks.map((link) => (
                                <DropdownMenuItem key={link.label} asChild>
                                    <Link href={link.href} onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}>{link.label}</Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
              {serviceLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <Link href={link.href}>{link.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80 focus:outline-none">
              Industries
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {industryLinks.map((link) => (
                    <DropdownMenuItem key={link.label} asChild>
                    <Link href={link.href}>{link.label}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <Link
              key={`${link.label}-${link.href}`}
              href={link.href}
              className="flex items-center text-sm font-medium text-foreground/60 transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-end space-x-2 md:ml-6">
          <Button asChild>
            <Link href="/get-a-quote">
                get a quote
                <motion.div
                animate={{ translateX: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                >
                <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                <Link href="/" onClick={() => handleLinkClick('/')} className="flex items-center gap-2 text-lg font-semibold mb-4">
                    <Logo className="h-8 w-auto" />
                </Link>
                <div className="text-muted-foreground">Services</div>
                 <Link href="/cyber-security" onClick={(e) => { e.preventDefault(); handleLinkClick('/cyber-security'); }} className="text-muted-foreground transition-colors hover:text-primary pl-4">Cyber Security</Link>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className="text-muted-foreground transition-colors hover:text-primary pl-4"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="text-muted-foreground">Industries</div>
                {industryLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                        className="text-muted-foreground transition-colors hover:text-primary pl-4"
                    >
                        {link.label}
                    </Link>
                ))}
                {navLinks.map((link) => (
                  <Link
                    key={`${link.label}-${link.href}`}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.href); }}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
