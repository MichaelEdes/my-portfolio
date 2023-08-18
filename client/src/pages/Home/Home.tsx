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
            cardTitle="SMRC"
            cardText="E-commerce website for device repair store"
            projectLink="https://sunderlandmobiles.com"
            projectImage="https://iili.io/HbJCoxe.jpg"
          />
          <ProjectCard
            cardTitle="Wave"
            cardText="A psychological health and wellness tracker"
            projectLink=""
            projectImage="https://iili.io/HbJBUAP.jpg"
          />
          <ProjectCard
            cardTitle="SalesLynk"
            cardText="SaaS solution developed to help cyber security professionals build stronger relationships with their clients and prospects"
            projectLink="https://www.saleslynk.co.uk/"
            projectImage="https://iili.io/HDm9FTP.jpg"
          />

          <ProjectCard
            cardTitle="Infocrypt"
            cardText="A mobile NFT marketplace"
            projectLink="https://www.figma.com/proto/Gf0WZiGpJDTcZHQDgEEneH/Untitled?page-id=0%3A1&node-id=2-106&viewport=241%2C48%2C0.41&scaling=scale-down&starting-point-node-id=2%3A106"
            projectImage="https://iili.io/HDb8nRV.png"
          />
          <ProjectCard
            cardTitle="Metro"
            cardText="Online website for north east sandwich shop"
            projectLink="http://metrosandwichco.co.uk"
            projectImage="https://iili.io/HbJCYOP.png"
          />
          <ProjectCard
            cardTitle="Indrex - WIP"
            cardText="Futuristic concept e-commerce store"
            projectLink="https://www.indrex.co.uk"
            projectImage="https://iili.io/HDp5IYx.png"
          />
        </section>
        <PageFooter />
      </main>
    </div>
  );
}

export default Home;
