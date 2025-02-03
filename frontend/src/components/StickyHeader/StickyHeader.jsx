import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HamburgerMenu from "../Menu/HamburgerMenu";
import { useNavigate } from "react-router-dom";

const StickyHeader = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const navigate = useNavigate();

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
            className="w-[5rem] hover:cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{ height: "50px", width: "70px", }}
            onClick={()=>{navigate('/')}}
          />
          <HamburgerMenu />
        </div>
      )}
    </AnimatePresence>
  );
};

export default StickyHeader;
