import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerMenu from "../Menu/HamburgerMenu";
import { useNavigate } from "react-router-dom";

const StickyHeader = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set styles based on screen size
  const getLogoStyles = () => {
    if (windowWidth >= 1024) {
      return { height: "75px", width: "110px" }; // Large screen
    } else if (windowWidth >= 640) {
      return { height: "65px", width: "90px" }; // Small screen (tablet)
    } else {
      return { height: "55px", width: "70px" }; // Default (mobile)
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsScrollingUp(
        currentScrollPos < lastScrollPos || currentScrollPos === 0
      );

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <AnimatePresence>
      {isScrollingUp && (
        <div className="sticky-header flex justify-between px-4 pt-2 fixed top-0 left-0 w-full z-50 opacity-70">
          <motion.img
            src="/siliconLogo.png"
            alt="Logo"
            className="hover:cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={getLogoStyles()}
            onClick={() => {
              navigate("/");
            }}
          />
          <HamburgerMenu />
        </div>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
