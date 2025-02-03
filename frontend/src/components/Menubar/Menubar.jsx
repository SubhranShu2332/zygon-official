import React from "react";
import { motion } from "framer-motion";

export const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-gradient-to-br from-violet-500 to-indigo-500">
      <AnimatedHamburgerButton />
    </div>
  );
};

const AnimatedHamburgerButton = () => {
  return (
    <motion.button className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20">
      <motion.span
        style={{ left: "50%", top: "35%", x: "-50%", y: "-50%" }}
        className="absolute h-1 w-10 bg-white"
      />
      <motion.span
        style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
        className="absolute h-1 w-10 bg-white"
      />
      <motion.span
        style={{ left: "calc(50%+10px)", bottom: "35%", x: "-50%", y: "-50%" }}
        className="absolute h-1 w-5 bg-white"
      />
    </motion.button>
  );
};
