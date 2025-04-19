import { SocialIconProps } from "@/types/types";
import Link from "next/link";

const SocialIcon = ({ social }: SocialIconProps) => {
  const { name, link, icon } = social;
  return (
    <Link
      href={link}
      target="_blank"
      aria-label={name} 
      className="p-3 border border-primary bg-transparent duration-700 rounded-full hover:bg-primary hover:duration-700 transition-all ease-in-out"
    >
      {icon}
    </Link>
  );
};

export default SocialIcon;
