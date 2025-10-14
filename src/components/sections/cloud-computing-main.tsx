import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function CloudComputingMain() {
  const cloudImage1 = placeholderImages.find(p => p.id === 'cloud-computing-1');
  const cloudImage2 = placeholderImages.find(p => p.id === 'cloud-computing-2');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {cloudImage1 && (
              <Image
                src={cloudImage1.imageUrl}
                alt={cloudImage1.description}
                width={600}
                height={400}
                className="rounded-lg object-contain"
                data-ai-hint={cloudImage1.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Cloud Computing
            </h2>
            <p className="mt-6 text-muted-foreground">
              Cloud computing is the delivery of computing services such as storage, processing power, and applications over the internet, rather than using local servers or personal devices. It provides businesses with the flexibility to scale their infrastructure on-demand, reduce costs, and improve efficiency by eliminating the need for physical hardware and on-site IT management. Cloud computing enables remote access to data and applications, fostering collaboration and seamless business operations.
            </p>
            <p className="mt-4 text-muted-foreground">
              By leveraging cloud computing, businesses can improve efficiency, streamline operations, and enhance collaboration among teams, as cloud services are accessible remotely from any device with an internet connection. It also provides businesses with the flexibility to access the latest technologies and tools, ensuring continuous innovation and competitiveness in the market. With cloud computing, organizations can focus more on their core functions while leaving the management of infrastructure to trusted service providers.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Cloud Migration</h3>
            <p className="text-muted-foreground">
            Cloud Migration is the process of transferring your existing systems, applications, and data from on-premises servers to a cloud environment. At Primary Vision, we offer seamless cloud migration services designed to ensure that your business transitions smoothly without any disruptions to daily operations. Our team carefully plans and executes the migration process, taking into account your business needs, data security, and system compatibility to minimize downtime and risk. We help you migrate to reliable and scalable cloud platforms like AWS, Google Cloud, and others, ensuring that your infrastructure is optimized for performance and cost-efficiency. Whether you’re moving a single application or your entire IT ecosystem, we provide expert guidance, secure data transfer, and post-migration support to ensure your systems are fully integrated with the cloud environment. This migration allows you to leverage the full benefits of the cloud, such as increased flexibility, scalability, and reduced operational costs.
            </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem from="left">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Cloud Infrastructure</h3>
                <p className="mt-4 text-muted-foreground">
                Cloud Infrastructure Setup involves designing and implementing a robust cloud environment tailored to your business needs, ensuring scalability, security, and cost-efficiency. We work closely with you to understand your requirements and create a customized infrastructure that optimizes performance while keeping costs under control. Whether it’s setting up virtual machines, storage, networking, or load balancing, our team ensures your cloud environment is fully aligned with your business goals. We utilize leading cloud platforms such as AWS and Google Cloud to provide a flexible and scalable infrastructure that grows with your business.
                </p>
                 <p className="mt-4 text-muted-foreground">
                Our approach includes setting up automated backups, security protocols, and monitoring tools to ensure continuous performance and protect your data. By implementing cloud infrastructure, we help you reduce hardware dependency, improve operational efficiency, and enable seamless access to your resources from anywhere, empowering your team to be more productive and innovative.
                </p>
            </AnimatedItem>
            <AnimatedItem from="right" className="flex justify-center">
                {cloudImage2 && (
                <Image
                    src={cloudImage2.imageUrl}
                    alt={cloudImage2.description}
                    width={600}
                    height={400}
                    className="rounded-lg object-contain"
                    data-ai-hint={cloudImage2.imageHint}
                />
                )}
            </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Cloud Storage & Backup Services</h3>
            <p className="text-muted-foreground">
            Cloud Storage & Backup services are essential for safeguarding your business data and ensuring business continuity. We offer secure and reliable cloud storage solutions that provide safe, scalable, and easily accessible storage for your critical data. Our cloud-based backup services protect your data from loss due to hardware failures, accidental deletions, or disasters, ensuring you can quickly recover and continue operations without disruptions. We use leading cloud platforms like AWS and Google Cloud to offer robust backup solutions that are automated, encrypted, and compliant with industry standards. This provides peace of mind knowing your data is securely stored and can be restored quickly in the event of an emergency. With our cloud storage and backup services, you can focus on growing your business while we ensure your data is safe, easily retrievable, and ready for recovery whenever needed.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Cloud-Based App Development</h3>
            <p className="text-muted-foreground">
            Cloud-Based App Development focuses on building applications that are specifically designed to take full advantage of cloud infrastructure. We develop cloud-native applications that leverage the scalability, flexibility, and reliability of cloud platforms. These applications are optimized for performance, allowing them to scale seamlessly based on user demand, providing a better experience and reducing operational costs. By utilizing cloud services such as AWS and Google Cloud, we ensure that your app benefits from automatic updates, secure data storage, and real-time access across devices and locations. Our cloud-based apps are designed to be efficient, easy to maintain, and adaptable to your evolving business needs, helping you stay ahead of the competition while delivering an exceptional user experience.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Managed Cloud Services</h3>
            <p className="text-muted-foreground">
            Managed Cloud Services provide ongoing support and management for your cloud infrastructure, ensuring that it remains optimized, secure, and compliant with industry standards. We take a proactive approach to managing your cloud environment, monitoring performance, applying updates, and troubleshooting any issues to ensure seamless operations. Our team works around the clock to maximize efficiency and minimize downtime, allowing your business to focus on growth while we handle the technical aspects. We manage cloud platforms like AWS and Google Cloud to ensure your infrastructure is continuously optimized for cost efficiency, security, and performance. This includes regular security audits, compliance checks, backup management, and disaster recovery planning. With our Managed Cloud Services, you can rest assured that your cloud environment is not only stable but also agile enough to meet the evolving demands of your business.
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
