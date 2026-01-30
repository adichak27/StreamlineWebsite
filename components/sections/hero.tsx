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
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background - primary element */}
      <video
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source src="/tiktok_background.mp4" type="video/mp4" />
      </video>
      
      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-left -translate-x-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4.5 }}
          >
            <span className="inline-block rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 via-primary/15 to-primary/20 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              1:1 Livestream Coaching Program
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4.6 }}
            className="mt-8 text-balance text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] sm:text-5xl lg:text-6xl"
          >
            Streamline — The complete system for winning on TikTok Shop.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 4.8 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row"
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
          transition={{ duration: 0.5, delay: 4.9 }}
          className="mt-20 -translate-x-4"
        >
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card/80 via-card/60 to-card/80 p-6 backdrop-blur-sm shadow-lg shadow-primary/5">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {trustItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 via-primary/15 to-primary/20">
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
