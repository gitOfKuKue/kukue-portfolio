import React from "react";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";
import portfolios from "../JavaScripts/portfolio";
import Methods from "../JavaScripts/methods";
import { Link } from "react-router-dom";
import SideBar from "../Components/SideBar";

const GraphicDesignPage = () => {
  const { productId } = useParams(); // Taking id
  const currentGD = portfolios.graphicDesign.find((item) => item.id == productId);

  const methods = new Methods();

  return (
    <>
      <section className="my-10">
        {/* Side Bar */}
        <SideBar productId={productId} portfolio={portfolios.graphicDesign} link="graphic-designs"/>

        <Container>
          <div className={`grid grid-cols-2 p-10 bg-aboutme rounded-md h-[800px]`}>
            {currentGD.images.map((image, index) => (
              <img
              src={image}
              alt={currentGD.title}
              className="h-150 mb-5"
              key={index}
            />
            ))}
            {/* Description */}
            <div className=" text-font">
              <h1 className="text-3xl font-bold">{currentGD.title}</h1>
              <p className="text-font-light mb-5">{currentGD.type}</p>
              <p className="">{currentGD.description}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default GraphicDesignPage;
