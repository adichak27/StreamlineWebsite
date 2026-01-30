"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { CheckSquare, Target } from "lucide-react"

const checklistItems = [
  "What niche you're in (or want to be in)",
  "How much time you have per week to commit",
  "Your goal for the next 30 days",
  "Your biggest blocker right now",
  "Laptop with camera on and ready",
  "A quiet space for the call",
]

export function PreCallChecklistSection() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What to Prepare Before Your Call
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Come prepared and we&apos;ll make every minute count
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 rounded-2xl border border-border/40 bg-card p-8"
          >
            <ul className="space-y-4">
              {checklistItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex items-center gap-3"
                >
                  <CheckSquare className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 text-center"
            >
              <Button size="lg" asChild>
                <Link href="/prep">
                  <Target className="mr-2 h-4 w-4" />
                  Confirm My Call
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
