import { ButtonProps } from "@/types/types";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Button = ({ title, link, type, loading }: ButtonProps) => {
  return link ? (
    <Link
      href={link}
      target="_blank"
      className={twMerge(
        "py-3 px-7 text-xl border border-transparent font-dm-serif text-textSecondary rounded-full duration-700 hover:duration-700 w-full text-center",
        type === "filed"
          ? "bg-primary hover:bg-transparent hover:border-primary"
          : "border-primary hover:bg-primary"
      )}
    >
      {title}
    </Link>
  ) : (
    <button
      type="submit"
      disabled={loading}
      className={twMerge(
        "py-3 px-7 text-xl border border-transparent font-dm-serif text-textSecondary rounded-full duration-700 hover:duration-700 w-full text-center disabled:bg-primary/75",
        type === "filed"
          ? "bg-primary hover:bg-transparent hover:border-primary"
          : "border-primary hover:bg-primary"
      )}
    >
      {title}
    </button>
  );
};

export default Button;
