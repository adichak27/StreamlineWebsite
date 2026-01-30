"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/#coaches", label: "Coaches" },
  { href: "/prep", label: "Pre-Call Prep" },
  { href: "/#faq", label: "FAQ" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            Streamline
          </span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
            TikTok Shop
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button size="sm" asChild>
            <a href="https://form.typeform.com/to/C2ruNSz7#ref=adi" target="_blank" rel="noopener noreferrer">Apply Now</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border/40 bg-background md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button asChild className="w-full">
                  <a href="https://form.typeform.com/to/C2ruNSz7#ref=adi" target="_blank" rel="noopener noreferrer">Apply Now</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
