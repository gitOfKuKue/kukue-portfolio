import React, { useContext, useState } from "react";
import Container from "../Components/Container";
import myPic4 from "../assets/images/my-pic4.png";
import profile_pic from "../assets/images/Social biography-bro.svg"
import infos from "../JavaScripts/info";
import Info from "../Components/Info";
import MethodsProvider from "../Context/MethodsProvider";
import MethodsContext from "../Context/MethodsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import informations from "../JavaScripts/info";
import Methods from "../JavaScripts/methods";
import months from "../JavaScripts/months";
import portfolios from "../JavaScripts/portfolio";
import ProjectCountCard from "../Components/ProjectCountCard";

const Profile = () => {
  const [icon, setIcon] = useState(faLock);
  const [canEdit, setCanEdit] = useState(false);
  const [infos, setInfos] = useState(informations.details);
  const methods = new Methods();

  let totalProjs = 0;
  Object.entries(portfolios).forEach(([, value]) => {
    totalProjs += value.length;
  })

  const passwordChecking = (password) => {
    bcrypt.hash(password, 10, function (err, hash) {
      // To verify:
      bcrypt.compare("kukue@vietnam2025", hash, function (err, res) {
        res
          ? (setCanEdit(true), setIcon(faLockOpen))
          : (alert("Password is incorrect"), setIcon(faLock));
      });
    });
    document.getElementById("lock-icon").classList.remove("locked");
  };

  const handleLock = () => {
    let lockIcon = document.getElementById("lock-icon");
    if (lockIcon.classList.contains("fa-lock")) {
      const password = window.prompt("Enter your password");
      passwordChecking(password);
    } else {
      setCanEdit(false);
      setIcon(faLock);
    }
  };

  const handleInput = (e, id) => {
    setInfos((prevInfos) =>
      prevInfos.map((detail) =>
        detail.id === id ? { ...detail, info: e.target.value } : detail
      )
    );
  };

  const handleEdit = () => {
    // Update the original informations object
    informations.details = [...infos];

    // Here you would typically send the data to a server or save to localStorage
    // For demonstration, we'll just log it and alert
    alert("Information updated successfully!");

    // Optionally lock the fields after submission
    setCanEdit(false);
    setIcon(faLock);
  };

  return (
    <>
      <Container>
        <section>
          <div className="flex lg:flex-row xs:flex-col md:mb-0 xs:mb-10 justify-between items-end py-10">
            <div className="lg:w-1/3 md:w-1/2 xs:w-full lg:rounded-l-lg lg:rounded-t-none xs:rounded-t-lg xs:m-auto lg:m-0" data-aos="slide-right">
              {/* <img src={myPic4} alt="" className="bottom-0" /> */}
              <img src={profile_pic} alt="Profile picture" />
            </div>
            <div className="flex flex-col bg-aboutme p-10 lg:rounded-r-lg lg:rounded-bl-none xs:rounded-b-lg lg:w-2/3 xs:w-full" data-aos="slide-left">
              <div className="border-b-2 border-b-iconic pb-5 flex justify-between items-center">
                <h1 className="text-4xl text-iconic font-bold">
                  Personal Detail
                </h1>
                <FontAwesomeIcon
                  icon={icon}
                  className="text-3xl text-iconic"
                  onClick={handleLock}
                  id="lock-icon"
                />
              </div>
              <div className={`grid md:grid-cols-2 xs:grid-cols-1 mt-5`}>
                {infos.map((detail) => (
                  <div
                    key={detail.id}
                    className={`text-font ${
                      detail.type === "Address" && "md:col-span-2"
                    } w-full xs:col-span-1`}
                  >
                    <h1 className="text-2xl font-bold">{detail.type}</h1>
                    {detail.type === "Birthday" ? (
                      <div className="text-xl text-font-light">
                        {`${detail.info["birthDay"]}${methods.checkingSupercase(
                          detail.info["birthDay"]
                        )} ${months[detail.info["birthMonth"] - 1]}, ${
                          detail.info["birthYear"]
                        }`}
                      </div>
                    ) : (
                      <textarea
                        className="text-xl text-font-light w-full text-wrap resize-none"
                        value={detail.info}
                        disabled={!canEdit}
                        onChange={(e) => handleInput(e, detail.id)}
                        unselectable="true"
                      />
                    )}
                  </div>
                ))}
              </div>
              <button
                className={`${
                  canEdit ? "block" : "hidden"
                } w-fit px-6 py-2 bg-button border-2 border-border text-font rounded-md mt-4`}
                onClick={handleEdit}
              >
                Submit
              </button>
            </div>
          </div>

          {/* <div className="grid grid-cols-4 gap-4 mb-10">
            <div className="grid grid-cols-1 col-span-1 gap-4 w-full">
              {Object.entries(portfolios).map((item, index) => (
                <ProjectCountCard key={index} item={item} />
              ))}
            </div>
            <div className="w-full bg-iconic text-font col-span-2 rounded-lg py-4 px-6">
              <p className="text-md">Total</p>
              <h1 className="text-6xl font-bold">{totalProjs}</h1>
            </div>
          </div> */}
        </section>
      </Container>
    </>
  );
};

export default Profile;
