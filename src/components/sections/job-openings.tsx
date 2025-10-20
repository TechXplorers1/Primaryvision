'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const MAX_FILE_SIZE = 5000000; // 5 MB in bytes
const ACCEPTED_FILE_TYPES = [
    "application/pdf", 
    "application/msword", // .doc
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // .docx
];

const formSchema = z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email address.'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits.'),
    
    resume: z.any()
      .refine((files) => files?.length === 1, 'Resume file is required.')
      .refine(
          (files) => files?.[0]?.size > 0, 
          'File cannot be empty.'
      )
      .refine(
          (files) => files?.[0]?.size <= MAX_FILE_SIZE, 
          'Max file size is 5MB.'
      )
      .refine(
          (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type), 
          'Only PDF or Word documents are accepted.'
      ),
});

type FormValues = z.infer<typeof formSchema>;

function ContactForm() {
    const { toast } = useToast();
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            resume: undefined,
        },
    });

    const { isSubmitting } = form.formState;

    async function onSubmit(values: FormValues) {
        const formData = new FormData();
        formData.append('fullName', values.fullName);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        
        if (values.resume?.[0]) {
            formData.append('resume', values.resume[0]);
        }

        try {
            const response = await fetch('/api/apply-job', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                // Enhanced error parsing to catch non-JSON errors (like HTML from a 500/404)
                const contentType = response.headers.get("content-type");
                
                if (contentType && contentType.includes("application/json")) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Server failed to process application.');
                } else {
                    const errorText = await response.text();
                    console.error('Non-JSON Error Response:', errorText);
                    throw new Error(`Server Error: Status ${response.status}. Please check API route.`);
                }
            }
            
            // Success Toast
            toast({
                title: 'Application Sent! 🚀',
                description: `Your application has been successfully submitted. We'll be in touch soon.`,
            });
            form.reset();

        } catch (error: any) {
            console.error('Submission Error:', error);
            toast({
                title: 'Submission Failed 😢',
                description: error.message || 'A network error occurred. Please try again.',
                variant: 'destructive',
            });
        }
    }
    
    const fileRef = form.register("resume");

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                
                {/* Full Name */}
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name *</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter Your Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                {/* Email Address */}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Enter Your Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                {/* Phone Number */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                                <Input type="tel" placeholder="Enter Your Phone Number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                {/* Resume Upload */}
                <FormField
                    control={form.control}
                    name="resume"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Upload Resume (PDF/DOCX, max 5MB) *</FormLabel>
                        <FormControl>
                            <Input type="file" accept=".pdf,.doc,.docx" {...fileRef} /> 
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                />
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending Application...
                        </>
                    ) : (
                        <>
                            SUBMIT APPLICATION
                            <motion.div
                                animate={{ translateX: [0, 3, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            >
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.div>
                        </>
                    )}
                </Button>
            </form>
        </Form>
    );
}

export default function CareerApplicationForm() {
    return (
        <section id="career-application" className="py-20 sm:py-32 bg-secondary/20">
            <div className="container max-w-screen-xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Join Our Team</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We are always looking for great talent. Send us your details and resume, and we'll be in touch.
                    </p>
                </div>
                
                <div className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-xl">
                    <h3 className="text-xl font-semibold mb-6 text-center">Submit Your Resume</h3>
                    <ContactForm />
                </div>
                
            </div>
        </section>
    );
}