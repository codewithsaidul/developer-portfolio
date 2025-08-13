"use client"

import type React from "react"

import { useEffect } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!prefersReducedMotion) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
        autoResize: true,
        syncTouch: false,
        syncTouchLerp: 0.075,
      })

      lenis.on("scroll", ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)

      const handleAnchorClick = (e: Event) => {
        const target = e.target as HTMLAnchorElement
        if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
          e.preventDefault()
          const id = target.getAttribute("href")?.slice(1)
          const element = document.getElementById(id || "")
          if (element) {
            lenis.scrollTo(element, { offset: -80, duration: 1.5 })
          }
        }
      }

      document.addEventListener("click", handleAnchorClick)

      return () => {
        document.removeEventListener("click", handleAnchorClick)
        lenis.destroy()
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000)
        })
      }
    }
  }, [])

  return <>{children}</>
}