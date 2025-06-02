import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavMenuBtn = ({menuBtn, className}) => {
  return (
    <HashLink
      to={menuBtn["link"]}
      className={`${className} hover:-translate-y-1 duration-100 text-2xl hover:text-iconic p-1 flex justify-start items-center gap-2`}
    > <FontAwesomeIcon icon={menuBtn.icon} className="text-2xl" />
      {menuBtn["menu"]}
    </HashLink>
  );
};

export default NavMenuBtn;
