import React, { useEffect, useState } from "react";
import defaultProfile from "../assets/feedback-profiles/user.png";

const FeedbackCard = ({ data, number }) => {
  const paddingX = 10;
  const paddingY = 3;

const whenFormatting = (day, month, year) => {
  const now = new Date();
  const inputDate = new Date(year, month - 1, day); // subtract 1 from month
  const diffTime = now - inputDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let when = "";

  if (diffDays < 1) {
    when = "Today";
  } else if (diffDays === 1) {
    when = "1 day ago";
  } else if (diffDays < 30) {
    when = `${diffDays} days ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    when = months === 1 ? "1 month ago" : `${months} months ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    when = years === 1 ? "1 year ago" : `${years} years ago`;
  }

  return when;
};

const splittedTime = data.time.split(".");


  return (
    <div>
      <div className="w-full border border-border mx-auto">
        {/* Header */}
        <div
          className={`flex justify-between items-center px-${paddingX} py-${paddingY} border-b border-border`}
        >
          <h1>
            <span className="font-bold">{number}.</span> {data.name}'s feedback
          </h1>
          <h1>{data.time}</h1>
        </div>
        {/* Body */}
        <div
          className={`px-${paddingX} py-${paddingY} flex justify-start items-center gap-5`}
        >
          <div className="border border-border h-30 w-30 overflow-hidden rounded-full pt-5">
            <img
              src={data.image === "#" ? defaultProfile : data.image}
              alt="Blamer's profile"
              className=""
            />
          </div>
          {/* Feedback content */}
          <div className="w-2/3">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="text-font-lighter">{whenFormatting(splittedTime[0],splittedTime[1],splittedTime[2])}</p>
            <div>rating</div>
            <p className="text-justify text-font-light line-clamp-3">
              {data.feedback}
            </p>
          </div>
        </div>
        {/* Footer */}
        <div
          className={`px-${paddingX} py-${paddingY} flex justify-between items-center border-t border-border`}
        >
          <h1>{data.email === "#" ? "INFO@mail.com" : data.email}</h1>
          <h1>FEEDBACK</h1>
          <h1>{data.phone === "#" ? "PHONE NO" : data.phone}</h1>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
