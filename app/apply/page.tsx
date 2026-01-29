import type { Metadata } from "next"
import { ApplyHero } from "@/components/apply/hero"
import { ApplicationForm } from "@/components/apply/form"
import { WhatHappensNext } from "@/components/apply/what-happens-next"

export const metadata: Metadata = {
  title: "Apply for Streamline | TikTok Shop Coaching",
  description: "Apply to join Streamline, the hands-on TikTok Shop coaching program. Fill out a short application and we'll be in touch within 24-48 hours.",
}

export default function ApplyPage() {
  return (
    <>
      <ApplyHero />
      <WhatHappensNext />
      <ApplicationForm />
    </>
  )
}
