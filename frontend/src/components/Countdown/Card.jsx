import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.css";

function Card({ time }) {
  const [prevTime, setPrevTime] = useState(time);
  const [isFlipping, setIsFlipping] = useState(false);
  const [currentTime, setCurrentTime] = useState(time);

  useEffect(() => {
    if (time !== prevTime) {
      setIsFlipping(true); // Start flip animation
      setTimeout(() => {
        setIsFlipping(false); // End flip animation
        setPrevTime(time); // Update previous time
        setCurrentTime(time); // Update bottom card's value
      }, 500); // Match animation duration (250ms + delay)
    }
  }, [time, prevTime]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time.toString();
  };

  return (
    <div
      className={`${styles.flipCard} ${isFlipping ? styles.flip : ""}`}
      data-prev={formatTime(prevTime)}
      data-next={formatTime(currentTime)}
    >
      <div className={styles.top}>{formatTime(prevTime)}</div>
      <div className={styles.bottom}>{formatTime(currentTime)}</div>
    </div>
  );
}

export default Card;
