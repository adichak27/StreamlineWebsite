"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const forYou = [
  "You want to build a real business on TikTok Shop",
  "You want personalized 1:1 coaching and structure, not just general information",
  "You have 10-15 hours a week to commit",
  "You're coachable and ready to follow a proven livestream system",
]

const notForYou = [
  "You're looking for get-rich-quick schemes",
  "You expect results without putting in work",
  "You're not open to 1:1 feedback or changing your approach",
  "You just want to watch education content without taking action",
]

export function WhoIsThisFor() {
  return (
    <section className="relative bg-secondary/30 py-20 sm:py-28 overflow-hidden">
      {/* Gradient overlays - bottom corners */}
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/10 via-primary/5 to-transparent blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-primary/10 via-primary/5 to-transparent blur-3xl opacity-40 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Is Streamline Right for You?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We want to make sure this is a good fit for both of us
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card/95 to-card p-8 shadow-lg shadow-primary/10"
          >
            <h3 className="text-xl font-semibold text-foreground">This is for you if...</h3>
            <ul className="mt-6 space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-primary/15 to-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card p-8 shadow-sm shadow-primary/5"
          >
            <h3 className="text-xl font-semibold text-foreground">This is NOT for you if...</h3>
            <ul className="mt-6 space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-destructive/20 via-destructive/15 to-destructive/20">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
