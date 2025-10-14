import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function SourcingMain() {
  const sourcingImage = placeholderImages.find(p => p.id === 'sourcing-main-image');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
              OutSourcing
            </h2>
            <p className="mt-6 text-muted-foreground">
              Outsourcing has evolved into a global phenomenon shaped by economic
              changes. Offshore outsourcing specifically offers organizations a
              significant cost advantage while optimizing core operations. The key
              to successful outsourcing lies in choosing a seasoned service
              provider capable of meeting critical business and technical
              criteria that align with your project's requirements.
            </p>
            <p className="mt-4 text-muted-foreground">
              Such providers not only offer cost savings but also bring expertise
              in specialized domains, enhancing operational efficiency and
              flexibility. They enable businesses to focus on core competencies
              while delegating non-core tasks to skilled external partners.
              Effective communication and clear expectations are crucial for
              outsourcing success, fostering collaboration and ensuring
              deliverables meet quality standards.
            </p>
            <p className="mt-4 text-muted-foreground">
              Moreover, outsourcing allows access to global talent pools,
              fostering innovation and scalability in project execution. It
              mitigates risks associated with fluctuating demand and regulatory
              changes, providing a stable operational framework. Ultimately,
              strategic outsourcing partnerships contribute to sustained growth
              and competitive advantage in a dynamic marketplace.
            </p>
             <p className="mt-4 text-muted-foreground">
              We specialize in optimizing operational efficiency and cost-effectiveness through streamlined workflows and advanced technological solutions. By adhering to robust processes, we ensure reliability and adherence to project timelines and objectives. This approach enables us to adapt swiftly to client needs and industry demands, fostering long-term partnerships built on trust and mutual success.
            </p>
          </AnimatedItem>
          <AnimatedItem from="right" className="flex justify-center">
            {sourcingImage && (
              <Image
                src={sourcingImage.imageUrl}
                alt={sourcingImage.description}
                width={500}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={sourcingImage.imageHint}
              />
            )}
          </AnimatedItem>
        </div>
      </div>
    </section>
  );
}
