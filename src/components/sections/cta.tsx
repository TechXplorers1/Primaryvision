'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="bg-primary/10 py-20 sm:py-32">
      <div className="container max-w-screen-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Let's Talk and Meet
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          If you have questions, suggestions, ideas, or just need further information about Primary Vision and our services, please do not hesitate to contact us in the way most convenient for you.
        </p>
        <div className="mt-8">
            <Button size="lg" asChild>
                <Link href="/get-a-quote">
                    Enquire Now
                    <motion.div
                    animate={{ translateX: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                    >
                    <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
