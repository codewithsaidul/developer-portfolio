"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { skillCategories } from "../constants/constants";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

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
      <div ref={categoriesRef} className="grid lg:grid-cols-3 gap-8">
        {skillCategories.map((category) => (
          <Card
            key={category.title}
            className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50"
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center space-y-3 p-4 rounded-2xl hover:bg-muted/50 transition-all duration-300 group"
                  >
                    <div className="skill-icon">
                      <skill.icon
                        className={`w-8 h-8 ${skill.color} transition-all duration-300`}
                      />
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/*  <div className="relative container mx-auto px-4"> */}
      {/* ===================== skills container ============================ */}
      {/* <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-12 md:gap-x-8 md:gap-y-10 lg:gap-10"> */}
      {/* ======= frontend ========== */}
      {/* <div className="py-12 px-4 sm:px-6 border border-primary/30 rounded-xl shadow-2xl">
          <h2 className="text-4xl text-textSecondary font-dm-serif text-center">
            FrontEnd
          </h2>
          <div className="flex flex-row flex-wrap justify-center items-center gap-0.5 sm:gap-2">
            {frontend.map((tech) => (
              <SkillCard key={tech.id} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div> */}

      {/* ======= backend ========== */}
      {/* <div className="py-12 px-4 sm:px-6 border border-primary/30 rounded-xl shadow-2xl">
          <h2 className="text-4xl text-textSecondary font-dm-serif text-center">
            BackEnd
          </h2>
          <div className="flex flex-row flex-wrap justify-center items-center gap-2">
            {backend.map((tech) => (
              <SkillCard key={tech.id} name={tech.name} icon={tech.icon} />
            ))}
          </div>
        </div> */}

      {/* ======= other ========== */}
      {/* <div className="py-12 px-4 sm:px-6 border border-primary/30 rounded-xl shadow-2xl">
          <h2 className="text-4xl text-textSecondary font-dm-serif text-center">
            Other
          </h2>
          <div className="flex flex-row flex-wrap justify-center items-center gap-2">
            {others.map((tech) => (
              <div
                key={tech.id}
                className="border-2 border-dark bg-card py-3 px-5 rounded-full mt-5"
              >
                <div className="flex items-center justify-center gap-3">
                  <figure>
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={100}
                      height={100}
                      className="w-6 h-6 min-sm:w-8 min-sm:h-8 object-contain"
                    />
                  </figure>
                  <h3 className="text-muted-foreground text-xs min-sm:text-sm min-md:text-base">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* </div> */}
    </section>
  );
};

export default Skills;
