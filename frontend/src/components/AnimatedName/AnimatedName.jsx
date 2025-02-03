import "./Animatedmodule.css";
import { useState, useEffect } from "react";

function AnimatedName({ title }) {
  const [animate, setAnimate] = useState(false);
  const [showSubHeading, setShowSubHeading] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      setShowSubHeading(true);
    }, 3000); // Adjust timing to match animation duration

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  const getAnimationClass = (index) => {
    if (index % 3 === 0) return "from-left";
    if (index % 3 === 1) return "from-right";
    return "from-top";
  };

  const letters = title.split("");

  return (
    <div className="hero-container" style={{fontFamily:"Black Bones",fontWeight:"bold"}}>
      <div className="title-container">
        {letters.map((char, index) => (
          <span
            key={index}
            className={`letter ${getAnimationClass(index)} ${
              animate ? "animate" : ""
            }`}
          >
            {char}
          </span>
        ))}
      </div>
      {showSubHeading && (
        <div className="sub-heading animate-sub-heading">
          ─── 〔 A cultural extravaganza 〕───
        </div>
      )}
    </div>
  );
}

export default AnimatedName;