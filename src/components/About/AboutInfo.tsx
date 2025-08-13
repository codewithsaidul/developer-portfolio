import { technologies } from "@/constants/constants";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { RefObject } from "react";
import profilePhoto from "@/assets/images/profile-photo.jpg";



export default function AboutInfo({
  aboutInfoRef,
}: {
  aboutInfoRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={aboutInfoRef} className="space-y-6">
      {/* Profile Photo */}
      <div className="flex justify-center lg:justify-start">
        <div className="relative">
          <Image
            src={profilePhoto}
            alt="Saidul Islam Rana"
            className="w-64 h-64 rounded-2xl object-cover shadow-xl hover-lift"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10" />
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">My Journey</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            With over 5 years of experience in frontend development, I&apos;ve
            had the privilege of working with diverse teams and technologies to
            create exceptional digital experiences.
          </p>
          <p>
            My passion lies in transforming complex problems into simple,
            beautiful, and intuitive solutions. I believe that great software is
            not just about functionality, but about creating delightful
            experiences that users love.
          </p>
          <p>
            When I&apos;m not coding, you&apos;ll find me exploring new
            technologies, contributing to open-source projects, or mentoring
            aspiring developers in the community.
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold">Technologies I Love</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
