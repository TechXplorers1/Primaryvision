import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function MediaAdvertisingMain() {
  const mediaImage = placeholderImages.find(p => p.id === 'media-advertising-megaphone');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {mediaImage && (
              <Image
                src={mediaImage.imageUrl}
                alt={mediaImage.description}
                width={600}
                height={400}
                className="rounded-lg object-contain"
                data-ai-hint={mediaImage.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Media Advertising
            </h2>
            <p className="mt-6 text-muted-foreground">
                Primary Vision offers Media and Advertising services designed to enhance brand visibility and drive customer engagement through digital channels. Our services include digital marketing, social media management, video production, and programmatic advertising, all tailored to your business goals. We use data-driven strategies to optimize campaigns, improve ROI, and reach the right audience at the right time. With Primary Vision, businesses can boost their online presence and achieve measurable growth through innovative advertising solutions.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Digital Marketing and Advertising</h3>
            <p className="text-muted-foreground">
                Primary Vision offers Digital Marketing and Advertising services to help businesses create, manage, and optimize online ad campaigns on platforms like Google, Facebook, Instagram, and LinkedIn. Our tailored strategies ensure maximum reach, visibility, and engagement for brands in a competitive market.
            </p>
            <p className="mt-4 text-muted-foreground">
                With a focus on pay-per-click (PPC), display ads, and social media promotions, Primary Vision enables businesses to target specific audiences and drive conversions. By leveraging data-driven insights, we deliver high-performing ad campaigns that increase brand awareness and boost return on investment (ROI).
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Social Media Management and Marketing</h3>
            <p className="text-muted-foreground">
                Primary Vision provides Social Media Management and Marketing services to help businesses build a strong online presence on platforms like Facebook, Instagram, LinkedIn, and Twitter. We create and manage strategic content, promotions, and customer support to increase brand visibility and engagement.
            </p>
            <p className="mt-4 text-muted-foreground">
                By fostering community interaction, Primary Vision boosts brand awareness and enhances customer relationships. Our tailored social media strategies drive user engagement, generate leads, and build brand loyalty, ultimately supporting business growth and long-term success.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Programmatic Advertising</h3>
            <p className="text-muted-foreground">
                Primary Vision offers Programmatic Advertising services that automate the buying and placement of ads using AI-driven tools for real-time bidding. This ensures ads are displayed to the right audience at the right time, enhancing the effectiveness of advertising campaigns.
            </p>
            <p className="mt-4 text-muted-foreground">
                By leveraging programmatic ads, Primary Vision improves campaign efficiency and reduces costs. Our solutions deliver hyper-targeted ads, increasing reach and engagement while maximizing return on investment (ROI) through data-driven optimization.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Email Marketing</h3>
            <p className="text-muted-foreground">
                Primary Vision offers Email Marketing Campaigns that create and send personalized emails to promote products, services, and special offers. These campaigns are designed to reach the right audience with relevant messaging, fostering stronger customer relationships.
            </p>
            <p className="mt-4 text-muted-foreground">
                Email marketing helps build customer loyalty, drive repeat purchases, and nurture leads through targeted promotions, newsletters, and personalized content. By staying connected with customers, Primary Vision supports ongoing engagement and long-term business growth.
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Video Marketing and Production</h3>
            <p className="text-muted-foreground">
                Video Marketing and Production services, creating engaging promotional videos, brand stories, explainer videos, and ads tailored to your business needs. These videos are designed to capture attention, communicate key messages, and resonate with your target audience.
            </p>
            <p className="mt-4 text-muted-foreground">
                Video content increases brand recall, enhances user engagement, and drives interaction across social media platforms and websites. By leveraging the power of video, Primary Vision helps businesses boost visibility, convey their value propositions effectively, and improve overall customer engagement.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Analytics and Performance Tracking</h3>
            <p className="text-muted-foreground">
                Primary Vision provides Analytics and Performance Tracking services to measure the effectiveness of your marketing campaigns using tools like Google Analytics, social media insights, and advertising dashboards. These tools offer valuable data that helps businesses understand campaign performance and customer behavior.
            </p>
            <p className="mt-4 text-muted-foreground">
                Analytics allow us to identify campaign strengths, track ROI, and optimize ad performance for better results. By using data-driven insights, Primary Vision ensures that campaigns are refined for maximum impact, reducing costs and enhancing overall marketing efficiency.
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
