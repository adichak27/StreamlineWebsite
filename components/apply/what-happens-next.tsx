"use client"

import { motion } from "framer-motion"
import { Send, Eye, CalendarCheck } from "lucide-react"

const steps = [
  {
    icon: Send,
    title: "Submit Your Application",
    description: "Fill out the form below with your information and goals.",
  },
  {
    icon: Eye,
    title: "We Review It",
    description: "Our team reviews every application within 24-48 hours.",
  },
  {
    icon: CalendarCheck,
    title: "Schedule Your Call",
    description: "If it's a good fit, we'll send you a link to book your call.",
  },
]

export function WhatHappensNext() {
  return (
    <section className="bg-secondary/30 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            What Happens After You Apply
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex items-start gap-4 rounded-xl border border-border/40 bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-primary">Step {index + 1}</span>
                </div>
                <h3 className="mt-1 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
