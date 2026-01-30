"use client"

import { motion } from "framer-motion"
import { Users } from "lucide-react"

export function CoachesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-secondary/20 py-20 sm:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 px-4 py-1.5 backdrop-blur-sm">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">The Team</span>
          </div>

          <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Meet the Coaches and Staff
          </h1>

          <p className="mt-6 text-pretty text-lg text-muted-foreground">
            Learn from people who&apos;ve actually built successful TikTok Shop businesses — 
            not theorists or gurus, but practitioners who know what works.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
