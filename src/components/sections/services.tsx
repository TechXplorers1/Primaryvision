import { Code, Smartphone, Cloud, TestTube, BarChart3, Palette, FileText, Shield, Settings, ArrowRight } from "lucide-react";
import AnimatedSection, { AnimatedItem } from "../animated-section";
import Link from "next/link";

const services = [
  {
    icon: <FileText className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />,
    title: "Medical Coding",
    description: "Accurate and compliant medical coding services to streamline your billing and claims processing.",
    href: "/medical-coding",
  },
  {
    icon: <Shield className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />,
    title: "Cyber Security",
    description: "Protect your digital assets with our advanced cybersecurity solutions and expert consulting.",
    href: "/cyber-security",
  },
  {
    icon: <Code className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />,
    title: "Web Development",
    description: "Custom web development solutions to build powerful and scalable online experiences for your business.",
    href: "/web-development",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />,
    title: "APP Development",
    description: "Engaging and high-performance mobile applications for iOS and Android platforms.",
    href: "/app-development",
  },
  {
    icon: <Cloud className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />,
    title: "Cloud Computing",
    description: "Leverage the power of the cloud with our migration, management, and optimization services.",
    href: "/cloud-computing",
  },
  {
    icon: <TestTube className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />,
    title: "QA & Testing",
    description: "Ensuring the quality and reliability of your software with our comprehensive testing services.",
    href: "/qa-testing",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />,
    title: "Data Analytics",
    description: "Turn your data into actionable insights with our advanced data analytics and visualization services.",
    href: "/data-analytics",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />,
    title: "UX/UI Design",
    description: "Creating intuitive and beautiful user experiences that delight your customers and drive engagement.",
    href: "/ux-ui-design",
  },
  {
    icon: <Settings className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-500" />,
    title: "SAS Services",
    description: "Expert SAS programming and consulting services to support your clinical trials and data analysis needs.",
    href: "/sas-services",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-secondary/50">
      <div className="container max-w-screen-xl">
        <AnimatedSection from="bottom" className="text-center">
          <h2 className="text-4xl font-bold tracking-tight">Our Services</h2>
        </AnimatedSection>
        <AnimatedSection as="div" from="bottom" className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3" staggerChildren={0.1}>
          {services.map((service) => (
            <AnimatedItem from="bottom" key={service.title}>
              <Link href={service.href} className="group relative block rounded-lg bg-card p-8 overflow-hidden h-full border">
                <div className="absolute top-[-16px] right-[-16px] h-16 w-16 bg-primary rounded-full transition-transform duration-500 ease-in-out group-hover:scale-[20]"></div>
                <div className="absolute top-0 right-0 h-10 w-10 bg-primary/80 flex items-center justify-center rounded-bl-2xl">
                    <ArrowRight className="h-5 w-5 text-white -rotate-45" />
                </div>

                <div className="relative h-full flex flex-col">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-white transition-colors duration-500">{service.title}</h3>
                  <p className="text-muted-foreground mt-4 flex-grow group-hover:text-white/80 transition-colors duration-500">{service.description}</p>
                </div>
              </Link>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
