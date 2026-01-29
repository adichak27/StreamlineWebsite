"use client"

import { motion } from "framer-motion"
import { Settings, Search, Clapperboard, RefreshCw, TrendingUp } from "lucide-react"

const weeks = [
  {
    week: "Week 1",
    title: "Setup + Product Research",
    icon: Settings,
    items: [
      "Complete onboarding and account setup",
      "Learn the product research framework",
      "Score and evaluate potential products",
      "Select your first product to test",
    ],
  },
  {
    week: "Week 2",
    title: "Content System + Hooks",
    icon: Clapperboard,
    items: [
      "Master the hook formulas that stop the scroll",
      "Build your script templates",
      "Create your content calendar",
      "Go live for your first product",
    ],
  },
  {
    week: "3-4",
    title: "1:1 Coaching + Iteration",
    icon: RefreshCw,
    items: [
      "Analyze livestream performance data",
      "Get 1:1 feedback on your livestreams",
      "Refine hooks and scripts based on results",
      "Double down on what's working",
    ],
  },
  {
    week: "Week 5+",
    title: "Scaling Winners + Consistency",
    icon: TrendingUp,
    items: [
      "Identify repeatable winning patterns",
      "Scale successful content formats",
      "Expand to additional products",
      "Build sustainable daily output systems",
    ],
  },
]

export function ProgramTimeline() {
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
            Your Week-by-Week Roadmap
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Clear milestones so you always know what to focus on
          </p>
        </motion.div>

        <div className="mt-16 space-y-8">
          {weeks.map((week, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-2xl border border-border/40 bg-card p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="flex items-center gap-4 sm:w-48 sm:flex-col sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <week.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">{week.week}</span>
                    <h3 className="text-lg font-semibold text-foreground">{week.title}</h3>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {week.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
