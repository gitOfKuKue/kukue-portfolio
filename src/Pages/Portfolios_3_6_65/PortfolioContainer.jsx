import React, { useContext, useLayoutEffect } from "react";
import portfolios from "../../JavaScripts/portfolio";
import { motion } from "framer-motion";
import Container from "../../Components/Container";
import MethodsContext from "../../Context/MethodsContext";
import { useLocation } from "react-router-dom";

const PortfolioContainer = () => {
  const {
    selectedCategory,
    portfolioFilter,
    categoryMenus,
    categoryMenuHandler,
  } = useContext(MethodsContext);

  const location = useLocation();

  const handlePortfolioFilter = (category) => {
    portfolioFilter(category);
    categoryMenuHandler(category);
  };

  // Smooth scroll to section on URL param
  useLayoutEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");

    if (category) {
      handlePortfolioFilter(category);

      const sectionMap = {
        graphicDesign: "graphic-design",
        contentWriting: "content-writing",
        frontendWebDev: "frontend-web-development",
      };

      const sectionId = sectionMap[category];

      if (sectionId) {
        setTimeout(() => {
          requestAnimationFrame(() => {
            const section = document.getElementById(sectionId);
            if (section) {
              section.scrollIntoView({ behavior: "smooth", block: "start" });
              window.history.replaceState({}, document.title, location.pathname);
            }
          });
        }, 600);
      }
    }
  }, [location]);

  const gdProjs = portfolios.graphicDesign.projects;
  const cwProjs = portfolios.contentWriting.projects;
  const wdProjs = portfolios.webDevelopment.projects;

  return (
    <section className="py-10">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Buttons */}
        <div className="sticky top-4 z-10 backdrop-blur bg-white/80 p-3 rounded-xl shadow-md flex flex-wrap justify-center gap-3 mb-8">
          {categoryMenus.map((categoryMenu, index) => (
            <button
              key={index}
              className={`text-sm sm:text-base px-4 py-2 rounded-full transition-all duration-300 border font-medium ${
                categoryMenu.active
                  ? "bg-button text-font border-border"
                  : "text-font border border-gray-300 hover:bg-gray-200"
              }`}
              onClick={() => handlePortfolioFilter(categoryMenu.type)}
            >
              {categoryMenu.name}
            </button>
          ))}
        </div>

        {/* Portfolio Sections */}
        <main className="space-y-20">
          {[
            {
              title: "Graphic Design",
              id: "graphic-design",
              type: "graphicDesign",
              projects: gdProjs,
            },
            {
              title: "Content Writing",
              id: "content-writing",
              type: "contentWriting",
              projects: cwProjs,
            },
            {
              title: "Front-end Web Development",
              id: "frontend-web-development",
              type: "frontendWebDev",
              projects: wdProjs,
            },
          ].map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={`${
                selectedCategory.all || selectedCategory[section.type]
                  ? "block"
                  : "hidden"
              }`}
            >
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-iconic">
                  {section.title}
                </h2>
                <p className="text-font-light text-sm sm:text-base">
                  ({section.projects.length} Projects)
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.projects.map((proj) => (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden"
                  >
                    <div className="aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                      <img
                        src={proj.images[0]}
                        alt={proj.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                          {proj.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {proj.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3 mt-4">
                        <button className="bg-button text-font px-4 py-2 text-sm rounded-md border border-border hover:bg-border transition">
                          View Project
                        </button>
                        {section.type === "frontendWebDev" && (
                          <button className="bg-gray-200 text-font px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-300 transition">
                            Source Code
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </Container>
    </section>
  );
};

export default PortfolioContainer;
