import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
