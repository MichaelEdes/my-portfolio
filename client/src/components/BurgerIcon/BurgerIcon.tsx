import React from "react";
import styles from "./BurgerIcon.module.scss";

interface BurgerIconProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function BurgerIcon({ isOpen, setIsOpen }: BurgerIconProps) {
  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`${styles.navIcon} ${isOpen ? styles.open : ""}`}
      onClick={handleIconClick}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerIcon;
