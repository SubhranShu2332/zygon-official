import React, { useState, useEffect } from "react";
import AnimatedName from "../AnimatedName/AnimatedName";

// Temporarily comment out the import of the CSS file
// import styles from "./WhatsNew.module.css";

function WhatsNew() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      // Assuming styles are applied without the imported file, this might cause issues
      // if the styles object is used.
      const features = document.querySelectorAll(`.feature`);
      features.forEach((feature) => {
        const rect = feature.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          feature.classList.add("visible"); // Use the class directly if styles aren't imported
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatedName title={"What's New"} />
      <div className="whatsNew">
        <div className="carnivalLights"></div>
        <div className="ferrisWheel"></div>
        <div className="title">
          <h1>What's New</h1>
        </div>

        <section className="content">
          <div className="feature left revealOnScroll">
            <div className="featureContent glowEffect">
              <div className="featureTextContent">
                <div className="featureImage" data-speed="0.2">
                  <div className="imageContainer">
                    <div className="imageOverlay"></div>
                    <img src="/funzone1.jpeg" alt="FunZone" />
                  </div>
                </div>
                <h2>FunZone Experience</h2>
                <p>
                  Step into a world of wonder and excitement! Our FunZone
                  combines cutting-edge technology with classic carnival
                  thrills, creating an immersive playground where memories are
                  made and joy knows no bounds.
                </p>
                <div className="featureDetails">
                  <span className="tag">Virtual Reality</span>
                  <span className="tag">Gaming Arena</span>
                  <span className="tag">Interactive Displays</span>
                </div>
                <div className="featureStatus pulse">Now Open</div>
              </div>
              <div className="glowLines">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
            </div>
          </div>

          <div className="feature right revealOnScroll">
            <div className="featureContent glowEffect">
              <div className="featureImage" data-speed="0.2">
                <div className="imageContainer">
                  <div className="imageOverlay"></div>
                  <img src="/Stall1.jpg" alt="Stalls" />
                </div>
              </div>
              <div className="featureTextContent">
                <h2>Culinary Market</h2>
                <p>
                  Embark on a gastronomic carnival adventure! Our food stalls
                  are a celebration of flavors, where master chefs craft
                  delectable treats that dance on your taste buds. From sweet to
                  savory, each bite is a ticket to culinary wonderland!
                </p>
                <div className="featureDetails">
                  <span className="tag">Global Cuisine</span>
                  <span className="tag">Live Cooking</span>
                  <span className="tag">Food Workshops</span>
                </div>
                <div className="featureStatus pulse">Now Serving</div>
              </div>
              <div className="glowLines">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WhatsNew;