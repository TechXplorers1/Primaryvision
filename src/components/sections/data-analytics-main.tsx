import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import AnimatedSection, { AnimatedItem } from '../animated-section';

export default function DataAnalyticsMain() {
  const dataAnalyticsImage1 = placeholderImages.find(p => p.id === 'data-analytics-1');
  const dataAnalyticsImage2 = placeholderImages.find(p => p.id === 'data-analytics-2');

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedItem from="left" className="flex justify-center">
            {dataAnalyticsImage1 && (
              <Image
                src={dataAnalyticsImage1.imageUrl}
                alt={dataAnalyticsImage1.description}
                width={600}
                height={400}
                className="rounded-lg object-cover shadow-lg"
                data-ai-hint={dataAnalyticsImage1.imageHint}
              />
            )}
          </AnimatedItem>
          <AnimatedItem from="right">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Data Analysis
            </h2>
            <p className="mt-6 text-muted-foreground">
              We excel in data analysis by leveraging advanced tools and methodologies to extract meaningful insights from your datasets. Our process involves data collection, cleaning, analysis, and visualization, enabling you to make informed decisions, identify trends, and uncover valuable opportunities for your business.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our process involves thorough data collection, cleaning, and exploration, followed by advanced statistical analysis and modeling. We then visualize the results in clear, intuitive formats, facilitating easy interpretation and communication of findings. Our experienced team ensures accuracy and reliability, providing valuable recommendations based on data-driven insights.
            </p>
          </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Data Collection & Integration</h3>
            <p className="text-muted-foreground">
            At Primary Vision, we collect data from diverse sources such as CRM, ERP, websites, and IoT devices. Our approach ensures seamless data extraction and consolidation into a centralized system. This unified data foundation enables a 360-degree view of business operations, facilitating accurate analysis and decision-making. We utilize automated data pipelines to streamline data integration, reducing manual effort and errors. By bringing data from various channels into a single source, businesses gain access to consistent, real-time insights. This process enhances data accuracy, accessibility, and efficiency, allowing for faster, data-driven strategies.
            </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedItem from="left">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Data Visualization & Reporting</h3>
                <p className="mt-4 text-muted-foreground">
                At Primary Vision, we transform complex data into interactive dashboards and reports using charts, graphs, and key metrics. Our visualizations present critical information in a clear, concise, and easy-to-understand format, enabling stakeholders to grasp insights at a glance. We leverage tools like Power BI, Tableau, and custom dashboards to create real-time, dynamic reports. These visual representations simplify decision-making, highlight trends, and track key performance indicators (KPIs), empowering businesses to make data-driven choices with confidence.
                </p>
            </AnimatedItem>
            <AnimatedItem from="right" className="flex justify-center">
                {dataAnalyticsImage2 && (
                <Image
                    src={dataAnalyticsImage2.imageUrl}
                    alt={dataAnalyticsImage2.description}
                    width={600}
                    height={400}
                    className="rounded-lg object-cover shadow-lg"
                    data-ai-hint={dataAnalyticsImage2.imageHint}
                />
                )}
            </AnimatedItem>
        </div>

        <AnimatedSection from="bottom" className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">Predictive Analytics & Forecasting</h3>
            <p className="text-muted-foreground">
            At Primary Vision, we harness the power of AI-driven models to predict future trends and business outcomes. By analyzing historical data and identifying patterns, our predictive analytics enable companies to anticipate changes and seize new opportunities. Our advanced forecasting tools provide data-backed projections for sales, customer behavior, and market trends. This allows businesses to make proactive, informed decisions, reduce risks, and stay ahead of industry shifts, driving long-term growth and competitiveness.
            </p>
        </AnimatedSection>

        <AnimatedSection from="bottom" className="space-y-4 bg-secondary/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4">Benefits of Data Analysis</h3>
            <div className="space-y-4">
                <p className="text-muted-foreground">
                At Primary Vision, we provide real-time, data-driven insights that empower businesses to make smarter, faster decisions. By identifying bottlenecks and inefficiencies, we help streamline workflows, reduce wastage, and enhance overall operational efficiency.
                </p>
                <p className="text-muted-foreground">
                <strong>Increased Revenue & Personalized Customer Experience:</strong> Our advanced analytics uncover market trends and customer behavior patterns, enabling you to target high-impact opportunities for revenue growth. By leveraging customer insights, businesses can offer personalized products and services, enhancing customer satisfaction and loyalty.
                </p>
                <p className="text-muted-foreground">
                <strong>Reduced Risks & Forecast Accuracy:</strong> With our predictive analytics and forecasting models, businesses can anticipate future scenarios and mitigate risks before they occur. This proactive planning approach boosts forecast accuracy and enables companies to stay ahead of industry shifts with confidence.
                </p>
            </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
