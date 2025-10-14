import { ClipboardList } from 'lucide-react';
import AnimatedSection from '../animated-section';

export default function DetailedReportingMain() {
  return (
    <AnimatedSection as="section" id="detailed-reporting" className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
            <div className="flex justify-center md:justify-start">
                <div className="p-6 bg-primary/10 rounded-full border border-primary/20">
                    <ClipboardList className="h-16 w-16 text-primary" />
                </div>
            </div>
            <div className="md:col-span-3">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Detailed Reporting</h1>
                <p className="mt-6 text-muted-foreground">
                    Primary Vision delivers comprehensive security reporting designed to give organizations a clear and actionable understanding of their cybersecurity posture. Our detailed reports analyze vulnerabilities, assess threat severity, and provide prioritized recommendations to strengthen your systems and reduce risk.
                </p>
                <p className="mt-4 text-muted-foreground">
                    Each assessment includes in-depth findings supported by data visualization, enabling both technical teams and decision-makers to make informed choices. Our methodology aligns with global standards such as NIST, OWASP, and ISO 27001, ensuring precision, accuracy, and transparency.
                </p>
                 <p className="mt-4 text-muted-foreground">
                    With Primary Vision’s detailed reporting, organizations gain a 360° view of their security landscape — from network weaknesses and configuration issues to application flaws — empowering smarter, faster remediation efforts.
                </p>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
