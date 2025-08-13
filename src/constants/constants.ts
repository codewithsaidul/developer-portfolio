import {
  Code,
  Globe,
  Layers,
  Lightbulb,
  Mail,
  MapPin,
  Phone,
  Server,
  Smartphone,
  Users,
  Zap,
  ZapIcon,
} from "lucide-react";
import { BiLogoFirebase } from "react-icons/bi";
import { GiMagicLamp } from "react-icons/gi";
import { GrMysql } from "react-icons/gr";
import { MdOutlineSmartToy } from "react-icons/md";
import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMui,
  SiN8N,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSass,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";




export const categories = [
  "All Projects",
  "Full-Stack",
  "FrontEnd",
  "E-commerce",
  "AI Platform",
  "Dashboard",
  "Web3"
];

export const projects = [
  {
    id: 1,
    title: "AI Mock InterView Platform",
    thumbnail: "/projects/project1.webp",
    codeLink: "https://github.com/codewithsaidul/cws_mock_interview_platform",
    liveLink: "https://prepwise-sigma.vercel.app/",
    description:
      "PrepWise is an innovative platform that helps users prepare for interviews by offering mock interview sessions with personalized questions. The website provides users with the ability to generate interview questions based on their preferences, take mock interviews, and receive feedback, all through voice calls. Whether preparing for coding, behavioral, or system design interviews, PrepWise tailors each session to meet the specific needs of the user.",
    categories: ["Full-Stack", "AI Platform", "Dashboard"],
    techs: [
      { id: 1, name: "shadcn UI" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "next JS" },
      { id: 4, name: "typeScript" },
      { id: 5, name: "react" },
      { id: 6, name: "firebase" },
      { id: 7, name: "react hook form" },
      { id: 8, name: "vapi" },
    ],
  },

  {
    id: 2,
    title: "GizmoMart - E-Commerce Website",
    thumbnail: "/projects/project2.webp",
    codeLink: "https://github.com/codewithsaidul/GizmoMart-Client",
    liveLink: "https://gizmo-mart-client.vercel.app",
    description:
      "Gizmo Mart is a user-centric e-commerce platform designed for smooth and efficient gadget shopping. It offers intuitive product Browse, secure checkout, and order tracking to enhance the online shopping experience for both users and store admins. The platform allows users to easily search, compare, and purchase gadgets from a wide range of categories.",
    categories: ["Full-Stack", "E-commerce", "Dashboard"],
    techs: [
      { id: 1, name: "react" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "node JS" },
      { id: 4, name: "swiper JS" },
      { id: 5, name: "mongoDB" },
      { id: 6, name: "firebase" },
      { id: 7, name: "express JS" },
      { id: 8, name: "tanstack query" },
    ],
  },
  {
    id: 3,
    title: "Naxos NFT Website",
    thumbnail: "/projects/project3.webp",
    codeLink: "https://github.com/codewithsaidul/Naxos-NFT",
    liveLink: "https://naxos-nft.vercel.app",
    description:
      "Naxos NFT is a digital marketplace built to simplify NFT discovery, trading, and collection. It offers a sleek user experience for Browse, minting, and managing NFTs, empowering creators and collectors in the growing world of digital assets. The platform makes it easy for users to discover unique digital art and collectibles, while creators can effortlessly mint and showcase their work.",
    categories: ["FrontEnd", "Web3"],
    techs: [
      { id: 1, name: "react" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "next JS" },
      { id: 4, name: "typeScript" },
      { id: 5, name: "framer motion" },
    ],
  },
  {
    id: 4,
    title: "Animate-X Movie Web Series Anime",
    thumbnail: "/projects/project4.webp",
    codeLink: "https://github.com/codewithsaidul/AnimateX",
    liveLink: "https://animate-x.vercel.app",
    description:
      "Animate-X is a creative animation platform designed to make motion design simple and accessible. It allows users to create, customize, and preview web animations in real time, streamlining the workflow for developers and designers alike. By offering an intuitive interface, Animate-X helps users bring their design ideas to life with ease, whether for websites, mobile apps, or other digital platforms. The platform provides a wide range of customizable animation templates and tools that make the animation process faster and more efficient.",
    categories: ["FrontEnd"],
    techs: [
      { id: 1, name: "react" },
      { id: 2, name: "TailwindCSS" },
      { id: 3, name: "swiper JS" },
      { id: 4, name: "tanstack query" },
      { id: 5, name: "API" },
    ],
  },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "text-blue-500", size: 24 },
      { name: "Redux", icon: SiRedux, color: "text-purple-500", size: 24 },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
        size: 24,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-600",
        size: 24,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-500",
        size: 24,
      },
      {
        name: "ShadCn",
        icon: SiShadcnui,
        color: "text-muted-forground",
        size: 24,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
        size: 24,
      },
      { name: "Material UI", icon: SiMui, color: "text-blue-500", size: 24 },
      { name: "Sass", icon: SiSass, color: "text-pink-500", size: 24 },
      { name: "HTML5", icon: SiHtml5, color: "text-orange-600", size: 24 },
      { name: "CSS3", icon: SiCss3, color: "text-blue-500", size: 24 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Firebase", icon: BiLogoFirebase, color: "text-yellow-400" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      {
        name: "Express",
        icon: SiExpress,
        color: "text-gray-600 dark:text-gray-400",
      },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
      { name: "Restfull Api", icon: Server, color: "text-primary" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-700" },
      { name: "GraphQL", icon: SiGraphql, color: "text-rose-500" },
      { name: "MySQl", icon: GrMysql, color: "text-sky-600" },
      { name: "Socket.io", icon: SiSocketdotio, color: "text-muted-forground" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit, color: "text-orange-600", size: 24 },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-black dark:text-white",
        size: 24,
      },
      { name: "VS Code", icon: VscVscode, color: "text-blue-600", size: 24 },
      {
        name: "Chat GPT",
        icon: SiOpenai,
        color: "text-black dark:text-white",
        size: 24,
      },
      {
        name: "N8N",
        icon: SiN8N,
        color: "text-black dark:text-white",
        size: 24,
      },
      { name: "Figma", icon: SiFigma, color: "text-purple-500", size: 24 },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-black dark:text-white",
        size: 24,
      },
      { name: "Netlify", icon: SiNetlify, color: "text-teal-500", size: 24 },
      {
        name: "Lovable AI",
        icon: MdOutlineSmartToy,
        color: "text-rose-500",
        size: 24,
      },
      {
        name: "V0 AI",
        icon: GiMagicLamp,
        color: "text-muted-forground",
        size: 24,
      },
    ],
  },
];

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

export const technologies: string[] = [
  "React",
  "TypeScript",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Tailwind CSS",
  "SCSS",
  "JavaScript ES6+",
  "GraphQL",
  "REST APIs",
  "Git",
  "Docker",
  "AWS",
  "MongoDB",
  "PostgreSQL",
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
    name: "Performance",
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
