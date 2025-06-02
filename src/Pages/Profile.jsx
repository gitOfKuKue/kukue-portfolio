import React, { useContext, useState } from "react";
import Container from "../Components/Container";
import myPic4 from "../assets/images/my-pic4.png";
import infos from "../JavaScripts/info";
import Info from "../Components/Info";
import PopUpBox from "../Components/PopUpBox";
import MethodsProvider from "../Context/MethodsProvider";
import MethodsContext from "../Context/MethodsContext";

const Profile = () => {
    const {handlePopUpBox, isOpen} = useContext(MethodsContext);

  const handlePopUp = () => {
    handlePopUpBox();
  }

  return (
    <>
        <Container>
          <section className="flex justify-between items-center py-10">
            <img src={myPic4} alt="" className="w-1/3" />
            <div className=" bg-aboutme p-10 rounded-lg w-2/3">
              <div className="border-b-2 border-b-iconic pb-5 flex justify-between items-center">
                <h1 className="text-4xl text-iconic font-bold">
                  Personal Detail
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-font"
                  onClick={handlePopUp}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              <div className={`grid grid-cols-2 gap-5 mt-5`}>
                {infos.details.map((detail) => (
                  <Info key={detail.id} detail={detail} />
                ))}
              </div>
            </div>
          </section>
        </Container>
        <PopUpBox msg="Enter your password" isPrompt={true} isOpen={isOpen} button="Confirm"/>
    </>
  );
};

export default Profile;
