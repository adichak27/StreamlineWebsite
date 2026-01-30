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
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-primary/7 py-20 sm:py-28 overflow-hidden">
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
        <div className="h-[700px] w-[700px] rounded-full bg-gradient-to-r from-primary/8 via-primary/4 to-primary/8 blur-3xl opacity-60" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Client Wins
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Real results from creators in the program
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {wins.map((win, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.85, rotateZ: -5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateZ: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/20">
                <win.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{win.headline}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{win.description}</p>
            </motion.div>
          ))}
        </motion.div>

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
