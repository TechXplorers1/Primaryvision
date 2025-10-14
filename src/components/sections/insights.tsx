'use client';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const insights = [
  {
    title: 'GitOps on Kubernetes: Deciding Between Argo CD and Flux',
    content:
      'Argo CD and Flux both have their uses, and both are pretty well maintained and have active communities. Similarities: Secrets Management, Webhook Receivers, Alerting and Notifications, Image Updates Automation Differences: Installation/Bootstrapping, Reconciliation...',
  },
  {
    title: 'Introduction to Kubernetes Components and K8s Architecture',
    content:
      'When you have hundreds to thousands of containers serving a lot of microservices, K8s allows you to monitor and manage (orchestrate) all those containers in an easy way allowing fault-tolerance, high availability, ...',
  },
   {
    title: 'Cloud Native Security Best Practices',
    content:
      'A deep dive into securing your cloud native applications, from container security to network policies and runtime security. Learn how to protect your modern stack.',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight">Insights</h2>
        </div>
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            className="w-full"
        >
            <CarouselContent>
                {insights.map((insight, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p-1 h-full">
                            <Card className="flex flex-col h-full">
                                <CardContent className="flex flex-col flex-grow p-6">
                                    <h3 className="text-xl font-semibold mb-4">{insight.title}</h3>
                                    <p className="text-muted-foreground flex-grow">{insight.content}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
