import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function UxUiDesignMain() {
  const uxUiImage1 = placeholderImages.find(p => p.id === 'ux-ui-1');
  const uxUiImage2 = placeholderImages.find(p => p.id === 'ux-ui-2');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {uxUiImage1 && (
              <Image
                src={uxUiImage1.imageUrl}
                alt={uxUiImage1.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={uxUiImage1.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              UX/UI Design
            </h2>
            <p className="mt-6 text-muted-foreground">
              We excel in UX/UI design by leveraging user-centered methodologies to create intuitive and engaging digital experiences. Our process involves user research, wireframing, prototyping, and visual design to build products that are not only beautiful but also easy to use, driving user satisfaction and business success.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our process involves thorough user research, persona creation, and journey mapping, followed by iterative design and testing. We then deliver high-fidelity mockups and prototypes in clear, intuitive formats, facilitating easy interpretation and communication of design decisions. Our experienced team ensures a seamless and delightful user experience, providing valuable recommendations based on user feedback and design principles.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">User Research & Strategy</h3>
            <p className="text-muted-foreground">
            At Primary Vision, we conduct in-depth user research through interviews, surveys, and usability testing to understand user needs, behaviors, and pain points. This unified foundation of user insights enables a 360-degree view of the user experience, facilitating accurate design decisions. We utilize this data to create user personas and journey maps, streamlining the design process and ensuring the final product is truly user-centric. This enhances usability, accessibility, and overall satisfaction.
            </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem from="left">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Wireframing & Prototyping</h3>
                <p className="mt-4 text-muted-foreground">
                At Primary Vision, we transform ideas into interactive prototypes using wireframes and mockups. Our designs present information architecture and user flows in a clear, concise format, enabling stakeholders to visualize the product early on. We leverage tools like Figma and Adobe XD to create dynamic, clickable prototypes. These visual representations simplify feedback, highlight potential issues, and track user interactions, empowering businesses to make design choices with confidence.
                </p>
            </AnimatedItem>
            <AnimatedItem from="right" className="flex justify-center">
                {uxUiImage2 && (
                <Image
                    src={uxUiImage2.imageUrl}
                    alt={uxUiImage2.description}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={uxUiImage2.imageHint}
                />
                )}
            </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Visual Design & Branding</h3>
            <p className="text-muted-foreground">
            At Primary Vision, we harness the power of visual design to create aesthetically pleasing and on-brand interfaces. By analyzing your brand identity and target audience, our visual design enables companies to create a strong emotional connection with users. Our advanced design systems provide consistency across all digital touchpoints. This allows businesses to create a memorable brand experience, reduce cognitive load, and stay ahead of design trends, driving long-term user loyalty and engagement.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4 bg-secondary/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">Benefits of UX/UI Design</h3>
            <div className="space-y-4">
                <p className="text-muted-foreground">
                At Primary Vision, we provide user-centric design solutions that empower businesses to create products that are not just functional but delightful to use. By identifying usability issues and friction points, we help streamline user flows and enhance overall usability.
                </p>
                <p className="text-muted-foreground">
                <strong>Increased Conversions & Personalized Customer Experience:</strong> Our advanced UX strategies uncover user motivations and behavior patterns, enabling you to target high-impact opportunities for conversion. By leveraging user insights, businesses can offer personalized experiences, enhancing customer satisfaction and loyalty.
                </p>
                <p className="text-muted-foreground">
                <strong>Reduced Development Rework & Faster Time-to-Market:</strong> With our iterative design and prototyping process, businesses can validate concepts and mitigate risks before development begins. This proactive planning approach reduces costly rework and enables companies to launch products faster and with more confidence.
                </p>
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
