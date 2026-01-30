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
              Watch the 3-Minute Overview
            </h2>
            <p className="mt-4 text-muted-foreground">
              A quick introduction to what Streamline is and how it works.
            </p>
          </div>

          <div className="mt-8">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/40 bg-card">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/ujYemcE1ehU"
                title="Streamline 3-Minute Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
