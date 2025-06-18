import React from "react";
import portfolios from "../JavaScripts/portfolio";
import { Link } from "react-router-dom";

const SideBar = ({ productId, portfolio, link }) => {
  return (
    // Side Bar
    <aside className="bg-aboutme 2xl:absolute rounded-md 2xl:h-[800px] xs:h-fit p-5 2xl:w-fit xs:w-[85%] xs:mx-auto">
      <div className="2xl:h-full xs:h-fit overflow-scroll 2xl:block xs:flex xs:gap-5 xs:items-center">
        {portfolio.map((project) => (
          <Link
            to={`/${link}/${project.id}/#navigation`}
            key={project.id}
            className="block hover:brightness-80 my-3"
          >
            <img
              key={project.id}
              src={project.images[0]}
              alt={project.title}
              className={`w-30 ${project.id == productId && "brightness-50"}`}
            />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
