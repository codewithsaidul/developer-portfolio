"use client";
import ProjectCard from "@/components/projects/ProjectCard";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { projects } from "@/constants/constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full relative min-h-[calc(100vh-100px)] mt-20"
    >
      {/* ========== Section Heading =================== */}
      <SectionHeading
        title="Projects"
        desc={`A showcase of hands-on projects built during my learning journey. These projects reflect my growing skills in modern web development, focusing on frontend design, interactive UI, and integrating essential backend features to simulate real-world scenarios.`}
      />
      {/* ========== Section Heading =================== */}

      {/* ==================== Projects Container ==================== */}
      <div className="mt-20 relative">
        <div className="grid grid-cols-1 min-[790px]:grid-cols-2 lg:grid-cols-3 gap-10 min-[790px]:gap-6 lg:gap-8 lg:gap-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
