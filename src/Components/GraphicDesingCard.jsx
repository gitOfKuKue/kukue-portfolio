import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const GraphicDesignCard = ({ portfolio }) => {
  const id = portfolio.id;
  return (
    <div className="p-3 2xl:min-h-[1060px] xl:min-h-[800px] lg:min-h-[780px] md:min-h-[750px] sm:min-h-[1008px] xs:h-[700px] bg-background flex flex-col justify-start items-start gap-3 text-font rounded-md">
      <div className="2xl:max-h-[800px] lg:max-h-[540px] md:max-h-[470px] sm:max-h-[746px] overflow-hidden">
        <img
          src={`${portfolio.images[0]}`}
          alt="Portfolio Card"
          className="w-full"
        />
      </div> 
      <div className="2xl:min-h-[200px] xl:min-h-[190px] lg:min-h-[200px] md:min-h-[246px] sm:min-h-[206px] flex flex-col items-start justify-between mt-auto">
        <h1 className="2xl:text-2xl font-bold lg:text-xl md:text-md sm:text-xl">
          {portfolio.title}
        </h1>
        <h3 className="text-font-light mb-4 2xl:text-xl lg:text-sm sm:text-md">
          {portfolio.type}
        </h3>
        <p className="line-clamp-3 mb-5 sm:text-md md:text-md text-font-light">
          {portfolio.description}
        </p>
        <HashLink
          to={`/graphic-designs/${id}#graphic-design-page`}
          className="bg-button hover:bg-border hover:text-background border-1 border-border md:py-2 md:px-4 xs:py-2 xs:px-4 sm:text-xl xs:text-sm md:text-md mt-auto md:mx-0 rounded-md"
        >
          More details
        </HashLink>
      </div>
    </div>
  );
};

export default GraphicDesignCard;
