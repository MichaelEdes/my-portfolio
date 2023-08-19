import React from "react";
import styles from "./BlurredCard.module.scss";
import { BlurredCardPropsI } from "../../interfaces/blurredCard";

const BlurredCard: React.FC<BlurredCardPropsI> = ({
  cardTitle,
  cardSubTitle,
  cardText,
  children,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <h1>{cardTitle}</h1>
        <div>
          <p>{cardSubTitle}</p>
          <p>{cardText}</p>
        </div>
        {children}
      </div>
      <img src={"https://iili.io/HDZJI5P.png"} alt="profileimage" />
    </div>
  );
};

export default BlurredCard;
