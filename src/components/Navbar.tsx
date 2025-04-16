"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import { useState } from "react";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className="text-white
     h-20 bg-card fixed top-0 left-0 right-0 w-full py-4 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20"
    >
      <nav className="flex justify-between items-center">
        {/* ============== Logo ============== */}
        <div className="flex justify-center items-center">
          <Link
            href="/"
            className="text-3xl lg:text-5xl font-dm-serif text-primary cursor-pointer"
          >
            CodeWithSaidul
          </Link>
        </div>

        {/* ================== Navigation Menu =================================== */}
        <div>
          <ul className="hidden md:flex flex-row items-center justify-center gap-5 lg:gap-10 xl:gap-16">
            <li className="text-2xl lg:text-3xl text-primary font-dm-serif duration-500 hover:text-primary hover::duration-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-2xl lg:text-3xl text-textPrimary font-medium duration-500 hover:text-primary hover::duration-500">
              <Link href="#about">About</Link>
            </li>
            <li className="text-2xl lg:text-3xl text-textPrimary font-medium duration-500 hover:text-primary hover::duration-500">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="text-2xl lg:text-3xl text-textPrimary font-medium duration-500 hover:text-primary hover::duration-500">
              <Link href="#projects">Projects</Link>
            </li>
            <li className="text-2xl lg:text-3xl text-textPrimary font-medium duration-500 hover:text-primary hover::duration-500">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* toggle button */}
        <div className="cursor-pointer md:hidden">
          <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* ================== Sidebar ===================== */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </header>
  );
};

export default Navbar;
