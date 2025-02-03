import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import galleryData from "../../json/gallaryData/gallary.json";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    document.scrollingElement?.scrollTo(0, 0);
    ScrollTrigger.getAll().forEach(st => st.kill());
    
    handleScroll();

    return () => {
      window.removeEventListener('resize', checkMobile);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleScroll = () => {
    if (window.innerWidth < 768) return;

    ScrollTrigger.defaults({
      scroller: ".scroller",
    });

    gsap.utils.toArray("section").forEach((section, index) => {
      const wrapper = section.querySelector(".wrapper");
      if (!wrapper) return;

      const scrollWidth = wrapper.scrollWidth || 0;
      const offsetWidth = section.offsetWidth || 0;

      const [xStart, xEnd] = index % 2
        ? ["100%", (scrollWidth - offsetWidth) * -1]
        : [scrollWidth * -1, 0];

      gsap.fromTo(
        wrapper,
        { x: xStart },
        {
          x: xEnd,
          scrollTrigger: {
            trigger: section,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  };

  // Mobile layout component
  const MobileLayout = () => (
    <div className="min-h-screen bg-cream px-4 py-8">
      {galleryData.map((section) => (
        <div key={section.id} className="mb-16">
          <h2 className="text-4xl font-medium mb-6 text-center">
            {section.title}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {section.images.map((image, idx) => (
              <div key={idx} className="aspect-square overflow-hidden rounded-xl">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  src={image}
                  alt={`Gallery ${section.id} Image ${idx + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="text-2xl font-medium text-center mt-12 px-4">
        Life is a beautiful thing, and there's so much to smile about!
      </div>
    </div>
  );

  // Desktop layout component
  // Desktop layout component
const DesktopLayout = () => (
  <div className="scroller h-screen overflow-auto overflow-x-hidden bg-cream">
    {galleryData.map((section) => (
      <section key={section.id} className="h-[85vh] relative flex items-center">
        <div className="wrapper flex flex-nowrap justify-start items-center px-8 gap-8">
          <div className="text-[8vh] lg:text-[10vh] font-medium whitespace-nowrap mr-6 opacity-90">
            {section.title}
          </div>
          <div className="flex flex-nowrap gap-4">
            {section.images.map((image, idx) => (
              <div key={idx} className="relative group">
                <img
                  className="h-48 lg:h-64 w-auto rounded-xl object-cover 
                           transition-all duration-500 hover:scale-105 hover:shadow-xl"
                  src={image}
                  alt={`Gallery ${section.id} Image ${idx + 1}`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 
                              transition-all duration-300 rounded-xl"/>
              </div>
            ))}
          </div>
        </div>
      </section>
    ))}
    <section className="h-[85vh] relative flex items-center">
      <div className="wrapper flex justify-center items-center px-8">
        <div className="text-[6vh] lg:text-[8vh] font-medium text-center leading-tight max-w-6xl mx-auto opacity-90">
          Life is a beautiful thing, and there's so much to smile about!
        </div>
      </div>
    </section>
  </div>
);

  return isMobile ? <MobileLayout /> : <DesktopLayout />;
};

export default Gallery;