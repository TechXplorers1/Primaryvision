import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function SasServicesMain() {
  const sasImage1 = placeholderImages.find(p => p.id === 'sas-services-1');
  const sasImage2 = placeholderImages.find(p => p.id === 'sas-services-2');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {sasImage1 && (
              <Image
                src={sasImage1.imageUrl}
                alt={sasImage1.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={sasImage1.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              SAS Services
            </h2>
            <p className="mt-6 text-muted-foreground">
              We excel in SAS programming and analysis by leveraging advanced statistical tools and methodologies to extract meaningful insights from your clinical and business data. Our process involves data management, analysis, and reporting, enabling you to make informed decisions, ensure regulatory compliance, and uncover valuable opportunities.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our process involves thorough data validation, cleaning, and exploration, followed by advanced statistical analysis and modeling using SAS. We then present the results in clear, compliant formats, facilitating easy interpretation and communication of findings. Our experienced team ensures accuracy and reliability, providing valuable recommendations based on data-driven insights.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Clinical Trial Data Analysis</h3>
            <p className="text-muted-foreground">
            At Primary Vision, we manage and analyze clinical trial data from various sources like EDC, labs, and ePRO. Our approach ensures seamless data integration and consolidation into SDTM and ADaM datasets. This unified data foundation enables a comprehensive view of trial data, facilitating accurate analysis and regulatory submission. We utilize automated validation checks to streamline data integration, reducing manual effort and errors, enhancing data quality, and allowing for faster, data-driven decisions.
            </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem from="left">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Statistical Programming & Reporting</h3>
                <p className="mt-4 text-muted-foreground">
                At Primary Vision, we transform complex clinical data into analysis-ready datasets and reports using SAS. Our outputs present critical information in a clear, concise, and compliant format, enabling sponsors and regulatory bodies to grasp findings at a glance. We leverage SAS macros and standard procedures to create tables, listings, and figures (TLFs). These representations simplify decision-making, highlight efficacy and safety trends, and track key endpoints, empowering stakeholders to make informed choices with confidence.
                </p>
            </AnimatedItem>
            <AnimatedItem from="right" className="flex justify-center">
                {sasImage2 && (
                <Image
                    src={sasImage2.imageUrl}
                    alt={sasImage2.description}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={sasImage2.imageHint}
                />
                )}
            </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Regulatory Submissions & CDISC Compliance</h3>
            <p className="text-muted-foreground">
            At Primary Vision, we harness our expertise to prepare data for regulatory submissions to bodies like the FDA and EMA. By adhering to CDISC standards (SDTM, ADaM), our SAS programmers ensure data is compliant and submission-ready. Our advanced validation tools provide robust checks for compliance, allowing our clients to submit with confidence, reduce review times, and stay ahead of regulatory shifts, driving faster drug approval.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4 bg-secondary/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">Benefits of SAS Services</h3>
            <div className="space-y-4">
                <p className="text-muted-foreground">
                At Primary Vision, we provide expert SAS programming that empowers biotech and pharmaceutical companies to make smarter, faster decisions. By ensuring data integrity and quality, we help streamline clinical trial processes and enhance operational efficiency.
                </p>
                <p className="text-muted-foreground">
                <strong>Accelerated Timelines & High-Quality Deliverables:</strong> Our advanced SAS programming uncovers clinical insights faster, enabling you to target high-impact opportunities for your drug development pipeline. By leveraging our expertise, companies can ensure high-quality, compliant data submissions.
                </p>
                <p className="text-muted-foreground">
                <strong>Reduced Risks & Regulatory Compliance:</strong> With our deep expertise in clinical data and regulatory requirements, businesses can anticipate submission queries and mitigate risks before they occur. This proactive approach boosts submission quality and enables companies to navigate the regulatory landscape with confidence.
                </p>
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
