"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="bg-muted/30 border-t border-primary/30 mt-32 py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            aria-label="Scroll to hero section"
            className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 bg-background/50 backdrop-blur-sm animate-bounce"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>

          {/* Name/Brand */}
          <div className="text-center">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-2">
              Saidul Islam Rana
            </h3>
            <p className="text-muted-foreground">Frontend Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {[
              {
                href: "https://github.com/codewithsaidul",
                icon: Github,
                label: "github",
              },
              {
                href: "https://linkedin.com/in/codewithsaidul",
                icon: Linkedin,
                label: "Linkedin",
              },
              {
                href: "mailto:codewithsaidul@gmail.com",
                icon: Mail,
                label: "email",
              },
            ].map(({ href, icon: Icon, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="
                  social-link p-3 rounded-2xl bg-muted/50 
                  hover:bg-muted text-muted-foreground hover:text-foreground 
                  transition-all duration-300 shadow-lg 
                  hover:scale-110 hover:rotate-6
                "
              >
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {["about", "skills", "projects", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border/40" />

          {/* Copyright */}
          <div className="text-center text-muted-foreground">
            <p className="flex flex-wrap items-center justify-center space-x-1 text-sm">
              <span>© {currentYear} Saidul Islam Rana. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>and lots of coffee.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
