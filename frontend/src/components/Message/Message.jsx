import React from "react";
import AnimatedName from "../AnimatedName/AnimatedName";

function Message() {
  return (
    <>
      <AnimatedName title={"Special Message"} subHeading={"From Secretory General"} />
      <div className="min-h-screen relative overflow-hidden p-4 md:p-8 bg-gradient-to-br from-[#1a0f3c] via-[#2c1654] to-[#3d1d6b]">
        {/* Carnival Lights Effect */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,214,0,0.3),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,0,128,0.3),transparent_70%),radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.2),transparent_70%)] blur-[40px] animate-[lightShow_10s_infinite] pointer-events-none"></div>

        {/* Ferris Wheel */}
        <div className="fixed top-1/2 -right-[150px] w-[300px] h-[300px] border-4 border-dotted border-white/20 rounded-full -translate-y-1/2 animate-[wheelRotate_20s_linear_infinite] z-0 pointer-events-none before:content-[''] before:absolute before:inset-[-4px] before:border-4 before:border-dotted before:border-white/10 before:rounded-full before:animate-[wheelPulse_4s_ease-in-out_infinite] md:-right-[300px] md:w-[600px] md:h-[600px]"></div>

        <div className="max-w-7xl w-full mx-auto relative z-10">
          <header className="text-center mb-16 relative">
            <div className="inline-block">
              <h1 className="text-4xl md:text-4xl text-3xl text-white font-light tracking-wider mb-4 relative after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-px after:bg-white/50 almendra-bold">
                Message from the Secretary General
              </h1>
            </div>
            <div className="w-[60px] h-[2px] bg-white/50 mx-auto"></div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative p-4 md:p-8 [perspective:1000px] group">
              <div className="absolute inset-0 border border-white/20 translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1 md:group-hover:translate-x-2 md:group-hover:translate-y-2 group-hover:border-[#ff6b6b]"></div>
              <div className="aspect-[3/4] w-full relative">
                <img
                  src="/sg.jpeg"
                  alt="Secretary General"
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 transform-gpu group-hover:grayscale-0 group-hover:shadow-2xl rounded-lg"
                />
              </div>
            </div>

            <div className="p-4 md:p-8 bg-white/[0.03] rounded-2xl backdrop-blur-lg border border-white/10">
              <div className="relative mb-12">
                <span className="absolute -top-8 -left-5 text-8xl text-white/10 font-serif">
                  "
                </span>
                <p className="text-xl md:text-2xl leading-relaxed text-gray-200 font-light relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-[50px] after:h-px after:bg-white/50 cookie-regular">
                  Welcome to Zygon 2025 – where dreams take flight and memories
                  shine bright! As your Secretary General, I'm thrilled to
                  present this year's spectacular celebration of creativity,
                  talent, and unity. Our festival promises an unforgettable
                  fusion of culture, innovation, and pure joy. Join us in this
                  magical journey where every moment becomes a treasured memory.
                  Together, let's make this carnival the most extraordinary
                  celebration our college has ever witnessed!
                </p>
              </div>

              <footer className="border-t border-white/10 pt-8 relative overflow-hidden almendra-bold">
                <div className="flex flex-col items-end">
                  <span className="text-xl md:text-2xl text-white mb-2 transition-all duration-300 hover:scale-110 hover:text-[#ff6b6b]">
                    S. Manohar
                  </span>
                  <span className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">
                    Secretary General
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
