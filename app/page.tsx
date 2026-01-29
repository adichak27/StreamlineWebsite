import { HeroSection } from "@/components/sections/hero"
import { WhatIsStreamlineSection } from "@/components/sections/what-is-streamline"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { WhyStreamlineWorks } from "@/components/coaches/why-it-works"
import { CoachesPreviewSection } from "@/components/sections/coaches-preview"
import { DeliverablesSection } from "@/components/sections/deliverables"
import { ProofSection } from "@/components/sections/proof"
import { FAQSection } from "@/components/sections/faq"
import { PreCallChecklistSection } from "@/components/sections/pre-call-checklist"
import { FinalCTASection } from "@/components/sections/final-cta"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsStreamlineSection />
      <HowItWorksSection />
      <WhyStreamlineWorks />
      <CoachesPreviewSection />
      <DeliverablesSection />
      <ProofSection />
      <FAQSection />
      <PreCallChecklistSection />
      <FinalCTASection />
    </>
  )
}
