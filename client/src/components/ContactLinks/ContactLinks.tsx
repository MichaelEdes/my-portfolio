import styles from "./ContactLinks.module.scss";
import Button from "../Button/Button";
import IconButton from "../IconButtons/IconButtons";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";

const ContactLinks = () => {
  return (
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
  );
};

export default ContactLinks;
