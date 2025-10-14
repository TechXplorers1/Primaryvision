import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function AboutHero() {
    return (
        <AnimatedSection as="section" className="bg-secondary/20 py-20 sm:pt-32 sm:pb-16">
            <div className="container max-w-screen-xl">
                <div className="grid grid-cols-1 gap-16 items-center">
                    <AnimatedItem from="left" className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Do you want to know more <span className="text-primary">about us?</span>
                        </h1>
                        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
                            We believe a great company has a positive impact on the world, and on the people who build it.
                        </p>
                    </AnimatedItem>
                </div>
            </div>
        </AnimatedSection>
    );
}
