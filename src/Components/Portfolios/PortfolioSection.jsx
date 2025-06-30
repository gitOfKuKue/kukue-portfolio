import React, { useContext, useEffect, useState } from "react";
import Container from "../Container";
import portfolios from "../../JavaScripts/portfolio";
import GraphicDesignCard from "../GraphicDesingCard";
import ContentWritingCard from "../ContentWritingCard";
import FrontendWebDevCard from "../FrontendWebDevCard";
import MethodsContext from "../../Context/MethodsContext";
import Pagination from "../Pagination";
import Slider from "../Slider";
import { Slide } from "react-slideshow-image";
import PortfolioContainer3_4_65 from "./PortfolioContainer3_4_65";
import PortfolioContainer3_5_65 from "./PortfolioContainer3_5_65";

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

  const shortNames = {
    graphicDesign: "Graphics",
    contentWriting: "Contents",
    frontendWebDev: "Front-end",
    all: "All",
  };

  return (
    <section className="" id="portfolio">
      <Container className="">
        <div className="flex justify-between lg:flex-row xs:flex-col items-center lg:mb-8 xs:mb-2">
          <h1 className="text-iconic md:text-6xl xs:text-4xl font-bold">
            Portfolio
          </h1>

          {/* Menu section */}
          <div className="text-iconic bg-gray-300 p-1 flex lg:justify-between xs:justify-evenly items-center xl:w-180 lg:w-140 xs:w-fit lg:mt-0 xs:mt-5 rounded-md gap-2">
            {categoryMenus.map((categoryMenu, index) => (
              <button
                key={index}
                className={`cursor-pointer xl:text-xl lg:text-md xs:text-md sm:py-1 sm:px-4 xs:px-4 xs:py-2 hover:text-iconic hover:border hover:border-border rounded-md ${
                  categoryMenu.active &&
                  "text-font bg-button border border-border"
                }`}
                onClick={() => handlePortfolioFilter(categoryMenu.type)}
              >
                <span className="xs:hidden sm:block">{categoryMenu.name}</span>
                <span className="xs:block sm:hidden">
                  {shortNames[categoryMenu.type] || ""}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Versoin 3.4.65 */}
        {/* <PortfolioContainer3_4_65 selectedCategory={selectedCategory} /> */}

        {/* Versoin 3.5.65 */}
        <PortfolioContainer3_5_65 selectedCategory={selectedCategory}/>

      </Container>
    </section>
  );
};

export default PortfolioSection;
