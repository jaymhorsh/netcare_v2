import React from "react";

const About = () => {
  return (
    <div className="w-full  xs:mt-16  ">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="md:w-[70%] m-auto md:gap-32 xs:flex-col xs:text-center flex justify-center">
          <div className="md:w-[25%] xs:pb-4">
            <p className="text-5xl font-semibold text-gray-800">About Us</p>
          </div>
          <div className="md:w-[70%] md:px-14 xs:w-[90%] m-auto">
            <p className="text-2xl text-gray-800 xs:px-3 xs:text-center">
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
