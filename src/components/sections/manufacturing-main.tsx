import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function ManufacturingMain() {
  const manufacturingImage = placeholderImages.find(p => p.id === 'manufacturing-workers');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {manufacturingImage && (
              <Image
                src={manufacturingImage.imageUrl}
                alt={manufacturingImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={manufacturingImage.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Manufacturing
            </h2>
            <p className="mt-6 text-muted-foreground">
                Manufacturing is the process of converting raw materials into finished products using machinery, labor, and technology. It involves various stages like design, production, quality control, and distribution. Manufacturing can be done on a small scale or mass production, depending on demand. This process drives economic growth, supports industrial development, and meets consumer needs.
            </p>
            <p className="mt-4 text-muted-foreground">
                These platforms support healthcare providers in improving the quality of care, reducing operational costs, and predicting future healthcare trends. With actionable insights, healthcare organizations can optimize resources, enhance patient care, and make more informed strategic decisions.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Enterprise Resource Planning (ERP)</h3>
            <p className="text-muted-foreground">
                Enterprise Resource Planning (ERP) systems provide a centralized platform to manage core manufacturing operations like procurement, production, inventory, HR, and financials. By integrating these processes, ERP enhances operational control and coordination across departments.
            </p>
            <p className="mt-4 text-muted-foreground">
                ERP systems automate workflows, improve process visibility, and support data-driven decision-making with real-time access to key information. This helps manufacturers optimize resource usage, reduce errors, and achieve greater efficiency in production and overall business operations.
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Supply Chain Management (SCM)</h3>
            <p className="text-muted-foreground">
                Supply Chain Management (SCM) software manages the flow of goods, services, and information across the entire supply chain. It provides end-to-end visibility, enabling better coordination between suppliers, manufacturers, and distributors.
            </p>
            <p className="mt-4 text-muted-foreground">
                SCM software optimizes supplier relationships, enhances demand forecasting, and improves inventory control. This reduces lead times, minimizes production delays, and lowers operational costs, ensuring a more agile and efficient supply chain.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Product Lifecycle Management (PLM)</h3>
            <p className="text-muted-foreground">
                Product Lifecycle Management (PLM) software manages the entire lifecycle of a product, from concept and design to production, distribution, and retirement. It provides a centralized platform for teams to collaborate, share updates, and track product progress.
            </p>
            <p className="mt-4 text-muted-foreground">
                PLM enables seamless collaboration, accelerates product development, and reduces the time-to-market for new products. By streamlining workflows and enhancing visibility, it helps organizations innovate faster and maintain a competitive edge.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Predictive Maintenance Solutions</h3>
            <p className="text-muted-foreground">
                Predictive Maintenance Solutions leverage AI, IoT, and machine learning to predict equipment failures before they occur. By analyzing real-time data from sensors, these solutions identify early warning signs of potential issues.
            </p>
            <p className="mt-4 text-muted-foreground">
                This proactive approach reduces unplanned downtime, extends equipment lifespan, and lowers repair costs. Predictive maintenance enables timely interventions, improving operational efficiency and ensuring uninterrupted production.
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Quality Management Systems (QMS)</h3>
            <p className="text-muted-foreground">
                QMS software ensures quality control at every stage of the production process, from raw materials to the final product. They establish standardized procedures to monitor, measure, and maintain product quality.
            </p>
            <p className="mt-4 text-muted-foreground">
                QMS software identifies defects early, ensures compliance with industry regulations, and supports continuous improvement. This enhances product quality, reduces rework costs, and boosts customer satisfaction by delivering consistent, high-quality products.
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
