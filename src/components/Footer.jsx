import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 ">
      <div className="py-12 md:max-w-[80%] xs:w-[90%] m-auto">
        <div className=" flex justify-between items-center h-full flex-wrap">
          <div>
            <h2 className="text-first font-medium text-2xl font-lalezar">Netcare</h2>
          </div>
          <div>
            <p className="text-gray-800"> &copy; 2024 Netcare Software Team, All Right Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
