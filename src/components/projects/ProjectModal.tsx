import { Project } from "@/types/types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
}

const ProjectModal = ({ project }: ProjectCardProps) => {
  const { title, thumbnail, description, techs } = project;
  return (
    <div className="w-full bg-dark shadow-5xl rounded-xl  mx-auto relative">
      <div className="py-10 px-6">
        <div>
          <figure className="bg-card p-2 rounded-xl w-full max-sm:h-[300px] h-[400px]">
            <Image
              src={thumbnail}
              alt={title}
              width={600}
              height={600}
              className="w-full h-full object-cover rounded-xl"
            />
          </figure>

          <div className="flex items-center gap-1.5 flex-wrap my-10">
            {techs.map((tech) => (
              <div
                key={tech.id}
                className=" bg-card shadow-[0_0px_4px_rgba(255,255,255,0.1)] py-2 px-4 rounded-full"
              >
                <h3 className="text-textSecondary text-sm capitalize">{tech.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <h2 className="text-3xl font-dm-serif text-textSecondary mb-4 overflow-hidden truncate">
              {title}
            </h2>
            <p className="text-lg text-textPrimary">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
