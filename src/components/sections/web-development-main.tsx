import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function WebDevelopmentMain() {
  const webDevImage1 = placeholderImages.find(p => p.id === 'web-dev-1');
  const webDevImage2 = placeholderImages.find(p => p.id === 'web-dev-2');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {webDevImage1 && (
              <Image
                src={webDevImage1.imageUrl}
                alt={webDevImage1.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={webDevImage1.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Web Application
            </h2>
            <p className="mt-6 text-muted-foreground">
              A web application is a software application that operates on a web server instead of being installed on a local device. This allows users to access and interact with the application via web browsers, making it accessible from anywhere with an internet connection. Web applications eliminate the need for installation on multiple devices, providing convenience and flexibility for users.
            </p>
            <p className="mt-4 text-muted-foreground">
              Web applications are commonly used for a wide variety of tasks, such as online shopping, data management, social networking, and content management systems. They offer businesses the ability to create scalable, secure, and feature-rich solutions that can be easily updated and accessed by users across different platforms and devices.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Custom Web Application Development</h3>
            <p className="text-muted-foreground">
            Custom Web Application Development focuses on creating web solutions specifically tailored to your business needs. We work closely with you to understand your requirements and deliver applications that meet your unique challenges. Whether it's an e-commerce platform, a CRM system, or a custom business tool, we design applications that are scalable, secure, and easy to use. Our goal is to build solutions that help drive efficiency, streamline workflows, and support business growth.
            </p>
            <p className="text-muted-foreground">
            Our development team prioritizes performance and functionality in every project. We ensure that each application is optimized for speed, security, and usability, delivering a seamless user experience across devices. By leveraging the latest technologies and industry best practices, we create solutions that align perfectly with your business objectives, ensuring long-term success and growth.
            </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem from="left">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Responsive Design & Mobile Optimization</h3>
                <p className="mt-4 text-muted-foreground">
                Responsive Design & Mobile Optimization is essential for providing a consistent user experience across all devices. We ensure that your web application adapts seamlessly to different screen sizes, whether it's accessed on a desktop, tablet, or smartphone. This flexibility allows users to interact with your application with ease, regardless of their device.
                </p>
                <p className="mt-4 text-muted-foreground">
                By using responsive design, we ensure that your application remains user-friendly and visually appealing on any screen. This approach improves accessibility, boosts user engagement, and ensures that visitors have an optimal experience, leading to better retention and conversion rates.
                </p>
            </AnimatedItem>
            <AnimatedItem from="right" className="flex justify-center">
                {webDevImage2 && (
                <Image
                    src={webDevImage2.imageUrl}
                    alt={webDevImage2.description}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={webDevImage2.imageHint}
                />
                )}
            </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Cloud-Based Web Applications</h3>
            <p className="text-muted-foreground">
            Cloud-Based Web Applications provide businesses with the flexibility to scale applications quickly as their needs grow. By hosting your web application in the cloud, you benefit from easy scalability, reduced maintenance costs, and the ability to access your application from anywhere with an internet connection. This eliminates the need for expensive on-premise infrastructure while ensuring high availability and reliability.
            </p>
            <p className="text-muted-foreground">
            Cloud integration allows your application to grow with your business, providing real-time updates and seamless access across devices. As your business evolves, the cloud enables effortless updates and expansions, ensuring your application remains adaptable and aligned with your goals.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">API Integration</h3>
            <p className="text-muted-foreground">
            API Integration allows us to enhance the functionality of your web application by connecting it with third-party services and APIs. This can include payment gateways, social media integration, data analytics, and other external services that improve your application's performance and capabilities. By integrating these APIs, we enable your application to access additional features and services seamlessly.
            </p>
            <p className="text-muted-foreground">
            With API integration, your web application can communicate efficiently with other platforms and services, creating a more connected and streamlined user experience. This integration enhances your app's ability to perform various tasks automatically and securely, providing users with a smooth, feature-rich experience.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Web Application Maintenance & Support</h3>
            <p className="text-muted-foreground">
            Web Application Maintenance & Support ensures that your application remains secure, up-to-date, and fully optimized after deployment. Our team provides continuous support, addressing any issues that arise, performing bug fixes, and applying regular updates to maintain functionality. We monitor your application's performance to ensure it operates smoothly and efficiently over time.
            </p>
            <p className="text-muted-foreground">
            In addition to routine maintenance, we also analyze user feedback to identify areas for improvement and enhance the overall user experience. By continuously refining your web application, we ensure that it stays aligned with your business needs and evolves with changing market demands, offering long-term success and user satisfaction.
            </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
