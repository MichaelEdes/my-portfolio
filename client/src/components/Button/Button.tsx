import React from "react";
import styles from "./Button.module.scss";
import { ButtonPropsI } from "../../interfaces/button";

const Button = ({
  children,
  onClick,
  variation = "Default",
  ...props
}: ButtonPropsI) => {
  return (
    <button
      className={`${
        variation === "Download" ? styles.downloadButton : styles.defaultButton
      }`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
