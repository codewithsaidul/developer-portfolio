"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {


  return (
    <section

      id="about"
      className="w-full min-h-screen flex justify-center items-center"
    >
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="text-white text-center">
          <span className="text-4xl min-[415px]:text-5xl min-[500px]:text-6xl md:text-7xl font-medium text-primary">
            Hi, I am
          </span>
          <h1 className="text-muted-foreground text-4xl min-[415px]:text-5xl min-[500px]:text-6xl md:text-7xl font-dm-serif capitalize my-5">
            saidul islam rana
          </h1>

          <h2 className="text-muted-foreground text-xl min-[415px]:text-3xl md:text-4xl">
            I am a{" "}
            <span className="font-dm-serif text-primary">
              {/* Juinor Web Developer */}
              <Typewriter
                words={[
                  "Front-End Developer",
                  "Juinor Web Developer",
                  "Programmer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p className="text-muted-foreground max-[370px]:text-sm text-base text-textPrimary md:text-lg mt-5 w-full lg:w-3xl">
            I&apos;m a JavaScript-based web developer with a solid understanding
            of core programming concepts like variables, conditions, loops,
            arrays, and functions. I work mostly with React and Next.js to build
            modern, responsive web applications, and have backend experience
            with Node.js and MongoDB.
          </p>

          <div className="mt-5 flex justify-center">
            <a
              href="/frontend-developer-resume-of-saidul.pdf"
              download
              target="_blank"
              className="text-2xl font-dm-serif bg-gradient-to-r from-[#90caf9] to-[#4a90e2] text-textSecondary text-center py-4 px-8 rounded-3xl max-[450px]:w-[250px] max-[767px]:w-[400px] min-[768px]:w-[350px] border-2 border-primary duration-1000 hover:bg-none hover:duration-1000 transition-all"
            >
              Check Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
