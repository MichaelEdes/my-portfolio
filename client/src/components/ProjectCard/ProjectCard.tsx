import React, { useState, useEffect } from "react";
import IconButton from "../IconButtons/IconButtons";
import styles from "./ProjectCard.module.scss";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { ProjectCardPropsT } from "../../types/projectCard";

const ProjectCard: React.FC<ProjectCardPropsT> = ({
  cardTitle,
  cardText,
  projectLink,
  projectImage,
  onClick,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 425) {
      setIsSmallScreen(false);
    }
  }, []);

  return (
    <div className={styles.projectContainer}>
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
        {isSmallScreen && <button onClick={onClick}>View More</button>}
      </div>
      <div className={styles.projectImage} onClick={onClick}>
        <img loading="lazy" src={projectImage} alt="wave project" />
      </div>
    </div>
  );
};

export default ProjectCard;
