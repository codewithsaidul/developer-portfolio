"use client";
import { IProjectCardProps } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

const ProjectCard = ({ project}: IProjectCardProps) => {
  const isFullStack = project.categories.some(
    (category) => category === "Full-Stack"
  );


  return (
    <Card className="group overflow-hidden pt-0 hover-lift border border-border/50">
      <div className="relative overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          width={600}
          height={600}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Featured Badge */}
        {isFullStack && (
          <div className="absolute top-1 left-1">
            <Badge className="bg-primary text-xl">Full Stack</Badge>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <Badge key={tech.id} variant="secondary" className="text-xs">
              {tech.name}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-3 pt-2">
          <Button
            variant="ghost"
            size="sm"
            className="hover:text-primary transition-colors duration-300"
            asChild
          >
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="hover:text-primary transition-colors duration-300"
            asChild
          >
            <Link
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              Source
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
