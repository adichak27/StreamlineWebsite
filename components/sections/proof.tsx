"use client"

import { motion } from "framer-motion"
import { TrendingUp, Calendar, BarChart3, Repeat } from "lucide-react"

const wins = [
  {
    icon: TrendingUp,
    headline: "First sales within 14 days",
    description: "New creators seeing their first TikTok Shop sales within two weeks of starting.",
  },
  {
    icon: Calendar,
    headline: "Consistent daily posting system",
    description: "Building sustainable habits that compound over time.",
  },
  {
    icon: BarChart3,
    headline: "Improved conversion rate",
    description: "Content that actually turns viewers into paying customers.",
  },
  {
    icon: Repeat,
    headline: "Found repeatable product strategy",
    description: "A framework for finding winners again and again.",
  },
]

export function ProofSection() {
  return (
    <section className="relative bg-gradient-to-b from-secondary/30 via-secondary/20 to-background py-20 sm:py-28 overflow-hidden">
      {/* Gradient overlay - center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="h-[700px] w-[700px] rounded-full bg-gradient-to-r from-primary/8 via-primary/4 to-primary/8 blur-3xl opacity-60" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Client Wins
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Real results from creators in the program
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wins.map((win, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/20">
                <win.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{win.headline}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{win.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center text-sm text-muted-foreground"
        >
          Results vary. Success depends on effort and consistency.
        </motion.p>
      </div>
    </section>
  )
}
