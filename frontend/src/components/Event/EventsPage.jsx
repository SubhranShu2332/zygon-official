import { ScrollObserver, valueAtPercentage } from "aatjs";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, Laptop, Music, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../hook/use-outside-click";
import AnimatedName from "../AnimatedName/AnimatedName";
import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import pic4 from "./4.jpg";
import "./Events.css";

const categories = {
  Technical: [
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
  ],
  Cultural: [
    {
      title: "Music Fest",
      image: pic3,
      description: "A night of amazing performances.",
      ctaLink: "#",
      ctaText: "Book Now!",
    },
    {
      title: "Dance Show",
      image: pic4,
      description: "Experience mesmerizing dance forms.",
      ctaLink: "#",
      ctaText: "Get Tickets!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
  ],
  Fun: [
    {
      title: "Treasure Hunt",
      image: pic1,
      description: "Solve clues to win prizes!",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Karaoke Night",
      image: pic2,
      description: "Sing your heart out!",
      ctaLink: "#",
      ctaText: "Register!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
  ],
  Sports: [
    {
      title: "Football Tournament",
      image: pic3,
      description: "Show your skills on the field!",
      ctaLink: "#",
      ctaText: "Sign Up!",
    },
    {
      title: "Basketball Match",
      image: pic4,
      description: "Compete with the best!",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
    {
      title: "Tech Talk",
      image: pic1,
      description: "A seminar on AI and ML.",
      ctaLink: "#",
      ctaText: "Register Now!",
    },
    {
      title: "Hackathon",
      image: pic2,
      description: "A 24-hour coding competition.",
      ctaLink: "#",
      ctaText: "Join Now!",
    },
  ],
};

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("Technical");
  const [active, setActive] = useState(null);
  const cardsContainerRef = useRef(null);

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

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const cards = document.querySelectorAll(".card_");
    if (!cards.length) return;

    cardsContainer.style.setProperty("--cards-count", cards.length);
    cardsContainer.style.setProperty(
      "--card-height",
      `${cards[0].clientHeight}px`
    );

    cards.forEach((card, index) => {
      const offsetTop = 50 + index * 1.5;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;
      const toScale = 1 - (cards.length - 1 - index) * 0.12;
      const nextCard = cards[index + 1];
      const cardInner = card.querySelector(".card__inner");

      ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - card.clientHeight,
      }).onScroll(({ percentageY }) => {
        cardInner.style.scale = valueAtPercentage({
          from: 1,
          to: toScale,
          percentage: percentageY,
        });
        cardInner.style.filter = `brightness(${valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        })})`;
      });
    });
  }, []);

  return (
    <>
      <AnimatedName title="Events" />
      {/* Desktop Navigation */}
      <nav className="hidden md:block sticky top-0 z-50 backdrop-blur-sm py-4 border-b border-white/10">
        <div className="flex justify-center items-center max-w-6xl mx-auto space-x-12">
          {Object.keys(categories).map((tab) => (
            <TabButton
              key={tab}
              label={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>
      </nav>
      {/* Mobile Navigation */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="space space--small md:container md:mx-auto md:px-8 md:py-8 ">
        <div className="cards_ md:cards-laptop" ref={cardsContainerRef}>
          {categories[activeTab].map((event, index) => (
            <div
              className="card_ md:card-laptop"
              key={index}
              onClick={() => setActive(event)}
            >
              <div className="card__inner">
                <div className="card__image-container">
                  <img
                    className="card__image"
                    src={event.image}
                    alt={event.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <AnimatePresence>
          {active && <ExpandedCard active={active} setActive={setActive} />}
        </AnimatePresence>
        <div className="space"></div>
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
        <TabButton
          key={tab}
          label={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
          isMobile
        />
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
      ${
        !isMobile && "text-sm font-medium hover:text-cyan-200 transition-colors"
      }
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

// const ExpandedCard = ({ active, setActive }) => {
//   const [showMore, setShowMore] = useState(false);
//   const cardRef = useRef(null);
//   const scrollIndicatorRef = useRef(null); // Ref for the scroll indicator

//   const toggleShowMore = () => {
//     setShowMore(!showMore);
//   };

//   useEffect(() => {
//     if (showMore && cardRef.current) {
//       cardRef.current.scrollTop = cardRef.current.scrollHeight;
//     }
//   }, [showMore]);

//   // useEffect(() => {
//   //   const card = cardRef.current;
//   //   const indicator = scrollIndicatorRef.current;

//   //   if (!card || !indicator) return; // Make sure elements exist

//   //   const handleScroll = () => {
//   //     if (card.scrollTop + card.clientHeight >= card.scrollHeight) {
//   //       indicator.style.display = "none"; // Hide at bottom
//   //     } else {
//   //       indicator.style.display = "flex"; // Show if not at bottom
//   //     }
//   //   };

//   //   card.addEventListener("scroll", handleScroll); // Add listener
//   //   handleScroll(); // Initial check

//   //   return () => card.removeEventListener("scroll", handleScroll); // Clean up
//   // }, []);

//   return (
//     <motion.div
//       className="fixed inset-0 flex place-items-center justify-center z-50 bg-black/80 overflow-y-auto"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         layoutId={`card-${active.title}`}
//         className="w-full h-full max-w-xl bg-black lg:rounded-2xl shadow-2xl overflow-hidden"
//       >
//         <motion.div layoutId={`image-${active.title}`} className="relative">
//           <img
//             src={active.image}
//             alt={active.title}
//             className="w-[50%] object-cover object-top"
//           />
//           <motion.button
//             onClick={() => setActive(null)}
//             className="absolute top-4 right-4 z-10 px-2 text-gray-400 text-3xl font-bold rounded-full hover:bg-red-900"
//           >
//             X
//           </motion.button>
//         </motion.div>
//         <div className="p-6">
//           <motion.h3
//             layoutId={`title-${active.title}`}
//             className="text-xl font-bold text-white"
//           >
//             {active.title}
//           </motion.h3>
//           <motion.p
//             layoutId={`description-${active.title}`}
//             className="mt-4 text-white"
//           >
//             {active.description.length > 50 && !showMore
//               ? `${active.description.substring(0, 50)}...`
//               : active.description}
//           </motion.p>

//           {active.description.length > 50 && (
//             <button
//               onClick={toggleShowMore}
//               className="text-white underline mt-2"
//             >
//               {showMore ? "Show Less" : "Show More"}
//             </button>
//           )}

//           <motion.div className="flex justify-center mt-4">
//             <motion.a
//               href={active.ctaLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
//             >
//               {active.ctaText}
//             </motion.a>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll Indicator*/}
//       {/* <div
//         className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
//         ref={scrollIndicatorRef}
//       >
//         {" "}
//         {/* Added ref here
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
//           className="w-10 h-10 rounded-full flex justify-center items-center"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="white"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </motion.div>
//       </div> */}
//     </motion.div>
//   );
// };

// const ExpandedCard = ({ active, setActive }) => {
//   const [showMore, setShowMore] = useState(false);
//   const cardRef = useRef(null);
//   const scrollIndicatorRef = useRef(null);

//   const toggleShowMore = () => setShowMore(!showMore);

//   useEffect(() => {
//     if (showMore && cardRef.current) {
//       cardRef.current.scrollTop = 0; // Scroll to top instead
//     }
//   }, [showMore]);

//   // useEffect(() => {
//   //   const card = cardRef.current;
//   //   const indicator = scrollIndicatorRef.current;

//   //   if (!card || !indicator) return;

//   //   const handleScroll = () => {
//   //     indicator.style.display =
//   //       card.scrollTop + card.clientHeight >= card.scrollHeight
//   //         ? "none"
//   //         : "flex";
//   //   };

//   //   card.addEventListener("scroll", handleScroll);
//   //   handleScroll();

//   //   return () => card.removeEventListener("scroll", handleScroll);
//   // }, []);

//   return (
//     <motion.div
//       className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 "
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <motion.div
//         layoutId={`card-${active.title}`}
//         className="w-full h-full sm:h-auto md:h-auto max-h-xl bg-black lg:rounded-2xl shadow-2xl "
//       >
//         <motion.div layoutId={`image-${active.title}`} className="relative">
//           <div className="w-full aspect-[3/4] sm:rounded-tr-lg sm:rounded-tl-lg overflow-hidden">
//             <img
//               src={active.image}
//               alt={active.title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <motion.button
//             onClick={() => setActive(null)}
//             className="absolute top-4 left-4 z-10 px-2 text-white font-bold bg-red-500 rounded-full hover:bg-red-900" // z-10 added
//           >
//             X
//           </motion.button>
//         </motion.div>
//         <div className="p-6">
//           <motion.h3
//             layoutId={`title-${active.title}`}
//             className="text-xl font-bold text-white"
//           >
//             {active.title}
//           </motion.h3>
//           <div
//             ref={cardRef}
//             className="mt-4 text-white overflow-y-auto max-h-40"
//           >
//             {showMore
//               ? active.description
//               : `${active.description.substring(0, 100)}...`}
//           </div>
//           {active.description.length > 100 && (
//             <button
//               onClick={toggleShowMore}
//               className="text-white underline mt-2"
//             >
//               {showMore ? "Show Less" : "Show More"}
//             </button>
//           )}

//           <motion.div className="flex justify-center mt-4">
//             <motion.a
//               href={active.ctaLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
//             >
//               {active.ctaText}
//             </motion.a>
//           </motion.div>
//         </div>
//       </motion.div>

//       {/* Scroll Indicator */}
//       <div
//         className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
//         ref={scrollIndicatorRef}
//       >
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
//           className="w-10 h-10 rounded-full flex justify-center items-center"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="white"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

const ExpandedCard = ({ active, setActive }) => (
  <motion.div
    className="fixed inset-0 flex place-items-center justify-center z-50 bg-black/80"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      layoutId={`card-${active.title}`}
      className="w-full h-[100vh] md:h-auto max-w-xl bg-black lg:rounded-2xl shadow-2xl overflow-hidden"
    >
      <motion.div layoutId={`image-${active.title}`} className="relative">
        <img
          src={active.image}
          alt={active.title}
          className="w-full h-auto md:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
        />
        <motion.button
          onClick={() => setActive(null)}
          className="absolute top-4 right-4 z-10 px-2 text-4xl text-gray-300 font-bold rounded-full hover:bg-red-900" // z-10 added
        >
          X
        </motion.button>
      </motion.div>
      <div className="p-6">
        <motion.h3
          layoutId={`title-${active.title}`}
          className="text-xl font-bold text-white"
        >
          {active.title}
        </motion.h3>
        <motion.p
          layoutId={`description-${active.title}`}
          className="mt-4 text-white"
        >
          {active.description}
        </motion.p>
        <motion.a
          href={active.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
        >
          {active.ctaText}
        </motion.a>
      </div>
    </motion.div>
  </motion.div>
);

export default EventsPage;
