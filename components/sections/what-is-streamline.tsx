"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  "This is a structured coaching system — not random tips or courses",
  "You'll get clear steps + direct feedback every week",
  "We help you avoid the trial and error that wastes months",
  "Real support from people who've built successful TikTok Shop businesses",
]

export function WhatIsStreamlineSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/8 py-20 sm:py-28 overflow-hidden">
      {/* Soft teal radial glow - center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="h-[800px] w-[800px] rounded-full blur-[150px] opacity-40"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.08) 0%, oklch(0.75 0.15 185 / 0.04) 50%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Gradient overlay - center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl opacity-50" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Streamline Actually Is
            </h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              No fluff. No guru tactics. Actual 1:1 help and a proven system that works.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-12 space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 * index,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="flex items-start gap-4 rounded-xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card p-4 shadow-sm shadow-primary/5"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-primary/15 to-primary/20">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
