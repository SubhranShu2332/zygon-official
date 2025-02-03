import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselInterval = useRef(null);

  const items = [
    {
      id: 1,
      img: '1.png',
      title: 'Ferris Wheel',
    },
    {
      id: 2,
      img: '2.png',
      title: 'Clown Parade',
    },
    {
      id: 3,
      img: '3.png',
      title: 'Carnival Lights',
    },

  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };


  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    if (!isPaused) {
      carouselInterval.current = setInterval(() => {
        handleNext();
      }, 3000);
    } else {
      clearInterval(carouselInterval.current);
    }

    return () => clearInterval(carouselInterval.current);
  }, [isPaused]);

  return (
    <div 
      className="relative w-full  mx-auto p-6 md:p-0 bg-[url(/6.jpg)] bg-cover" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="md:pt-10 md:ms-64 text-5xl md:text-7xl animate__animated animate__fadeInLeft wow bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" style={{fontFamily:"Carnival"}}>
        Spotlights Of  <br /> Carnival
      </div>
      <div className="relative overflow-hidden rounded-xl shadow-lg mt-5 md:w-[30%] md:mx-auto ">
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ 
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {items.map((item) => (
            <div 
              key={item.id} 
              className="w-full flex-shrink-0 h-auto"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-cover rounded bg-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex justify-between items-center px-4">
          <button
            onClick={handlePrev}
            className="bg-transparent text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            &#60;
          </button>
          <button
            onClick={handleNext}
            className="bg-transparent text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            &#62;
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        <h3 className="text-2xl font-bold text-white md:text-5xl md:pb-10 " style={{fontFamily:"Carnival"}}>{items[currentIndex].title}</h3>
      </div>
    </div>
  );
};

export default Carousel;