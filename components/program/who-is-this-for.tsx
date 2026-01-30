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
    <section className="relative bg-gradient-to-br from-primary/12 via-primary/8 to-primary/10 py-20 sm:py-28 overflow-hidden">
      {/* Enhanced teal radial glow - center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="h-[1000px] w-[1000px] rounded-full blur-[200px] opacity-60"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.15) 0%, oklch(0.75 0.15 185 / 0.10) 40%, oklch(0.75 0.15 185 / 0.05) 70%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Additional glow layers for depth */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="h-[1200px] w-[1200px] rounded-full blur-[180px] opacity-30"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.08) 0%, transparent 60%)'
          }}
        />
      </div>
      
      {/* Gradient overlays - all corners for enhanced glow */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/15 via-primary/8 to-transparent blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-primary/15 via-primary/8 to-transparent blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/15 via-primary/8 to-transparent blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-primary/15 via-primary/8 to-transparent blur-3xl opacity-50 pointer-events-none" />
      
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
            Is Streamline Right for You?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            We want to make sure this is a good fit for both of us
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.7, 
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card/95 to-card p-8 shadow-lg shadow-primary/10"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-xl font-semibold text-foreground"
            >
              This is for you if...
            </motion.h3>
            <ul className="mt-6 space-y-4">
              {forYou.map((item, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-primary/15 to-primary/20">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.7, 
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card p-8 shadow-sm shadow-primary/5"
          >
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-xl font-semibold text-foreground"
            >
              This is NOT for you if...
            </motion.h3>
            <ul className="mt-6 space-y-4">
              {notForYou.map((item, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-destructive/20 via-destructive/15 to-destructive/20">
                    <X className="h-4 w-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
