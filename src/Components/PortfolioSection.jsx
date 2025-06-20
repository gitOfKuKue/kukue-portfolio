import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import portfolios from "../JavaScripts/portfolio";
import GraphicDesignCard from "./GraphicDesingCard";
import ContentWritingCard from "./ContentWritingCard";
import FrontendWebDevCard from "./FrontendWebDevCard";
import MethodsContext from "../Context/MethodsContext";
import Pagination from "./Pagination";
import Slider from "./Slider";
import { Slide } from "react-slideshow-image";

const PortfolioSection = () => {
  const {
    selectedCategory,
    portfolioFilter,
    categoryMenus,
    categoryMenuHandler,
  } = useContext(MethodsContext);

  const handlePortfolioFilter = (category) => {
    portfolioFilter(category);
    categoryMenuHandler(category);
  };

  const graphicItems = portfolios.graphicDesign || [];
  const contentItems = portfolios.contentWriting || [];
  const webItems = portfolios.webDevelopment || [];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const graphicItemsPerPage =
    windowWidth >= 1024 ? 2 : windowWidth >= 768 ? 2 : 1;

  const contentItemsPerPage =
    windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;

  const webItemsPerPage = 1; // assuming only 1 is needed even on large screens

  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);

  return (
    <section className="" id="portfolio">
      <Container className="">
        <div className="flex justify-between lg:flex-row xs:flex-col items-center lg:mb-8 xs:mb-2">
          <h1 className="text-iconic md:text-6xl xs:text-4xl font-bold">
            Portfolio
          </h1>

          {/* Menu section */}
          <div className="text-iconic bg-gray-300 p-1 flex lg:justify-between xs:justify-evenly items-center xl:w-180 lg:w-140 xs:w-full lg:mt-0 xs:mt-5 rounded-md">
            {categoryMenus.map((categoryMenu, index) => (
              <button
                key={index}
                className={`cursor-pointer xl:text-xl lg:text-md xs:text-xs sm:py-1 sm:px-4 xs: px-2 hover:text-iconic hover:border hover:border-border rounded-md ${
                  categoryMenu.active &&
                  "text-font bg-button border border-border"
                }`}
                onClick={() => handlePortfolioFilter(categoryMenu.type)}
              >
                <span className="xs:hidden sm:block">{categoryMenu.name}</span>
                <span className="xs:block sm:hidden">
                  {categoryMenu.name === "Graphic Design"
                    ? "GD"
                    : categoryMenu.name === "Content Writing"
                    ? "CW"
                    : categoryMenu.name === "Frontend Web Dev"
                    ? "FWD"
                    : "All"}
                </span>
              </button>
            ))}
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
        <div
          className={`bg-aboutme md:p-5 h-fit xs:p-3 rounded-md flex flex-col justify-start mb-5 ${
            selectedCategory.all || selectedCategory.graphicDesign
              ? "block"
              : "hidden"
          }`}
          id="graphic-design"
        >
          <h1 className="text-font md:text-3xl xs:text-2xl font-bold mb-5">
            Graphic Design ({portfolios.graphicDesign.length} Projects)
          </h1>

          <Slide
            easing="ease"
            autoplay
            indicators={(index) => (
              <div
                key={index}
                className="custom-indicator w-10 h-2 mx-1 rounded-full bg-gray-400 cursor-pointer transition duration-300 hover:bg-iconic"
              />
            )}
            prevArrow={
              <button className="absolute left-0 z-10 px-4 py-2 text-white bg-black/40 hover:bg-black/60 rounded-r-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            }
            nextArrow={
              <button className="absolute right-0 z-10 px-4 py-2 text-white bg-black/40 hover:bg-black/60 rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            }
          >
            {chunkArray(graphicItems, graphicItemsPerPage).map(
              (group, index) => (
                <div
                  key={index}
                  className="grid xs:grid-cols-1 md:grid-cols-2 md:gap-5 xs:gap-1 px-3"
                >
                  {group.map((value) => (
                    <GraphicDesignCard key={value.id} portfolio={value} />
                  ))}
                </div>
              )
            )}
          </Slide>
        </div>

        {/* Content Writing Card Section */}
        <div
          className={`bg-aboutme md:p-5 xs:p-3 rounded-md h-fit flex flex-col justify-start mb-5 ${
            selectedCategory.all || selectedCategory.contentWriting
              ? "block"
              : "hidden"
          }`}
          id="graphic-design"
        >
          <h1 className="text-font md:text-3xl xs:text-2xl font-bold mb-5">
            Content Writing ({portfolios.contentWriting.length} Projects)
          </h1>

          <Slide
            easing="ease"
            autoplay
            indicators={(index) => (
              <div
                key={index}
                className="custom-indicator w-10 h-2 mx-1 rounded-full bg-gray-400 cursor-pointer transition duration-300 hover:bg-iconic"
              />
            )}
            prevArrow={
              <button className="absolute left-0 z-10 px-4 py-2 text-white bg-black/40 hover:bg-black/60 rounded-r-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            }
            nextArrow={
              <button className="absolute right-0 z-10 px-4 py-2 text-white bg-black/40 hover:bg-black/60 rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            }
          >
            {chunkArray(contentItems, contentItemsPerPage).map(
              (group, index) => (
                <div
                  key={index}
                  className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-5 xs:gap-1 px-3"
                >
                  {group.map((value) => (
                    <ContentWritingCard key={value.id} portfolio={value} />
                  ))}
                </div>
              )
            )}
          </Slide>
        </div>

        {/* Frontend Web Development Card Section */}
        <div
          className={`bg-aboutme md:p-5 xs:p-3 rounded-md h-fit flex flex-col justify-start mb-5 ${
            selectedCategory.all || selectedCategory.frontendWebDev
              ? "block"
              : "hidden"
          }`}
          id="graphic-design"
        >
          <h1 className="text-font md:text-3xl xs:text-2xl font-bold mb-5">
            Front-end web development ({portfolios.webDevelopment.length} Projects)
          </h1>

          <Slide
            easing="ease"
            autoplay
            indicators={(index) => (
              <div
                key={index}
                className="custom-indicator w-10 h-2 mx-1 rounded-full bg-gray-400 cursor-pointer transition duration-300 hover:bg-iconic"
              />
            )}
            prevArrow={
              <button className="absolute left-0 z-10 px-4 py-2 text-white bg-black/40 hover:bg-black/60 rounded-r-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            }
            nextArrow={
              <button className="absolute right-0 z-10 px-4 py-2 text-white bg-black/40 hover:bg-black/60 rounded-l-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            }
          >
            {chunkArray(webItems, webItemsPerPage).map((group, index) => (
              <div
                key={index}
                className="grid xs:grid-cols-1 md:gap-5 xs:gap-1 px-3"
              >
                {group.map((value) => (
                  <FrontendWebDevCard key={value.id} portfolio={value} />
                ))}
              </div>
            ))}
          </Slide>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
