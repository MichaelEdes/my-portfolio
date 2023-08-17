import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import BurgerIcon from "../BurgerIcon/BurgerIcon";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavBar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      if (currentScrollTop > lastScrollTop) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  console.log(isOpen);
  return (
    <header className={`${styles.header} ${showNav ? "" : styles.hide}`}>
      <div className={styles.navContainer}>
        <a href="/">Home</a>
        <nav className={isOpen ? styles.menuVisible : styles.menuHidden}>
          <ul>
            <CustomLink onClick={() => setIsOpen(!isOpen)} href="#intro">
              Intro
            </CustomLink>
            <CustomLink onClick={() => setIsOpen(!isOpen)} href="#projects">
              Projects
            </CustomLink>
            <CustomLink onClick={() => setIsOpen(!isOpen)} href="#contact">
              Contact
            </CustomLink>
          </ul>
        </nav>
        <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

function CustomLink({ href, children, onClick }: CustomLinkProps) {
  return (
    <li onClick={onClick}>
      <a href={href}>{children}</a>
    </li>
  );
}

export default NavBar;
