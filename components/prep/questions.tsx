"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, Copy, Check } from "lucide-react"

const questions = [
  {
    id: "goal",
    label: "What's your monthly goal?",
    placeholder: "e.g., $5,000/month in TikTok Shop revenue",
  },
  {
    id: "situation",
    label: "What's your current situation?",
    placeholder: "e.g., Just starting out, no sales yet, posting inconsistently",
  },
  {
    id: "time",
    label: "How much time can you commit weekly?",
    placeholder: "e.g., 10 hours per week, mostly evenings and weekends",
  },
  {
    id: "challenge",
    label: "What's your biggest challenge?",
    placeholder: "e.g., I don't know how to find products that will actually sell",
  },
  {
    id: "why",
    label: "Why now?",
    placeholder: "e.g., I want to build a side income and eventually quit my 9-5",
  },
]

export function PrepQuestions() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [copied, setCopied] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  const handleCopy = () => {
    const text = questions
      .map((q) => `${q.label}\n${answers[q.id] || "(not answered)"}`)
      .join("\n\n")
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - replace with actual form submission
    console.log("Submitted answers:", answers)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-secondary/30 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-2xl rounded-2xl border border-primary/40 bg-card p-8 text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h2 className="mt-4 text-2xl font-bold text-foreground">Answers Submitted!</h2>
            <p className="mt-2 text-muted-foreground">
              We&apos;ve received your responses. See you on the call!
            </p>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-secondary/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Answer These Before Your Call
            </h2>
            <p className="mt-4 text-muted-foreground">
              Take a few minutes to think through these questions. 
              You can submit them here or copy and share.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {questions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Label htmlFor={question.id} className="text-foreground">
                  {question.label}
                </Label>
                <Textarea
                  id={question.id}
                  placeholder={question.placeholder}
                  value={answers[question.id] || ""}
                  onChange={(e) => handleChange(question.id, e.target.value)}
                  className="mt-2 min-h-[80px] resize-none bg-card"
                />
              </motion.div>
            ))}

            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <Button type="submit" className="flex-1">
                <Send className="mr-2 h-4 w-4" />
                Submit Answers
              </Button>
              <Button type="button" variant="outline" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy Answers
                  </>
                )}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
