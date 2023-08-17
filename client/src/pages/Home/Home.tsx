import React from "react";
import styles from "./Home.module.scss";
import "../../styles/global.scss";
import NavBar from "../../components/NavBar/NavBar";
import PageHero from "../../components/PageHero/PageHero";
import PageFooter from "../../components/PageFooter/PageFooter";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <main className={styles.content}>
        <PageHero />
        <section className={`${styles.projects}`} id="projects">
          <ProjectCard
            cardTitle="Wave"
            cardText="A psychological health and wellness tracker"
            projectLink=""
          />
          <ProjectCard
            cardTitle="Wave"
            cardText="A psychological health and wellness tracker"
            projectLink=""
          />
          <ProjectCard
            cardTitle="Wave"
            cardText="A psychological health and wellness tracker"
            projectLink=""
          />
          <ProjectCard
            cardTitle="Wave"
            cardText="A psychological health and wellness tracker"
            projectLink=""
          />
        </section>
        <PageFooter />
      </main>
    </div>
  );
}

export default Home;
