import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";
import BurgerIcon from "../BurgerIcon/BurgerIcon";
interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
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
        <nav>
          <ul className={isOpen ? styles.menuVisibile : styles.not}>
            <CustomLink href="#intro">Intro</CustomLink>
            <CustomLink href="#projects">Projects</CustomLink>
            <CustomLink href="#contact">Contact</CustomLink>
          </ul>
        </nav>
        <BurgerIcon isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
};

function CustomLink({ href, children, ...props }: CustomLinkProps) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

export default NavBar;
