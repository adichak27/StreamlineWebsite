"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Do I need followers to get started?",
    answer: "No. TikTok Shop success isn't about follower count — it's about livestreams that convert.",
  },
  {
    question: "What if I don't know what to sell?",
    answer: "That's exactly what our product research system is for. We give you a scoring framework to evaluate products, plus weekly coaching to help you find winners in your niche.",
  },
  {
    question: "What if I've tried TikTok Shop and failed?",
    answer: "Most people fail because they're guessing. Random products, random livestreams, no feedback. Streamline eliminates the guesswork with a structured system and 1:1 coaching on what to fix in your livestreams.",
  },
  {
    question: "How much time does this take per week?",
    answer: "Most successful clients commit 10-15 hours a week. This includes preparing for livestreams, going live, and attending weekly 1:1 coaching calls. Consistency beats intensity.",
  },
  {
    question: "Will you help with my livestreams?",
    answer: "Yes. Through 1:1 coaching, we provide livestream script templates, hook formulas, and direct feedback on your livestreams. You'll know exactly what's working and what needs to change.",
  },
  {
    question: "Is this 1:1 coaching or group?",
    answer: "This is primarily 1:1 coaching. You get weekly 1:1 coaching sessions focused on your livestreams, plus access to coaches for questions and feedback throughout the week. It's personalized guidance tailored to your specific needs.",
  },
  {
    question: "What happens after I apply?",
    answer: "After you submit your application, our team reviews it within 24-48 hours. If it's a good fit, we'll schedule a call to discuss your goals and answer any questions before you join.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Common questions about the Streamline program
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-primary/20 bg-gradient-to-br from-card via-card/95 to-card px-6 shadow-sm shadow-primary/5 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
