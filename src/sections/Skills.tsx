"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { skillCategories } from "../constants/constants";
import EngineeringPillars from "@/components/Skills/EngineeringPillars";
import ProfessionalDevelopment from "@/components/Skills/ProfessionalDevelopment";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const addiHeadingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const learningRef = useRef<HTMLDivElement>(null);

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

        // Categories stagger animation
        const categories = categoriesRef.current?.children;
        if (categories) {
          gsap.fromTo(
            categories,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.2,
              scrollTrigger: {
                trigger: categoriesRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        // Skill icons hover animations
        const skillIcons = sectionRef.current?.querySelectorAll(".skill-icon");
        skillIcons?.forEach((icon) => {
          const element = icon as HTMLElement;
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              scale: 1.2,
              rotation: 5,
              duration: 0.3,
              ease: "power2.out",
            });
          });
          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });

        gsap.fromTo(
          addiHeadingRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: addiHeadingRef.current,
              start: "top 100%",
              end: "bottom 10%",
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
                start: "top 100%",
                end: "bottom 10%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        gsap.fromTo(
          learningRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: learningRef.current,
              start: "top 100%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="w-full min-h-[calc(100vh-100px)] my-64"
    >
      {/* ========== Section Heading =================== */}

      <div ref={headingRef} className="text-center">
        <h2 className="text-5xl text-forground font-dm-serif">Skills</h2>
        <p className="text-muted-foreground w-full md:w-[600px] lg:w-[750px] xl:w-[850px] mx-auto mt-3">
          I&apos;ve been involved in web development for almost 4 years —
          gradually transitioning from basic static sites to full-stack modern
          web applications. My recent focus has been on deepening my skills and
          exploring more advanced technologies to build scalable, real-world
          projects.
        </p>
      </div>
      {/* ========== Section Heading =================== */}

      {/* Skills Categories */}
      <div ref={categoriesRef} className="relative container mx-auto px-4">
        {/* ===================== skills container ============================ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-x-8 md:gap-y-10 lg:gap-10 place-content-center">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="border min-h-[400px] border-primary/30 rounded-xl shadow-2xl"
            >
              <h2 className="text-4xl text-textSecondary font-dm-serif text-center">
                {category.title}
              </h2>
              <CardContent className="mt-5 flex flex-row flex-wrap items-center justify-center gap-0.5 sm:gap-2">
                {category.skills.map((tech) => (
                  <div
                    key={tech.name}
                    className="border-2 border-forground bg-card py-3 px-5 rounded-full mt-5"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="skill-icon">
                        <tech.icon size={20} className={`${tech.color}`} />
                      </span>
                      <h4 className="text-base text-muted-foreground">
                        {tech.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* =========================== additional skils ================== */}
      <div className="relative container mx-auto px-4 mt-40">
        <EngineeringPillars headingRef={addiHeadingRef} cardsRef={cardsRef} />
      </div>

      {/* =========================== certified & continues learing ================== */}
      <div ref={learningRef} className="relative container mx-auto px-4 mt-40">
        <ProfessionalDevelopment />
      </div>
    </section>
  );
};

export default Skills;
