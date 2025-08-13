


export interface ProjectTech {
  id?: number;
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



export interface ProjectModelProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  setProjectIndex: (value: number) => void;
  setIsOpen: (value: boolean) => void;
}