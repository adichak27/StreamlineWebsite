"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"
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
    bio: "Azam has been a TikTok Shop Affiliate for 2+ years. He's amassed over 3 Mil dollars in GMV and was the number 1 live streamer for Goli in 2025.",
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
    <section id="coaches" className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Meet the Coaches and Staff
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn from people who&apos;ve actually built successful TikTok Shop businesses
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="rounded-2xl border border-border/40 bg-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                  <User className="h-8 w-8 text-primary" />
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
        </div>
      </div>
    </section>
  )
}
