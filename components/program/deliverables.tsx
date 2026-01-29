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
  { icon: Search, title: "Product Research Checklist + Score System" },
  { icon: Lightbulb, title: "Content Hook Formulas" },
  { icon: FileText, title: "Script Templates" },
  { icon: Calendar, title: "Livestream Schedule Strategy" },
  { icon: Store, title: "Store Setup Guidance" },
  { icon: Pencil, title: "Creative Feedback + Revisions" },
  { icon: Video, title: "Weekly Calls + Community" },
  { icon: CheckCircle, title: "Accountability Check-ins" },
]

export function ProgramDeliverables() {
  return (
    <section className="bg-background py-20 sm:py-28">
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
            Everything included in your Streamline membership
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * index }}
              className="flex items-center gap-3 rounded-xl border border-border/40 bg-card p-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="font-medium text-foreground">{item.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
