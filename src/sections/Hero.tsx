"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef1 = useRef<HTMLHeadingElement>(null);
  const titleRef2 = useRef<HTMLHeadingElement>(null);
  const titleRef3 = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);
  const shape3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!prefersReducedMotion) {
        // Hero content animation
        const tl = gsap.timeline();

        tl.fromTo(
          titleRef1.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.3, ease: "power3.out" }
        )
          .fromTo(
            titleRef2.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
            "-=0.5"
          )
          .fromTo(
            titleRef3.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "-=0.5"
          )
          .fromTo(
            descRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.5"
          )
          .fromTo(
            ctaRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
            "-=0.3"
          );

        // Floating background shapes
        gsap.to(shape1Ref.current, {
          y: -20,
          rotation: 5,
          duration: 4,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(shape2Ref.current, {
          y: -15,
          rotation: -3,
          duration: 5,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1,
        });

        gsap.to(shape3Ref.current, {
          y: -25,
          rotation: 8,
          duration: 6,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
          delay: 2,
        });

        // Parallax effect on scroll
        gsap.to(backgroundRef.current, {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen"
    >
       {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-muted/30 to-accent-muted/20" />
      <div className="min-h-screen flex items-center justify-center">
        {/* Animated Background Shapes */}
        <div ref={backgroundRef} className="absolute inset-0 pointer-events-none">
          <div
            ref={shape1Ref}
            className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"
          />
          <div
            ref={shape2Ref}
            className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-2xl blur-xl rotate-12"
          />
          <div
            ref={shape3Ref}
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full blur-xl"
          />
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-indigo-400/10 to-cyan-400/10 rounded-2xl blur-xl rotate-45" />
        </div>
  
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Title */}
            <div>
              <p
                ref={titleRef1}
                className="text-xl font-serif font-bold text-foreground mb-6 leading-tight"
              >
                Hi, I&apos;m{" "}
              </p>
              <h1
                ref={titleRef2}
                className="text-4xl sm:text-6xl lg:text-7xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                Saidul Islam Rana
              </h1>
  
              <h2 ref={titleRef3} className="text-muted-foreground text-xl min-[415px]:text-3xl md:text-4xl my-3">
                I am a{" "}
                <span className="font-dm-serif text-primary">
                  {/* Juinor Web Developer */}
                  <Typewriter
                    words={[
                      "Front-End Developer",
                      "Juinor Web Developer",
                      "Programmer",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h2>
            </div>
  
            {/* Description */}
            <p
              ref={descRef}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light leading-relaxed"
            >
              Frontend Developer crafting beautiful, functional web experiences
              with modern technologies
            </p>
  
            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Button
                size="lg"
                className="rounded-2xl px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-2xl px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-transparent"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </Button>
            </div>
  
            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 mb-12">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@saidulrana.dev"
                className="p-3 rounded-2xl bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
  
            {/* Scroll Indicator */}
            <button
              onClick={scrollToAbout}
              className="animate-bounce p-2 rounded-full hover:bg-muted/50 transition-colors duration-300"
              aria-label="Scroll to about section"
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
