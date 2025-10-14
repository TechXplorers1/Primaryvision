import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function FinanceBankingMain() {
  const financeImage = placeholderImages.find(p => p.id === 'finance-banking-analytics');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {financeImage && (
              <Image
                src={financeImage.imageUrl}
                alt={financeImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={financeImage.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Finance & Banking
            </h2>
            <p className="mt-6 text-muted-foreground">
                The finance and banking sector relies on robust, secure, and efficient technology solutions to manage complex transactions, ensure regulatory compliance, and deliver exceptional customer experiences. From core banking operations to digital customer interfaces, technology is the backbone of modern finance.
            </p>
            <p className="mt-4 text-muted-foreground">
                Our platforms provide financial institutions with the tools to innovate, mitigate risk, and drive growth. With a focus on security, scalability, and data analytics, we empower banks and financial firms to navigate the digital landscape with confidence.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Core Banking Systems</h3>
            <p className="text-muted-foreground">
                Core Banking Systems are the heart of a bank's operations, managing transactions, customer accounts, loans, and payments. These centralized platforms ensure seamless and consistent processing of financial activities across all branches and channels.
            </p>
            <p className="mt-4 text-muted-foreground">
                By providing a single source of truth, core banking systems improve operational efficiency, reduce errors, and enable real-time data access for better decision-making. They are essential for maintaining the integrity and reliability of a bank's services.
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Digital Banking Platforms</h3>
            <p className="text-muted-foreground">
                Digital Banking Platforms provide customers with online and mobile access to banking services, such as account management, fund transfers, and bill payments. These platforms offer convenience and self-service capabilities, enhancing the customer experience.
            </p>
            <p className="mt-4 text-muted-foreground">
                By enabling 24/7 access to financial services, digital platforms increase customer engagement and satisfaction. They also reduce the operational load on physical branches and allow banks to offer personalized services and products based on user behavior.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Risk Management Solutions</h3>
            <p className="text-muted-foreground">
                Risk Management Solutions help financial institutions identify, assess, and mitigate various risks, including credit risk, market risk, and operational risk. These systems use advanced analytics and modeling to monitor risk exposure in real-time.
            </p>
            <p className="mt-4 text-muted-foreground">
                By providing comprehensive risk insights, these solutions enable banks to make informed decisions, ensure regulatory compliance (e.g., Basel III, Dodd-Frank), and protect their financial stability. Proactive risk management is critical for maintaining trust and sustainability in the financial industry.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Payment Processing Systems</h3>
            <p className="text-muted-foreground">
                Payment Processing Systems facilitate the secure and efficient transfer of funds for a wide range of transactions, including credit card payments, electronic funds transfers (EFT), and real-time payments. These systems are the backbone of modern commerce.
            </p>
            <p className="mt-4 text-muted-foreground">
                By ensuring fast, reliable, and secure payment processing, these platforms build trust among consumers and merchants. They also support various payment methods and currencies, enabling global commerce and reducing transaction friction.
            </p>
        </AnimatedSection>
        
        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Wealth Management Platforms</h3>
            <p className="text-muted-foreground">
                Wealth Management Platforms provide financial advisors and their clients with tools for portfolio management, financial planning, and investment analysis. These platforms offer a holistic view of a client's financial situation.
            </p>
            <p className="mt-4 text-muted-foreground">
                By offering features like goal tracking, asset allocation, and performance reporting, these platforms enhance the advisor-client relationship. They enable personalized financial advice and help clients achieve their long-term financial goals through strategic investment management.
            </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
