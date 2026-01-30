"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import { ClipboardCheck, Search, Clapperboard, MessageSquare, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Apply + Onboarding",
    description: "Quick application to make sure we're a good fit, then a smooth onboarding process.",
  },
  {
    number: "02",
    icon: Search,
    title: "Choose Your Product",
    description: "Use our proven framework to find products with real demand and profit potential.",
  },
  {
    number: "03",
    icon: Clapperboard,
    title: "Master Livestream Strategy",
    description: "Get 1:1 coaching on hooks, scripts, and conversion strategies that turn viewers into buyers during your livestreams.",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "1:1 Coaching + Feedback",
    description: "Weekly 1:1 coaching sessions with direct feedback on your livestreams to refine your approach and fix what's not working.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Scale Your Winners",
    description: "Double down on what works and build a repeatable system for consistent growth.",
  },
]

export function HowItWorksSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Seek to 2 seconds and pause to show a static frame
      video.currentTime = 2
      video.addEventListener('loadeddata', () => {
        video.currentTime = 2
        video.pause()
      })
    }
  }, [])

  return (
    <section 
      id="how-it-works" 
      className="relative overflow-hidden bg-gradient-to-b from-background via-primary/3 to-primary/6 py-20 sm:py-28"
    >
      {/* Video frame at 0:02 as background image */}
      <video
        ref={videoRef}
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0 opacity-40 translate-x-[30%]"
      >
        <source src="/tiktok_animated.mp4" type="video/mp4" />
      </video>
      
      {/* Soft teal radial glow - center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div 
          className="h-[700px] w-[700px] rounded-full blur-[140px] opacity-35"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.06) 0%, oklch(0.75 0.15 185 / 0.03) 50%, transparent 100%)'
          }}
        />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-[2]">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            A clear path from zero to consistent TikTok Shop sales
          </motion.p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            {/* Connecting line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute left-8 top-0 hidden h-full w-px bg-border md:block origin-top"
            />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.15 * index,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative flex gap-6"
                >
                  <div className="relative hidden md:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-card via-card/95 to-card shadow-sm shadow-primary/5">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-1 rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/20 md:hidden">
                        <step.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-primary">{step.number}</span>
                          <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
