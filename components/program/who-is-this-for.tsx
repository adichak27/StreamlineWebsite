"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const forYou = [
  "You want to build a real business on TikTok Shop",
  "You're willing to go live consistently and take 1:1 feedback",
  "You have 10-15 hours a week to commit",
  "You're coachable and ready to follow a proven livestream system",
  "You want personalized 1:1 coaching and structure, not just information",
]

const notForYou = [
  "You're looking for get-rich-quick schemes",
  "You're not willing to go live consistently",
  "You expect results without putting in work",
  "You're not open to 1:1 feedback or changing your approach",
  "You just want to watch livestreams without taking action",
]

export function WhoIsThisFor() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            className="rounded-2xl border border-primary/40 bg-card p-8"
          >
            <h3 className="text-xl font-semibold text-foreground">This is for you if...</h3>
            <ul className="mt-6 space-y-4">
              {forYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
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
            className="rounded-2xl border border-border/40 bg-card p-8"
          >
            <h3 className="text-xl font-semibold text-foreground">This is NOT for you if...</h3>
            <ul className="mt-6 space-y-4">
              {notForYou.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/10">
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
