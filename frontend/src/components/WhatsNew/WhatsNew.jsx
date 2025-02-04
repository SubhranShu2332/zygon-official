import { useEffect } from "react";
import AnimatedName from "../AnimatedName/AnimatedName";

import "./WhatsNew.css";

// Temporarily comment out the import of the CSS file
// import styles from "./WhatsNew.module.css";

function WhatsNew() {
  useEffect(() => {
    const handleScroll = () => {
      const features = document.querySelectorAll(".feature");
      features.forEach((feature) => {
        const rect = feature.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          feature.classList.add("translate-y-0", "opacity-100");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatedName title={"What's New"} />
      <div className="min-h-screen relative overflow-hidden p-4 md:p-8 bg-gradient-to-br from-[#1a0f3c] via-[#2c1654] to-[#3d1d6b]">
        {/* Carnival Lights Effect */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,214,0,0.3),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,0,128,0.3),transparent_70%),radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.2),transparent_70%)] blur-[40px] animate-[lightShow_10s_infinite] pointer-events-none"></div>

        {/* Ferris Wheel */}
        <div className="fixed top-1/2 -right-[150px] w-[300px] h-[300px] border-4 border-dotted border-white/20 rounded-full -translate-y-1/2 animate-[wheelRotate_20s_linear_infinite] z-0 pointer-events-none before:content-[''] before:absolute before:inset-[-4px] before:border-4 before:border-dotted before:border-white/10 before:rounded-full before:animate-[wheelPulse_4s_ease-in-out_infinite] md:-right-[300px] md:w-[600px] md:h-[600px]"></div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto relative z-10 space-y-24 content-fade-in">
          {/* Feature 1 */}
          <div className="feature flex flex-col lg:flex-row items-stretch opacity-0 translate-y-24 transition-all duration-1000 ease-out">
            <div className="flex-1 p-6 md:p-12 bg-white/[0.03] rounded-2xl backdrop-blur-lg relative overflow-hidden border border-white/10 group">
              <div className="relative overflow-hidden rounded-2xl mb-8 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1522158637959-30385a09e0da?auto=format&fit=crop&q=80"
                  alt="FunZone"
                  className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="absolute top-4 right-4 bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 uppercase tracking-wider border border-white/10">
                  Now Open
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                  FunZone Experience
                </h2>
                <p className="text-gray-300/80 text-lg leading-relaxed">
                  Step into a world of wonder and excitement! Our FunZone
                  combines cutting-edge technology with classic carnival
                  thrills, creating an immersive playground where memories are
                  made and joy knows no bounds.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Virtual Reality
                  </span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Gaming Arena
                  </span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Interactive Displays
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature flex flex-col lg:flex-row-reverse items-stretch opacity-0 translate-y-24 transition-all duration-1000 ease-out">
            <div className="flex-1 p-6 md:p-12 bg-white/[0.03] rounded-2xl backdrop-blur-lg relative overflow-hidden border border-white/10 group">
              <div className="relative overflow-hidden rounded-2xl mb-8 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80"
                  alt="Culinary Market"
                  className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="absolute top-4 right-4 bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 uppercase tracking-wider border border-white/10">
                  Now Serving
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                  Culinary Market
                </h2>
                <p className="text-gray-300/80 text-lg leading-relaxed">
                  Embark on a gastronomic carnival adventure! Our food stalls
                  are a celebration of flavors, where master chefs craft
                  delectable treats that dance on your taste buds. From sweet to
                  savory, each bite is a ticket to culinary wonderland!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Global Cuisine
                  </span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Live Cooking
                  </span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Food Workshops
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - BGMI */}
          <div className="feature flex flex-col lg:flex-row items-stretch opacity-0 translate-y-24 transition-all duration-1000 ease-out">
            <div className="flex-1 p-6 md:p-12 bg-white/[0.03] rounded-2xl backdrop-blur-lg relative overflow-hidden border border-white/10 group">
              <div className="relative overflow-hidden rounded-2xl mb-8 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
                  alt="BGMI Tournament"
                  className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="absolute top-4 right-4 bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 uppercase tracking-wider border border-white/10">
                  Registration Open
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                  BGMI Tournament
                </h2>
                <p className="text-gray-300/80 text-lg leading-relaxed">
                  Battle it out in the ultimate BGMI showdown! Join elite
                  players in an adrenaline-pumping tournament featuring intense
                  matches, strategic gameplay, and amazing prizes. Whether
                  you're a seasoned pro or rising star, prove your skills in
                  this epic gaming event.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Cash Prizes
                  </span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Live Streaming
                  </span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Pro Gaming Setup
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 - LogicLeaf */}
          <div className="feature flex flex-col lg:flex-row-reverse items-stretch opacity-0 translate-y-24 transition-all duration-1000 ease-out pb-[100px]">
            <div className="flex-1 p-6 md:p-12 bg-white/[0.03] rounded-2xl backdrop-blur-lg relative overflow-hidden border border-white/10 group">
              <div className="relative overflow-hidden rounded-2xl mb-8 lg:mb-0">
                <img
                  src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&q=80"
                  alt="LogicLeaf"
                  className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="absolute top-4 right-4 bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 uppercase tracking-wider border border-white/10">
                  Coming Soon
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-100">
                  LogicLeaf Challenge
                </h2>
                <p className="text-gray-300/80 text-lg leading-relaxed">
                  Put your analytical and problem-solving skills to the test in
                  our LogicLeaf Challenge! This innovative aptitude competition
                  combines logical reasoning, mathematical prowess, and creative
                  thinking in an exciting format designed to challenge and
                  inspire.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Aptitude Tests
                  </span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Problem Solving
                  </span>
                  <span className="bg-white/5 px-4 py-2 rounded-full text-sm text-white/90 border border-white/10">
                    Certification
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatsNew;
