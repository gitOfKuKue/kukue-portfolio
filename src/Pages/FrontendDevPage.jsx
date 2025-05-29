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
      <section className="my-10">
        {/* Side Bar */}
        <SideBar
          productId={productId}
          portfolio={portfolios.webDevelopment}
          link="frontend-developments"
        />

        <Container className="h-[800px] p-10 bg-aboutme rounded-md ">
          <div className={`grid grid-cols-2 overflow-scroll h-[700px] gap-5`}>
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
                className="py-3 px-4 bg-iconic text-font text-xl rounded-md hover:bg-background hover:text-iconic"
              >
                Go to GitHub
              </a>
            </div>
            {currentFd.images.slice(1).map((image, index) => (
              <div>
                <img
                  src={image}
                  alt={currentFd.title}
                  className="w-full mb-5 col-span-1 border border-font"
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
