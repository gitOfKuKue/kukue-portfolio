import React, { useContext, useState } from "react";
import Container from "./Container";
import portfolios from "../JavaScripts/portfolio";
import GraphicDesignCard from "./GraphicDesingCard";
import ContentWritingCard from "./ContentWritingCard";
import FrontendWebDevCard from "./FrontendWebDevCard";
import MethodsContext from "../Context/MethodsContext";

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

        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
              <li className="nav-item">
                <a className="nav-link active" aria-current="true" href="#">
                  Active
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>

        {/* Graphic Design Card Section */}
        <div
          className={`mb-8 ${
            selectedCategory.all == true ||
            selectedCategory.graphicDesign == true
              ? "block"
              : "hidden"
          }`}
          id="graphic-design"
        >
          <h1 className="text-2xl text-font font-bold mb-3">Graphic Design</h1>
          <div className="grid grid-cols-2 md:gap-5 xs:gap-1">
            {Object.entries(portfolios).map(
              ([key, values]) =>
                key === "graphicDesign" &&
                values.map((value) => (
                  <GraphicDesignCard key={value.id} portfolio={value} />
                ))
            )}
          </div>
        </div>

        {/* Content Writing Card Section */}
        <div
          className={`mb-8 ${
            selectedCategory.all == true ||
            selectedCategory.contentWriting == true
              ? "block"
              : "hidden"
          }`}
          id="content-writing"
        >
          <h1 className="text-2xl text-font font-bold mb-3">Content Writing</h1>
          <div className="grid md:grid-cols-3 gap-5 sm:grid-cols-1">
            {Object.entries(portfolios).map(
              ([key, values]) =>
                key === "contentWriting" &&
                values.map((value) => (
                  <ContentWritingCard key={value.id} portfolio={value} />
                ))
            )}
          </div>
        </div>

        {/* Frontend Web Development Card Section */}
        <div
          className={`mb-8 ${
            selectedCategory.all == true ||
            selectedCategory.frontendWebDev == true
              ? "block"
              : "hidden"
          }`}
          id="frontend-web-development"
        >
          <h1 className="text-2xl text-font font-bold mb-3">
            Frontend Web Development
          </h1>
          <div className="grid grid-cols-1 gap-5">
            {Object.entries(portfolios).map(
              ([key, values]) =>
                key === "webDevelopment" &&
                values.map((value) => (
                  <FrontendWebDevCard key={value.id} portfolio={value} />
                ))
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PortfolioSection;
