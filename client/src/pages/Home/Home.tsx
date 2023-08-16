import React from "react";
import styled from "./Home.module.scss";
import "../../styles/global.scss";
import NavBar from "../../components/NavBar/NavBar";

function Home() {
  return (
    <div className={styled.container}>
      <NavBar />
      <main className={styled.content}>
        <section className={`${styled.intro}`} id="intro">
          <h1>Intro</h1>
        </section>
        <section className={`${styled.projects}`} id="projects">
          <h1>Projects</h1>
        </section>
        <section className={`${styled.contact}`} id="contact">
          <h1>Contact</h1>
        </section>
      </main>
    </div>
  );
}

export default Home;
