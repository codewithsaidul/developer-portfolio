"use client";
import Sidebar from "@/components/Header/Sidebar";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import { sections } from "@/constants/constants";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-3 bg-card fixed top-0 left-0 z-50 right-0 w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <nav className="flex justify-between items-center">
        {/* ============== Logo ============== */}
        <div className="flex justify-center items-center">
          <Logo />
        </div>

        {/* ================== Center Navigation Menu =================================== */}
        <div>
          <ul className="hidden min-[850px]:flex flex-row items-center justify-center gap-5 lg:gap-10 xl:gap-16">
            {sections.map((section) => (
              <li
                key={section}
                className={twMerge(
                  "text-textSecondary text-2xl font-dm-serif duration-500 hover:text-primary hover::duration-500 capitalize"
                )}
              >
                <Link href={`#${section}`}>{section}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-[850px]:hidden">
          <Link
            href="https://github.com/codewithsaidul"
            target="_blank"
            className="py-3 px-7 text-xl font-dm-serif bg-gradient-to-r from-[#90caf9] to-[#4a90e2] text-white rounded-full border-2 border-primary duration-700 hover:bg-none  hover:bg-transparent hover:border-primary hover:duration-700 transition-all"
          >
            Github Profile
          </Link>
        </div>

        {/* toggle button */}
        <div className="cursor-pointer min-[850px]:hidden">
          <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* ================== Sidebar ===================== */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} sections={sections} />
      </nav>
    </header>
  );
};

export default Navbar;
