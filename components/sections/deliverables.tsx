"use client"

import { motion } from "framer-motion"
import {
  Search,
  Lightbulb,
  FileText,
  Calendar,
  Store,
  Pencil,
  Video,
  CheckCircle,
} from "lucide-react"

const deliverables = [
  {
    icon: Search,
    title: "Product Research Checklist + Score System",
    description: "Find products with real demand using our proven evaluation framework.",
  },
  {
    icon: Lightbulb,
    title: "Content Hook Formulas",
    description: "Attention-grabbing hooks that stop the scroll and drive engagement.",
  },
  {
    icon: FileText,
    title: "Script Templates",
    description: "Fill-in-the-blank scripts that convert viewers into buyers.",
  },
  {
    icon: Calendar,
    title: "Livestream Schedule Strategy",
    description: "When and how often to go live for maximum reach and sales.",
  },
  {
    icon: Store,
    title: "Store Setup Guidance",
    description: "TikTok Shop basics done right from day one.",
  },
  {
    icon: Pencil,
    title: "Creative Feedback + Revisions",
    description: "Direct feedback on your content with actionable improvements.",
  },
  {
    icon: Video,
    title: "Weekly 1:1 Coaching Calls",
    description: "Personalized 1:1 coaching sessions focused on your livestream performance.",
  },
  {
    icon: CheckCircle,
    title: "Accountability Check-ins",
    description: "Stay on track with regular progress reviews.",
  },
]

export function DeliverablesSection() {
  return (
    <section id="what-you-get" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What You Get
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to build a profitable TikTok Shop business
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/40 hover:bg-card/80"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
