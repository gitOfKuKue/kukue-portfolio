import { section } from "framer-motion/client";
import React, { useState } from "react";
import Container from "../Components/Container";
import { Link } from "react-router-dom";
import {
  faCircleUser,
  faCode,
  faDoorOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDochub } from "@fortawesome/free-brands-svg-icons";
import VersionNotes from "../Components/DOC/VersionNotes";

const Doc = () => {
  const [menus, setMenus] = useState([
    {
      id: 1,
      icon: faCode,
      menu: "Version",
      isCurrent: false,
    },
    {
      id: 2,
      icon: faCode,
      menu: "Version",
      isCurrent: false,
    },
    {
      id: 3,
      icon: faCode,
      menu: "Version",
      isCurrent: true,
    },
  ]);

  const handleClick = (id) => {
    setMenus((menu) =>
      menu.map((el) =>
        el.id === id ? { ...el, isCurrent: true } : { ...el, isCurrent: false }
      )
    );
  };

  return (
    <section>
      {/* Main Section */}
      <VersionNotes className={`${menus[2].isCurrent ? "block" : "hidden"}`} />
    </section>
  );
};

export default Doc;
