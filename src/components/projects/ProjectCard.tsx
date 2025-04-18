"use client";
import { ProjectCardProps } from "@/types/types";
import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, thumbnail, description, techs, liveLink, codeLink } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-card shadow-5xl py-8 px-4 rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-y-105 hover:duration-500"
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
        <div className="flex max-[399px]:flex-col gap-2 mt-8 overflow-hidden truncate">
          <Button title="View Code" link={codeLink} type="outline" />
          <Button title="Live Demo" link={liveLink} type="filed" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
