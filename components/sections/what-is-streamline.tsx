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
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Streamline Actually Is
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              No fluff. No guru tactics. Actual 1:1 help and a proven system that works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 space-y-4"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-4 rounded-xl border border-border/40 bg-card p-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
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
