import React from "react";
import styles from "./PageHero.module.scss";
import Button from "../Button/Button";
import IconButton from "../IconButtons/IconButtons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

const PageHero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.introduction}>
        <div className={styles.introductionContent}>
          <h1>
            Hello, I'm Michael, a software engineer with 2 years of experience.
          </h1>
          <p>
            Predominantly working frontend, my experience has allowed me to
            branch of into whatever I damn well please.
          </p>
          <div className={styles.socialButtons}>
            <Button>
              <a href="#contact">Contact Me</a>
            </Button>
            <div className={styles.socialButtonsIcon}>
              <IconButton
                classname={styles.linkedIn}
                href="https://Linkedin.com"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                classname={styles.github}
                href="https://Github.com"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                classname={styles.facebook}
                href="https://Facebook.com"
                target="_blank"
              >
                <FacebookIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <img src={"https://iili.io/HDZJI5P.png"} alt="profileimage" />
      </div>
      <div className={styles.profileImage}>
        <img src={"https://iili.io/HDQrS24.jpg"} alt="profileimage" />
      </div>
    </section>
  );
};

export default PageHero;
