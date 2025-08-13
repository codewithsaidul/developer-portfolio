import { ProjectTech } from "@/types";

const Technology = ({ name }: ProjectTech) => {
  return (
    <div className=" bg-primary/90 shadow-[0_0px_4px_rgba(255,255,255,0.1)] py-2 px-4 rounded-full">
      <h3 className="text-white text-sm capitalize">{name}</h3>
    </div>
  );
};

export default Technology;
