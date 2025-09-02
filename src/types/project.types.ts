export interface IProjectTech {
  id?: number;
  name: string;
}

export interface IProject {
  id: number;
  title: string;
  thumbnail: string;
  clientLink: string;
  serverLink: string | null;
  liveLink: string;
  description: string;
  techs: IProjectTech[];
  categories: string[];
}

export interface IProjectCardProps {
  project: IProject;
}
