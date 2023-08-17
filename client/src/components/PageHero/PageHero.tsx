import React from "react";
import styles from "./PageHero.module.scss";
import Contact from "../ContactLinks/ContactLinks";
import BlurredCard from "../BlurredCard/BlurredCard";

const PageHero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.introduction}>
        <BlurredCard
          cardTitle="Hello, I'm Michael, a software engineer with 2 years of experience."
          cardSubTitle="Predominantly working frontend, my experience has allowed me to
            branch of into whatever I damn well please."
        >
          <Contact />
        </BlurredCard>
      </div>
      <div className={styles.profileImage}>
        <img src={"https://iili.io/HDQrS24.jpg"} alt="profileimage" />
      </div>
    </section>
  );
};

export default PageHero;
