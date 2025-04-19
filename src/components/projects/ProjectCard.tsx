"use client";
import { ProjectCardProps } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Technology from "./Technology";

const ProjectCard = ({
  index,
  project,
  setIsOpen,
  setProjectIndex,
}: ProjectCardProps) => {
  const { title, thumbnail, description, techs } = project;

  const MAX_VISIBLE_TAGS = 4;
  const visibleTechs = techs.slice(0, MAX_VISIBLE_TAGS);
  const remainingCount = techs.length - MAX_VISIBLE_TAGS;

  const handleModal = () => {
    setIsOpen(true);
    setProjectIndex(index);
    document.body.classList.add("body-lock");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-card shadow-5xl py-8 px-4 rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-y-105 hover:duration-500"
      onClick={handleModal}
    >
      <div>
        {/* ============== Project Image =============== */}
        <figure>
          <Image
            src={thumbnail}
            alt={title}
            width={600}
            height={600}
            className="w-full h-[250px] object-cover rounded-xl"
          />
        </figure>

        {/* ============== Project Used Technology ================= */}
        <div className="flex items-center gap-1.5 flex-wrap  min-h-[52px] my-10">
          {visibleTechs.map((tech) => (
            <Technology key={tech.id} name={tech.name} />
          ))}

          {remainingCount > 0 && (
            <div className="bg-dark py-2 px-4 rounded-full shadow-5xl">
              <h3 className="text-white text-sm capitalize">
                +{remainingCount} more
              </h3>
            </div>
          )}
        </div>

        {/* ==================== Project Content ========================= */}
        <div className="mt-5">
          <h2 className="text-3xl font-dm-serif text-textSecondary mb-4 overflow-hidden truncate">
            {title}
          </h2>
          <p className="text-base text-textPrimary line-clamp-3">{description}</p>
        </div>

        {/* ========================= Project BTN ====================== */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
