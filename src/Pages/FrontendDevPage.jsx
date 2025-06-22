import React from "react";
import Methods from "../JavaScripts/methods";
import portfolios from "../JavaScripts/portfolio";
import SideBar from "../Components/SideBar";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import Slider from "../Components/Slider";

const FrontendDevPage = () => {
  const { productId } = useParams(); // Taking id
  // const currentFw = portfolios.webDevelopment.projects.find(
  //   (item) => item.id == productId
  // );

  // Get all projects
  const projects = portfolios.webDevelopment.projects;

  // Move clicked project to the top
  const sortedProjects = [
    ...projects.filter((item) => item.id == productId),
    ...projects.filter((item) => item.id != productId),
  ];

  return (
    <>
      <section
        className="my-10 xs:flex xs:flex-col-reverse xs:gap-5"
        id="frontend-web-dev-page"
      >
        {/* Side Bar */}
        {/* <SideBar
          productId={productId}
          portfolio={portfolios.webDevelopment.projects}
          link="frontend-developments"
        /> */}

        <Container className="">
          <Slider>
            {sortedProjects.map((portfolio) => (
              <div
                key={portfolio}
                className={`p-8 grid lg:grid-cols-2 xs:grid-cols-1 overflow-scroll lg:h-[950px] xs:h-[500px] gap-5 bg-aboutme rounded-md`}
              >
                <img
                  src={portfolio.images[0]}
                  alt={portfolio.title}
                  className="w-full mb-5 col-span-2"
                  data-aos="fade-up"
                />

                {/* Description */}
                <div className=" text-font flex flex-col justify-start items-start col-span-2 mb-5">
                  <h1 className="text-3xl font-bold">{portfolio.title}</h1>
                  <p className="text-font-light mb-5">{portfolio.type}</p>
                  <p className="mb-5">{portfolio.description}</p>
                  <a
                    href={portfolio.githublink}
                    download
                    className="lg:py-3 lg:px-4 xs:py-2 xs:px-3 bg-button border-1 border-border text-font lg:text-xl xs:text-sm rounded-md hover:bg-background hover:text-iconic"
                  >
                    Go to GitHub
                  </a>
                </div>
                {portfolio.images.slice(1).map((image, index) => (
                  <div key={index} className="lg:col-span-1 xs:col-span-2">
                    <img
                      src={image}
                      alt={portfolio.title}
                      className="w-full mb-5 border border-font"
                      key={index}
                      id={`pic-${index}`}
                    />
                    <label htmlFor={`pic-${index}`} className="text-font">
                      Pic-{index + 1}
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default FrontendDevPage;
