import BlurredCard from "../BlurredCard/BlurredCard";
import ContactLinks from "../ContactLinks/ContactLinks";
import styles from "./PageFooter.module.scss";

const PageFooter = () => {
  return (
    <section className={styles.footerContainer} id="contact">
      <BlurredCard
        cardTitle="Want to work together?"
        cardSubTitle="Feel free to reach out for further details."
        cardText="MichaelEdes.dev@gmail.com"
      >
        <ContactLinks />
      </BlurredCard>
    </section>
  );
};

export default PageFooter;
