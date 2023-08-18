import React, { useState } from "react";
import styles from "./Home.module.scss";
import "../../styles/global.scss";
import NavBar from "../../components/NavBar/NavBar";
import PageHero from "../../components/PageHero/PageHero";
import PageFooter from "../../components/PageFooter/PageFooter";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import HTMLIcon from "../../components/Icons/HTML";
import TypescriptIcon from "../../components/Icons/Typescript";
import JavascriptIcon from "../../components/Icons/Javascript";
import CSSIcon from "../../components/Icons/CSS";
import ReactIcon from "../../components/Icons/React";
import TailwindIcon from "../../components/Icons/Tailwind";
import AdobeXDIcon from "../../components/Icons/AdobeXD";
import NodeIcon from "../../components/Icons/Node";
import MySQLIcon from "../../components/Icons/mySQL";
import SassIcon from "../../components/Icons/Sass";
import SwiftIcon from "../../components/Icons/Swift";
import JawsDBIcon from "../../components/Icons/JawsDB";
import FigmaIcon from "../../components/Icons/Figma";
import IconButton from "../../components/IconButtons/IconButtons";
import { Close } from "@mui/icons-material";

enum Technologies {
  HTML = "HTML",
  CSS = "CSS",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  React = "React",
  Tailwind = "Tailwind",
  AdobeXD = "AdobeXD",
  Figma = "Figma",
  Sass = "Sass",
  Node = "Node",
  MySQL = "MySQL",
  Swift = "Swift",
  JawsDB = "JawsDB",
}

const techstack: Record<Technologies, { icon: React.ReactElement }> = {
  [Technologies.HTML]: {
    icon: <HTMLIcon />,
  },
  [Technologies.CSS]: {
    icon: <CSSIcon />,
  },
  [Technologies.JavaScript]: {
    icon: <JavascriptIcon />,
  },
  [Technologies.TypeScript]: {
    icon: <TypescriptIcon />,
  },
  [Technologies.React]: {
    icon: <ReactIcon />,
  },
  [Technologies.Tailwind]: {
    icon: <TailwindIcon />,
  },
  [Technologies.AdobeXD]: {
    icon: <AdobeXDIcon />,
  },
  [Technologies.Figma]: {
    icon: <FigmaIcon />,
  },
  [Technologies.Sass]: {
    icon: <SassIcon />,
  },
  [Technologies.Node]: {
    icon: <NodeIcon />,
  },
  [Technologies.MySQL]: {
    icon: <MySQLIcon />,
  },
  [Technologies.Swift]: {
    icon: <SwiftIcon />,
  },
  [Technologies.JawsDB]: {
    icon: <JawsDBIcon />,
  },
};

type Project = {
  cardTitle: string;
  cardText: string;
  projectLink: string;
  projectImage: string;
  technologies?: Technologies[];
  description?: string;
};

const projects = [
  {
    cardTitle: "SMRC",
    cardText: "E-commerce website for device repair store",
    projectLink: "https://sunderlandmobiles.com",
    projectImage: "https://iili.io/HbJCoxe.jpg",
    technologies: [
      Technologies.React,
      Technologies.JavaScript,
      Technologies.MySQL,
      Technologies.Node,
      Technologies.JawsDB,
    ],
    description:
      "The SMRC platform offers an e-commerce solution for a specialized device repair store. Through this user-friendly site, customers can seamlessly access repair services for their devices. Built with cutting-edge technologies like React and Node, the website ensures smooth navigation and a secure database with MySQL and JawsDB, enhancing the overall user experience. Explore its features at sunderlandmobiles.com.",
  },
  {
    cardTitle: "Wave",
    cardText: "A psychological health and wellness tracker",
    projectLink: "https://github.com/MichaelEdes/Wave",
    projectImage: "https://iili.io/HbJBUAP.jpg",
    technologies: [Technologies.Swift, Technologies.AdobeXD],
    description:
      "Wave is an innovative psychological wellness application. Built with Swift and designed using AdobeXD, the application aims to empower users to track and improve their mental health. With a combination of intuitive design and scientific metrics, Wave offers users comprehensive insights into their psychological well-being. Source code available on GitHub.",
  },
  {
    cardTitle: "SalesLynk",
    cardText:
      "SaaS solution developed to help cyber security professionals build stronger relationships with their clients and prospects",
    projectLink: "https://www.saleslynk.co.uk/",
    projectImage: "https://iili.io/HDm9FTP.jpg",
    technologies: [
      Technologies.React,
      Technologies.TypeScript,
      Technologies.Node,
    ],
    description:
      "SalesLynk is a bespoke SaaS platform catering to cybersecurity professionals. It's designed to foster and strengthen client relationships, with an emphasis on trust and communication. Utilizing technologies like React, TypeScript, and Node, SalesLynk provides a seamless interface for professionals to offer and receive services. Dive into its offerings at saleslynk.co.uk.",
  },
  {
    cardTitle: "Infocrypt",
    cardText: "A mobile NFT marketplace",
    projectLink:
      "https://www.figma.com/proto/Gf0WZiGpJDTcZHQDgEEneH/Untitled?page-id=0%3A1&node-id=2-106&viewport=241%2C48%2C0.41&scaling=scale-down&starting-point-node-id=2%3A106",
    projectImage: "https://iili.io/HDb8nRV.png",
    technologies: [Technologies.Figma],
    description:
      "Stepping into the rapidly evolving world of NFTs, Infocrypt offers a mobile marketplace for digital collectors and creators. With a design prototype available on Figma, Infocrypt showcases an easy-to-use platform for trading and exploring NFTs.",
  },
  {
    cardTitle: "Metro",
    cardText: "Online website for north east sandwich shop",
    projectLink: "http://metrosandwichco.co.uk",
    projectImage: "https://iili.io/HbJCYOP.png",
    technologies: [
      Technologies.React,
      Technologies.JavaScript,
      Technologies.MySQL,
      Technologies.Node,
      Technologies.JawsDB,
    ],
    description:
      "A digital gateway to a renowned north-east sandwich shop, Metro's website offers a delectable menu in a visually appealing layout. With a strong backend powered by MySQL and Node and a responsive frontend built with React, the platform ensures a delightful and efficient ordering experience. Visit the delicious offerings at metrosandwichco.co.uk.",
  },
  {
    cardTitle: "Indrex - WIP",
    cardText: "Futuristic concept e-commerce store",
    projectLink: "https://www.indrex.co.uk",
    projectImage: "https://iili.io/HDp5IYx.png",
    technologies: [
      Technologies.React,
      Technologies.TypeScript,
      Technologies.MySQL,
      Technologies.Node,
      Technologies.JawsDB,
    ],
    description:
      "Indrex promises a futuristic e-commerce experience. Still a work in progress, the store aims to incorporate advanced tech features and a user-friendly interface. Designed with technologies like React, TypeScript, and MySQL, the platform intends to redefine the standard for online shopping. Sneak a peek at indrex.co.uk.",
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
