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
      <section className="my-10">
        {/* Side Bar */}
        <SideBar
          productId={productId}
          portfolio={portfolios.contentWriting}
          link="content-writings"
        />

        <Container>
          <div
            className={`grid grid-cols-2 p-10 bg-aboutme rounded-md h-[800px]`}
          >
            {currentCw.images.map((image, index) => (
              <img
                src={image}
                alt={currentCw.title}
                className="w-120 mb-5"
                key={index}
              />
            ))}
            <p className="h-full overflow-scroll row-span-2 text-font text-xl">
              {currentCw.content.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            {/* Description */}
            <div className=" text-font flex flex-col justify-start items-start">
              <h1 className="text-3xl font-bold">{currentCw.title}</h1>
              <p className="text-font-light mb-5">{currentCw.type}</p>
              <p className="">{currentCw.description}</p>
              <div className="flex justify-between gap-5 mt-auto">
                <a
                  href={currentCw.pdf}
                  download
                  className="py-3 px-4 bg-iconic text-font text-xl rounded-md hover:bg-background hover:text-iconic"
                >
                  Download PDF
                </a>
                <a
                  href={currentCw.postLink}
                  className="py-3 px-4 border-iconic border-1 text-iconic text-xl rounded-md hover:border-font hover:text-font"
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
