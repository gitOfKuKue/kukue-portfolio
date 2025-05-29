import React from "react";
import Methods from "../JavaScripts/methods";
import portfolios from "../JavaScripts/portfolio";
import SideBar from "../Components/SideBar";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";

const FrontendDevPage = () => {
  const { productId } = useParams(); // Taking id
  const currentFd = portfolios.webDevelopment.find(
    (item) => item.id == productId
  );

  const methods = new Methods();

  return (
    <>
      <section className="my-10 xs:flex xs:flex-col-reverse xs:gap-5">
        {/* Side Bar */}
        <SideBar
          productId={productId}
          portfolio={portfolios.webDevelopment}
          link="frontend-developments"
        />

        <Container className="lg:h-[800px] xs:h-fit lg:p-10 xs:p-3 bg-aboutme rounded-md ">
          <div className={`grid lg:grid-cols-2 xs:grid-cols-1 overflow-scroll lg:h-[700px] xs:h-fit gap-5`}>
            <img
              src={currentFd.images[0]}
              alt={currentFd.title}
              className="w-full mb-5 col-span-2"
            />

            {/* Description */}
            <div className=" text-font flex flex-col justify-start items-start col-span-2 mb-5">
              <h1 className="text-3xl font-bold">{currentFd.title}</h1>
              <p className="text-font-light mb-5">{currentFd.type}</p>
              <p className="mb-5">{currentFd.description}</p>
              <a
                href={currentFd.githublink}
                download
                className="lg:py-3 lg:px-4 xs:py-1 xs:px-2 bg-iconic text-font lg:text-xl xs:text-sm rounded-md hover:bg-background hover:text-iconic"
              >
                Go to GitHub
              </a>
            </div>
            {currentFd.images.slice(1).map((image, index) => (
              <div className="lg:col-span-1 xs:col-span-2">
                <img
                  src={image}
                  alt={currentFd.title}
                  className="w-full mb-5 border border-font"
                  key={index}
                  id={`pic-${index}`}
                />
                <label htmlFor={`pic-${index}`} className="text-font">Pic-{index + 1}</label>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default FrontendDevPage;
