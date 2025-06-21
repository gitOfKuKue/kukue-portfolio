import React from "react";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";
import portfolios from "../JavaScripts/portfolio";
import Methods from "../JavaScripts/methods";
import SideBar from "../Components/SideBar";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css"; // make sure to include this

const GraphicDesignPage = () => {
  const { productId } = useParams(); // get ID from URL

    // const currentGd = portfolios.graphicDesign.projects.find(
  //   (item) => item.id == productId
  // );


  // Get all projects
  const projects = portfolios.graphicDesign.projects;

  // Move clicked project to the top
  const sortedProjects = [
    ...projects.filter((item) => item.id == productId),
    ...projects.filter((item) => item.id != productId),
  ];
  return (
    <>
      <section
        className="my-10 xs:flex xs:flex-col-reverse xs:gap-5"
        id="graphic-design-page"
      >
        {/* Sidebar */}
        {/* <SideBar
          productId={productId}
          portfolio={projects}
          link="graphic-designs"
        /> */}

        <Container className="">
          <Slide
            easing="ease"
            autoplay="false"
            indicators
            prevArrow={
              <button className="bg-button border border-border py-10 text-font">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="xs:size-6 lg:size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            }
            nextArrow={
              <button className="bg-button border border-border py-10 text-font">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="xs:size-6 lg:size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            }
          >
            {sortedProjects.map((portfolio) => (
              <div
                key={portfolio.id}
                className="h-[872px] grid lg:grid-cols-2 xs:grid-cols-1 md:p-10 xs:p-5 bg-aboutme rounded-md gap-5"
              >
                {/* Images */}
                {portfolio.images.map((image, index) => (
                  <img
                    src={image}
                    alt={portfolio.title}
                    className="lg:h-150 xs:h-[546px] mb-5 mx-auto"
                    key={index}
                    data-aos="fade-up"
                  />
                ))}

                {/* Description */}
                <div className="text-font">
                  <h1 className="text-3xl font-bold">{portfolio.title}</h1>
                  <p className="text-font-light mb-5">{portfolio.type}</p>
                  <p>{portfolio.description}</p>
                </div>
              </div>
            ))}
          </Slide>
        </Container>
      </section>
    </>
  );
};

export default GraphicDesignPage;
