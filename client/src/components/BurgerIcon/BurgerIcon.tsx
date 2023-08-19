import styles from "./BurgerIcon.module.scss";
import { BurgerIconPropsI } from "../../interfaces/burgerIcon";

function BurgerIcon({ isOpen, setIsOpen }: BurgerIconPropsI) {
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
