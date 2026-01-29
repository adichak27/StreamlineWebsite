import type { Metadata } from "next"
import { ProgramHero } from "@/components/program/hero"
import { ProgramTimeline } from "@/components/program/timeline"
import { ProgramDeliverables } from "@/components/program/deliverables"
import { WhoIsThisFor } from "@/components/program/who-is-this-for"
import { ProgramCTA } from "@/components/program/cta"

export const metadata: Metadata = {
  title: "Program Details | Streamline",
  description: "Discover the Streamline system - a structured roadmap to TikTok Shop success with weekly coaching, templates, and accountability.",
}

export default function ProgramPage() {
  return (
    <>
      <ProgramHero />
      <ProgramTimeline />
      <ProgramDeliverables />
      <WhoIsThisFor />
      <ProgramCTA />
    </>
  )
}
