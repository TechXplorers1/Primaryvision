import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function QaTestingMain() {
  const qaTestingImage1 = placeholderImages.find(p => p.id === 'qa-testing-1');
  const qaTestingImage2 = placeholderImages.find(p => p.id === 'qa-testing-2');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {qaTestingImage1 && (
              <Image
                src={qaTestingImage1.imageUrl}
                alt={qaTestingImage1.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={qaTestingImage1.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              QA & Testing
            </h2>
            <p className="mt-6 text-muted-foreground">
              Quality Assurance (QA) and Testing are critical processes that ensure web or mobile applications perform as intended. QA emphasizes improving development processes, aiming to prevent defects during the software development lifecycle. By focusing on process optimization, QA establishes guidelines and standards to produce high-quality software, ensuring a smooth development journey.
            </p>
            <p className="mt-4 text-muted-foreground">
              Testing is a systematic process of identifying and resolving defects before the product is released. It involves executing test cases, validating features, and ensuring the application meets user requirements. Together, QA and testing guarantee that the final product is secure, reliable, and user-friendly, providing a seamless experience for end users while reducing costly post-release issues.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Functional Testing</h3>
            <p className="text-muted-foreground">
            Functional Testing ensures that every aspect of your application works according to the defined requirements. Our team rigorously tests each feature, button, and workflow to confirm that they perform as expected. By identifying and addressing issues early, we enhance the application's overall reliability and reduce the risk of errors after launch. This approach guarantees a flawless user experience.
            </p>
            <p className="text-muted-foreground">
            Through seamless navigation and error-free functionality, functional testing ensures your users can interact with the application smoothly. Our testing process covers both manual and automated approaches, enabling quick detection and resolution of issues. This not only improves user satisfaction but also reduces long-term maintenance costs by eliminating bugs before the application goes live.
            </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem from="left">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Performance Testing</h3>
                <p className="mt-4 text-muted-foreground">
                Performance Testing evaluates how well your application performs under different conditions, such as high user loads and peak traffic. Our team simulates real-world scenarios to identify potential bottlenecks and ensure the system remains stable and responsive. This process helps prevent crashes, slowdowns, and other performance issues that could impact user experience.
                </p>
                <p className="mt-4 text-muted-foreground">
                By optimizing the speed, response time, and resource utilization of your application, performance testing ensures that it can handle heavy traffic without compromising efficiency. Our goal is to deliver a robust, high-performing application that offers a smooth user experience, even during peak usage periods, thereby enhancing customer satisfaction and business continuity.
                </p>
            </AnimatedItem>
            <AnimatedItem from="right" className="flex justify-center">
                {qaTestingImage2 && (
                <Image
                    src={qaTestingImage2.imageUrl}
                    alt={qaTestingImage2.description}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={qaTestingImage2.imageHint}
                />
                )}
            </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Security Testing</h3>
            <p className="text-muted-foreground">
            Security Testing is a crucial process to safeguard your application from cyber threats and data breaches. Our team conducts comprehensive testing to identify vulnerabilities, security loopholes, and potential entry points for attackers. By simulating real-world attack scenarios, we ensure that your application is well-protected against unauthorized access and other security risks.
            </p>
            <p className="text-muted-foreground">
            Our security testing services prioritize the protection of sensitive information such as user data, payment details, and confidential business information. We implement advanced techniques to secure data at rest and in transit, ensuring compliance with industry standards. This proactive approach builds user trust, enhances data privacy, and ensures your application remains safe from evolving threats.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Automation Testing</h3>
            <p className="text-muted-foreground">
            Automation Testing leverages specialized tools to execute repetitive test cases with speed and precision. By automating these processes, we ensure faster execution and accurate results, reducing the time and effort required for manual testing. This approach is particularly beneficial for large, complex projects where manual testing would be too time-consuming and error-prone.
            </p>
            <p className="text-muted-foreground">
            Automation testing enables the early detection of bugs and continuous testing during the development cycle. Our team uses industry-leading tools to create reusable test scripts, ensuring that updates or changes in the application are thoroughly tested. This approach improves efficiency, enhances test coverage, and reduces the overall cost of testing while accelerating the product's release timeline.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Manual Testing</h3>
            <p className="text-muted-foreground">
            Manual Testing involves a hands-on approach where testers actively inspect the application to identify bugs and defects that automated tools might miss. Our skilled testers evaluate the application's functionality, design, and usability from the end-user's perspective. This process ensures a more human-centered validation of the app, enhancing its reliability and performance.
            </p>
            <p className="text-muted-foreground">
            Manual testing is especially crucial for UI/UX validation, as it allows testers to assess how intuitive, user-friendly, and visually appealing the application is. By identifying design inconsistencies and usability issues, we ensure the app delivers an optimal user experience. This approach guarantees that the final product is polished, responsive, and capable of meeting user expectations.
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="bg-secondary/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-center mb-8">Why Choose Primary Vision?</h3>
            <p className="text-muted-foreground">
            At Primary Vision, our QA and testing services help you deliver a product that is bug-free, secure, and user-friendly. Our goal is to identify issues early, reduce the cost of future fixes, and ensure that your application is ready for smooth deployment. By offering a combination of manual and automated testing, we guarantee a comprehensive approach to quality assurance. Our focus on performance, security, and user experience ensures that your application is reliable, efficient, and ready to support your business success.
            </p>
        </AnimatedSection>

      </div>
    </section>
  );
}
