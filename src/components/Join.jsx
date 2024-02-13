import React from "react";

const Join = () => {
  return (
    <div className="md:w-[80%] m-auto my-16">
      <div className="py-12 bg-gradient-to-r rounded-xl flex justify-center items-center flex-col from-grad1 text-center to-grad2 text-white">
        <div>
          <p className="text-3xl font-semibold">
            Be among the first to revolutionize the health care sector.
          </p>
          <p className="w-2/4 m-auto text-lg pt-3 text-[#FCFCFD]">
            Ramp up your hospital management experience. NetCare is here to
            ensure that both health care practitioners and patients get the best
            out of technology.
          </p>
        </div>
        <div className="mt-8">
          <button className="btn hover:none border-[#001C59] py-4 px-7 hover:bg-white">Join Netcare</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
