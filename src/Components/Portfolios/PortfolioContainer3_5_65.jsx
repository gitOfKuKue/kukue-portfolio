import React from "react";
import portfolios from "../../JavaScripts/portfolio";
import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

const PortfolioContainer3_5_65 = ({selectedCategory}) => {
  const gdProjs = portfolios.graphicDesign.projects;
  const cwProjs = portfolios.contentWriting.projects;
  const wdProjs = portfolios.webDevelopment.projects;

  const handleSelectedCategory = () => {

  }
  return (
    <div>
      {/* Graphic Designs Section */}
      <div
        className={`mb-16 ${
          selectedCategory.all || selectedCategory.graphicDesign
            ? "block"
            : "hidden"
        }`}
        id="graphic-design"
      >
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Graphic Designs</h1>
            <h1 className="text-font-light">({gdProjs.length} Projects)</h1>
          </div>
          <Link
            to="/portfolio-container?cagtegory=graphicDesign"
            className="text-sm bg-button border border-border px-6 py-2 rounded-md hover:bg-border hover:text-aboutme transition"
            onClick={() => handleSelectedCategory("graphic-design")}
          >
            See More
          </Link>
        </div>

        {/* Project Cards */}
        <div className="space-y-6">
          {gdProjs
            .slice(gdProjs.length - 3)
            .reverse()
            .map((proj) => (
              <div
                key={proj.id}
                className="flex flex-col md:flex-row gap-5 bg-aboutme p-5 rounded-xl shadow-md"
              >
                {/* Image Section */}
                <div className="w-full md:w-1/3 h-64 overflow-hidden rounded-lg bg-iconic">
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-xl font-semibold text-font mb-2">
                      {proj.title}
                    </h2>
                    <p className="text-sm text-font-light mb-4">
                      {proj.description}
                    </p>
                  </div>
                  <Link
                    to={`/graphic-designs/${proj.id}`}
                    className="self-start text-sm bg-button border border-border px-5 py-2 rounded-md hover:bg-border hover:text-aboutme transition"
                  >
                    Check
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Content Writing Section */}
      <div className={`mb-16 ${
          selectedCategory.all || selectedCategory.contentWriting
            ? "block"
            : "hidden"
        }`} id="content-writing">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Content Writing</h1>
            <h1 className="text-font-light">({cwProjs.length} Projects)</h1>
          </div>
          <Link
            to="/portfolio-container?category=contentWriting"
            className="text-sm bg-button border border-border px-6 py-2 rounded-md hover:bg-border hover:text-aboutme transition"
          >
            See More
          </Link>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {cwProjs
            .slice(cwProjs.length - 3)
            .reverse()
            .map((proj) => (
              <div
                key={proj.id}
                className="flex flex-col md:flex-row gap-5 bg-aboutme rounded-xl p-5 shadow-md"
              >
                {/* Image */}
                <div className="w-full md:w-1/4 aspect-video overflow-hidden rounded-md bg-iconic flex items-center justify-center">
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-xl font-semibold text-font mb-2">
                      {proj.title}
                    </h2>
                    <p className="text-sm text-font-light mb-4">
                      {proj.description}
                    </p>
                  </div>
                  <Link
                    to={`/content-writings/${proj.id}`}
                    className="self-start text-sm bg-button border border-border px-5 py-2 rounded-md hover:bg-border hover:text-aboutme transition"
                  >
                    Check
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Front-end Web Dev Section */}
      <div className={`mb-16 ${
          selectedCategory.all || selectedCategory.frontendWebDev
            ? "block"
            : "hidden"
        }`} id="frontend-web-development">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Front-end Web Development</h1>
            <h1 className="text-font-light">({wdProjs.length} Projects)</h1>
          </div>
          <Link
            to="/portfolio-container?cagtegory=frontendWebDev"
            className="text-sm bg-button border border-border px-6 py-2 rounded-md hover:bg-border hover:text-aboutme transition"
          >
            See More
          </Link>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {wdProjs
            .slice(wdProjs.length - 3)
            .reverse()
            .map((proj) => (
              <div
                key={proj.id}
                className="flex flex-col md:flex-row gap-5 bg-aboutme rounded-xl p-5 shadow-md"
              >
                {/* Image */}
                <div className="w-full md:w-1/4 aspect-video overflow-hidden rounded-md bg-iconic flex items-center justify-center">
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between w-full">
                  <div>
                    <h2 className="text-xl font-semibold text-font mb-2">
                      {proj.title}
                    </h2>
                    <p className="text-sm text-font-light mb-4">
                      {proj.description}
                    </p>
                  </div>
                  <Link
                    to={`/frontend-developments/${proj.id}`}
                    className="self-start text-sm bg-button border border-border px-5 py-2 rounded-md hover:bg-border hover:text-aboutme transition"
                  >
                    Check
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioContainer3_5_65;
