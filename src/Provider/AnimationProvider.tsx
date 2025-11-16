/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

interface AnimationProviderProps {
  children: React.ReactNode;
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  useEffect(() => {
    let gsap: any;
    let ScrollTrigger: any;

    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) return;

    // Lazy-load GSAP
    (async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");

      gsap = gsapModule.gsap || gsapModule.default;
      ScrollTrigger = stModule.ScrollTrigger;

      gsap.registerPlugin(ScrollTrigger);

      gsap.config({
        force3D: true,
        nullTargetWarn: false,
      });

      gsap.defaults({
        ease: "power3.out",
        duration: 0.6,
      });
    })();

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        ScrollTrigger?.refresh();
      }, 150);
    };

    window.addEventListener("resize", handleResize);

    // Reduced-motion change listener
    const handleMotionChange = () => {
      if (prefersReducedMotion.matches) {
        gsap?.globalTimeline?.clear();
        ScrollTrigger?.getAll().forEach((t: any) => t.kill());
      }
    };

    prefersReducedMotion.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      prefersReducedMotion.removeEventListener("change", handleMotionChange);

      ScrollTrigger?.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}

