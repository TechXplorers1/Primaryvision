import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
    {
        title: "Faster time-to-market",
        description: "Faster time-to-market plays a crucial role in accelerating product launches, enabling businesses to stay ahead of the competition. By reducing the time required to develop, test, and release products, companies can respond swiftly to shifting consumer preferences and emerging market trends. This agility allows organizations to seize new opportunities, capitalize on market demand, and establish a strong presence before competitors. As a result, businesses can capture early adopters, build brand loyalty, and generate revenue more quickly, which ultimately enhances their overall competitiveness."
    },
    {
        title: "Significant Cost Advantage",
        description: "A significant cost advantage empowers organizations to reduce expenses while maintaining operational efficiency. It enables businesses to offer competitive pricing, attracting more customers and boosting profitability. By minimizing production and operational costs, companies can allocate resources more effectively. This allows them to strengthen their market position and achieve sustainable growth over time."
    },
    {
        title: "Quick and reliable delivery mechanism",
        description: "A quick and reliable delivery mechanism ensures timely and consistent fulfillment of customer orders. It enables businesses to meet deadlines, reduce delays, and build customer trust. By streamlining logistics and supply chain processes, companies can improve operational efficiency. This approach enhances customer satisfaction and fosters long-term loyalty and repeat business."
    },
    {
        title: "Shortened Development Cycles",
        description: "Shortened development cycles reduce time-to-market, enabling businesses to launch products faster. This agility allows companies to respond quickly to changing market demands and customer needs. By accelerating development, organizations can capitalize on emerging opportunities and gain a competitive edge. Faster iteration also supports continuous improvement, leading to higher product quality and customer satisfaction."
    },
    {
        title: "Access to diversified pool of skilled professionals",
        description: "Access to a diversified pool of skilled professionals allows companies to leverage specialized expertise and drive innovation. It enables organizations to develop cutting-edge products and services, keeping them ahead of industry trends. By tapping into a variety of skill sets, businesses can address complex challenges with creative solutions. This agility supports faster project execution and enhances overall competitiveness in the market."
    }
]


export default function SourcingBenefits() {
  return (
    <section className="py-20 sm:py-32 bg-secondary/50">
        <div className="container max-w-screen-xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Outsourcing Benefit</h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
                {benefits.map(benefit => (
                    <Card key={benefit.title}>
                        <CardHeader>
                            <CardTitle>{benefit.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{benefit.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  )
}
