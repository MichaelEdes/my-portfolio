import React from "react";
import IconButton from "../IconButtons/IconButtons";
import styles from "./ProjectCard.module.scss";
import CallMadeIcon from "@mui/icons-material/CallMade";

type ProjectCardProps = {
  cardTitle: string;
  cardText: string;
  projectLink: string;
  projectImage: string;
  onClick: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  cardTitle,
  cardText,
  projectLink,
  projectImage,
  onClick,
}) => {
  return (
    <div className={styles.projectContainer} onClick={onClick}>
      <div className={styles.projectContent}>
        <div>
          <h4>{cardTitle}</h4>
          <p>{cardText}</p>
        </div>
        <IconButton
          href={projectLink}
          classname={styles.projectLink}
          target="_blank"
        >
          <CallMadeIcon />
        </IconButton>
      </div>
      <div className={styles.projectImage}>
        <img src={projectImage} alt="wave project" />
      </div>
    </div>
  );
};

export default ProjectCard;
