// Import required modules and components
import React, { useState, useRef, useEffect, useId } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../hook/use-outside-click";

// Main Component
export default function Event() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  // Handle Escape key to close active card
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActive(null);
      }
    };

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  // Close the card when clicking outside
  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <ExpandedCard active={active} id={id} setActive={setActive} ref={ref} />
        )}
      </AnimatePresence>

      <CardList cards={cards} setActive={setActive} id={id} />
    </>
  );
}


function CardList({ cards, id }) {
  const [active, setActive] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 6;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* Use CSS Grid with different layouts for mobile and desktop */}
      <div className="max-w-6xl mx-auto w-full grid gap-6 py-8 px-4 lg:px-0">
        {/* Mobile: Single column grid */}
        <div className="grid grid-cols-1 gap-6 lg:hidden">
          {currentCards.map((card) => (
            <motion.div
              key={card.title}
              layoutId={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="relative flex flex-col w-full h-full">
                <motion.div
                  layoutId={`image-${card.title}-${id}`}
                  className="rounded-t-2xl overflow-hidden"
                >
                  <img
                    src={card.src}
                    alt={card.title}
                    className="h-48 w-full object-cover"
                  />
                </motion.div>
                <div className="p-4">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-semibold text-lg text-gray-800"
                  >
                    {card.title}
                  </motion.h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop layout */}
        <div
          className="hidden lg:grid gap-6"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateAreas: `
              "card1 card1 card1 card1 card2 card2 card2 card2 card2 card3 card3 card3"
              "card4 card4 card4 card5 card5 card5 card5 card5 card6 card6 card6 card6"
              "card7 card7 card7 card8 card8 card8 card8 card8 card9 card9 card9 card9"
              "card10 card10 card10 card11 card11 card11 card11 card11 card12 card12 card12 card12"
            `,
          }}
        >
          {currentCards.map((card, index) => {
            const areas = [
              "card1",
              "card2",
              "card3",
              "card4",
              "card5",
              "card6",
              "card7",
              "card8",
              "card9",
              "card10",
              "card11",
              "card12",
            ];
            return (
              <motion.div
                key={card.title}
                layoutId={`card-${card.title}-${id}`}
                onClick={() => setActive(card)}
                className="flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                style={{
                  gridArea: areas[index % areas.length],
                }}
              >
                <div className="relative flex flex-col w-full h-full">
                  <motion.div
                    layoutId={`image-${card.title}-${id}`}
                    className="rounded-t-2xl overflow-hidden"
                  >
                    <img
                      src={card.src}
                      alt={card.title}
                      className="h-48 w-full object-cover"
                    />
                  </motion.div>
                  <div className="p-4">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-semibold text-lg text-gray-800"
                    >
                      {card.title}
                    </motion.h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 mb-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:bg-gray-400"
        >
          Prev
        </button>
        <span className="mx-4 text-lg">{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:bg-gray-400"
        >
          Next
        </button>
      </div>

      {/* Expanded Card */}
      <AnimatePresence>
        {active && (
          <ExpandedCard
            key={`expanded-${active.title}-${id}`} // Ensures unique key for rerendering
            active={active}
            id={id}
            setActive={() => {
              // Cleanup state to prevent stale rendering
              setActive(null);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const ExpandedCard = React.forwardRef(({ active, id, setActive }, ref) => (
  <motion.div
    className="fixed inset-0 grid place-items-center z-[100] bg-black/50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      layoutId={`card-${active.title}-${id}`}
      ref={ref}
      className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
    >
      <motion.div layoutId={`image-${active.title}-${id}`}>
        <img
          src={active.src}
          alt={active.title}
          className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
        />
      </motion.div>

      <div className="relative p-4">
        <motion.h3
          layoutId={`title-${active.title}-${id}`}
          className="font-medium text-neutral-700 dark:text-neutral-200 text-lg"
        >
          {active.title}
        </motion.h3>
        <motion.p
          layoutId={`description-${active.description}-${id}`}
          className="text-neutral-600 dark:text-neutral-400 text-base mt-2"
        >
          {active.description}
        </motion.p>
        <motion.a
          layout
          href={active.ctaLink}
          target="_blank"
          className="mt-4 inline-block px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
        >
          {active.ctaText}
        </motion.a>

        <button
          onClick={() => setActive()}
          className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full"
        >
          Close
        </button>
      </div>
    </motion.div>
  </motion.div>
));

// export { CardList, ExpandedCard };


const CloseIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

// Cards Data
const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style...
      </p>
    ),
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "Babb Maan",
    title: "Mitran D Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "abbu Maan",
    title: "Mitran i Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "au Maan",
    title: "Mitran Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "auasdf Ma",
    title: "Mitranadsf Chhatradfasdfi",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "Lana Del Reyadsfasdd",
    title: "Summertime Sadnessasdfasd",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style...
      </p>
    ),
  },
  {
    description: "Babbu Maanasdfasdd",
    title: "Mitran Di Chhatrasdfasdi",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "Baasdfasddbb Maan",
    title: "Mitran D Chhatrasdfasdfi",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "abbadfasddfu Maassan",
    title: "Mitradfan i Chsadfasdfhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "au Masdfhasdihfaan",
    title: "Mitran Chhasdfoiashfdhasatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "auaasdfhaisdhfihasdf Maan",
    title: "Mitranadasdofjoasdfojsf Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "Lana jasijjdfiajsd j   Del Rey",
    title: "Summertime i dasf wwd  Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style...
      </p>
    ),
  },
  {
    description: "Babbu Maaasdf  asdf n",
    title: "Mitran Di Chhatasdf  sad fasri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "Baasd sad  bb Maan",
    title: "Mitran Dasdf as sdafx Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "abbuasd fS ASD F Maan",
    title: "Mitran i Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "auASDR FASDF A  Maan",
    title: "Mitran Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "auasdfA  ASDF ASDF  Maan",
    title: "Mitranadsf Chhaasdf asdf sad ftri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "Lana HDHSDGfdgasdf a sdfDel Rey",
    title: "Summertime Sadsf asdfadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Lana Del Rey, an iconic American singer-songwriter, is celebrated for
        her melancholic and cinematic music style...
      </p>
    ),
  },
  {
    description: "Babbasdkfj asfju Maan",
    title: "Mitran Di asdhffihih ncjbhb Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "Babbasdffhasdidh Maan",
    title: "Mitran D Chh n shbdhf hsd fhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "abbu Maadsff oas joifjaoisj an",
    title: "Mitran i Chhatasfd as fasdfri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "au Maanasdf as faf",
    title: "Mitran Chhatrasd fasdfas i",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  {
    description: "auasdf Maan asdf asdfasf ",
    title: "Mitranadsf Chhaasdf asdftri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
        Babbu Maan, a legendary Punjabi singer, is renowned for his soulful
        voice and profound lyrics...
      </p>
    ),
  },
  // Other cards...
];
