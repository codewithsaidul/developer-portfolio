"use client"

import { twMerge } from "tailwind-merge";

const MenuIcon = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  return (
    <div
      data-menu-icon
      className="flex flex-col gap-1 cursor-pointer relative z-[51]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={twMerge(
          "w-[16.5px] h-[1.5px] bg-white transition-all duration-300",
          isOpen && "rotate-45 translate-y-1"
        )}
      ></div>
      <div
        className={twMerge(
          "w-[16.5px] h-[1.5px] bg-white transition-all duration-300",
          isOpen && "opacity-0"
        )}
      ></div>
      <div
        className={twMerge(
          "w-[16.5px] h-[1.5px] bg-white transition-all duration-300",
          isOpen && "-rotate-45 -translate-y-2"
        )}
      ></div>
    </div>
  );
};

export default MenuIcon;