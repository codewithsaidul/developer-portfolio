import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex justify-center items-center rounded-full text-xl font-bold border border-solid border-transparent border-light text-white font-dm-serif"
        whileHover={{
          backgroundColor: [
            "#90caf9",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#90caf9",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        CWS
      </MotionLink>
    </div>
  );
};

export default Logo;
