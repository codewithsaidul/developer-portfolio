import { SkillsTech } from "@/types/types";
import Image from "next/image";

const TechIcon = ({ name, icon }: SkillsTech) => {
  return (
    <div className="border-2 border-dark bg-card py-3 px-5 rounded-full mt-5">
      <div className="flex items-center justify-center gap-3">
        <figure>
          <Image
            src={icon}
            alt={name}
            width={100}
            height={100}
            className="w-6 h-6 min-sm:w-8 min-sm:h-8 object-contain"
          />
        </figure>
        <h3 className="text-white text-xs min-sm:text-sm min-md:text-base">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default TechIcon;
