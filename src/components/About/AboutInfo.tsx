import { technologies } from "@/constants/constants";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { RefObject } from "react";
// import profilePhoto from "@/assets/images/profile-photo.jpg";

export default function AboutInfo({
  aboutInfoRef,
}: {
  aboutInfoRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div ref={aboutInfoRef} className="space-y-6">
      {/* Profile Photo */}
      <div className="flex justify-center lg:justify-start">
        <figure className="relative w-64 min-h-60 aspect-square">
          <Image
            src="/og-image.jpg"
            alt="Saidul Islam Rana"
            fill
            className="rounded-2xl object-cover shadow-xl hover-lift"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-10" />
        </figure>
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">My Journey</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Hi! I&apos;m Saidul Islam Rana — a frontend web developer passionate
            about building modern, scalable, and responsive web applications.
          </p>

          <p>
            I specialize in React.js, Redux, Tailwind CSS, Material UI, Next.js,
            TypeScript, and Framer Motion to create intuitive and visually
            appealing user interfaces. I also have a foundation in Node.js,
            Express.js, and MongoDB (MERN stack) to bridge frontend and backend
            seamlessly.
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
