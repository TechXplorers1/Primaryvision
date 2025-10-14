import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';

export default function AboutUs() {
  const aboutImage = placeholderImages.find(p => p.id === 'about-us-team');
  
  return (
    <section id="about" className="py-20 sm:py-32 bg-secondary/20">
      <div className="container max-w-screen-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About CyberGlow Shield</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We help businesses stay safe from modern cyber threats.
            </p>
            <p className="mt-6 text-muted-foreground">
              Our mission is to provide cutting-edge, AI-driven cybersecurity solutions that are both powerful and accessible. We believe that every organization deserves to operate with confidence in a secure digital environment. Our team of certified experts works around the clock to defend, detect, and respond to the ever-evolving landscape of cyber threats, ensuring your digital assets are always protected.
            </p>
          </div>
          <div className="flex justify-center">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
