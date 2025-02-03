import React from 'react';
import { Trophy, Calendar, Star, Heart } from 'lucide-react';

const StatisticCard = ({ icon: Icon, label, endValue, color, duration = 1000 }) => {
  const [count, setCount] = React.useState(0);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = document.getElementById(`stat-${label}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [label]);

  React.useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const increment = endValue / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setCount(Math.min(Math.floor(current * increment), endValue));

      if (current >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [endValue, duration, isVisible]);

  return (
    <div
      id={`stat-${label}`}
      className={`flex w-[90vw] md:w-auto flex-col items-center justify-center p-3 rounded-lg  transform hover:scale-105 transition-all duration-300 ${color} ]
        `} style={{fontFamily:"Carnival",backgroundColor:"transparent"}}
    >
      {/* <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" /> */}
      <div className="text-6xl md:text-8xl font-bold mt-1  bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-700 bg-clip-text text-transparent">
        {count.toLocaleString()}
      </div>
      <div className="text-4xl md:text-5xl  font-medium text-center mt-1  bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-700 bg-clip-text text-transparent">
        {label} Events
      </div>
    </div>
  );
};

const StatisticsSection = () => {
  const stats = [
    {
      icon: Trophy,
      label: "Sports",
      value: 6,
      color: "bg-black",
    },
    {
      icon: Calendar,
      label: "Fun",
      value: 13,
      color: "bg-black",
    },
    {
      icon: Star,
      label: "Cultural",
      value: 4,
      color: "bg-black",
    },
    {
      icon: Heart,
      label: "Technical",
      value: 3,
      color: "bg-black",
    },
  ];

  return (
    <div
      className="w-full bg-[url(/invert3.png)] py-10 bg-top md:py-36"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="w-full mx-auto ">
        <div className="flex flex-col md:flex-row space-x-1 md:space-x-0 md:gap-4 overflow-x-auto px-2 justify-center">
          {stats.map((stat) => (
            <StatisticCard
              key={stat.label}
              icon={stat.icon}
              label={stat.label}
              endValue={stat.value}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
