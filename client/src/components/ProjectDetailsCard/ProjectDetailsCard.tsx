import React from "react";
import { motion } from "framer-motion";
import { techstack } from "../../types/technologies";
import { ProjectDetailsProps } from "../../interfaces/project";
import IconButton from "../IconButtons/IconButtons";
import { GitHub, Close } from "@mui/icons-material";
import styles from "./ProjectDetailsCard.module.scss";

function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className={styles.projectDetails}
    >
      <span onClick={onClose} />
      <div>
        <h1>{project.cardTitle}</h1>
        <p>{project.description}</p>
        <ul className={styles.technologiesIcon}>
          {project.technologies?.map((tech, index) => (
            <li key={index}>{techstack[tech].icon}</li>
          ))}
        </ul>
        <a
          className={styles.viewProjectLink}
          href={project.projectLink}
          target="_blank"
          rel="noreferrer"
        >
          <button>View Project </button>
        </a>
        <img src={"https://iili.io/HDZJI5P.png"} alt="profileimage" />
        <section onClick={onClose}>
          <IconButton classname={styles.projectLink}>
            <Close />
          </IconButton>
        </section>
        {project.repoUrl && (
          <IconButton
            href={project.repoUrl}
            target="_blank"
            classname={`${styles.projectLink} ${styles.projectRepoLink}`}
          >
            <GitHub />
          </IconButton>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectDetails;
