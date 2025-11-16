import { IProject } from "@/types";
import {
  AppWindow,
  Atom,
  Boxes,
  Cloud,
  Code,
  Cpu,
  Database,
  FileCode,
  Globe,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Palette,
  PenTool,
  Phone,
  Puzzle,
  Server,
  Smartphone,
  Users,
  Webhook,
  Zap,
  ZapIcon,
} from "lucide-react";

// ================================
// Categories
// ================================

export const categories = [
  "All Projects",
  "Full-Stack",
  "FrontEnd",
  "E-commerce",
  "AI Platform",
  "Dashboard",
  "Web3",
];

// ================================
// Projects
// ================================

export const projects: IProject[] = [
  {
    id: 1,
    title: "Rydex - Intelligent Ride Booking Platform",
    thumbnail: "/projects/project1.webp",
    clientLink: "https://github.com/codewithsaidul/ph-assignmen-six",
    serverLink: "https://github.com/codewithsaidul/ph-assignmen-six",
    liveLink: "https://rydex.vercel.app",
    description:
      "Full-stack real-time ride booking system with location tracking, role-based access, WebSocket ride updates, and dashboards.",
    categories: ["Full-Stack", "Real-time Application", "Geolocation"],
    techs: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Redux Toolkit" },
      { id: 5, name: "Express.JS" },
      { id: 6, name: "Mongoose" },
      { id: 7, name: "MongoDB" },
      { id: 8, name: "Socket.IO" },
      { id: 9, name: "ZOD" },
      { id: 10, name: "Shadcn UI" },
      { id: 11, name: "Tailwind CSS" },
      { id: 12, name: "Leaflet.js" },
    ],
  },

  {
    id: 2,
    title: "AI Mock Interview Platform",
    thumbnail: "/projects/project2.webp",
    clientLink: "https://github.com/codewithsaidul/cws_mock_interview_platform",
    serverLink: null,
    liveLink: "https://prepwise-sigma.vercel.app/",
    description:
      "AI-driven mock interview platform offering real-time voice interviews, question generation, and personalized feedback.",
    categories: ["Full-Stack", "AI Platform", "Dashboard"],
    techs: [
      { id: 1, name: "Shadcn UI" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "Next.js" },
      { id: 4, name: "TypeScript" },
      { id: 5, name: "React" },
      { id: 6, name: "Firebase" },
      { id: 7, name: "React Hook Form" },
      { id: 8, name: "VAPI" },
    ],
  },

  {
    id: 3,
    title: "Naxos NFT Website",
    thumbnail: "/projects/project3.webp",
    clientLink: "https://github.com/codewithsaidul/Naxos-NFT",
    serverLink: null,
    liveLink: "https://naxos-nft.vercel.app",
    description:
      "Frontend NFT marketplace with minting, browsing, and animation effects for Web3 creators and collectors.",
    categories: ["FrontEnd", "Web3"],
    techs: [
      { id: 1, name: "React" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "Next.js" },
      { id: 4, name: "TypeScript" },
      { id: 5, name: "Framer Motion" },
    ],
  },

  {
    id: 4,
    title: "Animate-X Movie Web Series Anime",
    thumbnail: "/projects/project4.webp",
    clientLink: "https://github.com/codewithsaidul/AnimateX",
    serverLink: null,
    liveLink: "https://animate-x.vercel.app",
    description:
      "Creative animation platform with real-time previews, templates, API integration, and designer/developer friendly UI.",
    categories: ["FrontEnd"],
    techs: [
      { id: 1, name: "React" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "Swiper.js" },
      { id: 4, name: "TanStack Query" },
      { id: 5, name: "API" },
    ],
  },
];

// ================================
// Skill Categories (Lucide Icons Only)
// ================================

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: Atom },
      { name: "Redux", icon: Boxes },
      { name: "Next.js", icon: Globe },
      { name: "TypeScript", icon: FileCode },
      { name: "JavaScript", icon: FileCode },
      { name: "ShadCn", icon: Layers },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Material UI", icon: AppWindow },
      { name: "Sass", icon: Palette },
      { name: "HTML5", icon: FileCode },
      { name: "CSS3", icon: Palette },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Firebase", icon: Cloud },
      { name: "MongoDB", icon: Database },
      { name: "Express", icon: Server },
      { name: "Node.js", icon: Cpu },
      { name: "REST API", icon: Server },
      { name: "PostgreSQL", icon: Database },
      { name: "GraphQL", icon: Puzzle },
      { name: "MySQL", icon: Database },
      { name: "Socket.io", icon: Webhook },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: Code },
      { name: "GitHub", icon: Code },
      { name: "VS Code", icon: Code },
      { name: "ChatGPT", icon: Lightbulb },
      { name: "N8N", icon: Webhook },
      { name: "Figma", icon: PenTool },
      { name: "Vercel", icon: Cloud },
      { name: "Netlify", icon: Cloud },
      { name: "Lovable AI", icon: Lightbulb },
      { name: "V0 AI", icon: Lightbulb },
    ],
  },
];

// ================================
// Highlights
// ================================

export const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Creative solutions to complex technical challenges",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Effective teamwork and clear communication",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized applications for the best user experience",
  },
];

// ================================
// Misc Technologies
// ================================

export const technologies: string[] = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "JavaScript ES6+",
  "GraphQL",
  "REST APIs",
  "Git",
  "Docker",
  "AWS",
];

export const engineeringPillars = [
  {
    icon: Globe,
    name: "Web Api's",
    des: "Efficient integration with REST and GraphQL services.",
    color: "text-blue-500",
  },
  {
    icon: Smartphone,
    name: "Mobile First",
    des: "Designing interfaces that excel on all mobile devices.",
    color: "text-purple-500",
  },
  {
    icon: Layers,
    name: "Architecture",
    des: "Organizing backend code with modular MVC patterns.",
    color: "text-cyan-500",
  },
  {
    icon: ZapIcon,
    name: "Web Performance",
    des: "Optimizing code for speed, scalability, and efficiency.",
    color: "text-sky-500",
  },
];

export const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "codewithsaidul@gmail.com",
    href: "mailto:codewithsaidul@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+880 1763079580",
    href: "tel:+8801763079580",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Sylhet Bangladesh",
    href: "#",
  },
];
