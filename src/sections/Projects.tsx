"use client";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectCategory from "@/components/projects/ProjectCategory";
import ProjectCTA from "@/components/projects/ProjectCTA";
import { Button } from "@/components/ui/button";
import { categories, projects } from "@/constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");
  const [visibleProjects, setVisibleProjects] = useState<number>(3);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const loadBtnRef = useRef<HTMLDivElement>(null);

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
          loadBtnRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: loadBtnRef.current,
              start: "top 100%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
          }
        );
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ctaRef.current,
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

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All Projects") return true;
    if (activeCategory === "Full-Stack")
      return project.categories.includes("Full-Stack");
    if (activeCategory === "FrontEnd")
      return project.categories.includes("FrontEnd");
    if (activeCategory === "E-commerce")
      return project.categories.includes("E-commerce");
    if (activeCategory === "AI Platform")
      return project.categories.includes("AI Platform");
    if (activeCategory === "Dashboard")
      return project.categories.includes("Dashboard");
    if (activeCategory === "Web3") return project.categories.includes("Web3");

    return true; // Add more filtering logic as needed
  });

  const showMoreProjects = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="section-padding bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {/* Header */}
          <div ref={headingRef} className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          {/* Category Filter */}
          <div ref={categoriesRef} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <ProjectCategory
                key={category}
                category={category}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            ))}
          </div>

          {/* Projects Grid */}
          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, visibleProjects).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Load More Button */}
          {visibleProjects < filteredProjects.length && (
            <div ref={loadBtnRef} className="text-center">
              <Button
                variant="outline"
                onClick={showMoreProjects}
                className="px-8 py-3 border border-card hover:border-primary transition-all duration-300"
              >
                Load More Projects
              </Button>
            </div>
          )}

          {/* CTA Section */}
          <ProjectCTA ctaRef={ctaRef} />
        </div>
      </div>
    </section>
  );
}
