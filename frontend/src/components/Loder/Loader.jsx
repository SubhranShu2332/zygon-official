import React from 'react';
import Lottie from "react-lottie";

import animationData2 from '../../json/Animation1.json';

import animationData1 from "../../json/Animation_drop.json"

import animationData3 from '../../json/fire.json';

import animationData4 from '../../json/spin3.json';

import "animate.css"

const Loader = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const defaultOptions4 = {
    loop: true,
    autoplay: true,
    animationData: animationData4,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
        backgroundColor: "rgba(14, 14, 14, 0.96)",
        overflow: "hidden",
        flexDirection:"column"
      }}
    >
      <div className='absolute top-1'>
      <Lottie options={defaultOptions3} />
      </div>
      <div className='absolute bottom-0.5 text-sm'>
      <Lottie options={defaultOptions4} className="text-sm" />
      </div>
      
      <div className="loader animate__animated animate__zoomIn wow" data-wow-delay="4.6s">
      
        <span>Z</span>
        <span>y</span>
        <span>g</span>
        <span>
                {/* <Lottie options={defaultOptions3} /> */}

          <div
            style={{
              position: "relative",
              width: "90px",
              height: "90px",
              display: "inline-block",
              marginLeft: "-20px",
              marginRight: "-10px",
              marginTop: "30px"
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                filter: "drop-shadow(10px 10px 20px rgba(255, 223, 89, 0.9))", // Glow effect
              }}
            >
              <Lottie options={defaultOptions1} />
            </div>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                marginTop: "1px",
                // filter: "drop-shadow(10px 10px 20px rgba(255, 223, 89, 0.9))",
              }}
            >
              <Lottie options={defaultOptions2} />
            </div>
          </div>
        </span>
        <span>N</span>
      </div>
      

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Poppins:ital,wght@0,100;0,200;1,100;1,200&display=swap');

          .loader {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 70px;
            font-weight: bold;
            color:#ffff;
            letter-spacing: 10px;
            font-family: 'Cinzel Decorative', serif;
            // text-shadow: 
            //   0 0 5px #ffde59, 
            //   0 0 10px #ffcc00, 
            //   0 0 20px #ffa31a, 
            //   0 0 30px #ff751a, 
            //   0 0 40px #ff4500;
            // animation: glow 1.5s infinite alternate;
          }

          .loader span {
            position: relative;
            display: inline-block;
          }

          .loader span:nth-child(1) {
            animation-delay: 0.1s;
          }
          .loader span:nth-child(2) {
            animation-delay: 0.3s;
          }
          .loader span:nth-child(3) {
            animation-delay: 0.5s;
          }
          .loader span:nth-child(4) {
            animation-delay: 0.7s;
          }
          .loader span:nth-child(5) {
            animation-delay: 0.9s;
          }

          // @keyframes glow {
          //   0% {
          //     text-shadow: 
          //       0 0 40px #ffde59, 
          //       0 0 8px #ffcc00, 
          //       0 0 4px #ffa31a, 
          //       0 0 2px #ff751a, 
          //       0 0 1px #ff4500;
          //   }
          //   100% {
          //     text-shadow: 
          //       0 0 0px #ffde59, 
          //       0 0 0px #ffcc00, 
          //       0 0 0px #ffa31a, 
          //       0 0 0px #ff751a, 
          //       0 0 0px #ff4500;
          //   }
          // }
        `}
      </style>
    </div>
  );
};

export default Loader;
