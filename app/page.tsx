"use client"

import { useEffect, useState } from "react"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import {ExperienceSection} from "@/components/sections/experience-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import Navigation  from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ScrollProgress />
      <Navigation />

      <main className="relative">
        <ErrorBoundary>
          <HeroSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <AboutSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <SkillsSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <ExperienceSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <ProjectsSection />
        </ErrorBoundary>

        <ErrorBoundary>
          <ContactSection />
        </ErrorBoundary>
      </main>

      <BackToTop />
    </div>
  )
}
