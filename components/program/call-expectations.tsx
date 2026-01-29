"use client"

import { motion } from "framer-motion"
import { Video, MessageSquare, Pencil } from "lucide-react"

const expectations = [
  {
    icon: Video,
    title: "Must Post Consistently",
    description: "Success requires action. We expect you to create and post content regularly according to your schedule.",
  },
  {
    icon: MessageSquare,
    title: "Must Communicate",
    description: "Ask questions, share wins, report challenges. The more you engage, the more value you'll get.",
  },
  {
    icon: Pencil,
    title: "Must Take Feedback",
    description: "Be open to coaching. We'll give you direct, actionable feedback — and we expect you to implement it.",
  },
]

export function CallExpectations() {
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
            What We Expect From You
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Streamline works when you work. Here&apos;s what we ask of every member.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {expectations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-2xl border border-border/40 bg-card p-6 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
