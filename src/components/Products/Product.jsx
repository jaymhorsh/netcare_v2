import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/outline";
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
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: (
      <span>
        <ChevronLeftIcon className="text-first font-semibold text-4xl" />
      </span>
    ),
    nextArrow: (
      <span>
        {" "}
        <ChevronRightIcon className="text-first text-2xl" />
      </span>
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-blue-100 w-full h-full ">
      <div className="flex justify-center py-6 items-center flex-col ">
        <div>
          <p className="md:text-5xl xs:text-3xl font-semibold">
            Let's see what
            <span className="font-lalezar text-first"> Netcare </span> can do.
          </p>
        </div>
        <div className=" w-full  md:px-14 py-14 xs:px-8 ">
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
