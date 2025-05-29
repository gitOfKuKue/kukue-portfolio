import React from "react";
import portfolios from "../JavaScripts/portfolio";
import { Link } from "react-router-dom";

const SideBar = ({ productId, portfolio, link }) => {
  return (
    // Side Bar
    <aside className="bg-aboutme absolute rounded-md h-[800px] p-5">
      <div className="h-full overflow-scroll">
        {portfolio.map((project) => (
          <Link
            to={`/${link}/${project.id}`}
            key={project.id}
            className="block hover:brightness-80 my-3"
          >
            <img
              key={project.id}
              src={project.images[0]}
              alt={project.title}
              className={`w-50 ${project.id == productId && "brightness-50"}`}
            />
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
