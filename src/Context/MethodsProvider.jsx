import React, { Children, useState } from "react";
import MethodsContext from "./MethodsContext";

const MethodsProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [type, setType] = useState("");

  const handlePopUpBox = () => {
    document.querySelector("#contact-me ").style.filter = "blur(0px)";
    document.querySelector("#navigation ").style.filter = "blur(0px)";
    document.querySelector("#footer ").style.filter = "blur(0px)";
    document.querySelector("body ").style.position = "unset";

    setOpen(!isOpen);
  };

  const handleMsg = (msg) => {
    setMsg(msg);
  };

  const handleType = (type) => {
    setType(type);
  };

  // Category Filter

  const [selectedCategory, setSelectedCategory] = useState({
    all: true,
    graphicDesign: false,
    contentWriting: false,
    frontendWebDev: false,
  });

  const portfolioFilter = (selected) => {
    const updated = Object.entries(selectedCategory).reduce((acc, [key]) => {
      acc[key] = key === selected;
      return acc;
    }, {});
    setSelectedCategory(updated);
  };

    const [categoryMenus, setCategoryMenus] = useState([
    {
      name: "All",
      active: true,
      type: "all",
    },
    {
      name: "Graphic Design",
      active: false,
      type: "graphicDesign",
    },
    {
      name: "Content Writing",
      active: false,
      type: "contentWriting",
    },
    {
      name: "Frontend Web Dev ",
      active: false,
      type: "frontendWebDev",
    },
  ]);

  const categoryMenuHandler = (type) => {
    setCategoryMenus(
      categoryMenus.map((menu) => {
        if (menu.type === type) {
          return { ...menu, active: true };
        } else {
          return { ...menu, active: false };
        }
      })
    );
  }

  return (
    <MethodsContext.Provider
      value={{ handlePopUpBox, handleMsg, handleType, isOpen, msg, type, selectedCategory, setSelectedCategory, portfolioFilter, categoryMenus, categoryMenuHandler }}
    >
      {children}
    </MethodsContext.Provider>
  );
};

export default MethodsProvider;
