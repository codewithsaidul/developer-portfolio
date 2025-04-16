import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { backend, frontend, others } from "../../public/constants/constants";

const Skills = () => {
  return (
    <section id="skills" className="w-full min-h-[calc(100vh-100px)] mt-20">
      <div className="text-center">
        <h2 className="text-5xl text-white font-dm-serif">Skills</h2>
        <p className="text-textPrimary w-full md:w-[600px] lg:w-[750px] xl:w-[850px] mx-auto mt-3">
          I&apos;ve been involved in web development for almost 4 years —
          gradually transitioning from basic static sites to full-stack modern
          web applications. My recent focus has been on deepening my skills and
          exploring more advanced technologies to build scalable, real-world
          projects.
        </p>
      </div>

      <div className="relative">
        {/* =================== Bg Blur ===================== */}
        <div>
          <div
            className={
              "absolute left-0  w-[500px] h-[600px] bg-white opacity-10 blur-3xl lg:-top-[100px]"
            }
          />
          <div
            className={
              "absolute  right-0  w-[600px] h-[600px] bg-white opacity-10 blur-3xl bottom-0"
            }
          />
        </div>
        {/* =================== Bg Blur ===================== */}

        {/* ===================== skills container ============================ */}
        <div className="mt-12 flex lg:flex-row justify-center flex-wrap gap-x-5 gap-y-10">
          {/* ======= frontend ========== */}
          <div className="py-12 px-6 border-2 border-primary rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] max-md:w-full max-[900px]:w-[80%] max-[1149px]:w-[70%] min-[1150px]:w-[48%]">
            <h2 className="text-4xl text-textSecondary font-dm-serif text-center">
              FrontEnd
            </h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
              {frontend.map((tech) => (
                <div
                  key={tech.id}
                  className="border-2 border-dark bg-card py-3 px-5 rounded-full mt-5"
                >
                  <div className="flex items-center justify-center gap-3">
                    <figure>
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={150}
                        height={150}
                        className="w-8 h150"
                      />
                    </figure>
                    <h3 className="text-white">{tech.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ======= backend ========== */}
          <div className="py-12 px-6 border-2 border-primary rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] max-md:w-full max-[900px]:w-[80%] max-[1149px]:w-[70%] min-[1150px]:w-[48%]">
            <h2 className="text-4xl text-textSecondary font-dm-serif text-center">
              BackEnd
            </h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
              {backend.map((tech) => (
                <div
                  key={tech.id}
                  className="border-2 border-dark bg-card py-3 px-5 rounded-full mt-5"
                >
                  <div className="flex items-center justify-center gap-3">
                    <figure>
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={150}
                        height={150}
                        className={twMerge(
                          "w-8 h-8",
                          tech.name === "MongoDB" && "w-4 h-8"
                        )}
                      />
                    </figure>
                    <h3 className="text-white">{tech.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ======= other ========== */}
          <div className="py-12 px-6 border-2 border-primary rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] max-md:w-full max-[900px]:w-[80%] max-[1149px]:w-[70%] min-[1150px]:w-1/2">
            <h2 className="text-4xl text-textSecondary font-dm-serif text-center">
              Other
            </h2>
            <div className="flex flex-row flex-wrap justify-center items-center gap-2">
              {others.map((tech) => (
                <div
                  key={tech.id}
                  className="border-2 border-dark bg-card py-3 px-5 rounded-full mt-5"
                >
                  <div className="flex items-center justify-center gap-2">
                    <figure>
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={150}
                        height={150}
                        className={twMerge(
                          "w-8 h-8",
                          tech.name === "Fimga" && "w-2 h-12"
                        )}
                      />
                    </figure>
                    <h3 className="text-white">{tech.name}</h3>
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
