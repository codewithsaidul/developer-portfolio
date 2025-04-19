import { ProjectModelProps } from "@/types/types";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Button from "../ui/Custom/Button";
import Technology from "./Technology";

const ProjectModal = ({ project, isOpen, setIsOpen }: ProjectModelProps) => {
  const { title, thumbnail, description, techs, liveLink, codeLink } = project;

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
    document.body.classList.remove("body-lock");
  };

  return (
    <div className="w-full bg-dark shadow-5xl rounded-xl duration-700 mx-auto relative">
      <div className="py-10 px-6">
        <div className="mt-8">
          <figure className="bg-card p-4 rounded-xl w-full h-fit">
            <Image
              src={thumbnail}
              alt={title}
              width={1280}
              height={1280}
              className="w-full h-fit object-cover rounded-xl"
            />
          </figure>

          <div className="flex items-center gap-1.5 flex-wrap my-10">
            {techs.map((tech) => (
              <Technology key={tech.id} name={tech.name} />
            ))}
          </div>

          <div className="mt-5">
            <h2 className="text-3xl font-dm-serif text-textSecondary mb-4 overflow-hidden truncate">
              {title}
            </h2>
            <p className="text-lg text-textPrimary">{description}</p>
          </div>

          <div className="flex max-[399px]:flex-col gap-2 mt-8 overflow-hidden truncate">
            <Button title="View Code" link={codeLink} type="outline" />
            <Button title="Live Demo" link={liveLink} type="filed" />
          </div>
        </div>
      </div>

      <button
        onClick={handleCloseModal}
        className="absolute top-3 right-3 cursor-pointer"
      >
        <IoClose size={32} color="#fff" />
      </button>
    </div>
  );
};

export default ProjectModal;
