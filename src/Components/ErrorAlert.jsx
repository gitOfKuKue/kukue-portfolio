import React from "react";

class Error {

  handleToggle = (message) => {
    const errorAlert = document.getElementById("error-alert");
    const contactMeSection = document.querySelector("#contact-me");

    if (errorAlert.classList.contains("hidden")) {
      errorAlert.classList.remove("hidden");
      contactMeSection.style.filter = "blur(5px)";
      contactMeSection.setAttribute("disabled");
    } else {
      errorAlert.classList.add("hidden");
      contactMeSection.style.filter = "blur(0px)";
      contactMeSection.removeAttribute("disabled");
    }
  };

  ErrorAlert = ({ className, error }) => {
    return (
      <div
        id="error-alert"
        className={`${className} hidden p-5 rounded-md bg-dark fixed top-[30%] right-[50%] translate-x-[50%] blur-none`}
      >
        <h1 className="text-2x mb-5">{error}</h1>
        <p align="right">
          <input
            type="submit"
            value="OK"
            className="bg-iconic text-font text-md py-2 px-4 rounded-md cursor-pointer"
            onClick={this.handleToggle}
          />
        </p>
      </div>
    );
  };
}

export default Error;
