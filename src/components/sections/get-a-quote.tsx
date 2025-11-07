'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Shield, Star, Package } from 'lucide-react';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';

// Zod Schema remains the same
const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters.'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters.'),
  businessName: z.string().min(2, 'Business name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits.'),
  typeOfInquiry: z.string().min(5, 'Please specify the type of inquiry.'),
});

type FormValues = z.infer<typeof formSchema>;

// Features array remains the same
const features = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Fast & Easy',
    description: 'Get fast and easy protection against all email and web threats',
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: 'Top Rated',
    description: '4.9 stars based on 10,000 reviews.',
  },
  {
    icon: <Package className="h-6 w-6" />,
    title: 'Customized & Flexible',
    description: 'Tailored and flexible solutions that suit you',
  },
];

const partnerLogos = [
    { id: 'eutelsat-logo' },
    { id: 'medicus-it-logo' },
    { id: 'nostra-logo' },
];

export default function GetAQuote() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      businessName: '',
      email: '',
      phone: '',
      typeOfInquiry: '',
    },
  });

  // Get the submission state to disable the button
  const { isSubmitting } = form.formState;

  // 🐛 UPDATED onSubmit FUNCTION to send data to the API route
  async function onSubmit(values: FormValues) {
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        // Handle server-side errors (e.g., email failed to send)
        throw new Error('Failed to send quote request. Server error.');
      }

      // Success Toast
      toast({
        title: 'Quote Requested! 🚀',
        description: 'Thank you! We will be in touch with you shortly.',
        variant: 'default',
      });
      form.reset();

    } catch (error) {
      console.error('Submission Error:', error);
      // Error Toast
      toast({
        title: 'Submission Failed 😢',
        description: 'There was an issue sending your request. Please check your connection or contact us directly.',
        variant: 'destructive',
      });
    }
  }

  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold tracking-tight">Request a Pricing Quote</h1>
                <p className="mt-4 text-muted-foreground">
                    So we can provide you with an accurate quote, please leave your contact information, and we will be in touch.
                </p>
            </div>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="bg-foreground text-background rounded-full p-3 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-cyan-100 to-emerald-200 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-center mb-8">Enter Your Details Below</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>First Name *</FormLabel>
                        <FormControl>
                            <Input placeholder="First Name" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Last Name *</FormLabel>
                        <FormControl>
                            <Input placeholder="Last Name" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Business Name" {...field} className="bg-white" />
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
                      <FormLabel>Business Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="Business Email Address" {...field} className="bg-white" />
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
                        <Input placeholder="Phone Number" {...field} className="bg-white" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                    control={form.control}
                    name="typeOfInquiry"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Type of Inquiry *</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter your Inquiry" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-foreground hover:bg-foreground/90 text-background text-lg py-7 rounded-full"
                    disabled={isSubmitting} // 🐛 Disabled when submitting
                >
                  {isSubmitting ? 'SENDING...' : 'REQUEST A QUOTE'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}