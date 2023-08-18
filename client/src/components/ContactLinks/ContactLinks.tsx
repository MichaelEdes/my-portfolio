import styles from "./ContactLinks.module.scss";
import Button from "../Button/Button";
import IconButton from "../IconButtons/IconButtons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const ContactLinks = () => {
  return (
    <div className={styles.socialButtons}>
      <a href="mailto:michaeledes.dev@gmail.com">
        <Button>Contact Me</Button>
      </a>
      <div className={styles.socialButtonsIcon}>
        <IconButton
          classname={styles.linkedIn}
          href="https://www.linkedin.com/in/michael-edes-401724215/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          classname={styles.github}
          href="https://github.com/MichaelEdes"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ContactLinks;
