"use client";

import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowUp, Github, Heart, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (!prefersReducedMotion) {
        // Social links hover animations
        const socialLinks = footerRef.current?.querySelectorAll(".social-link");
        socialLinks?.forEach((link) => {
          const element = link as HTMLElement;
          element.addEventListener("mouseenter", () => {
            gsap.to(element, {
              scale: 1.1,
              rotation: 5,
              duration: 0.3,
              ease: "power2.out",
            });
          });
          element.addEventListener("mouseleave", () => {
            gsap.to(element, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });
      }
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={footerRef} className="bg-muted/30 border-t border-primary/30 mt-32 py-20">
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
            <Link
              href="https://github.com/codewithsaidul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github"
              className="social-link p-3 rounded-2xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 shadow-lg"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/codewithsaidul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Linkedin"
              className="social-link p-3 rounded-2xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 shadow-lg"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:codewithsaidul@gmail.com"
              aria-label="email"
              className="social-link p-3 rounded-2xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground transition-all duration-300 shadow-lg"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
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
