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
    <section id="faq" className="relative bg-gradient-to-b from-background via-primary/3 to-primary/6 py-20 sm:py-28 overflow-hidden">
      {/* Gradient depth layers - background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/3 to-transparent" />
      
      {/* Contrast layers - darker edges, lighter center */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, oklch(0.11 0.01 250 / 0.4) 100%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20" />
      
      {/* Main radial gradient circle - prominent and animated */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: [0.8, 1, 0.95, 1],
          opacity: [0, 0.5, 0.45, 0.5]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="h-[1000px] w-[1000px] rounded-full blur-[200px]"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.15) 0%, oklch(0.75 0.15 185 / 0.08) 30%, oklch(0.75 0.15 185 / 0.04) 60%, transparent 100%)'
          }}
        />
      </motion.div>
      
      {/* Secondary radial gradient circle - layered depth */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ 
          scale: [1.2, 1, 1.1, 1],
          opacity: [0, 0.3, 0.25, 0.3]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div 
          className="h-[800px] w-[800px] rounded-full blur-[160px]"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.10) 0%, oklch(0.75 0.15 185 / 0.05) 50%, transparent 100%)'
          }}
        />
      </motion.div>
      
      {/* Lighting effects - corner lights */}
      <motion.div 
        className="absolute top-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/15 via-primary/8 to-transparent blur-3xl opacity-40 pointer-events-none"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-primary/15 via-primary/8 to-transparent blur-3xl opacity-40 pointer-events-none"
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/12 via-primary/6 to-transparent blur-3xl opacity-35 pointer-events-none"
        animate={{ 
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tl from-primary/12 via-primary/6 to-transparent blur-3xl opacity-35 pointer-events-none"
        animate={{ 
          opacity: [0.25, 0.45, 0.25],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      {/* Top lighting gradient */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-50 pointer-events-none" />
      
      {/* Enhanced glow - floating effect */}
      <motion.div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        animate={{ 
          y: [-20, 20, -20],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div 
          className="h-[600px] w-[600px] rounded-full blur-[120px] opacity-30"
          style={{
            background: 'radial-gradient(circle, oklch(0.75 0.15 185 / 0.12) 0%, oklch(0.75 0.15 185 / 0.06) 40%, transparent 80%)'
          }}
        />
      </motion.div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Common questions about the Streamline program
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40, scale: 0.92, rotateY: -5 }}
                whileInView={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.08 * index,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="relative rounded-2xl border border-primary/25 bg-gradient-to-br from-card/90 via-card/95 to-card/90 px-6 shadow-lg shadow-primary/10 backdrop-blur-sm data-[state=open]:border-primary/50 data-[state=open]:shadow-xl data-[state=open]:shadow-primary/20 data-[state=open]:bg-gradient-to-br data-[state=open]:from-card data-[state=open]:via-card/98 data-[state=open]:to-card transition-all duration-300"
                >
                  {/* Card glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 data-[state=open]:opacity-100 pointer-events-none"
                    initial={false}
                    animate={{
                      opacity: 0
                    }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 blur-xl" />
                  </motion.div>
                  
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline relative z-10">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground relative z-10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
