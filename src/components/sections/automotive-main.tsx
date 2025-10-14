import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';
import { CheckCircle } from 'lucide-react';

const stats = [
    { label: 'Projects Completed', value: '130+' },
    { label: 'Achievements', value: '30+' },
    { label: 'Happy Client', value: '110+' },
    { label: 'Dedicated Team', value: '20+' },
];

const services = [
    'Autonomous and EVS',
    'Dealer Management Systems',
    'eCommerce Platforms',
    'AR & VR',
    'SCM and Logistics Management',
    'Fleet Management Solutions',
];

export default function AutomotiveMain() {
  const automotiveImage = placeholderImages.find(p => p.id === 'automotive-process');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem from="left" className="flex justify-center">
                {automotiveImage && (
                <Image
                    src={automotiveImage.imageUrl}
                    alt={automotiveImage.description}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={automotiveImage.imageHint}
                />
                )}
            </AnimatedItem>
            <AnimatedItem from="right">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Automotive process
                </h2>
                <p className="mt-6 text-muted-foreground">
                    We understand the ever-evolving landscape of the automotive industry and the need for innovative software solutions that drive efficiency, safety, and customer satisfaction. With our expertise in Automotive industry, we are committed to helping automotive businesses in a digitally connected world.
                </p>
                <p className="mt-4 text-muted-foreground">
                    CWe combine our technical expertise, industry knowledge, and commitment to innovation to deliver exceptional Automotive software solutions.
                </p>
            </AnimatedItem>
        </div>

        <div className="border-y">
            <div className="container max-w-screen-lg py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map(stat => (
                        <AnimatedItem from="bottom" key={stat.label}>
                            <p className="text-sm text-primary font-semibold">{stat.label}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
        </div>

        <AnimatedSection from="bottom" className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Automotive Services</h2>
            <p className="text-muted-foreground max-w-4xl">
                Our Automotive industry and explore how we can help you leverage technology to thrive in the ever-evolving automotive industry. Let's accelerate your digital journey and shape the future of mobility together. Most early automobile companies were small shops, hundreds of which each produced a few handmade cars, and nearly all of which abandoned the business soon after going into it.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                {services.map(service => (
                    <div key={service} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span className="font-medium">{service}</span>
                    </div>
                ))}
            </div>
            <p className="text-muted-foreground max-w-4xl">
                Our team of experienced software developers, automotive specialists, and technology enthusiasts are passionate about collaborating with automotive businesses to understand their unique needs and deliver solutions that drive success.
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Connected Vehicle Solutions</h3>
            <p className="text-muted-foreground">
                Involve the integration of telematics systems, in-vehicle infotainment (IVI) systems, and IoT connectivity. Telematics enables real-time data collection for navigation, traffic updates, and remote diagnostics, while IVI systems offer multimedia entertainment, GPS, and voice control. IoT integration connects vehicles to smart devices, wearables, and home automation systems, enhancing the driving experience.
            </p>
            <p className="mt-4 text-muted-foreground">
                These solutions improve fleet management by enabling real-time tracking, route optimization, and fuel monitoring. Businesses benefit from predictive maintenance, identifying potential failures before they occur, reducing downtime and repair costs. Ultimately, connected vehicle solutions boost driver experience, safety, and operational efficiency for both personal and commercial use.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Autonomous Vehicle Software</h3>
            <p className="text-muted-foreground">
                Autonomous Vehicle Software leverages AI & ML algorithms, sensor integration, and path planning systems to enable self-driving capabilities. AI and ML facilitate object detection, lane tracking, and decision-making, while sensors like cameras, LiDAR, and radar detect obstacles. Path planning systems help vehicles navigate routes and avoid collisions, ensuring safe and efficient movement.
            </p>
            <p className="mt-4 text-muted-foreground">
                This software reduces human intervention, supporting the development of self-driving cars and robo-taxis. It improves road safety by minimizing human error and enhancing real-time decision-making. Additionally, it enables the shift toward mobility-as-a-service (MaaS) models, transforming ride-hailing and shared mobility services.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Automotive Cybersecurity</h3>
            <p className="text-muted-foreground">
                Automotive Cybersecurity Services focus on vulnerability testing, intrusion detection systems (IDS), and secure OTA updates to protect vehicles from cyber threats. Vulnerability testing identifies potential software weaknesses, while IDS detects and blocks unauthorized access to vehicle control systems. Secure over-the-air (OTA) updates enable seamless bug fixes and new feature rollouts, ensuring continuous protection.
            </p>
            <p className="mt-4 text-muted-foreground">
                These services safeguard connected and autonomous vehicles from hacking attempts, enhancing user trust and data privacy. Businesses managing fleet operations benefit from data security and privacy, while regulatory compliance is maintained with global automotive security standards, fostering safer and more secure vehicle ecosystems.
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
