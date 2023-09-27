import React from "react";
import Navbar from "../../components/Navbar";
import HeroSection from "../../components/HeroSection";

const Home = () => {
  return (
    <>
      <section className="mainBg">
        <Navbar/>
        <HeroSection/>
      </section>
    </>
  );
};

export default Home;
