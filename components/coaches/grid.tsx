"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const coaches = [
  {
    name: "Sophia",
    role: "Chief Operating Officer (COO) & Director of Enrollment",
    specialty: "Operations & Enrollment",
    bio: "Sophia is Streamline's Chief Operating Officer and Director of Enrollment, overseeing creator admissions and ensuring the program is reserved for individuals ready to execute at a high level.",
    helps: [
      "Assessing program alignment",
      "Strategic enrollment guidance",
      "Setting foundation for success",
      "Ensuring high-level execution",
    ],
  },
  {
    name: "Azam",
    role: "1:1 Coach",
    specialty: "Live Streaming & High-Volume Sales",
    bio: "Azam has been a TikTok Shop Affiliate for 2+ years. He's amassed over $1 million in GMV and was the number 1 live streamer for Goli in 2025.",
    helps: [
      "Mastering high-converting livestreams",
      "Scaling to top-tier performance",
      "Building consistent revenue streams",
      "Achieving record-breaking sales",
    ],
    socialLinks: {
      tiktok: "https://www.tiktok.com/@ecomazam?_r=1&_t=ZP-93ULWX7zrtH",
      youtube: "https://youtube.com/@ecomazam?si=rggFOAcurWgTtFLD",
      instagram: "https://www.instagram.com/ecomazam?igsh=bWs3bWkzY2cxbHc1",
    },
  },
  {
    name: "Michael",
    role: "1:1 Coach",
    specialty: "Live Streaming and Bilingual Coaching",
    bio: "Michael has been doing TikTok Shop since 2024. He's generating 700K GMV and teaches in both English and Spanish. He's coached multiple students in Spanish and has dominated markets in both languages.",
    helps: [
      "Bilingual coaching (English & Spanish)",
      "Market-specific strategies",
      "Scaling across language barriers",
      "Building diverse audience reach",
    ],
  },
  {
    name: "Anastasia",
    role: "Customer Success Manager",
    specialty: "Client Support & Success",
    bio: "Anastasia is Streamline’s Client Success Manager, ensuring every creator is supported from day one. She leads onboarding, helps set up your TikTok Shop account, provides ongoing guidance, answers your questions, and keeps you on track toward consistent revenue",
    helps: [
      "Ongoing support and guidance",
      "Addressing your questions",
      "Helping you stay on track",
    ],
  },
  {
    name: "Ethan",
    role: "Group Coach",
    specialty: "Rapid Growth & Top Performance",
    bio: "Ethan serves as one of the group coaches in Streamline. Originally started as a student in 2025 and made $10K commission his first month on TikTok Shop. Ethan quickly rose to the top 1% of livestreamers on TikTok and continues group coaching in Streamline.",
    helps: [
      "Fast-track success strategies",
      "Rising to top performer status",
      "Group coaching and support",
      "First-month success frameworks",
    ],
  },
  {
    name: "Preston",
    role: "Group Coach",
    specialty: "Lives & High-Performing Shop Videos",
    bio: "Preston is a group coach in Streamline. He also started as a student in 2025 and reached $10K commission within his first 30 days of starting TikTok Shop lives. Preston specializes in both lives and has a plethora of shop videos with over 1 Mil views.",
    helps: [
      "Mastering TikTok Shop lives",
      "Creating viral shop videos",
      "Rapid first-month results",
      "Building high-view content",
    ],
  },
]

export function CoachesGrid() {
  return (
    <section id="coaches" className="relative bg-gradient-to-b from-primary/5 via-background to-primary/7 py-20 sm:py-28 overflow-hidden">
      {/* Soft teal radial glow - center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="h-[850px] w-[850px] rounded-full blur-[170px] opacity-45"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.09) 0%, oklch(0.75 0.15 185 / 0.04) 50%, transparent 100%)'
          }}
        />
      </div>
      
      {/* Gradient overlay - top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-b from-primary/12 via-primary/6 to-transparent blur-3xl opacity-50 pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Meet the Coaches and Staff
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Learn from people who&apos;ve actually built successful TikTok Shop businesses
          </motion.p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.88, rotateY: 20 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card p-6 shadow-sm shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-primary/20">
                  <Image
                    src="/azam_profile_pic.PNG"
                    alt={`${coach.name} profile picture`}
                    fill
                    className="object-cover scale-125"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{coach.name}</h3>
                  <p className="text-sm text-primary">{coach.role}</p>
                </div>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">{coach.bio}</p>

              <div className="mt-4">
                <p className="text-sm font-medium text-foreground">What they help with:</p>
                <ul className="mt-2 space-y-1">
                  {coach.helps.map((item, helpIndex) => (
                    <li key={helpIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
