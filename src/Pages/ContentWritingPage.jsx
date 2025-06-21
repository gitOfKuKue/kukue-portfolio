import React from "react";
import SideBar from "../Components/SideBar";
import Container from "../Components/Container";
import Methods from "../JavaScripts/methods";
import { useParams } from "react-router-dom";
import portfolios from "../JavaScripts/portfolio";
import { Slide } from "react-slideshow-image";

const ContentWritingPage = () => {
  const { productId } = useParams(); // Taking id
  // const currentCw = portfolios.contentWriting.projects.find(
  //   (item) => item.id == productId
  // );

  // Get all projects
  const projects = portfolios.contentWriting.projects;

  // Move clicked project to the top
  const sortedProjects = [
    ...projects.filter((item) => item.id == productId),
    ...projects.filter((item) => item.id != productId),
  ];

  return (
    <>
      <section
        className="my-10 xs:flex xs:flex-col-reverse xs:gap-5 xs:justify-end"
        id="content-writing-page"
      >
        {/* Side Bar */}
        {/* <SideBar
          productId={productId}
          portfolio={portfolios.contentWriting.projects}
          link="content-writings"
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
                key={portfolio}
                className={`grid xl:grid-cols-2 xs:grid-cols-1 xl:p-10 xs:p-3 bg-aboutme rounded-md xs:h-fit`}
              >
                {portfolio.images.map((image, index) => (
                  <img
                    src={image}
                    alt={portfolio.title}
                    className="xl:w-120 xs:w-full mb-5"
                    key={index}
                    data-aos="fade-up"
                  />
                ))}

                <div className="row-span-2">
                  <h1 className="text-font text-3xl font-bold xl:hidden xs:block">
                    {portfolio.title}
                  </h1>
                  <p className="text-font-light mb-5 xl:hidden xs:block">
                    {portfolio.type}
                  </p>

                  <p
                    className="text-justify xl:h-[750px] xl:overflow-y-scroll text-font text-xl xl:border-0 xs:border-font xs:border-1 xs:p-3 xs:mb-10 text-wrap"
                    data-aos="fade-up"
                  >
                    {portfolio.content.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>

                {/* Description */}
                <div className=" text-font flex flex-col justify-start items-start">
                  <h1 className="text-3xl font-bold xs:hidden xl:block">
                    {portfolio.title}
                  </h1>
                  <p className="text-font-light mb-5 xs:hidden xl:block">
                    {portfolio.type}
                  </p>
                  <p className="mb-5">{portfolio.description}</p>
                  <div className="flex justify-between gap-5 mt-auto">
                    <a
                      href={portfolio.pdf}
                      download
                      className="md:py-3 md:px-4 xs:py-1 xs:px-2 xs:text-sm bg-button border-1 border-border text-font md:text-xl rounded-md hover:bg-background hover:text-iconic"
                    >
                      Download PDF
                    </a>
                    <a
                      href={portfolio.postLink}
                      className="md:py-3 md:px-4 xs:py-2 xs:px-3 xs:text-sm border-border border-1 text-border md:text-xl rounded-md hover:bg-button hover:text-font"
                    >
                      See on Facebook
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slide>
        </Container>
      </section>
    </>
  );
};

export default ContentWritingPage;
