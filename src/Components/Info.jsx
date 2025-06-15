import React, { useState } from "react";
import Methods from "../JavaScripts/methods";
import months from "../JavaScripts/months";
import informations from "../JavaScripts/info";

const Info = ({ detail, canEdit }) => {
  const methods = new Methods();

  const [infos, setInfos] = useState(informations.details);
  console.log(infos);

  // Create formatted date string for birthday
  const info = infos.type === "Birthday" 
    ? `${infos.info["birthDay"]}${methods.checkingSupercase(infos.info["birthDay"])} ${months[infos.info["birthMonth"] - 1]}, ${infos.info["birthYear"]}`
    : infos.info;

  const handleInput = (e) => {
    setInfos({
      ...infos,
      info: e.target.value,
    })
    console.log(infos);


  };

  return (
    <>
      <div
        className={`text-font ${
          infos.type === "Address" && "md:col-span-2"
        } w-full xs:col-span-1`}
      >
        <h1 className="text-2xl font-bold">{infos.type}</h1>
        <textarea 
          className="text-xl text-font-light w-full text-wrap resize-none" 
          value={info} 
          disabled={!canEdit} 
          onChange={handleInput}
        />
      </div>
    </>
  );  
};

export default Info;