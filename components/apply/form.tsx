"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, Check, Target } from "lucide-react"

const experienceLevels = [
  { value: "beginner", label: "Beginner - Just getting started" },
  { value: "intermediate", label: "Intermediate - Some experience, few sales" },
  { value: "advanced", label: "Advanced - Consistent sales, want to scale" },
]

const timeCommitments = [
  { value: "10-15", label: "10-15 hours a week" },
  { value: "15-20", label: "15-20 hours a week" },
  { value: "20+", label: "20+ hours a week" },
]

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tiktok: "",
    experience: "",
    blocker: "",
    goal: "",
    time: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - replace with actual form submission
    console.log("Application submitted:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-lg rounded-2xl border border-primary/40 bg-card p-8 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-foreground">Application Submitted!</h2>
            <p className="mt-2 text-muted-foreground">
              Thanks for applying! Check your email for next steps. 
              We review applications within 24-48 hours.
            </p>
            <div className="mt-6">
              <Button asChild>
                <Link href="/prep">
                  <Target className="mr-2 h-4 w-4" />
                  Prepare for Your Call
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="mt-2 bg-card"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="mt-2 bg-card"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="mt-2 bg-card"
                />
              </div>
              <div>
                <Label htmlFor="tiktok">TikTok Handle *</Label>
                <Input
                  id="tiktok"
                  type="text"
                  placeholder="@username"
                  required
                  value={formData.tiktok}
                  onChange={(e) => handleChange("tiktok", e.target.value)}
                  className="mt-2 bg-card"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="experience">Current Experience Level *</Label>
              <Select
                required
                value={formData.experience}
                onValueChange={(value) => handleChange("experience", value)}
              >
                <SelectTrigger className="mt-2 bg-card">
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent>
                  {experienceLevels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="blocker">What&apos;s your biggest blocker right now? *</Label>
              <Textarea
                id="blocker"
                placeholder="e.g., I don't know how to find products, I struggle with content ideas, I can't seem to get views..."
                required
                value={formData.blocker}
                onChange={(e) => handleChange("blocker", e.target.value)}
                className="mt-2 min-h-[100px] resize-none bg-card"
              />
            </div>

            <div>
              <Label htmlFor="goal">What&apos;s your monthly revenue goal? *</Label>
              <Input
                id="goal"
                type="text"
                placeholder="e.g., $5,000/month"
                required
                value={formData.goal}
                onChange={(e) => handleChange("goal", e.target.value)}
                className="mt-2 bg-card"
              />
            </div>

            <div>
              <Label htmlFor="time">How much time can you commit weekly? *</Label>
              <Select
                required
                value={formData.time}
                onValueChange={(value) => handleChange("time", value)}
              >
                <SelectTrigger className="mt-2 bg-card">
                  <SelectValue placeholder="Select time commitment" />
                </SelectTrigger>
                <SelectContent>
                  {timeCommitments.map((time) => (
                    <SelectItem key={time.value} value={time.value}>
                      {time.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button type="submit" size="lg" className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Submit Application
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              By submitting, you agree to receive communications from Streamline.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
