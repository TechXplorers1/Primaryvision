import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Target } from 'lucide-react';
import AnimatedSection, { AnimatedItem } from '../animated-section';

const items = [
    {
        icon: <Eye className="h-12 w-12 text-primary" />,
        title: "Our Vision",
        description: "Our Vision is to provide the best-suited custom software services and technical courage to surmount the client's expectations from all the segments, be it in the ideation phase for start-ups or a medium-scale business hitting on growth opportunities."
    },
    {
        icon: <Target className="h-12 w-12 text-primary" />,
        title: "Our Mission",
        description: "Our mission is to help businesses accelerate the adoption of new technologies, untangle complex issues that always emerge during digital evolution, and organize ongoing innovation."
    }
]

export default function VisionMission() {
    return (
        <AnimatedSection as="section" id="vision-mission" className="py-20 sm:py-32 bg-primary text-primary-foreground">
            <div className="container max-w-screen-xl">
                <AnimatedSection from="bottom" className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight">Vision & Mission</h2>
                    <p className="mt-4 text-lg text-primary-foreground/80">
                        We continually thrive on new ideas and better implementation strategies to help our clients innovate and transform their businesses.
                    </p>
                </AnimatedSection>
                <AnimatedSection as="div" from="bottom" className="grid grid-cols-1 md:grid-cols-2 gap-12" staggerChildren={0.2}>
                    {items.map((item) => (
                        <AnimatedItem from="bottom" key={item.title}>
                            <Card className="text-center bg-background/90 text-foreground h-full">
                                <CardHeader className="items-center">
                                    <div className="p-4 bg-primary/10 rounded-full mb-4">
                                        {item.icon}
                                    </div>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        </AnimatedItem>
                    ))}
                </AnimatedSection>
            </div>
        </AnimatedSection>
    );
}
