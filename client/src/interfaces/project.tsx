import { Technologies } from "../types/technologies";

export type Project = {
  cardTitle: string;
  cardText: string;
  projectLink: string;
  projectImage: string;
  technologies?: Technologies[];
  description?: string;
  repoUrl?: string;
};

export type ProjectDetailsProps = {
  project: Project;
  onClose: () => void;
};
