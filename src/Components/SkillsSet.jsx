import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { div, img } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";

const SkillsSet = ({ itemKey, collections }) => {
    const isSoftSkills = itemKey === "SoftSkills";
  return collections.items.map((item) => (
    <div
      key={item.id}
      className={`bg-aboutme border border-gray-300 p-8 rounded-lg flex flex-col justify-between shadow-lg ${isSoftSkills ? "h-fit" : "h-75"} hover:border-0 hover:bg-white`}
      data-aos="fade-up"
    >
      <div>
        <div className="h-15">
          <img src={item.icon} alt={item.name} className="w-15" />
        </div>
        <h3 className="text-iconic font-bold text-2xl my-2">{item.name}</h3>
        <p className="line-clamp-3">{item.description}</p>
      </div>
      {isSoftSkills || (
        <Link className="text-iconic text-lg font-bold flex items-center justify-start gap-2">
          Learn more <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      )}
    </div>
  ));
};

export default SkillsSet;
