import React from "react";
import months from "../JavaScripts/months";
import Methods from "../JavaScripts/methods";

const Education = ({
  education: {
    schoolId,
    schoolName,
    startMonth,
    startYear,
    endMonth,
    endYear,
    major,
  },
}) => {
  const methods = new Methods();
  const date = new Date();
  return (
    <>
      <div className="border-b-2 border-b-iconic py-3">
        <p className="text-font-light text-sm">
          {months[startMonth - 1]}, {startYear} -
          {methods.checkingToday(endMonth, endYear) ? (
            "Present"
          ) : (
            <>
              {months[endMonth - 1]}, {endYear}
            </>
          )}
        </p>
        <h1 className="text-font text-xl">{schoolName}</h1>
        <p className="text-font-light mb-2">{major}</p>
      </div>
    </>
  );
};

export default Education;
