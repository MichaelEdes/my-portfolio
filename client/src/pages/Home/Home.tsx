import React from "react";
import styled from "./Home.module.scss";
import "../../styles/global.scss";
import NavBar from "../../components/NavBar/NavBar";
import PageHero from "../../components/PageHero/PageHero";
import PageFooter from "../../components/PageFooter/PageFooter";

function Home() {
  return (
    <div className={styled.container}>
      <NavBar />
      <main className={styled.content}>
        <PageHero />
        <section className={`${styled.projects}`} id="projects">
          <h1>Projects</h1>
        </section>
        <PageFooter />
      </main>
    </div>
  );
}

export default Home;
