import React, { useState, useEffect } from "react";
import styles from "./WhatsNew.module.css";
import AnimatedName from "../AnimatedName/AnimatedName";

function WhatsNew() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const features = document.querySelectorAll(`.${styles.feature}`);
      features.forEach((feature) => {
        const rect = feature.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          feature.classList.add(styles.visible);
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
      <div className={styles.whatsNew}>
        <div className={styles.carnivalLights}></div>
        <div className={styles.ferrisWheel}></div>
        {/* <div className={styles.shootingStars}></div> */}

        <div className={styles.title}>
          <h1>What's New</h1>
        </div>

        <section className={styles.content}>
          <div className={`${styles.feature} ${styles.left} ${styles.revealOnScroll}`}>
            <div className={`${styles.featureContent} ${styles.glowEffect}`}>
              <div className={styles.featureTextContent}>
                <div className={styles.featureImage} data-speed="0.2">
                  <div className={styles.imageContainer}>
                    <div className={styles.imageOverlay}></div>
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
                <div className={styles.featureDetails}>
                  <span className={styles.tag}>Virtual Reality</span>
                  <span className={styles.tag}>Gaming Arena</span>
                  <span className={styles.tag}>Interactive Displays</span>
                </div>
                <div className={`${styles.featureStatus} ${styles.pulse}`}>
                  Now Open
                </div>
              </div>
              <div className={styles.glowLines}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
              </div>
            </div>
          </div>

          <div className={`${styles.feature} ${styles.right} ${styles.revealOnScroll}`}>
            <div className={`${styles.featureContent} ${styles.glowEffect}`}>
              <div className={styles.featureImage} data-speed="0.2">
                <div className={styles.imageContainer}>
                  <div className={styles.imageOverlay}></div>
                  <img src="/Stall1.jpg" alt="Stalls" />
                </div>
              </div>
              <div className={styles.featureTextContent}>
                <h2>Culinary Market</h2>
                <p>
                  Embark on a gastronomic carnival adventure! Our food stalls
                  are a celebration of flavors, where master chefs craft
                  delectable treats that dance on your taste buds. From sweet to
                  savory, each bite is a ticket to culinary wonderland!
                </p>
                <div className={styles.featureDetails}>
                  <span className={styles.tag}>Global Cuisine</span>
                  <span className={styles.tag}>Live Cooking</span>
                  <span className={styles.tag}>Food Workshops</span>
                </div>
                <div className={`${styles.featureStatus} ${styles.pulse}`}>
                  Now Serving
                </div>
              </div>
              <div className={styles.glowLines}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WhatsNew;
