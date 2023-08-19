import React from "react";
import styles from "./PageHero.module.scss";
import Contact from "../ContactLinks/ContactLinks";
import BlurredCard from "../BlurredCard/BlurredCard";

const PageHero = () => {
  return (
    <section className={styles.heroContainer} id="intro">
      <div className={styles.introduction}>
        <BlurredCard
          cardTitle="Michael Edes: Software Engineer. Innovator. Digital Artisan."
          cardSubTitle="Crafting transformative applications with a keen eye for user experience. Experienced in full-stack development, from conceptualization to deployment, with a passion for front-end development"
        >
          <Contact />
        </BlurredCard>
      </div>
      <div className={styles.profileImage} />
    </section>
  );
};

export default PageHero;
