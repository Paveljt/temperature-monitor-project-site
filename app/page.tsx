import { AboutMe } from '@/components/about-me'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { ProblemSection } from '@/components/problem-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Technologies } from '@/components/technologies'
import { WhatILearned } from '@/components/what-i-learned'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <Technologies />
        <Features />
        <WhatILearned />
        <AboutMe />
      </main>
      <SiteFooter />
    </>
  )
}
