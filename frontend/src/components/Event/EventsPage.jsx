import { ScrollObserver, valueAtPercentage } from "aatjs";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useOutsideClick } from "../../hook/use-outside-click";

import pic1 from "./1.png";
import pic2 from "./2.png";
import pic3 from "./3.png";
import pic4 from "./4.jpg";
import "./Events.css";
import AnimatedName from "../AnimatedName/AnimatedName";

const eventsData = [
  {
    title: "Tech Talk",
    image: pic1,
    description: "A seminar on AI and Machine Learning.",
    ctaLink: "https://example.com",
    ctaText: "Register Now!",
  },
  {
    title: "Tech Talk",
    image: pic1,
    description: "A seminar on AI and Machine Learning.",
    ctaLink: "https://example.com",
    ctaText: "Register Now!",
  },
  {
    title: "Tech Talk",
    image: pic1,
    description: "A seminar on AI and Machine Learning.",
    ctaLink: "https://example.com",
    ctaText: "Register Now!",
  },
  {
    title: "Tech Talk",
    image: pic1,
    description: "A seminar on AI and Machine Learning.",
    ctaLink: "https://example.com",
    ctaText: "Register Now!",
  },
  {
    title: "Code Jam",
    image: pic2,
    description: "Competitive coding event.",
    ctaLink: "https://example.com",
    ctaText: "Participate!",
  },
  {
    title: "Robotics Workshop",
    image: pic3,
    description: "Hands-on robotics session.",
    ctaLink: "https://example.com",
    ctaText: "Join Now!",
  },
  {
    title: "Hackathon",
    image: pic4,
    description: "A 24-hour coding competition.",
    ctaLink: "https://example.com",
    ctaText: "Compete Now!",
  },
];

const EventsPage = () => {
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
      const offsetTop = 100 + index * 0.5;
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
      <AnimatedName title={"Events"} subHeading={"Explore The Magical World"} />
      <div className="space space--small">
        <div className="cards_" ref={cardsContainerRef}>
          {eventsData.map((event, index) => (
            <div className="card_" key={index} onClick={() => setActive(event)}>
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

const ExpandedCard = ({ active, setActive }) => (
  <motion.div
    className="fixed inset-0 flex place-items-center justify-center z-50 bg-black/80"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      layoutId={`card-${active.title}`}
      className="w-full h-full sm:h-auto md:h-auto max-w-xl bg-black lg:rounded-2xl shadow-2xl overflow-hidden"
    >
      <motion.div layoutId={`image-${active.title}`} className="relative">
        <img
          src={active.image}
          alt={active.title}
          className="w-full h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
        />
        <motion.button
          onClick={() => setActive(null)}
          className="absolute top-4 right-4 z-10 px-2 text-gray-400 text-3xl font-bold rounded-full hover:bg-red-900"
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
