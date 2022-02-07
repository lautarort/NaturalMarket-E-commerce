import React from "react";
// Add components below
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import CardGrid from "../CardGrid/CardGrid";
import Carousel from "../Carousel/Carousel";
import Hero from "../Hero/Hero";

const Landing: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Carousel />
      <Hero />
      <CardGrid />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
