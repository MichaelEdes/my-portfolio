import { useState, useEffect } from "react";

const useScrollHide = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop <= 50) {
        setShowNav(true);
        return;
      }

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

  return showNav;
};

export default useScrollHide;
