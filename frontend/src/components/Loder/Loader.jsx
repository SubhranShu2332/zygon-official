import React from "react";
import Lottie from "react-lottie";
import animationData1 from '../../json/fire.json';
import animationData2 from "../../json/spin3.json"

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

  return (
    <>
      <div className="relative h-screen bg-gray-900 flex items-center justify-center">
          {/* Lottie Animation at the Top */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 mt-4">
            <Lottie options={defaultOptions1} height={300} width={300} />
          </div>

          {/* Centered GIF */}
          <div className="flex items-center justify-center h-screen">
            <img src="./loader.gif" alt="Center Animation" className="md:h-[400px] md:w-[400px]" />
            
          </div> 
          
        </div>
       
    </>
  );
};

export default Loader;