"use client";
import { SidebarProps } from "@/types/types";
import Link from "next/link";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";



const Sidebar = ({ isOpen, setIsOpen, sections }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sidebarRef}
      className={twMerge(
        "absolute top-[85px] right-0 bg-card max-w-[290px] w-full h-auto shadow-2xl p-10 transform transition-transform duration-500 ease-in-out rounded-2xl",
        isOpen ? "translate-x-0 duration-500" : "translate-x-full"
      )}
    >
      <ul className="flex flex-col items-center space-y-6">
        {sections.map((section) => (
          <li
            key={section}
            className={twMerge(
              "text-2xl text-textSecondary font-dm-serif duration-500 hover:text-primary hover::duration-500 capitalize"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link href={`#${section}`}>{section}</Link>
          </li>
        ))}

        
      </ul>

      <div className="w-full flex mt-6">
          <Link
            href="https://github.com/codewithsaidul"
            target="_blank"
            className="text-center w-full max-[340px]:py-2 max-[340px]:px-5 py-3 px-7 max-[340px]:text-base text-xl font-dm-serif bg-gradient-to-r from-[#90caf9] to-[#4a90e2] text-white rounded-full border-2 border-primary duration-700 hover:bg-none  hover:bg-transparent hover:border-primary hover:duration-700 transition-all"
          >
            Github Profile
          </Link>
        </div>
    </div>
  );
};

export default Sidebar;
