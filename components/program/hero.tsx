"use client"

import { motion } from "framer-motion"
import { BookOpen } from "lucide-react"

export function ProgramHero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Program Syllabus</span>
          </div>

          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Streamline System
          </h1>

          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            A structured roadmap from zero to consistent TikTok Shop sales. 
            No guessing, no wasted time — just clear steps with expert guidance.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
