'use client';

import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";

const threats = [
  { type: "DDoS Attack", severity: "Critical", status: "Neutralized", ip: "198.51.100.14" },
  { type: "Phishing Attempt", severity: "High", status: "Blocked", ip: "203.0.113.25" },
  { type: "Malware Detected", severity: "High", status: "Quarantined", ip: "192.0.2.8" },
  { type: "SQL Injection", severity: "Medium", status: "Blocked", ip: "198.18.0.201" },
  { type: "Brute Force", severity: "Low", status: "Rate Limited", ip: "198.51.100.55" },
];

const chartData = [
  { threat: "DDoS", count: 12 },
  { threat: "Phishing", count: 34 },
  { threat: "Malware", count: 22 },
  { threat: "SQLi", count: 8 },
  { threat: "Brute Force", count: 45 },
];

const chartConfig = {
  count: {
    label: "Threats",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function ThreatDashboard() {
  const mapImage = placeholderImages.find(p => p.id === "threat-map");

  const getBadgeVariant = (severity: string) => {
    switch (severity) {
      case "Critical":
        return "destructive";
      case "High":
        return "secondary";
      case "Medium":
        return "default";
      default:
        return "outline";
    }
  };

  return (
    <section id="dashboard" className="py-20 sm:py-32 bg-secondary/20">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Real-Time Threat Dashboard</h2>
          <p className="mt-4 text-lg text-muted-foreground">AI-powered insights into global cybersecurity threats.</p>
        </div>
        <div className="grid gap-8 lg:grid-cols-5">
          <Card className="lg:col-span-3 glassmorphic">
            <CardHeader>
              <CardTitle>Global Threat Landscape</CardTitle>
            </CardHeader>
            <CardContent>
              {mapImage && (
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  width={1200}
                  height={600}
                  className="rounded-lg object-cover w-full h-auto"
                  data-ai-hint={mapImage.imageHint}
                />
              )}
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 glassmorphic">
            <CardHeader>
              <CardTitle>Threats by Type (Last 24h)</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="threat"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    stroke="hsl(var(--muted-foreground))"
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent indicator="dot" />}
                  />
                  <Bar dataKey="count" fill="var(--color-count)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8 glassmorphic">
          <CardHeader>
            <CardTitle>Live Threat Feed</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Threat Type</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Source IP</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {threats.map((threat, index) => (
                  <TableRow key={index} className="hover:bg-primary/5">
                    <TableCell>{threat.type}</TableCell>
                    <TableCell>
                      <Badge variant={getBadgeVariant(threat.severity)}>
                        {threat.severity}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-accent">{threat.status}</TableCell>
                    <TableCell className="font-mono text-muted-foreground">{threat.ip}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
