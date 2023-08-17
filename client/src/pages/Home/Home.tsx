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
            cardTitle="Sunderland Mobile Repair Center"
            cardText="E-commerce website for device repair store"
            projectLink="https://sunderlandmobiles.com"
            projectImage="https://iili.io/HDDy8DF.jpg"
          />
          <ProjectCard
            cardTitle="Wave"
            cardText="A psychological health and wellness tracker"
            projectLink=""
            projectImage="https://iili.io/HDDyQRI.jpg"
          />
          <ProjectCard
            cardTitle="SalesLynk Dashboard"
            cardText="SaaS solution developed to help cyber security professionals build stronger relationships with their clients and prospects"
            projectLink=""
            projectImage="https://iili.io/HDm9FTP.jpg"
          />

          <ProjectCard
            cardTitle="Infocrypt"
            cardText="A mobile NFT marketplace"
            projectLink=""
            projectImage="https://iili.io/HDb8nRV.png"
          />
        </section>
        <PageFooter />
      </main>
    </div>
  );
}

export default Home;
