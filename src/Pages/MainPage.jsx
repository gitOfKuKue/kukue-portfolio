import React from "react";
import Navigation from "../Components/Navigation";
import Container from "../Components/Container";
import ServicesSection from "../Components/ServicesSection";
import AboutMe from "../Components/AboutMe";
import Hello from "../Components/Hello";
import Footer from "../Components/Footer";
import PortfolioSection from "../Components/PortfolioSection";

const MainPage = () => {
  return (
    <>
      <main>
        {/* Navigation Section */}
        {/* <Navigation /> */}

        {/* Hello Section */}
        <Hello />

        {/* About Me */}
        <AboutMe />

        {/* Services Section */}
        <ServicesSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Footer Section */}
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default MainPage;
