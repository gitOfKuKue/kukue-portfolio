import React from "react";
import Container from "./Container";
import myPic from "../assets/images/my-pic.png";
import { HashLink } from "react-router-hash-link";

const Hello = () => {
  return (
    // Hello Section
    <section className="hello-section md:pt-40 md:pb-30 xs:py-10">
      <Container className="flex xs:flex-col md:flex-row justify-between items-center">
        {/* Content Section */}
        <div className="text-font flex flex-col justify-between md:items-start xs:items-center md:h-[400px] sm:h-[300px] sm:mb-10 md:mb-0">
          <p className="text-2xl font-bold lg:text-xl md:text-md sm:text-sm xs:text-xs">HELLO, I'M A</p>
          <h1 className="2xl:text-6xl font-bold 2xl:leading-20 2xl:mb-4 lg:text-5xl md:text-4xl sm:text-5xl xs:text-3xl lg:leading-15 mx:leading-10 lg:mb-2 xs:mb-5">
            Graphic <span className="text-iconic">Designer </span>
            &
            <br />
            <span className="text-iconic">Frontend</span> Developer
          </h1>
          <p className="text-font-light lg:text-xl md:text-md sm:text-xl mb-4 md:mb-2 2xl:w-[600px] lg:w-[500px] md:w-[400px] text-justify">
            Hi, I'm Thu Htet Naing. You can call me Ku Kue, a passionate Graphic
            Designer & Frontend Developer based in the Vietnam. Welcome to
            portfolio world.
          </p>
          <HashLink to="/#portfolio" className="bg-iconic md:text-xl md:px-8 md:py-3 xs:px-6 xs:py-2 xs:text-md xs:mb-10 hover:bg-black duration-100 rounded-md">
            View Portfolio
          </HashLink>
        </div>

        {/* Picture Section */}
        <img
          src={myPic}
          alt="my picture"
          className="2xl:w-160 xl:w-120 lg:w-100 md:w-90 sm:w-120 xs:w-80"
        />
      </Container>
    </section>
  );
};

export default Hello;
