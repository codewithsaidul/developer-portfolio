"use client";
import { ProjectCardProps } from "@/types/types";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ project, setIsOpen }: ProjectCardProps) => {
  const { title, thumbnail, description, techs } = project;

  const handleModal = () => {
    setIsOpen(true);
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
        <div className="flex items-center gap-1.5 flex-wrap my-10">
          {techs.map((tech) => (
            <div
              key={tech.id}
              className=" bg-primary/90 shadow-[0_0px_4px_rgba(255,255,255,0.1)] py-2 px-4 rounded-full"
            >
              <h3 className="text-white text-sm capitalize">{tech.name}</h3>
            </div>
          ))}
        </div>

        {/* ==================== Project Content ========================= */}
        <div className="mt-5">
          <h2 className="text-3xl font-dm-serif text-textSecondary mb-4 overflow-hidden truncate">
            {title}
          </h2>
          <p className="text-base text-textPrimary">{description}</p>
        </div>

        {/* ========================= Project BTN ====================== */}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
