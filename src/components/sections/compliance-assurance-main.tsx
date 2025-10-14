import { ShieldCheck } from 'lucide-react';
import AnimatedSection from '../animated-section';

export default function ComplianceAssuranceMain() {
  return (
    <AnimatedSection as="section" id="compliance-assurance" className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Compliance Assurance</h1>
                <p className="mt-6 text-muted-foreground">
                    Primary Vision provides Compliance Assurance services to help businesses meet and maintain regulatory standards across industries. Our experts evaluate your existing security policies, infrastructure, and workflows against leading compliance frameworks such as GDPR, HIPAA, ISO 27001, and PCI DSS.
                </p>
                <p className="mt-4 text-muted-foreground">
                    We identify compliance gaps, develop corrective action plans, and assist in implementing policies that align with your organization’s goals. Through ongoing assessments and automated monitoring, we help ensure continuous compliance in an ever-evolving regulatory environment.
                </p>
                 <p className="mt-4 text-muted-foreground">
                    By partnering with Primary Vision, your business can confidently demonstrate accountability, protect customer data, and maintain full compliance with international security standards.
                </p>
            </div>
            <div className="flex justify-center md:justify-end">
                <div className="p-8 bg-primary/10 rounded-full border border-primary/20">
                    <ShieldCheck className="h-24 w-24 text-primary" />
                </div>
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
