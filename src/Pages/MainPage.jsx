import React from "react";
import Navigation from "../Components/Navigation";
import Container from "../Components/Container";
import ServicesSection from "../Components/ServicesSection";
import AboutMe from "../Components/AboutMe";
import Hello from "../Components/Hello";
import Footer from "../Components/Footer";
import PortfolioSection from "../Components/PortfolioSection";
import MethodsProvider from "../Context/MethodsProvider";
import { HashLink } from "react-router-hash-link";
import SkillSetSection from "../Components/SkillSetSection";

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

        {/* Skills Set */}
        <SkillSetSection />

        <hr className="mt-10 mb-20 w-[90%] m-auto" />

        {/* Services Section */}
        <ServicesSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Footer Section */}
        {/* <Footer /> */}

        <HashLink
          to="#navigation"
          className="h-[100px] w-[100px] mx-auto relative my-5 block animate-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-15 mx-auto absolute top-[15%] left-[50%] translate-[-50%] text-font border border-font bg-transparent rounded-full p-2 my-10 hover:size-18 duration-75"
            id="up-arrow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 18.75 7.5-7.5 7.5 7.5"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        </HashLink>
      </main>
    </>
  );
};

export default MainPage;
