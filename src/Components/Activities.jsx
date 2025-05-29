import React, { act } from "react";
import months from "../JavaScripts/months";
import checkingSupercase from "../JavaScripts/methods";
import Methods from "../JavaScripts/methods";

const Activities = ({
  activity: {
    activityId,
    activityName,
    position,
    description,
    startDay,
    startMonth,
    startYear,
    endDay,
    endMonth,
    endYear,
  },
}) => {
  const methods = new Methods();

  return (
    <>
      <div className="border-b-2 border-b-iconic py-3">
        <p className="text-font-light text-sm">
          {startDay}
          <sup>{methods.checkingSupercase(startDay)}</sup>{" "}
          {months[startMonth - 1]}, {startYear} -{" "}
          {methods.checkingToday(endMonth, endYear) ? (
            "Present"
          ) : (
            <>
              {endDay}
              <sup>{methods.checkingSupercase(endDay)}</sup>{" "}
              {months[endMonth - 1]}, {endYear}
            </>
          )}
        </p>

        <h1 className="text-font text-xl">{activityName}</h1>
        <p className="text-font-light mb-2">{position}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Activities;
