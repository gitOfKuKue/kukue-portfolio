import React, { useEffect, useState } from "react";
import portfolios from "../../JavaScripts/portfolio";
import { Slide } from "react-slideshow-image";
import GraphicDesignCard from "../GraphicDesingCard";
import ContentWritingCard from "../ContentWritingCard";
import FrontendWebDevCard from "../FrontendWebDevCard";
import Slider from "../Slider";

const PortfolioContainer3_4_65 = ({ selectedCategory }) => {
  const graphicItems = portfolios.graphicDesign.projects || [];
  const contentItems = portfolios.contentWriting.projects || [];
  const webItems = portfolios.webDevelopment.projects || [];

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
    <>
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
          Graphic Design ({portfolios.graphicDesign.projects.length} Projects)
        </h1>

        <Slider>
          {chunkArray(graphicItems, graphicItemsPerPage).map((group, index) => (
            <div
              key={index}
              className="grid xs:grid-cols-1 md:grid-cols-2 md:gap-5 xs:gap-1 px-3"
            >
              {group.map((value) => (
                <GraphicDesignCard key={value.id} portfolio={value} />
              ))}
            </div>
          ))}
        </Slider>
      </div>

      {/* Content Writing Card Section */}
      <div
        className={`bg-aboutme md:p-5 xs:p-3 rounded-md h-fit flex flex-col justify-start mb-5 ${
          selectedCategory.all || selectedCategory.contentWriting
            ? "block"
            : "hidden"
        }`}
        id="content-writing"
      >
        <h1 className="text-font md:text-3xl xs:text-2xl font-bold mb-5">
          Content Writing ({portfolios.contentWriting.projects.length} Projects)
        </h1>
        <Slider>
          {chunkArray(contentItems, contentItemsPerPage).map((group, index) => (
            <div
              key={index}
              className="grid xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-5 xs:gap-1 px-3"
            >
              {group.map((value) => (
                <ContentWritingCard key={value.id} portfolio={value} />
              ))}
            </div>
          ))}
        </Slider>
      </div>

      {/* Frontend Web Development Card Section */}
      <div
        className={`bg-aboutme md:p-5 xs:p-3 rounded-md h-fit flex flex-col justify-start mb-5 ${
          selectedCategory.all || selectedCategory.frontendWebDev
            ? "block"
            : "hidden"
        }`}
        id="frontend-web-development"
      >
        <h1 className="text-font md:text-3xl xs:text-2xl font-bold mb-5">
          Front-end web development ({portfolios.webDevelopment.projects.length}{" "}
          Projects)
        </h1>
        <Slider>
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
        </Slider>
      </div>
    </>
  );
};

export default PortfolioContainer3_4_65;
