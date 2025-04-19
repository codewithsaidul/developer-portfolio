import LiIcon from "@/components/ui/Custom/LiIcon";
import { DetailsProps } from "@/types/types";
import { motion } from "framer-motion";
import { useRef } from "react";



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

export default Details;
