import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function CareersInfo() {
  const infoImage = placeholderImages.find(p => p.id === 'careers-info-illustration');
  
  return (
    <AnimatedSection as="section" id="careers-info" className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {infoImage && (
              <Image
                src={infoImage.imageUrl}
                alt={infoImage.description}
                width={500}
                height={500}
                className="object-contain"
                data-ai-hint={infoImage.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Careers at Primary Vision</h2>
            <p className="mt-6 text-muted-foreground">
              At Primary Vision, we believe that our people are our biggest asset. Our talented team is made up of individuals from diverse backgrounds, each with unique skills and experiences that contribute to our success. We are committed to creating a supportive and inclusive environment where everyone can thrive.
            </p>
            <p className="mt-4 text-muted-foreground">
              We offer a dynamic and challenging work environment where you will have the opportunity to work on exciting projects and make a real impact. We are looking for individuals who are passionate about technology, eager to learn, and dedicated to delivering excellence.
            </p>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  );
}
