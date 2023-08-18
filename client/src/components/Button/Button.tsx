import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variation?: "Default" | "Download";
}

const Button = ({
  children,
  onClick,
  variation = "Default",
  ...props
}: ButtonProps) => {
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
