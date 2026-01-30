"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Search, FileText, Users, Target } from "lucide-react"
import { motion } from "framer-motion"

const trustItems = [
  { icon: Calendar, label: "1:1 Coaching Sessions" },
  { icon: Search, label: "Product Research System" },
  { icon: FileText, label: "Livestream Scripts" },
  { icon: Users, label: "Personalized Feedback" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              1:1 Livestream Coaching Program
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Everything you need to win on TikTok Shop — with a real system and real support.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-pretty text-lg text-muted-foreground sm:text-xl"
          >
            Streamline is a hands-on coaching program built to help creators pick winning products, 
            create content that converts, and scale consistently.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/prep">
                Pre-Call Prep
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto bg-transparent">
              <Link href="#overview">
                <Play className="mr-2 h-4 w-4" />
                Watch the 3-Minute Overview
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <div className="rounded-2xl border border-border/40 bg-card/50 p-6 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
