import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavMenuBtn = ({menuBtn, className}) => {
  return (
    <HashLink
      to={menuBtn["link"]}
      className={`${className} hover:-translate-y-1 duration-100 xl:text-2xl lg:text-xl hover:text-iconic xl:px-4 xl:py-3 lg:px-2 flex justify-start items-center xl:gap-2 lg:gap-1 xs:gap-3`}
    > <FontAwesomeIcon icon={menuBtn.icon} className="xl:text-2xl lg:text-xl" />
      {menuBtn["menu"]}
    </HashLink>
  );
};

export default NavMenuBtn;
