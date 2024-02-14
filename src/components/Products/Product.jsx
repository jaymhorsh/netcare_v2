import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import ProductList from "./ProductList";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const products = [
  {
    id: 1,
    title: "Schedule a one-on-one session with an health practitioner.",
    imgSrc: "frame3.png",
  },
  {
    id: 2,
    title:
      "Personalized health care assessment using the latest equipment and device",
    imgSrc: "frame4.png",
  },
  {
    id: 3,
    title: "Access to data base you can find hospitals in close proximity.",
    imgSrc: "frame2.png",
  },

  {
    id: 4,
    title: "Access to health care records in just a few clicks",
    imgSrc: "frame3.png",
  },
];

const Product = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default number of slides to show
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change this value to adjust autoplay speed
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile devices
        settings: {
          slidesToShow: 1, // Number of slides to show on mobile
        },
      },
      {
        breakpoint: 1024, // Breakpoint for tablets and small screens
        settings: {
          slidesToShow: 2, // Number of slides to show on tablets
        },
      },
      {
        breakpoint: 1280, // Breakpoint for medium screens
        settings: {
          slidesToShow: 3, // Number of slides to show on medium screens
        },
      },
    ],
  };
  return (
    <div className="bg-blue-100 w-full h-full ">
      <div className="flex justify-center py-6 items-center flex-col ">
        <div>
          <p className="text-5xl font-semibold">
            Let's see what
            <span className="font-lalezar text-first"> Netcare </span> can do.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-8 w-full px-14 py-8">
          <Slider {...settings}>
            {products.map((product) => (
              <ProductList
                key={product.id}
                title={product.title}
                imgSrc={product.imgSrc}
              />
            ))}
          </Slider>
        </div>
        <div>
          <button className="flex items-center gap-2">
            <span className="font-bold">
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
