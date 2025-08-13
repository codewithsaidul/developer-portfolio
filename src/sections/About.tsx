"use client";
import AboutHighlight from "@/components/About/AboutHighlight";
import AboutInfo from "@/components/About/AboutInfo";
import { highlights } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const aboutInfoRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardTitleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!prefersReducedMotion) {
        // Title animation
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Content animation
        gsap.fromTo(
          aboutInfoRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "ease",
            scrollTrigger: {
              trigger: aboutInfoRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.fromTo(
          cardTitleRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: "ease",
            scrollTrigger: {
              trigger: cardTitleRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Cards stagger animation
        const cards = cardsRef.current?.children;
        if (cards) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.1,
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
                end: "bottom 40%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div ref={headingRef} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate frontend developer with a keen eye for design and user
              experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Photo & Story */}
            <AboutInfo aboutInfoRef={aboutInfoRef} />

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              <h3 ref={cardTitleRef} className="text-2xl font-semibold">
                What I Bring
              </h3>
              <div ref={cardsRef} className="grid gap-6">
                {highlights.map((item) => (
                  <AboutHighlight key={item.title} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
        </div>
      </div>
    </section>
  );
}
