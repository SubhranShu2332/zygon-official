import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const UniversalGlitterEffect = ({ children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const createGlitter = (event) => {
      const { clientX, clientY } = event.touches ? event.touches[0] : event;
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add(
          'absolute', 
          'w-2', 
          'h-2', 
          'rounded-full', 
          ['bg-yellow-300', 'bg-pink-300', 'bg-blue-300', 'bg-green-300'][Math.floor(Math.random() * 4)]
        );
        container.appendChild(particle);

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 50;

        gsap.set(particle, {
          x: clientX,
          y: clientY,
          scale: Math.random() * 2,
          opacity: 0
        });

        gsap.to(particle, {
          x: clientX + Math.cos(angle) * distance,
          y: clientY + Math.sin(angle) * distance,
          opacity: 1,
          scale: 0,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => {
            container.removeChild(particle);
          }
        });
      }
    };

    // Add event listeners for mouse and touch
    container.addEventListener('click', createGlitter);
    container.addEventListener('touchstart', createGlitter, { passive: true });

    return () => {
      container.removeEventListener('click', createGlitter);
      container.removeEventListener('touchstart', createGlitter);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {children}
    </div>
  );
};

export default UniversalGlitterEffect;