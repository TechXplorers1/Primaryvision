import { TestTube } from 'lucide-react';
import AnimatedSection from '../animated-section';

export default function PenetrationTestingMain() {
  return (
    <AnimatedSection as="section" id="penetration-testing" className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
            <div className="md:col-span-3 order-2 md:order-1">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Penetration Testing</h1>
                <p className="mt-6 text-muted-foreground">
                    Primary Vision’s Penetration Testing services simulate real-world cyberattacks to assess your organization’s resilience against potential breaches. Our certified ethical hackers conduct controlled testing of networks, applications, and systems using recognized methodologies such as PTES, OSSTMM, and OWASP.
                </p>
                <p className="mt-4 text-muted-foreground">
                    Each test replicates actual attack scenarios to expose security gaps that traditional scans might miss. Following the test, we provide a detailed penetration testing report that includes exploited vulnerabilities, potential business impacts, and tailored mitigation strategies.
                </p>
                 <p className="mt-4 text-muted-foreground">
                    Primary Vision goes beyond testing — we help organizations build a sustainable security culture by providing hands-on recommendations, remediation support, and continuous improvement strategies. With our penetration testing services, you can safeguard your assets, strengthen your defenses, and stay prepared for the evolving threat landscape.
                </p>
            </div>
            <div className="flex justify-center md:justify-end order-1 md:order-2">
                <div className="p-6 bg-primary/10 rounded-full border border-primary/20">
                    <TestTube className="h-16 w-16 text-primary" />
                </div>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
