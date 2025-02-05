import React from "react";
import Spline from "@splinetool/react-spline";
import AnimatedName from "../AnimatedName/AnimatedName";

export default function ShirtCard() {
  return (
    <>
      <AnimatedName title={"Merchandise "} subHeading={"Coming Soon"}></AnimatedName>
      <div
        className="flex items-center justify-center min-h-screen p-6 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('bg7.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for better blending */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="mt-[100px] relative w-full max-w-lg md:max-w-xl lg:max-w-3xl bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/20 transition-all duration-300">
          {/* Header */}
          <div className="text-center p-4 border-b border-white/20">
            <h2 className="text-3xl sm:text-5xl font-bold text-yellow-300 font-[carnival] drop-shadow-lg">
              Zygon T-Shirt
            </h2>
            <p className="text-lg text-white/80">Exclusive Fest Merchandise</p>
          </div>

          {/* Spline 3D Model */}
          <div 
            className="w-full aspect-square sm:aspect-video md:aspect-[16/9] rounded-xl overflow-hidden shadow-xl border border-yellow-300/50"
            style={{ touchAction: "auto", pointerEvents: "auto" }}
          >
            <Spline 
              scene="https://prod.spline.design/8ndZZqblPh1MNHx4/scene.splinecode"
              onPointerDown={() => console.log("User is interacting with 3D model")}
              onLoad={() => console.log("Spline Model Loaded Successfully")}
            />
          </div>

          {/* Shirt Details */}
          <div className="mt-6 p-4 text-center">
            {/* <h3 className="text-2xl font-bold text-yellow-300 font-[carnival] drop-shadow-lg">
              Shirt Details
            </h3> */}
            {/* <p className="text-lg text-white/80 mt-2">
              Limited edition carnival shirt designed exclusively for Zygon Fest!
            </p> */}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center p-4 border-t border-white/20">
            {/* <span className="text-3xl font-bold text-yellow-300 drop-shadow-lg">300 Rs</span> */}
            <button className="bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 mt-3 sm:mt-0 rounded-lg hover:scale-105 transition-all duration-300 font-[carnival] shadow-md border-2 border-yellow-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}