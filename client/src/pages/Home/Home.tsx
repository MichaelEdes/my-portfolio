import React, { useState } from "react";
import styles from "./Home.module.scss";
import "../../styles/global.scss";
import NavBar from "../../components/NavBar/NavBar";
import PageHero from "../../components/PageHero/PageHero";
import PageFooter from "../../components/PageFooter/PageFooter";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  cardTitle: string;
  cardText: string;
  projectLink: string;
  projectImage: string;
};

const projects = [
  {
    cardTitle: "SMRC",
    cardText: "E-commerce website for device repair store",
    projectLink: "https://sunderlandmobiles.com",
    projectImage: "https://iili.io/HbJCoxe.jpg",
  },
  {
    cardTitle: "Wave",
    cardText: "A psychological health and wellness tracker",
    projectLink: "https://github.com/MichaelEdes/Wave",
    projectImage: "https://iili.io/HbJBUAP.jpg",
  },
  {
    cardTitle: "SalesLynk",
    cardText:
      "SaaS solution developed to help cyber security professionals build stronger relationships with their clients and prospects",
    projectLink: "https://www.saleslynk.co.uk/",
    projectImage: "https://iili.io/HDm9FTP.jpg",
  },
  {
    cardTitle: "Infocrypt",
    cardText: "A mobile NFT marketplace",
    projectLink:
      "https://www.figma.com/proto/Gf0WZiGpJDTcZHQDgEEneH/Untitled?page-id=0%3A1&node-id=2-106&viewport=241%2C48%2C0.41&scaling=scale-down&starting-point-node-id=2%3A106",
    projectImage: "https://iili.io/HDb8nRV.png",
  },
  {
    cardTitle: "Metro",
    cardText: "Online website for north east sandwich shop",
    projectLink: "http://metrosandwichco.co.uk",
    projectImage: "https://iili.io/HbJCYOP.png",
  },
  {
    cardTitle: "Indrex - WIP",
    cardText: "Futuristic concept e-commerce store",
    projectLink: "https://www.indrex.co.uk",
    projectImage: "https://iili.io/HDp5IYx.png",
  },
];

type ProjectDetailsProps = {
  project: Project;
  onClose: () => void;
};

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
        <h2>{project.cardTitle}</h2>
        {/* <img src={project.projectImage} alt={project.cardTitle} /> */}
        <p>{project.cardText}</p>
        <a href={project.projectLink}>Link to Project</a>
        <button onClick={onClose}>Close</button>
      </div>
    </motion.div>
  );
}

function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projects[0]
  );

  const handleClose = () => {
    setSelectedProject(null);
    setIsOpen(false);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
    console.log(project);
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
