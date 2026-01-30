import { HeroSection } from "@/components/sections/hero"
import { WhatIsStreamlineSection } from "@/components/sections/what-is-streamline"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { WhyStreamlineWorks } from "@/components/coaches/why-it-works"
import { WhoIsThisFor } from "@/components/program/who-is-this-for"
import { CoachesGrid } from "@/components/coaches/grid"
import { DeliverablesSection } from "@/components/sections/deliverables"
import { ProofSection } from "@/components/sections/proof"
import { FAQSection } from "@/components/sections/faq"
import { FinalCTASection } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsStreamlineSection />
      <HowItWorksSection />
      <WhyStreamlineWorks />
      <WhoIsThisFor />
      <CoachesGrid />
      <DeliverablesSection />
      <ProofSection />
      <FAQSection />
      <FinalCTASection />
    </>
  )
}
