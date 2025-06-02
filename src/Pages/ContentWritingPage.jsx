import React from "react";
import SideBar from "../Components/SideBar";
import Container from "../Components/Container";
import Methods from "../JavaScripts/methods";
import { useParams } from "react-router-dom";
import portfolios from "../JavaScripts/portfolio";

const ContentWritingPage = () => {
  const { productId } = useParams(); // Taking id
  const currentCw = portfolios.contentWriting.find(
    (item) => item.id == productId
  );

  const methods = new Methods();

  return (
    <>
      <section className="my-10 xs:flex xs:flex-col-reverse xs:gap-5 xs:justify-end" id="content-writing-page">
        {/* Side Bar */}
        <SideBar
          productId={productId}
          portfolio={portfolios.contentWriting}
          link="content-writings"
        />

        <Container>
          <div
            className={`grid xl:grid-cols-2 xs:grid-cols-1 xl:p-10 xs:p-3 bg-aboutme rounded-md xs:h-fit`}
          >
            {currentCw.images.map((image, index) => (
              <img
                src={image}
                alt={currentCw.title}
                className="xl:w-120 xs:w-full mb-5"
                key={index}
              />
            ))}

            <div className="row-span-2">
              <h1 className="text-font text-3xl font-bold xl:hidden xs:block">
                {currentCw.title}
              </h1>
              <p className="text-font-light mb-5 xl:hidden xs:block">{currentCw.type}</p>

              <p className="text-justify xl:h-[720px] xl:overflow-scroll text-font text-xl xl:border-0 xs:border-font xs:border-1 xs:p-3 xs:mb-10">
                {currentCw.content.split("\n").map((line, index) => (
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
                {currentCw.title}
              </h1>
              <p className="text-font-light mb-5 xs:hidden xl:block">{currentCw.type}</p>
              <p className="mb-5">{currentCw.description}</p>
              <div className="flex justify-between gap-5 mt-auto">
                <a
                  href={currentCw.pdf}
                  download
                  className="md:py-3 md:px-4 xs:py-1 xs:px-2 xs:text-sm bg-iconic text-font md:text-xl rounded-md hover:bg-background hover:text-iconic"
                >
                  Download PDF
                </a>
                <a
                  href={currentCw.postLink}
                  className="md:py-3 md:px-4 xs:py-1 xs:px-2 xs:text-sm border-iconic border-1 text-iconic md:text-xl rounded-md hover:border-font hover:text-font"
                >
                  See on Facebook
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContentWritingPage;
