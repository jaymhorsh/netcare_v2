import React from "react";

const ProductList = ({ imgSrc, title }) => {
  return (
    <div className="bg-grad1 rounded-lg ">
      <div className="py-4 px-5 ">
        <p className="text-white text-center">
         {title}
        </p>
        <div className="bg-white rounded-md mt-8">
          <img
            src={require(`../../Assets/${imgSrc}`)}
            alt={imgSrc}
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
