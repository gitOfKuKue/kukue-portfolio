import React from "react";
import maintenance from "../assets/images/Maintenance-cuate.svg";
import Container from "../Components/Container";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useContext } from "react";

const UnderMaintenance = () => {
  const section = "This website";
  const details =
    "This website is temporarily undergoing scheduled maintenance. We’re working hard to bring you an improved experience. Thank you for your understanding and patience.";

  let isWebsite = false;

  if (section === "This website") isWebsite = true;

  return (
    <>
      <Container>
        <div className="flex justify-evenly items-center">
          {/* Content */}
          <div className="w-1/2 flex flex-col justify-start items-start gap-3 h-70">
            <h1 className="font-bold text-4xl">
              <span className="text-iconic text-7xl">{section}</span>
              <br /> is under maintenance.
            </h1>
            <p className="text-font-light">{details}</p>

            {/* Button section */}
            <div
              className={`flex justify-start items-center gap-3 mt-auto ${
                isWebsite && "hidden"
              }`}
            >
              <button className={`bg-button border border-border py-2 px-8 rounded-md ${isWebsite && "hidden"}`}>
                Go back home.
              </button>
              <HashLink
                to="/contact-me#compose-me"
                className="bg-transparent hover:bg-button border border-border py-2 px-8 rounded-md"
              >
                Tell Him!
              </HashLink>
            </div>
          </div>
          <img
            src={maintenance}
            alt="Under maintenance pic"
            className="w-100"
          />
        </div>
      </Container>
    </>
  );
};

export default UnderMaintenance;
