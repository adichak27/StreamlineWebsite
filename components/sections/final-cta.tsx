"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Target, ArrowRight } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="relative bg-background py-20 sm:py-28 overflow-hidden">
      {/* Gradient overlays - all corners */}
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-primary/10 via-primary/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 px-6 py-16 sm:px-12 sm:py-20"
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 blur-3xl" />
          </div>

          <div className="relative text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Show up to your call ready — and we&apos;ll map your exact plan.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Your first step toward consistent TikTok Shop sales starts with one conversation.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/prep">
                  Pre-Call Prep
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
                <a href="https://form.typeform.com/to/C2ruNSz7#ref=adi" target="_blank" rel="noopener noreferrer">
                  Apply for Streamline
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
