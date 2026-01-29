"use client"

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function VideoEmbed() {
  return (
    <section id="overview" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Watch the 90-Second Overview
            </h2>
            <p className="mt-4 text-muted-foreground">
              A quick introduction to what Streamline is and how it works.
            </p>
          </div>

          <div className="mt-8">
            {/* Video placeholder - replace with actual embed */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/40 bg-card">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary/20">
                  <Play className="h-8 w-8 text-primary" />
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Video placeholder</p>
                <p className="text-xs text-muted-foreground/60">Replace with your video embed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
