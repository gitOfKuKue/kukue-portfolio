import React from "react";
import { Outlet } from "react-router-dom";
import { Slide } from "react-slideshow-image";

const Slider = () => {
  return (
    <>
      <Slide
        easing="ease"
        autoplay="false"
        indicators
        prevArrow={
          <button className="bg-button border border-border py-10 text-font">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        }
        nextArrow={
          <button className="bg-button border border-border py-10 text-font">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        }
      >
        <Outlet />
      </Slide>
    </>
  );
};

export default Slider;
