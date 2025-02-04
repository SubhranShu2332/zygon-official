import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import imageA from "/sit_logo.png"; // Replace with your actual image paths
import imageB from "/sit_logo.png";
import imageC from "/sit_logo.png";
import imageD from "/sit_logo.png";
import AnimatedName from "../AnimatedName/AnimatedName";
import darkCarnival from "./bgSponsors.webp"; // Import your background image

function SponsorCard({ sponsor, isFlipped, onClick }) {
  const cardVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const flipVariants = {
    hidden: {
      rotateY: 180,
      opacity: 0,
      transformPerspective: 1000,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transformPerspective: 1000,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="relative w-full h-56 rounded-lg overflow-hidden shadow-2xl bg-opacity-90 backdrop-blur-lg cursor-pointer bg-white/10 shadow-lg" // Tailwind classes for styling
      variants={cardVariants}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      <AnimatePresence mode="wait">
        {isFlipped ? (
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center p-2 rounded-lg"
            variants={flipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <p className="text-white text-lg sm:text-xl font-semibold">
              {sponsor.name}
            </p>
            <p className="text-gray-300 text-center mt-2 text-sm sm:text-base">
              {sponsor.description}
            </p>
            <a
              href={sponsor.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-600 hover:underline text-sm sm:text-base"
            >
              {sponsor.website ? "Visit Website" : "More Info Coming Soon"}
            </a>
          </motion.div>
        ) : (
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-lg"
            variants={flipVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="w-3/5 sm:w-2/5 h-auto object-contain mx-auto p-1"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function SponsorsPage() {
  const [flippedCard, setFlippedCard] = useState({ section: null, index: null });

  const partners = [
    {
      name: "X Partner",
      sponsors: [
        {
          name: "Company A",
          logo: imageA,
          description: "Company A is a leading tech company focusing on AI solutions.",
          website: "https://www.company-a.com",
        },
        {
          name: "Company B",
          logo: imageB,
          description: "Company B offers innovative software development services.",
          website: "https://www.company-b.com",
        },
      ],
    },
    {
      name: "Z Partner",
      sponsors: [
        {
          name: "Company C",
          logo: imageC,
          description: "Company C specializes in sustainable energy solutions.",
          website: "https://www.company-c.com",
        },
        {
          name: "Company D",
          logo: imageD,
          description: "Company D provides high-quality consumer electronics.",
          website: "https://www.company-d.com",
        },
      ],
    },
  ];

  const handleCardClick = (section, index) => {
    setFlippedCard((prev) =>
      prev.section === section && prev.index === index
        ? { section: null, index: null }
        : { section, index }
    );
  };

  return (
    <>
      <AnimatedName title="Sponsors" />
      <div
        className="pt-12 min-h-screen text-white font-cookie flex flex-col" // Tailwind classes
        style={{
          backgroundImage: `url(${darkCarnival})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment:"fixed"
        }}
      >
        <div className="container mx-auto">
          {partners.map((partner, sectionIndex) => (
            <div key={partner.name} className="px-4 py-8"
            style={{fontFamily:"c"}}>
              <h1 className="text-center font-bold text-xl sm:text-2xl mb-8">
                <i>{partner.name}</i>
              </h1>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto max-w-7xl">
                {partner.sponsors.map((sponsor, index) => (
                  <SponsorCard
                    key={`${partner.name}-${sponsor.name}-${index}`}
                    sponsor={sponsor}
                    isFlipped={
                      flippedCard.section === sectionIndex &&
                      flippedCard.index === index
                    }
                    onClick={() => handleCardClick(sectionIndex, index)}
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="container mx-auto py-16 px-4 mt-12 text-center shadow-lg rounded-lg"
          style={{fontFamily:"carnival"}}>
            <h1 className="text-3xl sm:text-4xl font-bold mb-8">SPONSOR US!</h1>
            <p className="mb-8 max-w-xl mx-auto text-lg sm:text-3xl">
              Your partnership with ZYGON ensures the success of our event.
            </p>
            <a
              className="bg-red-500 text-white hover:bg-red-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg"
              style={{fontFamily:"c",fontWeight:"700"}}
              href = "https://drive.google.com/file/d/1jpqoX4THQhI0PwBP599mNS8M-GNboh_1/view?usp=drivesdk"
              target="_blank"
            >
              SPONSORSHIP BROCHURE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SponsorsPage;