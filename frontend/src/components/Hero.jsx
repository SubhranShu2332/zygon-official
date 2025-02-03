import React from "react";

import HamburgerMenu from "./Menu/HamburgerMenu";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh", // Ensures the container spans the full height of the viewport
        overflow: "hidden",
      }}
    >
      {/* Background Section */}
      <div
        style={{
          background: "rgba(0,0,0,1)",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          display: "flex",
          justifyContent: "center", // Centers the image horizontally
          alignItems: "center", // Centers the image vertically
        }}
      >
        <img
          src="/bg5.png"
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the image fully covers the container without distortion
            opacity: "0.7",
          }}
        />
      </div>

      {/* Foreground Section */}
      <div className="relative z-10 ">
        <div className="flex justify-between px-2 pt-2">
          <div
            className="animate__animated animate__fadeInLeft wow"
            data-wow-delay="2.5s"
          >
            <img src="./siliconLogo.png" alt="Logo" className="w-[5rem]" />
          </div>
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#1a1a2e",
            }}
          >
            <HamburgerMenu />
          </div>
        </div>
        <div className="relative z-10 flex justify-between text-amber-400 font-serif w-screen px-1 text-lg items-center">
          <div
            className="mt-[-0px] animate__animated animate__fadeInUp wow"
            style={{ writingMode: "vertical-rl" }}
            data-wow-delay="2s"
          >
            <div
              className="mt-[-140px] animate__animated animate__fadeInUp wow"
              style={{ writingMode: "vertical-rl" }}
              data-wow-delay="2s"
            >
              SILICON UNIVERSITY
            </div>
          </div>
          <img
            src="/test3.gif"
            alt="Logo"
            className="w-[17rem] md:w-[25rem] animate__animated animate__zoomIn wow"
            data-wow-delay="1s"
          />
          <div
            className="mt-[280px] animate__animated animate__fadeInDown wow flex items-center"
            style={{
              writingMode: "vertical-lr",
            }}
            data-wow-delay="2s"
          >
            FOLLOW US ON &ensp;
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
