import AnimatedSection from '../animated-section';

export default function MediaAdvertisingHero() {
  return (
    <AnimatedSection
      as="section"
      className="bg-primary text-primary-foreground py-16 sm:py-24"
    >
      <div className="container max-w-screen-xl">
        <div className="text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Media And Advertising
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Home &raquo; Industries
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
