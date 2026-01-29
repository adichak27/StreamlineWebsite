"use client"

import { motion } from "framer-motion"
import { Users, Layout, Zap, HelpCircle } from "lucide-react"

const reasons = [
  {
    icon: Users,
    title: "Support + Accountability",
    description: "You're never alone. Weekly calls, community access, and coaches who actually respond when you need help.",
  },
  {
    icon: Layout,
    title: "Simple Frameworks",
    description: "No complicated theories. Just proven templates and checklists you can follow step-by-step.",
  },
  {
    icon: Zap,
    title: "Fast Feedback Loops",
    description: "Don't wait weeks to know if something's working. Get direct feedback and iterate quickly.",
  },
  {
    icon: HelpCircle,
    title: "No Guessing",
    description: "Every decision is backed by data and experience. We've seen what works — and what doesn't.",
  },
]

export function WhyStreamlineWorks() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Streamline Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The difference between struggling alone and succeeding with support
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-2xl border border-border/40 bg-card p-6 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
