// import darkCarnival from "./4kk.png";
import darkCarnival from "./4k.png";
// import darkCarnival from "./bgSponsors.webp";
// import darkCarnival from "./bg2.webp";
// import { IconCloud } from "../IconCloud/IconCloud";


import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import imageA from "/sit_logo.png";
import imageB from "/sit_logo.png";
import imageC from "/sit_logo.png";
import imageD from "/sit_logo.png";
import AnimatedName from "../AnimatedName/AnimatedName";
// import imageB from "./image.png";
// import imageC from "./image.png";
// import imageD from "./image.png";

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
    <>
    <motion.div
      className="relative w-80 max-w-xs h-56 rounded-lg overflow-hidden shadow-2xl bg-opacity-90 backdrop-blur-lg cursor-pointer"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.8)",
      }}
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
            <p className="text-gray-900 text-xl font-semibold">{sponsor.name}</p>
            <p className="text-gray-700 text-center mt-2">{sponsor.description}</p>
            <a
              href={sponsor.website || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-blue-600 hover:underline"
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
              className="w-2/5 h-auto object-contain mx-auto p-1"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* <IconCloud></IconCloud> */}
    
    </motion.div>
      {/* <IconCloud></IconCloud>*/}
      </> 
  );
}

function SponsorsPage() {
  const [flippedCard, setFlippedCard] = useState({
    section: null,
    index: null,
  });

  const partners = [
    {
      name: "X Partner",
      sponsors: [
        {
          name: "Company A",
          logo: imageA,
          description:
            "Company A is a leading tech company focusing on AI solutions.",
          website: "https://www.company-a.com",
        },
        {
          name: "Company B",
          logo: imageB,
          description:
            "Company B offers innovative software development services.",
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
    {
      name: "Y Partner",
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
    if (flippedCard.section === section && flippedCard.index === index) {
      setFlippedCard({ section: null, index: null });
    } else {
      setFlippedCard({ section, index });
    }
  };

  return (
    <>
        <AnimatedName title={"Sponsors"} subHeading={"Coming Soon"} ></AnimatedName>
        <div
        style={{
          backgroundImage: `url(${darkCarnival})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          color: "#fff",
          fontFamily:"Cookie"
        }}
        className="pt-12"
      >
        <nav
          aria-label="Main navigation"
          className="text-gray-800 p-4 pt-12 shadow-lg"
        >
          <h1 className="text-6xl font-extrabold text-center text-white drop-shadow-lg" style={{fontFamily:"Carnival"}}>
            Our Sponsors
          </h1>
        </nav>
        {partners.map((partner, sectionIndex) => (
          <div key={partner.name} className="bg-cover bg-center bg-no-repeat px-4 py-8">
            <h1 className="text-center font-bold text-2xl mb-8">
              <i>{partner.name}</i>
            </h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mx-8 max-w-7xl">
              {partner.sponsors.map((sponsor, index) => (
                <SponsorCard
                  key={`${partner.name}-${sponsor.name}-${index}`}
                  sponsor={sponsor}
                  isFlipped={
                    flippedCard.section === sectionIndex && flippedCard.index === index
                  }
                  onClick={() => handleCardClick(sectionIndex, index)}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="container text-white mx-auto py-16 px-4 mt-12 text-center shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-8" style={{fontFamily:"Carnival"}}>SPONSOR US!</h1>
          <p className=" mb-8 max-w-xl mx-auto text-3xl">
            Your partnership with ZYGON ensures the success of our event.
          </p>
          <button
            className="bg-red-500 text-white hover:bg-red-600 font-bold py-4 px-8 rounded-lg"
            onClick={() => {
              const url = "./ZYGON_BROCHURE.pdf";
              if (url) {
                window.location.href = url;
              } else {
                console.error("Brochure not found");
              }
            }} style={{fontFamily:"Carnival"}}
          >
            SPONSORSHIP BROCHURE
          </button>
        </div>
      </div>
    </>
  );
}

export default SponsorsPage;
