"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/ui/LiIcon";
import SectionHeading from "@/components/SectionHeading/SectionHeading";

interface DetailsProps {
  type: string;
  time: string;
  place: string;
  info: string;
}

// Exprience Details Component
const Details = ({ type, time, place, info }: DetailsProps) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[70%] md:w-[80%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-white text-lg sm:text-2xl md:text-3xl">
          {type}
        </h3>
        <span className="capitalize font-medium text-textPrimary/75  text-sm sm:text-base">
          {time} | {place}
        </span>
        <p className="font-medium text-textSecondary w-full text-sm sm:text-base md:text-lg">
          {info}
        </p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section id="education" className="w-full min-h-[calc(100vh-100px)] my-64">
      <SectionHeading
        title="Education"
        desc={`A glimpse into my academic foundation in computer science and technology. My education has equipped me with core programming concepts, data structures, algorithms, and hands-on experience through coursework that laid the groundwork for building real-world web applications.`}
      />

          <div ref={ref} className="w-full md:w-[70%] mx-auto mt-20 relative">
            <motion.div
              style={{ scaleY: scrollYProgress }}
              className="absolute left-9 top-0 w-1 h-full bg-white  origin-top  md:left-7 xs:left-5"
            />
    
            <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
              {/* Education Diploma*/}
              <Details
                type="Diploma Engineering In Computer Technology"
                time="2019-2023"
                place="Sylhet Polytechnic Institute (SPI)"
                info="Along with other fundamental computer science courses, my diploma in Computer Science & Technology comprised classes like Data Structures and Algorithms."
              />
            </ul>
          </div>
    </section>
  );
};

export default Education;
