import { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Instagram } from 'lucide-react';

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, name: 'NAME1', image: '/api/placeholder/400/320' },
    { id: 2, name: 'NAME2', image: '/api/placeholder/400/320' },
    { id: 3, name: 'NAME3', image: '/api/placeholder/400/320' },
    { id: 4, name: 'NAME4', image: '/api/placeholder/400/320' },
    { id: 5, name: 'NAME5', image: '/api/placeholder/400/320' },
    { id: 6, name: 'NAME6', image: '/api/placeholder/400/320' },
    { id: 7, name: 'NAME7', image: '/api/placeholder/400/320' },
    { id: 8, name: 'NAME8', image: '/api/placeholder/400/320' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const getSlidePosition = (index) => {
    const difference = index - currentSlide;
    const numSlides = slides.length;
    
    // Calculate the shortest distance in either direction
    let normalizedDiff = difference;
    if (Math.abs(difference) > numSlides / 2) {
      normalizedDiff = difference > 0 
        ? difference - numSlides 
        : difference + numSlides;
    }

    // Determine visual position based on normalized difference
    if (normalizedDiff === 0) return 'center';
    if (normalizedDiff === 1 || normalizedDiff === -1) return 'adjacent';
    if (normalizedDiff === 2 || normalizedDiff === -2) return 'far';
    return 'hidden';
  };

  const getSlideStyles = (index) => {
    const position = getSlidePosition(index);
    let transform = 'scale(0) translateX(0)';
    let zIndex = 0;
    let opacity = '0';

    switch (position) {
      case 'center':
        transform = 'scale(1) translateX(0)';
        zIndex = 30;
        opacity = '1';
        break;
      case 'adjacent':
        if (
          (index === 0 && currentSlide === slides.length - 1) ||
          (index > currentSlide && !(currentSlide === 0 && index === slides.length - 1))
        ) {
          transform = 'scale(0.85) translateX(50%)';
        } else {
          transform = 'scale(0.85) translateX(-50%)';
        }
        zIndex = 20;
        opacity = '0.7';
        break;
      case 'far':
        if (
          (index <= 1 && currentSlide >= slides.length - 2) ||
          (index > currentSlide && !(currentSlide <= 1 && index >= slides.length - 2))
        ) {
          transform = 'scale(0.7) translateX(100%)';
        } else {
          transform = 'scale(0.7) translateX(-100%)';
        }
        zIndex = 10;
        opacity = '0.4';
        break;
    }

    return {
      transform,
      zIndex,
      opacity,
    };
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="relative w-full max-w-4xl">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronLeft size={32} />
        </button>
        
        <div className="relative h-[500px] flex items-center justify-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="absolute w-full max-w-sm transition-all duration-500 ease-in-out"
              style={getSlideStyles(index)}
            >
              <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-white tracking-wider mb-4">
                    {slide.name}
                  </h3>
                  
                  <div className="flex justify-center gap-4 mb-6">
                    <button className="p-2 border border-white rounded-full text-white hover:bg-white hover:text-gray-800 transition-colors">
                      <Linkedin size={20} />
                    </button>
                    <button className="p-2 border border-white rounded-full text-white hover:bg-white hover:text-gray-800 transition-colors">
                      <Instagram size={20} />
                    </button>
                  </div>

                  <button className="w-full py-3 bg-gray-700 text-white rounded-lg text-lg tracking-widest font-bold hover:bg-gray-600 transition-colors">
                    DETAILS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 text-white hover:text-gray-300 transition-colors"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Team;