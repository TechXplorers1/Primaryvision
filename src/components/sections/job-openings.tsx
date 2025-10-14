'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import React from "react";
  
const jobOpenings = [
    {
        title: "Sr. DevOps Engineer",
        location: "Hyderabad",
        type: "Full Time",
        tags: ["DevOps", "Kubernetes", "AWS", "CI/CD"],
        description: "We are looking for an experienced DevOps Engineer to join our team. You will be responsible for managing our cloud infrastructure and automating our development pipelines."
    },
    {
        title: "Full Stack Developer",
        location: "Remote",
        type: "Full Time",
        tags: ["React", "Node.js", "TypeScript", "GraphQL"],
        description: "Join our development team to build and maintain our web applications. You should have a strong background in both front-end and back-end development."
    },
    {
        title: "Cyber Security Analyst",
        location: "Hyderabad",
        type: "Full Time",
        tags: ["Security", "SIEM", "Firewall", "Penetration Testing"],
        description: "We are seeking a Cyber Security Analyst to monitor our systems for threats and vulnerabilities, and to respond to security incidents."
    },
    {
        title: "UX/UI Designer",
        location: "Remote",
        type: "Part Time",
        tags: ["Figma", "Adobe XD", "User Research", "Prototyping"],
        description: "We are looking for a creative UX/UI Designer to design intuitive and engaging user experiences for our products."
    }
];

const formSchema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email address.'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits.'),
    resume: z.any().refine(files => files?.length === 1, 'Resume is required.'),
});

function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            resume: undefined,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: 'Application Sent!',
            description: `Your application for ${jobTitle} has been submitted.`,
        });
        form.reset();
    }
    
    const fileRef = form.register("resume");

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                                <Input placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                                <Input placeholder="(123) 456-7890" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Resume *</FormLabel>
                        <FormControl>
                            <Input type="file" {...fileRef} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button type="submit">Submit Application</Button>
                </DialogFooter>
            </form>
        </Form>
    );
}

export default function JobOpenings() {
    return (
        <section id="job-openings" className="py-20 sm:py-32 bg-secondary/20">
            <div className="container max-w-screen-xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Current Openings</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Explore our current job openings and find your next career opportunity.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {jobOpenings.map((job, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger>
                                <div className="text-left">
                                    <h3 className="font-semibold text-lg">{job.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="h-4 w-4"/>
                                            <span>{job.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Briefcase className="h-4 w-4"/>
                                            <span>{job.type}</span>
                                        </div>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {job.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-6">{job.description}</p>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button>
                                            Apply Now
                                            <motion.div
                                                animate={{ translateX: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                                            >
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </motion.div>
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Apply for {job.title}</DialogTitle>
                                            <DialogDescription>
                                                Fill out the form below to submit your application.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <JobApplicationForm jobTitle={job.title} />
                                    </DialogContent>
                                </Dialog>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                </div>
            </div>
        </section>
    );
}