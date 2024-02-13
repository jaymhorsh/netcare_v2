import React from "react";

const About = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="md:w-[70%] m-auto gap-32 flex justify-center">
          <div className="md:w-[25%] ">
            <p className="text-5xl font-semibold text-gray-800">About Us</p>
          </div>
          <div className="md:w-[70%]">
            <p className="text-2xl text-gray-800 ">
              NetCare is a comprehensive healthcare solution designed to empower
              individuals (patients and health-care specialists) with real-time
              health care services using innovative technology.
            </p>
          </div>
        </div>
        <div>
            <button>
                Read More
            </button>
        </div>
      </div>
    </div>
  );
};

export default About;
