import React, { ReactNode } from "react";
import styles from "./BlurredCard.module.scss";

interface BlurredCardProps {
  cardTitle: string;
  cardSubTitle: string;
  cardText?: string;
  children: ReactNode;
}

const BlurredCard: React.FC<BlurredCardProps> = ({
  cardTitle,
  cardSubTitle,
  cardText,
  children,
}) => {
  return (
    <div className={styles.introduction}>
      <div className={styles.introductionContent}>
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
