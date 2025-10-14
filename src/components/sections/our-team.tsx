import Image from 'next/image';
import Link from 'next/link';
import { placeholderImages } from '@/lib/placeholder-images';
import { Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedSection, { AnimatedItem } from '../animated-section';

const teamMembers = [
    {
        id: 'vasu-maganti',
        name: 'Vasu Maganti',
        title: 'CEO',
        experience: '30 years of experience in Managing Technical Enterprises.',
        linkedin: '#'
    },
    {
        id: 'chakradhar-rao',
        name: 'Chakradhar Rao',
        title: 'CTO',
        experience: '14 years of experience as a Technologist-CNCF Ambassador',
        linkedin: '#'
    },
    {
        id: 'joshua-hurst',
        name: 'Joshua Hurst',
        title: 'Head of Business Development',
        experience: '20 years of experience in Business Development',
        linkedin: '#'
    },
    {
        id: 'venkat-rs',
        name: 'Venkat R S',
        title: 'Senior Vice President - Corporate Development',
        experience: '35 years of experience in the Software Industry',
        linkedin: '#'
    },
    {
        id: 'srini-maganti',
        name: 'Srini Maganti',
        title: 'Executive Vice President',
        experience: '32 years of IT and corporate experience',
        linkedin: '#'
    },
    {
        id: 'mohammad-sikandar',
        name: 'Mohammad Sikandar',
        title: 'Head of Sales & Marketing',
        experience: '20 years of experience in Sales and Marketing',
        linkedin: '#'
    },
    {
        id: 'anand-panimaya',
        name: 'Anand Panimaya',
        title: 'Head of Delivery Management',
        experience: '15 years of experience in Delivery Management',
        linkedin: '#'
    },
    {
        id: 'zaman-kazi',
        name: 'Zaman Kazi',
        title: 'EVP & Head of Global Cyber Security Practice',
        experience: '26 years of experience in Cyber Security',
        linkedin: '#'
    },
];

export default function OurTeam() {
    const heroImage = placeholderImages.find(p => p.id === 'team-hero-illustration');

    return (
        <>
            <AnimatedSection as="section" className="bg-secondary/20 py-20 sm:py-32">
                <div className="container max-w-screen-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <AnimatedItem from="left">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Our Valuable <span className="text-primary">Team</span>
                            </h1>
                            <p className="mt-6 text-lg text-muted-foreground">
                                At Primary Vision, we believe that our people are our biggest asset. Our talented team is made up of individuals from diverse backgrounds, each with unique skills and experiences that contribute to our success.
                            </p>
                        </AnimatedItem>
                        <AnimatedItem from="right" className="flex justify-center">
                            {heroImage && (
                                <Image
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    width={400}
                                    height={300}
                                    className="object-contain"
                                    data-ai-hint={heroImage.imageHint}
                                />
                            )}
                        </AnimatedItem>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection as="section" className="py-20 sm:py-32" staggerChildren={0.1}>
                <div className="container max-w-screen-xl">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map(member => {
                            const memberImage = placeholderImages.find(p => p.id === member.id);
                            return (
                                <AnimatedItem from="bottom" key={member.id}>
                                    <Card className="text-center overflow-hidden group h-full">
                                        <CardContent className="p-0 relative">
                                            {memberImage && (
                                                <Image
                                                    src={memberImage.imageUrl}
                                                    alt={member.name}
                                                    width={400}
                                                    height={400}
                                                    className="grayscale object-cover w-full h-full"
                                                    data-ai-hint={memberImage.imageHint}
                                                />
                                            )}
                                            <Link href={member.linkedin} target="_blank" className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 rounded-md transition-transform duration-300 group-hover:scale-110">
                                                <Linkedin className="h-5 w-5" />
                                            </Link>
                                        </CardContent>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold">{member.name}</h3>
                                            <p className="text-primary mt-1">{member.title}</p>
                                            <p className="text-muted-foreground text-sm mt-2">{member.experience}</p>
                                        </div>
                                    </Card>
                                </AnimatedItem>
                            )
                        })}
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
}
