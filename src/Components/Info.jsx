import React from "react";
import Methods from "../JavaScripts/methods";
import months from "../JavaScripts/months";

const Info = ({ detail }) => {
  console.log(detail);
  const methods = new Methods();
  return (
    <>
      <div className={`text-font ${detail.type == "Address" ? "col-span-2" : "col-span-1"} w-full`}>
        <h1 className="text-2xl font-bold">{detail.type}</h1>
        <p className="text-xl text-font-light">
          {detail.type == "Birthday" ? (
            <>
              {detail.info["birthDay"]}
              <sup>
                {methods.checkingSupercase(detail.info["birthDay"])}
              </sup>{" "}
              {months[detail.info["birthMonth"] - 1]},{" "}
              {detail.info["birthYear"]}
            </>
          ) : (
            detail.info
          )}
        </p>
      </div>
    </>
  );
};

export default Info;
