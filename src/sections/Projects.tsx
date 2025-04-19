"use client";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import SectionHeading from "@/components/SectionHeading/SectionHeading";
import { projects } from "@/constants/constants";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: modalRef,
    offset: ["start start", "end end"],
  });

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
        <div className="grid grid-cols-1 min-[790px]:grid-cols-2 lg:grid-cols-3  min-[790px]:gap-6 lg:gap-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setIsOpen={setIsOpen}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="modal-wrapper"
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.9 }}
            >
              <motion.div
                className="fixed w-full  left-0 right-0"
                style={{ scaleX: scrollYProgress }}
              />
              <div className="flex justify-center pt-20 pb-20 min-h-screen">
                <motion.div
                  ref={modalRef}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-auto max-h-[80vh] w-full sm:w-[80%] mx-auto max-sm:px-4"
                >
                  <ProjectModal
                    project={projects[0]}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
