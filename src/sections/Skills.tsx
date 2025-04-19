import SectionHeading from "@/components/SectionHeading/SectionHeading";
import SkillCard from "@/components/Skills/TechIcon";
import Image from "next/image";
import { backend, frontend, others } from "../constants/constants";

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-[calc(100vh-100px)] my-64">
      {/* ========== Section Heading =================== */}
      <SectionHeading
        title="Skills"
        desc={`I've been involved in web development for almost 4 years —
        gradually transitioning from basic static sites to full-stack modern web
        applications. My recent focus has been on deepening my skills and
        exploring more advanced technologies to build scalable, real-world
        projects.`}
      />
      {/* ========== Section Heading =================== */}

      <div className="relative">
        {/* =================== Bg Blur ===================== */}
        <div>
          <div
            className={
              "absolute left-0 w-[70%] sm:w-[500px]  h-[600px] bg-white opacity-10 blur-3xl lg:-top-[100px]"
            }
          />
          <div
            className={
              "absolute  right-0 w-[70%] sm:w-[500px]  h-[600px] bg-white opacity-10 blur-3xl bottom-0"
            }
          />
        </div>
        {/* =================== Bg Blur ===================== */}

        {/* ===================== skills container ============================ */}
        <div className="mt-12 flex lg:flex-row justify-center flex-wrap gap-x-5 gap-y-10">
          {/* ======= frontend ========== */}
          <div className="py-12 px-4 sm:px-6 border-2 border-primary rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] max-md:w-full max-[900px]:w-[80%] max-[1149px]:w-[70%] min-[1150px]:w-[48%]">
            <h2 className="text-4xl text-textSecondary font-dm-serif text-center">
              FrontEnd
            </h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-0.5 sm:gap-2">
              {frontend.map((tech) => (
                <SkillCard key={tech.id} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </div>

          {/* ======= backend ========== */}
          <div className="py-12 px-4 sm:px-6 border-2 border-primary rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] max-md:w-full max-[900px]:w-[80%] max-[1149px]:w-[70%] min-[1150px]:w-[48%]">
            <h2 className="text-4xl text-textSecondary font-dm-serif text-center">
              BackEnd
            </h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
              {backend.map((tech) => (
                <SkillCard key={tech.id} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </div>

          {/* ======= other ========== */}
          <div className="py-12 px-4 sm:px-6 border-2 border-primary rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] max-md:w-full max-[900px]:w-[80%] max-[1149px]:w-[70%] min-[1150px]:w-1/2">
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
                    <h3 className="text-white text-xs min-sm:text-sm min-md:text-base">
                      {tech.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
