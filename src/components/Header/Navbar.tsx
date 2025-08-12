"use client";
import { navigation } from "@/constants/constants";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Sun, Moon, X, Menu } from "lucide-react"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="py-3 bg-card fixed top-0 left-0 z-50 right-0 w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//       <nav className="flex justify-between items-center">
//         {/* ============== Logo ============== */}
//         <div className="flex justify-center items-center">
//           <Logo />
//         </div>

//         {/* ================== Center Navigation Menu =================================== */}
//         <div>
//           <ul className="hidden min-[850px]:flex flex-row items-center justify-center gap-5 lg:gap-10 xl:gap-16">
//             {sections.map((section) => (
//               <li
//                 key={section}
//                 className={twMerge(
//                   "text-textSecondary text-2xl font-dm-serif duration-500 hover:text-primary hover::duration-500 capitalize"
//                 )}
//               >
//                 <Link href={`#${section}`}>{section}</Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="max-[850px]:hidden">
//           <Link
//             href="https://github.com/codewithsaidul"
//             target="_blank"
//             className="py-3 px-7 text-xl font-dm-serif bg-gradient-to-r from-[#90caf9] to-[#4a90e2] text-white rounded-full border-2 border-primary duration-700 hover:bg-none  hover:bg-transparent hover:border-primary hover:duration-700 transition-all"
//           >
//             Github Profile
//           </Link>
//         </div>

//         {/* toggle CustomButton */}
//         <div className="cursor-pointer min-[850px]:hidden">
//           <MenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
//         </div>

//         {/* ================== Sidebar ===================== */}
//         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} sections={sections} />
//       </nav>
//     </header>
//   );
// };

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background">
      {/* Navigation */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-gradient">
                Saidul Islam
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 font-medium focus-ring bg-none border-none cursor-pointer text-xl"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="focus-ring"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Mobile menu CustomButton */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden focus-ring"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <ul className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-xl border-b border-border">
                {navigation.map((item) => (
                  <li
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-foreground/80 hover:text-primary block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 focus-ring"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
