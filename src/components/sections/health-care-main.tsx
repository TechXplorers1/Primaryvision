import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function HealthCareMain() {
  const healthCareImage = placeholderImages.find(p => p.id === 'health-care-analytics');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {healthCareImage && (
              <Image
                src={healthCareImage.imageUrl}
                alt={healthCareImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={healthCareImage.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Healthcare Analytics
            </h2>
            <p className="mt-6 text-muted-foreground">
                Healthcare Analytics Software platforms analyze large volumes of healthcare data to provide valuable insights into patient outcomes, operational efficiency, cost analysis, and more. By processing this data, the software helps healthcare organizations understand patterns and trends, enabling data-driven decision-making.
            </p>
            <p className="mt-4 text-muted-foreground">
                These platforms support healthcare providers in improving the quality of care, reducing operational costs, and predicting future healthcare trends. With actionable insights, healthcare organizations can optimize resources, enhance patient care, and make more informed strategic decisions.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Electronic Health Records (EHR)</h3>
            <p className="text-muted-foreground">
                Electronic Health Records (EHR) systems help healthcare providers maintain comprehensive digital records of patient information, including medical history, diagnoses, medications, allergies, and treatment plans. These records enable quick access to critical health data, streamlining the care process and improving patient outcomes.
            </p>
            <p className="mt-4 text-muted-foreground">
                EHRs enhance decision-making by providing healthcare professionals with accurate and up-to-date information, reducing the risk of medical errors. They also foster better communication between providers, ensuring coordinated and efficient care, and improving overall patient safety.
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Hospital Management Systems (HMS)</h3>
            <p className="text-muted-foreground">
                Hospital Management Systems (HMS) are designed to integrate and manage various administrative and clinical processes within a hospital or clinic, including patient registration, appointment scheduling, billing, and inventory management. These systems automate routine tasks, ensuring smooth workflows across different departments.
            </p>
            <p className="mt-4 text-muted-foreground">
                By streamlining hospital operations, HMS reduces the administrative burden on staff, improves resource utilization, and enhances the overall efficiency of healthcare delivery. This not only optimizes operations but also ensures a seamless experience for both patients and healthcare providers, leading to improved patient care and satisfaction.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Telemedicine/Telehealth platforms</h3>
            <p className="text-muted-foreground">
                Telemedicine/Telehealth platforms enable healthcare providers to offer remote consultations, diagnoses, and treatment plans through video calls, messaging, or online forms. These platforms bridge the gap between patients and healthcare professionals, making healthcare more accessible and efficient.
            </p>
            <p className="mt-4 text-muted-foreground">
                By improving access to healthcare services, especially in remote or underserved areas, telemedicine enhances convenience for patients, allowing them to consult with healthcare providers from the comfort of their homes. This reduces the need for travel, lowers healthcare costs, and increases patient satisfaction.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Medical Billing</h3>
            <p className="text-muted-foreground">
                Medical Billing and Coding software automates the process of coding medical diagnoses and procedures for insurance billing and reimbursement. This software helps healthcare providers accurately categorize patient information for claims and ensures timely processing.
            </p>
            <p className="mt-4 text-muted-foreground">
                By streamlining the billing process, it reduces errors in coding, minimizes claim rejections, and ensures compliance with insurance standards and regulations. This improves the efficiency of the revenue cycle, accelerates reimbursements, and helps healthcare organizations maintain financial health.
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Health Information Exchange (HIE)</h3>
            <p className="text-muted-foreground">
                Health Information Exchange (HIE) software enables the seamless sharing of health data among various healthcare organizations, ensuring that patient information is accessible across different providers and systems. This facilitates coordinated care, as healthcare providers can access a patient's complete medical history regardless of where the care was received.
            </p>
            <p className="mt-4 text-muted-foreground">
                By ensuring that patients receive comprehensive care, HIE reduces the duplication of services such as repeated tests and procedures. It enhances the overall coordination of care, improving patient outcomes and minimizing inefficiencies in the healthcare system.
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
