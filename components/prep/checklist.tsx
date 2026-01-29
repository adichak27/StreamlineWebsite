"use client"

import { motion } from "framer-motion"
import { CheckSquare } from "lucide-react"

const checklistItems = [
  {
    title: "Your TikTok @username",
    description: "We'll review your profile to give personalized feedback.",
  },
  {
    title: "What niche you're in (or want to be in)",
    description: "Helps us understand your target market and product opportunities.",
  },
  {
    title: "How much time you have per week",
    description: "So we can create a realistic livestream schedule for your 1:1 coaching.",
  },
  {
    title: "Your goal for the next 30 days",
    description: "Specific goals help us create a focused action plan.",
  },
  {
    title: "Your biggest blocker right now",
    description: "What's holding you back? We'll address it on the call.",
  },
]

export function PrepChecklist() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Pre-Call Checklist
            </h2>
            <p className="mt-4 text-muted-foreground">
              Have these ready before your call so we can dive straight in.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {checklistItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-start gap-4 rounded-xl border border-border/40 bg-card p-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10">
                  <CheckSquare className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
