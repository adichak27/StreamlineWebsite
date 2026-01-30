import type { Metadata } from "next"
import { PrepHero } from "@/components/prep/hero"
import { VideoEmbed } from "@/components/prep/video-embed"
import { PreCallChecklistSection } from "@/components/sections/pre-call-checklist"
import { PrepCTA } from "@/components/prep/cta"

export const metadata: Metadata = {
  title: "Pre-Call Prep | Streamline",
  description: "Get the most out of your Streamline call. Watch the overview, complete the checklist, and come prepared.",
}

export default function PrepPage() {
  return (
    <>
      <PrepHero />
      <VideoEmbed />
      <PreCallChecklistSection />
      <PrepCTA />
    </>
  )
}
