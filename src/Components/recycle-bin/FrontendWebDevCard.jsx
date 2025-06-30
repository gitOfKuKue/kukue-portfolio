import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const FrontendWebDevCard = ({ portfolio }) => {
  const id = portfolio.id;
  return (
    <div className="p-5 flex flex-col justify-start items-start bg-background text-font rounded-md">
      <div className="mb-5">
        <img
          src={`${portfolio.images[0]}`}
          alt="Portfolio Card"
          className="w-full"
        />
      </div>
      <div className="flex flex-col items-start justify-start mt-auto">
        <h1 className="text-2xl font-bold">{portfolio.title}</h1>
        <h3 className="text-font-light mb-4">{portfolio.type}</h3>
        <p className="line-clamp-3 mb-5 text-font-light">
          {portfolio.description}
        </p>
        <Link
          to={`/frontendWebDev/${id}`}
          className="bg-button  hover:bg-border hover:text-background border-1 border-border py-2 px-4 mt-auto rounded-md"
        >
          More details
        </Link>
      </div>
    </div>
  );
};

export default FrontendWebDevCard;
