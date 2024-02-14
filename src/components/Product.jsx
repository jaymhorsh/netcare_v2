import React from "react";
import frame1 from "../Assets/frame1.png";
import frame2 from "../Assets/frame2.png";
import frame3 from "../Assets/frame3.png";
import frame4 from "../Assets/frame4.png";
import { ChevronRightIcon } from "@heroicons/react/outline";

const Product = () => {
  return (
    <div className="bg-blue-100 w-full h-full ">
      <div className="flex justify-center py-6 items-center flex-col ">
        <div>
          <p className="text-5xl font-semibold">
            Let's see what{" "}
            <span className="font-lalezar text-first">Netcare</span> can do.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 w-full px-14 py-8">
          <div className="bg-grad1 rounded-lg ">
            <div className="py-4 px-5 ">
              <p className="text-white text-center">
                Access to health care records in just a few clicks
              </p>
              <div className="bg-white rounded-md mt-8">
                <img src={frame1} srcset="" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-grad1 rounded-lg ">
            <div className="py-4 px-5 ">
              <p className="text-white text-center">
              Access to data base you can find hospitals in close proximity.
              </p>
              <div className="bg-white rounded-md mt-8">
                <img src={frame2} srcset="" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-grad1 rounded-lg ">
            <div className="py-4 px-5 ">
              <p className="text-white text-center">
              Schedule a one-on-one session with an health practitioner.
              </p>
              <div className="bg-white rounded-md mt-8">
                <img src={frame3} srcset="" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-grad1 rounded-lg ">
            <div className="py-4 px-5 ">
              <p className="text-white text-center">
              Personalized health care assessment using the latest equipment and device
              </p>
              <div className="bg-white rounded-md mt-8">
                <img src={frame4} srcset="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="flex items-center gap-2">
            <span className="font-bold">
              {" "}
              Visit our product page for more feature
            </span>
            <span>
              <ChevronRightIcon className="text-first w-4 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
