"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Target } from "lucide-react"

export function CoachesCTA() {
  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Learn from the Best?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Schedule your call and meet the team that&apos;ll help you build a successful TikTok Shop business.
          </p>

          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/prep">
                Pre-Call Prep
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
