import React, { useContext, useState } from "react";
import Container from "../Components/Container";
import myPic4 from "../assets/images/my-pic4.png";
import infos from "../JavaScripts/info";
import Info from "../Components/Info";
import MethodsProvider from "../Context/MethodsProvider";
import MethodsContext from "../Context/MethodsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [icon, setIcon] = useState(faLock);
  const [canEdit, setCanEdit] = useState(false);

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
  return (
    <>
      <Container>
        <section className="grid grid-cols-3 py-10">
          <img src={myPic4} alt="" className="col-span-1 xs:hidden lg:block" />
          <div className=" flex flex-col bg-aboutme p-10 rounded-lg col-span-2">
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
            <div className={`grid grid-cols-2 gap-5 mt-5`}>
              {infos.details.map((detail) => (
                <Info key={detail.id} detail={detail} canEdit={canEdit} />
              ))}
            </div>
            <button
              className={`${
                canEdit ? "block" : "hidden"
              } w-fit px-6 py-2 bg-iconic text-white rounded-md mt-auto`}
            >
              Submit
            </button>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Profile;
