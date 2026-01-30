"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, User } from "lucide-react"

const coaches = [
  {
    name: "Sophia",
    role: "Chief Operating Officer (COO) & Director of Enrollment",
    specialty: "Operations & Enrollment",
  },
  {
    name: "Azam",
    role: "1:1 Coach",
    specialty: "Live Streaming & High-Volume Sales",
  },
  {
    name: "Michael",
    role: "1:1 Coach",
    specialty: "Live Streaming and Bilingual Coaching",
  },
  {
    name: "Anastasia",
    role: "Customer Success Manager",
    specialty: "Client Support & Success",
  },
  {
    name: "Ethan",
    role: "Group Coach",
    specialty: "Rapid Growth & Top Performance",
  },
  {
    name: "Preston",
    role: "Group Coach",
    specialty: "Lives & High-Performing Shop Videos",
  },
]

export function CoachesPreviewSection() {
  return (
    <section id="coaches" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Coaches and Staff
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn from people who&apos;ve actually built successful TikTok Shop businesses
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group rounded-2xl border border-border/40 bg-card p-6 transition-all hover:border-primary/40"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                <User className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{coach.name}</h3>
              <p className="text-sm text-primary">{coach.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href="/coaches">
              Meet the Full Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
