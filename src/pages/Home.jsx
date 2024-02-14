import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Fragment } from "react";
import About from "../components/About";
import Join from "../components/Join";
import Footer from "../components/Footer";
import Product from "../components/Product";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About/>
      <Product/>
      <Join/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
