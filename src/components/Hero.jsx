import React from "react";
import heroicon from "../Assets/heroImage.png";
const Hero = () => {
  return (
    <div className=" lg:p-24 pt-24 sm:pt-28 ">
      <div className="w-full h-full ">
        <div className="flex items-center xs:flex-col-reverse sm:flex-col-reverse md:flex-row ">
          <div className="lg:w-[72%] ">
            <img src={heroicon} alt="heroimg" className="w-full object-cover" />
          </div>
          <div className="flex flex-col lg:w-[32%] md:ml-[-7rem] xs:w-[70%] sm:w-[70%]">
            <h1 className="text-36 font-bold text-center text-first">The Plethora of hospital management.</h1>
            <p className="text-center italic pt-3">
              Imagine a virtual hospital where virtually everything is possible.
              NetCare is the all-powerful hospital management software designed
              to provide innovative health care solutions that work.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Hero;
