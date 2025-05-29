import React from "react";
import Container from "./Container";
import GraphicDesignCard from "./Graphic-Design/GraphicDesingCard";
import ContentWritingCard from "./Content-Writing/ContentWritingCard";
import portfolios from "../JavaScripts/portfolio";
import FrontendWebDevCard from "./Frontend-Web/FrontendWebDevCard";

const PortfolioSection = () => {
  return (
    <section className="" id="portfolio">
      <Container className="">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-iconic md:text-6xl xs:text-4xl font-bold">Portfolio</h1>

          {/* Menu section */}
          <div className="text-font bg-dark py-2 px-8 lg:flex justify-between items-center gap-5 rounded-md xs:hidden">
            <button className="cursor-pointer text-xl text-font hover:text-iconic hover:border-b-iconic hover:border-b-2">
              All
            </button>{" "}
            |
            <button className="cursor-pointer text-xl text-font hover:text-iconic hover:border-b-iconic hover:border-b-2">
              Graphic Design
            </button>{" "}
            |
            <button className="cursor-pointer text-xl text-font hover:text-iconic hover:border-b-iconic hover:border-b-2">
              Content
            </button>{" "}
            |
            <button className="cursor-pointer text-xl text-font hover:text-iconic hover:border-b-iconic hover:border-b-2">
              Frontend Design
            </button>
          </div>

          {/* Left, Right arrows */}
          {/* <div className="flex justify-between items-center gap-3">
            <button className="hover:bg-aboutme bg-dark h-full px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-font"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button className="hover:bg-aboutme bg-dark h-full px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-font"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div> */}
        </div>

        {/* Graphic Design Card Section */}
        <div className="mb-8">
          <h1 className="text-2xl text-font font-bold mb-3">Graphic Design</h1>
          <div className="grid grid-cols-2 md:gap-5 xs:gap-1">
            {Object.entries(portfolios).map(
              ([key, values]) => key === "graphicDesign" && (
                values.map((value) => (
                  <GraphicDesignCard key={value.id} portfolio={value} />
                ))
              )
            )}
          </div>
        </div>

        {/* Content Writing Card Section */}
        <div className="mb-8">
          <h1 className="text-2xl text-font font-bold mb-3">Content Writing</h1>
          <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-1">
            {Object.entries(portfolios).map(
              ([key, values]) => key === "contentWriting" && (
                values.map((value) => (
                  <ContentWritingCard key={value.id} portfolio={value} />
                ))
              )
            )}
          </div>
        </div>

        {/* Frontend Web Development Card Section */}
        <div className="mb-8">
          <h1 className="text-2xl text-font font-bold mb-3">Frontend Web Development</h1>
          <div className="grid grid-cols-1 gap-5">
            {Object.entries(portfolios).map(
              ([key, values]) => key === "webDevelopment" && (
                values.map((value) => (
                  <FrontendWebDevCard key={value.id} portfolio={value} />
                ))
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
