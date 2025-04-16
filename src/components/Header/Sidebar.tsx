"use client";
import Link from "next/link";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  sections: string[];
}

const Sidebar = ({ isOpen, setIsOpen, sections }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sidebarRef}
      className={twMerge(
        "absolute top-[85px] right-0 bg-card max-w-3xs w-full h-auto shadow-2xl p-10 transform transition-transform duration-500 ease-in-out rounded-2xl",
        isOpen ? "translate-x-0 duration-500" : "translate-x-full"
      )}
    >
      <ul className="flex flex-col items-center space-y-6">
        {sections.map((section) => (
          <li
            key={section}
            className={twMerge(
              "text-3xl  font-dm-serif duration-500 hover:text-primary hover::duration-500 capitalize"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link href={`#${section}`}>{section}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
