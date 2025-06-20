import React from "react";
import Navigation from "../Components/Navigation";
import infos from "../JavaScripts/info";
import errorPic from "../assets/images/404 Error-bro.svg"
import { Link } from "react-router-dom";

const ErrorPage = () => { 
  return (
    <>
      <div className="w-full flex justify-center lg:flex-row xs:flex-col items-center absolute top-[50%] left-[50%] translate-[-50%]">
        <img
          src={errorPic}
          alt="404 Error"
          className="w-150 "
        />
        <div className="">
            <h1 className="lg:text-8xl xs:text-5xl text-font font-bold">404 Error</h1>
            <p className="text-xl text-font mb-8">OOPS ... Sorry, page not found!</p>
            <Link to="/" className="lg:py-4 lg:px-6 xs:py-2 xs:px-3 bg-button border rounded-md border-border text-font">Go back home!</Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
