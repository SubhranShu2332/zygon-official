import React, { useState, useEffect } from "react";
import styles from "./Countdown.module.css";
import Card from "./Card";

function Countdown() {
  const countDownDate = new Date("February 28, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = countDownDate - new Date().getTime();
      setTimeLeft(newTimeLeft);
    }, 1000);
  }, []);

  // Calculate the time components (days, hours, minutes, seconds)
  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const daysLeft = Math.floor(timeLeft / days);
  const hoursLeft = Math.floor((timeLeft % days) / hours);
  const minutesLeft = Math.floor(((timeLeft % days) % hours) / minutes);
  const secondsLeft = Math.floor(
    (((timeLeft % days) % hours) % minutes) / seconds
  );

  return (
    <div className={styles.Countdownbody}  style={{fontFamily:"Carnival"}}>
      <h1 className={styles.title}  style={{fontFamily:"Carnival"}}>Time Left For Carnival To Begin</h1>

      <div className={[styles.cardContainer]}>
        <div className={styles.days}>
          <Card time={daysLeft} />
          <div className={styles.tags}>DAYS</div>
        </div>
        <div className={styles.hours}>
          <Card time={hoursLeft} />
          <div className={styles.tags}>HOURS</div>
        </div>
        <div className={styles.minutes}>
          <Card time={minutesLeft} />
          <div className={styles.tags}>MINUTES</div>
        </div>
        <div className={styles.seconds}>
          <Card time={secondsLeft} />
          <div className={styles.tags}>SECONDS</div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
