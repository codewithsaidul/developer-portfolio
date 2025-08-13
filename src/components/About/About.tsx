"use client";
import profilePhoto from "@/assets/images/profile-photo.jpg";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { technologies, highlights } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";





// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const headingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "ease",
            scrollTrigger: {
              trigger: contentRef.current,
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
              trigger: contentRef.current,
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
            <div ref={contentRef} className="space-y-6">
              {/* Profile Photo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <Image
                    src={profilePhoto}
                    alt="Saidul Islam Rana"
                    className="w-64 h-64 rounded-2xl object-cover shadow-xl hover-lift"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10" />
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">My Journey</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With over 5 years of experience in frontend development,
                    I&apos;ve had the privilege of working with diverse teams
                    and technologies to create exceptional digital experiences.
                  </p>
                  <p>
                    My passion lies in transforming complex problems into
                    simple, beautiful, and intuitive solutions. I believe that
                    great software is not just about functionality, but about
                    creating delightful experiences that users love.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new
                    technologies, contributing to open-source projects, or
                    mentoring aspiring developers in the community.
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Technologies I Love</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Highlights */}
            <div className="space-y-6">
              <h3 ref={cardTitleRef} className="text-2xl font-semibold">
                What I Bring
              </h3>
              <div ref={cardsRef} className="grid gap-6">
                {highlights.map((item) => (
                  <Card
                    key={item.title}
                    className="p-6 hover-lift border border-border/50 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-primary duration-700 group-hover:bg-secondary group-hover:duration-700">
                        <item.icon className="h-6 w-6 text-primary-foreground duration-1000 group-hover:text-primary group-hover:duration-1000" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
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
