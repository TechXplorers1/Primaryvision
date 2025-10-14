import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function AppDevelopmentMain() {
  const appDevImage1 = placeholderImages.find(p => p.id === 'app-dev-1');
  const appDevImage2 = placeholderImages.find(p => p.id === 'app-dev-2');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {appDevImage1 && (
              <Image
                src={appDevImage1.imageUrl}
                alt={appDevImage1.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={appDevImage1.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              App Development
            </h2>
            <p className="mt-6 text-muted-foreground">
              Mobile app development focuses on building software applications that run on mobile devices such as smartphones and tablets. We specialize in creating dynamic Android and iOS apps that are feature-rich, high-performing, and user-friendly. Our apps are custom-designed to meet specific business needs, ensuring they provide practical solutions for businesses of all sizes.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our goal is to deliver seamless cross-platform experiences that enhance user engagement, increase revenue, and support business growth. By leveraging modern development tools and frameworks, we build scalable, secure, and interactive apps that deliver a smooth user experience.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Custom Mobile App Development</h3>
            <p className="text-muted-foreground">
            Custom Mobile App Development focuses on creating personalized Android and iOS applications that cater to the unique needs of startups, SMEs, and enterprises. Our development process begins with an in-depth analysis of your business requirements, ensuring that every feature and function aligns with your specific goals. We prioritize scalability, security, and user experience, delivering apps that enhance your brand’s presence in the digital space.
            </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem from="left">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Cross-Platform App Development</h3>
                <p className="mt-4 text-muted-foreground">
                Cross-Platform App Development allows us to create applications that run seamlessly on both Android and iOS devices using powerful frameworks like React Native and Flutter. This approach enables us to build a single codebase, reducing the development time and effort required to support both platforms.
                </p>
                <p className="mt-4 text-muted-foreground">
                The key benefit of cross-platform development is its cost-effectiveness. By developing apps for both platforms simultaneously, we significantly reduce the overall development costs.
                </p>
            </AnimatedItem>
            <AnimatedItem from="right" className="flex justify-center">
                {appDevImage2 && (
                <Image
                    src={appDevImage2.imageUrl}
                    alt={appDevImage2.description}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={appDevImage2.imageHint}
                />
                )}
            </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">App Testing & Quality Assurance</h3>
            <p className="text-muted-foreground">
            App Testing & Quality Assurance is a critical step in ensuring the functionality, security, and performance of your mobile application. Our dedicated QA team conducts thorough testing to identify and resolve any bugs, performance issues, and security vulnerabilities before the app goes live. This helps ensure that your app delivers a smooth, reliable, and secure experience for users.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">API Integration</h3>
            <p className="text-muted-foreground">
            API Integration involves connecting third-party services and systems to enhance your app’s functionality. We integrate payment gateways, social media logins, geolocation, chatbots, and other essential features that improve the user experience. This allows your app to seamlessly interact with external platforms and services.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Migration & App Upgradation</h3>
            <p className="text-muted-foreground">
            Migration & App Upgradation services are designed to help businesses transition their existing mobile apps to newer platforms, technologies, or versions. Whether you're upgrading from legacy systems or migrating your app to support the latest Android and iOS versions, we ensure a smooth and seamless transition.
            </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
