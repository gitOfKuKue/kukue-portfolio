import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import portfolios from "../JavaScripts/portfolio";
import GraphicDesignCard from "./GraphicDesingCard";
import ContentWritingCard from "./ContentWritingCard";
import FrontendWebDevCard from "./FrontendWebDevCard";
import MethodsContext from "../Context/MethodsContext";
import Pagination from "./Pagination";

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

  const [currentPage, setCurrentPage] = useState(1);
  const [graphicPage, setGraphicPage] = useState(1);
  const [contentPage, setContentPage] = useState(1);
  const [webPage, setWebPage] = useState(1);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const graphicItemsPerPage =
    windowWidth >= 1024 ? 4 : windowWidth >= 768 ? 2 : 1;

  const contentItemsPerPage =
    windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;

  const webItemsPerPage = 1; // assuming only 1 is needed even on large screens

  return (
    <section className="" id="portfolio">
      <Container className="">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-iconic md:text-6xl xs:text-4xl font-bold">
            Portfolio
          </h1>

          {/* Menu section */}
          <div className="text-iconic bg-gray-300 p-1 lg:flex justify-between items-center h-12 w-180 rounded-md xs:hidden">
            {categoryMenus.map((categoryMenu, index) => (
              <button
                key={index}
                className={`cursor-pointer text-xl py-1 px-4 hover:text-iconic hover:border hover:border-border rounded-md ${
                  categoryMenu.active &&
                  "text-font bg-button border border-border"
                }`}
                onClick={() => handlePortfolioFilter(categoryMenu.type)}
              >
                {categoryMenu.name}
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
          className={`bg-aboutme md:p-5 xs:p-3 rounded-md xs:h-[850px] md:h-[800px] flex flex-col justify-start mb-5 ${
            selectedCategory.all == true ||
            selectedCategory.graphicDesign == true
              ? "block"
              : "hidden"
          }`} 
          id="graphic-design"
        >
          <h1 className="text-font text-3xl font-bold mb-5">Graphic Design</h1>
          <div className="grid xs:grid-cols-1 md:grid-cols-2 md:gap-5 xs:gap-1">
            {graphicItems
              .slice(
                (graphicPage - 1) * graphicItemsPerPage,
                graphicPage * graphicItemsPerPage
              )
              .map((value) => (
                <GraphicDesignCard key={value.id} portfolio={value} />
              ))}
          </div>
          <Pagination
            className="mt-auto rounded-md"
            currentPage={graphicPage}
            setCurrentPage={setGraphicPage}
            itemsPerPage={graphicItemsPerPage}
            totalItems={graphicItems.length}
          />
        </div>

        {/* Content Writing Card Section */}
        <div
          className={`bg-aboutme p-5 rounded-md xs:h-fit md:h-[850px] flex flex-col justify-start mb-5 ${
            selectedCategory.all == true ||
            selectedCategory.contentWriting == true
              ? "block"
              : "hidden"
          }`}
          id="content-writing"
        >
          <h1 className="text-font text-3xl font-bold mb-5">Content writing</h1>
          <div className="grid xs:grid-cols-1 md:grid-cols-3 md:gap-5 xs:gap-1">
            {contentItems
              .slice(
                (contentPage - 1) * contentItemsPerPage,
                contentPage * contentItemsPerPage
              )
              .map((value) => (
                <ContentWritingCard key={value.id} portfolio={value} />
              ))}
          </div>
          <Pagination
            className="mt-auto rounded-md"
            currentPage={contentPage}
            setCurrentPage={setContentPage}
            itemsPerPage={contentItemsPerPage}
            totalItems={contentItems.length}
          />
        </div>

        {/* Frontend Web Development Card Section */}
        <div
          className={`bg-aboutme p-5 rounded-md h-[1025px] flex flex-col justify-start mb-5 ${
            selectedCategory.all == true ||
            selectedCategory.frontendWEbDev == true
              ? "block"
              : "hidden"
          }`}
          id="frontend-web-development"
        >
          <h1 className="text-font text-3xl font-bold mb-5">
            Front-end web development
          </h1>
          <div className="grid grid-cols-1 md:gap-5 xs:gap-1">
            {webItems
              .slice((webPage - 1) * webItemsPerPage, webPage * webItemsPerPage)
              .map((value) => (
                <FrontendWebDevCard key={value.id} portfolio={value} />
              ))}
          </div>
          <Pagination
            className="mt-auto rounded-md"
            currentPage={webPage}
            setCurrentPage={setWebPage}
            itemsPerPage={webItemsPerPage}
            totalItems={webItems.length}
          />
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
