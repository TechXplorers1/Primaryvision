import Link from 'next/link';
import { Phone, Mail, Twitter, Linkedin, Facebook } from 'lucide-react';

const services = [
    { href: '/medical-coding', label: 'Medical Coding' },
    { href: '/cyber-security', label: 'Cyber Security' },
    { href: '/web-development', label: 'Web Development' },
    { href: '/app-development', label: 'APP Development' },
    { href: '/cloud-computing', label: 'Cloud Computing' },
    { href: '/qa-testing', label: 'QA & Testing' },
    { href: '/data-analytics', label: 'Data Analytics' },
    { href: '/ux-ui-design', label: 'UX/UI Design' },
    { href: '/sas-services', label: 'SAS Services' },
];
  
  const quickLinks = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Our Team' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'Contact Us' },
  ];

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/20 pt-20">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Services</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Get in touch */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Get in touch</h3>
            <ul className="space-y-4 inline-block text-left mx-auto">
                <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary"/>
                    <span className="text-muted-foreground">040-42021524</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary"/>
                    <span className="text-muted-foreground">510-262-2801</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary"/>
                    <Link href="mailto:info@primaryvision.com" className="text-muted-foreground hover:text-primary transition-colors">
                        info@primaryvision.com
                    </Link>
                </li>
            </ul>
            <div className="flex gap-4 mt-6 justify-center">
                <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
                <Link href="#" className="text-muted-foreground hover:text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10C2.5 6 4.5 4 7 4h10c2.5 0 4.5 2 4.5 3.5v10c0 1.5-2 3.5-4.5 3.5H7c-2.5 0-4.5-2-4.5-3.5Z"/><path d="m10 9 5 3-5 3Z"/></svg></Link>
            </div>
          </div>
        </div>
        <div className="mt-16 py-6 border-t">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Primary Vision. All rights reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                    Terms of Service
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
