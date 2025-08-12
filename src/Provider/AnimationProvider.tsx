"use client"

import type React from "react"

import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

interface AnimationProviderProps {
  children: React.ReactNode
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger)

    // Global GSAP configuration
    gsap.config({
      force3D: true,
      nullTargetWarn: false,
    })

    // Set default ease
    gsap.defaults({
      ease: "power3.out",
      duration: 0.6,
    })

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh()
    }

    window.addEventListener("resize", handleResize)

    // Handle reduced motion preference changes
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleMotionChange = () => {
      if (mediaQuery.matches) {
        // Disable all GSAP animations
        gsap.globalTimeline.clear()
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
      }
    }

    mediaQuery.addEventListener("change", handleMotionChange)

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize)
      mediaQuery.removeEventListener("change", handleMotionChange)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}