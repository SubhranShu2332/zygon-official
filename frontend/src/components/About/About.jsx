import React, { useEffect, useRef } from 'react';
import { gsap } from "../../../node_modules/gsap/index.js";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import SplitType from 'split-type';
import Zygon from '../Zygon';
import { TextReveal } from '../../helper/TextReveal';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);
  const nextSectionRef = useRef(null);
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initial setup
    gsap.set(nextSectionRef.current, {
      y: '100%',
    });

    // Main timeline for section transition
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: 1,
      },
    });

    mainTl.to(nextSectionRef.current, {
      y: '0%',
      ease: 'none',
    });

    // Text animations
    const splitText1 = new SplitType(text1Ref.current, { types: 'words' });
    const splitText2 = new SplitType(text2Ref.current, { types: 'words' });

    gsap.fromTo(
      splitText1.words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: text1Ref.current,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 9,
        },
      }
    );

    gsap.fromTo(
      splitText2.words,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: text2Ref.current,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1,
        },
      }
    );

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 90%',
          end: 'bottom 70%',
          scrub: 1,
        },
      }
    );

    return () => {
      lenis.destroy();
      splitText1.revert();
      splitText2.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="w-full">
      <div ref={containerRef} className="relative h-[100dvh] overflow-hidden">
        {/* First Section */}
        <section
          ref={aboutRef}
          className="absolute top-0 w-full h-full bg-white"
          style={{
            transform: 'translate3d(0, 0, 0)',
          }}
        >
          {/* Background */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-top bg-[url(/aboutb.webp)] md:bg-[url(/Designer.jpeg)] "
          />
          {/* Static Shapes */}
          <div className="absolute top-[10%] left-[10%] w-8 h-8 md:w-16 md:h-16 bg-[#ffffff] rounded-full " />
          <div
            className="absolute bottom-[20%] left-[15%] w-12 h-12 md:w-24 md:h-24 bg-[#ffffff] rounded-full"
          />
          <div className="absolute top-[20%] right-[10%] w-16 h-16 md:w-32 md:h-32 bg-[#ffffff] rounded-full " />
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full p-4">
             <div   className="text-7xl md:text-[120px] font-bold tracking-tighter text-center leading-none  bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" style={{ fontFamily: "Carnival" }}> 
             
             WHAT IS ZYGON?
            
            </div> 
            
          </div>
        </section>

        {/* Next Section */}
        <section
          ref={nextSectionRef}
          className="absolute top-0 w-full h-full from-gray-900 to-gray-800 bg-[url('/invert2.png')]"
          style={{
            transform: 'translate3d(0, 100%, 0)',
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center h-full ">
            {/* Left Paragraph */}
            <div className="md:w-1/2 md:pr-8">
              <h2
                ref={text1Ref}
                className="text-2xl md:text-4xl text-white font-bold cookie-regular"
                style={{ fontFamily: "Cookie" }}
              >
                <Zygon></Zygon>

              </h2>
            </div>
            {/* Image */}

            {/* Right Paragraph */}
            {/* <div className="md:w-1/4">
              <h2
                ref={text2Ref}
                className="text-xl md:text-4xl text-white font-bold"
              >
                Unleashing creativity through innovation and design.
              </h2>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
