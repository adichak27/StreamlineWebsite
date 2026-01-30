"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Target, ArrowRight } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="relative bg-gradient-to-b from-background via-primary/3 to-primary/6 py-20 sm:py-28 overflow-hidden">
      {/* Soft teal radial glow - center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="h-[900px] w-[900px] rounded-full blur-[180px] opacity-45"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.10) 0%, oklch(0.75 0.15 185 / 0.05) 50%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Gradient overlays - all corners */}
      <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tl from-primary/10 via-primary/5 to-transparent blur-3xl opacity-30 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 px-6 py-16 sm:px-12 sm:py-20"
        >
          {/* Background glow */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute inset-0 overflow-hidden"
          >
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 blur-3xl" />
          </motion.div>

          <div className="relative text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Show up to your call ready — and we&apos;ll map your exact plan.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
            >
              Your first step toward consistent TikTok Shop sales starts with one conversation.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
