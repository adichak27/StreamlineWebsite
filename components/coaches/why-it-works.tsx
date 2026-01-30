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
    <section className="relative bg-gradient-to-b from-background via-primary/2 to-primary/5 py-20 sm:py-28 overflow-hidden">
      {/* Soft teal radial glow - center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="h-[750px] w-[750px] rounded-full blur-[160px] opacity-40"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.07) 0%, oklch(0.75 0.15 185 / 0.03) 50%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Gradient overlay - center, more subtle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary/4 via-primary/2 to-primary/4 blur-3xl opacity-30" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Why Streamline Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            The difference between struggling alone and succeeding with support
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: 0.12 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card p-6 text-center shadow-sm shadow-primary/5"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/20">
                <reason.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
