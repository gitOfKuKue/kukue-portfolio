import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Methods from "../JavaScripts/methods";
import months from "../JavaScripts/months";

const Detail = ({ detail }) => {
  const methods = new Methods();
  let birthday = "";
  return (
    <div className="flex justify-between items-center text-xl gap-3 text-background mt-3">
      <FontAwesomeIcon icon={detail.icon} />
      <p>
        {detail.type == "birthday" ? (
          <>
          {detail.info["birthDay"]}
          <sup>{methods.checkingSupercase(detail.info["birthDay"])}</sup> {months[detail.info["birthMonth"] - 1]}, {detail.info["birthYear"]}
          
          </>
        ) : (
          detail.info
        )}
      </p>
      {/* <p>{detail.info}</p> */}
    </div>
  );
};

export default Detail;
