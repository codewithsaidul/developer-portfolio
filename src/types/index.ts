export type { Theme, ThemeProviderProps } from "./theme.types";
export type { SocialsIcon, SocialIconProps } from "./social.types";
export type { SkillsTech } from "./skills.types";
export type { Project, ProjectCardProps, ProjectModelProps, ProjectTech } from "./project.types";
export type { SectionHeadingProps } from "./heading.types";
export type { DetailsProps } from "./education.types";





export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  sections: string[];
}



export interface CustomButtonProps {
  title: string;
  link?: string;
  type: "filed" | "outline";
  loading?: boolean;
}


