export interface ProjectTech {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  codeLink: string;
  liveLink: string;
  description: string;
  techs: ProjectTech[];
}

export interface SectionHeadingProps {
  title: string;
  desc: string;
}

export interface SkillsTech {
  name: string;
  icon: string;
}

export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  sections: string[];
}

export interface ProjectModelProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export interface ProjectCardProps {
  project: Project;
  setIsOpen: (value: boolean) => void
}

export interface ButtonProps {
  title: string;
  link: string;
  type: "filed" | "outline";
}
