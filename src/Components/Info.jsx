import React from "react";
import Methods from "../JavaScripts/methods";
import months from "../JavaScripts/months";

const Info = ({ detail, canEdit }) => {
  const methods = new Methods();

  // const birthday = detail.type == "Birthday" ? (
  //             <>
  //               {detail.info["birthDay"]}
  //               <sup>
  //                 {methods.checkingSupercase(detail.info["birthDay"])}
  //               </sup>{" "}
  //               {months[detail.info["birthMonth"] - 1]},{" "}
  //               {detail.info["birthYear"]}
  //             </>
  const handleInput = () => {

  }
  return (
    <>
      <div
        className={`text-font ${
          detail.type == "Address" ? "col-span-2" : "col-span-1"
        } w-full`}
      >
        <h1 className="text-2xl font-bold">{detail.type}</h1>
        <input className="text-xl text-font-light w-full" value={detail.info} disabled={!canEdit} onChange={handleInput}/>
      </div>
    </>
  );
};

export default Info;
