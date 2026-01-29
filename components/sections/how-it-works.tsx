"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, Search, Clapperboard, MessageSquare, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Apply + Onboarding",
    description: "Quick application to make sure we're a good fit, then a smooth onboarding process.",
  },
  {
    number: "02",
    icon: Search,
    title: "Choose Your Product",
    description: "Use our proven framework to find products with real demand and profit potential.",
  },
  {
    number: "03",
    icon: Clapperboard,
    title: "Master Livestream Strategy",
    description: "Get 1:1 coaching on hooks, scripts, and conversion strategies that turn viewers into buyers during your livestreams.",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "1:1 Coaching + Feedback",
    description: "Weekly 1:1 coaching sessions with direct feedback on your livestreams to refine your approach and fix what's not working.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Scale Your Winners",
    description: "Double down on what works and build a repeatable system for consistent growth.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A clear path from zero to consistent TikTok Shop sales
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 hidden h-full w-px bg-border md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative flex gap-6"
                >
                  <div className="relative hidden md:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 rounded-2xl border border-border/40 bg-card p-6 transition-colors hover:border-primary/40">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 md:hidden">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-primary">{step.number}</span>
                          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
