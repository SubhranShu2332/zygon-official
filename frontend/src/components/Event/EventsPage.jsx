import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../../hook/use-outside-click";
import { Laptop, Music, Gamepad2, Trophy } from "lucide-react";
import AnimatedName from "../AnimatedName/AnimatedName";
import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import pic4 from "./4.jpg";
import "./Events.css";

const categories = {
  Technical: [
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
  ],
  Cultural: [
    { title: "Music Fest", image: pic3, description: "A night of amazing performances.", ctaLink: "#", ctaText: "Book Now!" },
    { title: "Dance Show", image: pic4, description: "Experience mesmerizing dance forms.", ctaLink: "#", ctaText: "Get Tickets!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
  ],
  Fun: [
    { title: "Treasure Hunt", image: pic1, description: "Solve clues to win prizes!", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Karaoke Night", image: pic2, description: "Sing your heart out!", ctaLink: "#", ctaText: "Register!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
  ],
  Sports: [
    { title: "Football Tournament", image: pic3, description: "Show your skills on the field!", ctaLink: "#", ctaText: "Sign Up!" },
    { title: "Basketball Match", image: pic4, description: "Compete with the best!", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
    { title: "Tech Talk", image: pic1, description: "A seminar on AI and ML.", ctaLink: "#", ctaText: "Register Now!" },
    { title: "Hackathon", image: pic2, description: "A 24-hour coding competition.", ctaLink: "#", ctaText: "Join Now!" },
  ],
};

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("Technical");
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };
    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active]);

  useOutsideClick(() => setActive(null));

  return (
    <>
      <AnimatedName title="Events" />
      {/* Desktop Navigation */}
      <nav className="hidden md:block sticky top-0 z-50 backdrop-blur-sm py-4 border-b border-white/10">
        <div className="flex justify-center items-center max-w-6xl mx-auto space-x-12">
          {Object.keys(categories).map((tab) => (
            <TabButton key={tab} label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} />
          ))}
        </div>
      </nav>
      {/* Mobile Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="space space--small md:container md:mx-auto md:px-8 md:py-8">
        <div className="cards_ md:cards-laptop">
          {categories[activeTab].map((event, index) => (
            <div
              className="card_ md:card-laptop"
              key={index}
              onClick={() => setActive(event)}
            >
              <div className="card__inner">
                <div className="card__image-container md:h-[400px]">
                  <img className="card__image" src={event.image} alt={event.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {active && <ExpandedCard active={active} setActive={setActive} />}
        </AnimatePresence>
      </div>
    </>
  );
};

const getTabIcon = (label) => {
  switch (label) {
    case "Technical":
      return <Laptop size={20} />;
    case "Cultural":
      return <Music size={20} />;
    case "Fun":
      return <Gamepad2 size={20} />;
    case "Sports":
      return <Trophy size={20} />;
    default:
      return null;
  }
};

const Navigation = ({ activeTab, setActiveTab }) => (
  <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 md:hidden z-50">
    <div className="flex justify-between items-center bg-black/20 backdrop-blur-md rounded-full px-6 py-3 space-x-8">
      {Object.keys(categories).map((tab) => (
        <TabButton key={tab} label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} isMobile />
      ))}
    </div>
  </nav>
);

const TabButton = ({ label, active, onClick, isMobile }) => (
  <button 
    onClick={onClick} 
    className={`
      flex flex-col items-center 
      ${active ? "text-cyan-300" : "text-white"} 
      ${!isMobile && "text-sm font-medium hover:text-cyan-200 transition-colors"}
    `}
  >
    {isMobile ? (
      <>
        {getTabIcon(label)}
        <span className="text-[10px] mt-1">{label}</span>
      </>
    ) : (
      <span>{label}</span>
    )}
  </button>
);

const ExpandedCard = ({ active, setActive }) => (
  <motion.div className="fixed inset-0 flex place-items-center justify-center z-50 bg-black/80" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.div layoutId={`card-${active.title}`} className="w-full h-full sm:h-auto md:h-auto max-w-2xl bg-black lg:rounded-2xl shadow-2xl overflow-hidden mx-4">
      <motion.div layoutId={`image-${active.title}`} className="relative">
        <img src={active.image} alt={active.title} className="w-full h-[400px] sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
        <motion.button onClick={() => setActive(null)} className="absolute top-4 left-4 z-50 px-2 text-white font-bold bg-red-500 rounded-full hover:bg-red-900">X</motion.button>
      </motion.div>
      <div className="p-6">
        <motion.h3 layoutId={`title-${active.title}`} className="text-xl font-bold text-white">{active.title}</motion.h3>
        <motion.p layoutId={`description-${active.title}`} className="mt-4 text-white">{active.description}</motion.p>
        <motion.a href={active.ctaLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white hover:bg-green-600">{active.ctaText}</motion.a>
      </div>
    </motion.div>
  </motion.div>
)

export default EventsPage;