import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.scss";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavBar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNav, setShowNav] = useState(true);

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

  return (
    <header className={`${styles.header} ${showNav ? "" : styles.hide}`}>
      <div className={styles.navContainer}>
        <a href="/">Home</a>
        <nav>
          <ul>
            <CustomLink href="#intro">Intro</CustomLink>
            <CustomLink href="#projects">Projects</CustomLink>
            <CustomLink href="#contact">Contact</CustomLink>
          </ul>
        </nav>
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
