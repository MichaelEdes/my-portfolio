import React, { useState } from "react";
import styles from "./NavBar.module.scss";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
import Button from "../Button/Button";
import useBodyOverflow from "../../hooks/useBodyOverflow";
import useScrollHide from "../../hooks/useScrollHide";
import { CustomLinkPropsI } from "../../interfaces/customLinks";
const NavBar = () => {
  const showNav = useScrollHide();
  const [isOpen, setIsOpen] = useState(false);
  useBodyOverflow(isOpen);

  return (
    <header className={`${styles.header} ${showNav ? "" : styles.hide}`}>
      <div className={styles.navContainer}>
        <a href="/" className={styles.navIcon}>
          <img src="https://iili.io/HDpbipS.png" alt="logo" />
        </a>
        <nav className={isOpen ? styles.menuVisible : styles.menuHidden}>
          <ul>
            <CustomLink onClick={() => setIsOpen(false)} href="#intro">
              Home
            </CustomLink>
            <CustomLink onClick={() => setIsOpen(false)} href="#projects">
              Projects
            </CustomLink>
            <CustomLink onClick={() => setIsOpen(false)} href="#contact">
              Contact
            </CustomLink>
            <a href="/MichaelEdes - CV.pdf" target="_blank">
              <Button variation="Download">CV</Button>
            </a>
          </ul>
        </nav>
        <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

function CustomLink({ href, children, onClick }: CustomLinkPropsI) {
  return (
    <li onClick={onClick}>
      <a href={href}>{children}</a>
    </li>
  );
}

export default NavBar;
