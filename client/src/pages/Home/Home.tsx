import React, { useState } from "react";
import styles from "./Home.module.scss";
import "../../styles/global.scss";
import NavBar from "../../components/NavBar/NavBar";
import PageHero from "../../components/PageHero/PageHero";
import PageFooter from "../../components/PageFooter/PageFooter";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { AnimatePresence } from "framer-motion";
import { Project } from "../../types/project";
import { projects } from "../../data/projects";
import useBodyOverflow from "../../hooks/useBodyOverflow";
import ProjectDetails from "../../components/ProjectDetailsCard/ProjectDetailsCard";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClose = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.content}>
        <PageHero />
        <section className={`${styles.projects}`} id="projects">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              cardTitle={project.cardTitle}
              cardText={project.cardText}
              projectLink={project.projectLink}
              projectImage={project.projectImage}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </section>
        <AnimatePresence>
          {isOpen && selectedProject && (
            <ProjectDetails project={selectedProject} onClose={handleClose} />
          )}
        </AnimatePresence>
        <PageFooter />
      </main>
    </div>
  );
}

export default Home;
