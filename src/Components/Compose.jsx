import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Methods from "../JavaScripts/methods";
import MethodsContext from "../Context/MethodsContext";
import PopUpBox from "./PopUpBox";

const Compose = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (name) => {
    setName(name.target.value);
  };

  const handleSubject = (subject) => {
    setSubject(subject.target.value);
  };

  const handleMessage = (message) => {
    setMessage(message.target.value);
  };

  function receiveEmail() {
    let params = {
      name: name,
      subject: subject,
      message: message,
    };
    emailjs
      .send("service_lv1s1vc", "template_zhopvfx", params)
      .then(
        (document.getElementById("showing-msg").innerText =
          "Sent message successfully"),
        (document.getElementById("showing-msg").style.color = "green"),
        setName(""),
        setMessage(""),
        setSubject(""),
      );
  }

  function checkingInput() {
    if (name == "" || subject == "" || message == "") {
      document.getElementById("showing-msg").innerHTML =
        "Please fill all the fields";
      document.getElementById("showing-msg").style.color = "red";
    } else {
      receiveEmail();
    }
  }

  return (
    <>
      <div
        className={`bg-aboutme text-font text-md rounded-sm`}
        id="compose-me"
      >
        <h1 className="mb-3 p-4 rounded-t-sm text-2xl">
          Compose directly to me
        </h1>
        <div className="p-4">
          <div className="flex justify-start items-center mb-3 border-b border-b-iconic py-2">
            <label htmlFor="toMe" className="w-20">
              To :{" "}
            </label>
            <input
              type="text"
              id="toMe"
              defaultValue="Thu Htet Naing @ Ku Kue"
              className="w-full pointer-events-none"
              readOnly
              disabled
            />
          </div>

          <div className="flex justify-start items-center mb-3  border-b border-b-iconic py-2">
            <label htmlFor="fromWho" className="w-20">
              From :{" "}
            </label>
            <input
              type="text"
              id="fromWho"
              placeholder="Your name"
              className="w-full"
              value={name}
              onChange={handleName}
            />
          </div>

          <div className="flex justify-start items-center mb-3  border-b border-b-iconic py-2">
            <label htmlFor="subject" className="w-20">
              Subject :{" "}
            </label>
            <input
              type="text"
              id="subject"
              className="w-full"
              value={subject}
              onChange={handleSubject}
            />
          </div>

          <textarea
            name=""
            id="message"
            className="border border-iconic w-full h-[200px] resize-none"
            value={message}
            onChange={handleMessage}
          ></textarea>

          {/* Submit Section */}
          <div className="flex justify-start items-center gap-3">
            <button
              className="bg-button hover:bg-border hover:text-background border-2 border-border text-font py-2 px-4 rounded-sm text-xl cursor-pointer"
              onClick={checkingInput}
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
              Send
            </button>
            <p id="showing-msg"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compose;
