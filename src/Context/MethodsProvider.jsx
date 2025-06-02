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

  return (
    <MethodsContext.Provider value={{ handlePopUpBox, handleMsg, handleType, isOpen, msg, type }}>
      {children}
    </MethodsContext.Provider>
  );
};

export default MethodsProvider;
