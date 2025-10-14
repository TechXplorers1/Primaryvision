import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function MedicalCodingMain() {
  const medicalCodingImage1 = placeholderImages.find(p => p.id === 'medical-coding-1');
  const medicalCodingImage2 = placeholderImages.find(p => p.id === 'medical-coding-2');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <AnimatedItem from="left" className="flex justify-center">
            {medicalCodingImage1 && (
              <Image
                src={medicalCodingImage1.imageUrl}
                alt={medicalCodingImage1.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={medicalCodingImage1.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Medical Coding
            </h2>
            <p className="mt-6 text-muted-foreground">
              Medical coding is the process of translating medical diagnoses, treatments, and procedures into universally recognized alphanumeric codes based on standardized systems like ICD-10, CPT, and HCPCS. Our experienced team of certified medical coders ensures that all medical records are accurately encoded, making them ready for insurance claims, billing, and reporting.
            </p>
            <p className="mt-4 text-muted-foreground">
              At Primary Vision, we understand the critical role that accurate and efficient medical coding plays in the healthcare industry. Our Medical Coding Services ensure precise documentation of healthcare services, enabling you to comply with regulatory standards, enhance billing accuracy, and streamline your administrative workflows.
            </p>
          </AnimatedItem>
        </div>

        <div className="space-y-20">
            <AnimatedSection from="bottom">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Accurate Billing and Reimbursement</h3>
                <p className="mt-4 text-muted-foreground">
                At Primary Vision, we ensure correct medical coding for every procedure, diagnosis, and treatment, which is essential for successful insurance claims. Our precise coding practices help minimize the risk of denied claims and delayed reimbursements, enabling your healthcare organization to maintain a smooth revenue cycle.
                </p>
                <p className="mt-4 text-muted-foreground">
                By aligning with the latest coding standards (ICD-10, CPT, HCPCS), we ensure that all claims are accurately documented and comply with regulatory guidelines. This attention to detail leads to faster approvals, reduces administrative burdens, and improves cash flow for your practice or hospital.
                </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <AnimatedItem from="left">
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Regulatory Compliance</h3>
                    <p className="mt-4 text-muted-foreground">
                    At Primary Vision, we prioritize regulatory compliance with healthcare standards like HIPAA and other relevant industry regulations. Our expert coders ensure that all medical records are handled securely and coded in accordance with legal requirements, safeguarding patient data and your organization's integrity.
                    </p>
                    <p className="mt-4 text-muted-foreground">
                    By adhering to these compliance standards, we help your practice avoid potential legal and financial penalties. Our streamlined processes ensure that you meet all necessary guidelines, promoting not only security and privacy but also trust and confidence among your patients and stakeholders.
                    </p>
                </AnimatedItem>
                <AnimatedItem from="right" className="flex justify-center">
                    {medicalCodingImage2 && (
                    <Image
                        src={medicalCodingImage2.imageUrl}
                        alt={medicalCodingImage2.description}
                        width={600}
                        height={400}
                        className="rounded-lg object-cover shadow-lg"
                        data-ai-hint={medicalCodingImage2.imageHint}
                    />
                    )}
                </AnimatedItem>
            </div>

            <AnimatedSection from="bottom">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Improved Operational Efficiency</h3>
                <p className="mt-4 text-muted-foreground">
                At Primary Vision, we streamline administrative tasks by ensuring that medical coding is accurate and efficient, reducing manual errors and rework. This enables your healthcare staff to spend less time on coding and billing tasks, allowing them to focus more on providing high-quality patient care.
                </p>
                <p className="mt-4 text-muted-foreground">
                Our systematized approach reduces the administrative burden on your team, enhancing overall productivity and allowing for smoother operations. With accurate coding in place, the process becomes faster and more reliable, contributing to a more efficient and effective healthcare environment.
                </p>
            </AnimatedSection>

            <AnimatedSection from="bottom">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Enhanced Data Accuracy</h3>
                <p className="mt-4 text-muted-foreground">
                Accurate medical coding ensures that all patient data is correctly documented, providing a solid foundation for analytics and reporting. This reliable data is essential for healthcare providers to assess operational performance, monitor patient outcomes, and make informed, data-driven decisions.
                </p>
                <p className="mt-4 text-muted-foreground">
                By maintaining high levels of coding accuracy, we enable your organization to generate meaningful insights that improve clinical efficiency and patient care strategies. The result is a clearer understanding of performance metrics, helping to optimize healthcare services and drive better health outcomes.
                </p>
            </AnimatedSection>

            <AnimatedSection from="bottom" className="bg-secondary/50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-center mb-8">Why Choose Primary Vision?</h3>
                <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-xl">Expert Team</h4>
                        <p className="mt-2 text-muted-foreground">Our team of certified medical coders is highly proficient in a wide range of coding systems, including ICD-10, CPT, and HCPCS. With in-depth knowledge of healthcare billing practices, they ensure that your coding is not only accurate but also in full compliance with industry standards, reducing errors and maximizing efficiency.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-xl">Customized Solutions</h4>
                        <p className="mt-2 text-muted-foreground">At Primary Vision, we offer tailored solutions that align with your specific healthcare needs. Whether you're a hospital, clinic, or small practice, we adapt our services to ensure that your unique coding and billing challenges are addressed, helping you achieve smoother operations and faster reimbursements.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-xl">Scalability</h4>
                        <p className="mt-2 text-muted-foreground">Our medical coding services are designed to scale with your business needs. From small healthcare practices to large hospitals, we provide flexible solutions that grow with you. As your organization expands, we adjust our services to match the increasing demands, ensuring continuity and efficiency at every stage.</p>
                    </div>
                </div>
            </AnimatedSection>
        </div>

      </div>
    </section>
  );
}
