"use client"

import { motion } from "framer-motion"
import { FileEdit } from "lucide-react"

export function ApplyHero() {
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
            <FileEdit className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Application</span>
          </div>

          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Apply for Streamline
          </h1>

          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Fill out the short application below. We review every submission 
            and will be in touch within 24-48 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
