import { useEffect } from "react";
import AnimatedName from "../AnimatedName/AnimatedName";
import "./WhatsNew.css"; // Keeping styles separate

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
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatedName title={"What's New"} />
      <div className="min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-[#1a0f3c] via-[#2c1654] to-[#3d1d6b]">
        {/* Carnival Lights Effect */}
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,214,0,0.3),transparent_70%),radial-gradient(circle_at_80%_70%,rgba(255,0,128,0.3),transparent_70%),radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.2),transparent_70%)] blur-[40px] animate-[lightShow_10s_infinite] pointer-events-none"></div>

        {/* Ferris Wheel Animation */}
        <div className="fixed top-1/2 -right-[150px] w-[250px] h-[250px] md:w-[500px] md:h-[500px] border-4 border-dotted border-white/20 rounded-full -translate-y-1/2 animate-[wheelRotate_20s_linear_infinite] z-0 pointer-events-none"></div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto relative z-10 py-12 md:py-16 space-y-16">
          {/* FEATURE: FOOD STALL */}
          <div className="feature transition-all duration-1000 ease-out">
            <div className="bg-white/[0.03] backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8">
              <div className="absolute top-4 left-4 bg-white/10 px-4 py-2 rounded-full text-xs md:text-sm text-white/90 uppercase tracking-wider border border-white/20">
                Now Serving
              </div>
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <img
                    src="/Food_flavour.png"
                    alt="Culinary Market"
                    className="w-full rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4 md:space-y-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    Food Flavour
                  </h2>
                  <p className="text-gray-300/80 text-base md:text-lg leading-relaxed">
                    Showcasing your culinary skills in a vibrant, fun-filled
                    environment where creativity meets flavor.👨🏻‍🍳 From
                    mouthwatering dishes to unforgettable presentations, this
                    competition is the heart of the carnival’s culinary
                    excitement!🥗 Let the flavors speak! 🌟
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
          </div>

          {/* FEATURE: BGMI TOURNAMENT */}
          <div className="feature transition-all duration-1000 ease-out">
            <div className="bg-white/[0.03] backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8">
              <div className="absolute top-4 right-4 bg-white/10 px-4 py-2 rounded-full text-xs md:text-sm text-white/90 uppercase tracking-wider border border-white/20">
                Registration Open
              </div>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <img
                    src="/BGMI.jpg"
                    alt="BGMI Tournament"
                    className="w-full rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4 md:space-y-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    BGMI Tournament
                  </h2>
                  <p className="text-gray-300/80 text-base md:text-lg leading-relaxed">
                    Drop in, loot up, and fight to the top! The battleground
                    awaits warriors who can strategize, communicate, and outlast
                    their rivals. This adrenaline-fueled competition will test
                    your reflexes, teamwork, and survival instincts. Assemble
                    your squad, make every bullet count, and aim for the
                    ultimate victory—because here, only the strongest survive.
                    Are you ready for the Chicken Dinner?
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
          </div>

          {/* FEATURE: LOGICLEAP */}
          <div className="feature transition-all duration-1000 ease-out">
            <div className="bg-white/[0.03] backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8">
              <div className="absolute top-4 left-4 bg-white/10 px-4 py-2 rounded-full text-xs md:text-sm text-white/90 uppercase tracking-wider border border-white/20">
                Coming Soon
              </div>
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="lg:w-1/2">
                  <img
                    src="/Logic_leap.jpg"
                    alt="LogicLeap"
                    className="w-full rounded-2xl transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="lg:w-1/2 space-y-4 md:space-y-6">
                  <h2 className="text-2xl md:text-4xl font-bold text-white">
                    Aptitude Adventure
                  </h2>
                  <p className="text-gray-300/80 text-base md:text-lg leading-relaxed">
                    Get ready for a brain-boosting adventure! 🧠💥 Race against
                    time, solve clever puzzles, and prove your mental might in
                    this electrifying solo challenge. No shortcuts, just pure
                    brilliance. Are you up for it? Let the fun begin! ⚡
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
      </div>
    </>
  );
}

export default WhatsNew;
