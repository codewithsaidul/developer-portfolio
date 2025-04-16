"use client";
import Sidebar from "@/components/Header/Sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

const sections = ["home", "about", "projects", "skills", "contact"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (sections.includes(id)) {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="py-3 bg-card fixed top-0 left-0 right-0 w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <nav className="flex justify-between items-center">
        {/* ============== Logo ============== */}
        <div className="flex justify-center items-center">
          <Logo />
        </div>

        {/* ================== Navigation Menu =================================== */}
        <div>
          <ul className="hidden md:flex flex-row items-center justify-center gap-5 lg:gap-10 xl:gap-16">
            {sections.map((section) => (
              <li
                key={section}
                className={twMerge(
                  "text-2xl lg:text-3xl font-dm-serif duration-500 hover:text-primary hover::duration-500 capitalize",
                  activeSection === section
                    ? "text-primary"
                    : "text-textPrimary"
                )}
              >
                <Link href={`#${section}`}>{section}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* toggle button */}
        <div className="cursor-pointer md:hidden">
          <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        {/* ================== Sidebar ===================== */}
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          activeSection={activeSection}
          sections={sections}
        />
      </nav>
    </header>
  );
};

export default Navbar;
