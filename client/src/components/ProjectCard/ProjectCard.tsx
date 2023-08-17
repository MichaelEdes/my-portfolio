import React from "react";
import IconButton from "../IconButtons/IconButtons";
import styles from "./ProjectCard.module.scss";
import CallMadeIcon from "@mui/icons-material/CallMade";

interface ProjectCardProps {
  cardTitle: string;
  cardText: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  cardTitle,
  cardText,
  projectLink,
}) => {
  return (
    <div className={styles.projectContainer}>
      <div>
        <h4>{cardTitle}</h4>
        <p>{cardText}</p>
      </div>
      <IconButton href={projectLink} classname={styles.projectLink}>
        <CallMadeIcon />
      </IconButton>
    </div>
  );
};

export default ProjectCard;
