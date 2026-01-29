import type { Metadata } from "next"
import { CoachesHero } from "@/components/coaches/hero"
import { CoachesGrid } from "@/components/coaches/grid"
import { WhyStreamlineWorks } from "@/components/coaches/why-it-works"
import { CoachesCTA } from "@/components/coaches/cta"

export const metadata: Metadata = {
  title: "Meet the Coaches | Streamline",
  description: "Learn from experienced TikTok Shop coaches who've built successful businesses and helped hundreds of creators achieve their goals.",
}

export default function CoachesPage() {
  return (
    <>
      <CoachesHero />
      <CoachesGrid />
      <WhyStreamlineWorks />
      <CoachesCTA />
    </>
  )
}
