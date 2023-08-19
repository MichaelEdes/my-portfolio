import { Technologies } from "./technologies";

export type Project = {
  cardTitle: string;
  cardText: string;
  projectLink: string;
  projectImage: string;
  technologies?: Technologies[];
  description?: string;
  repoUrl?: string;
};

export type ProjectDetailsPropsT = {
  project: Project;
  onClose: () => void;
};
