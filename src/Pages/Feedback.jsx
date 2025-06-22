import React, { useEffect, useState } from "react";
import FeedbackCard from "../Components/FeedbackCard";
import Container from "../Components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faComments } from "@fortawesome/free-solid-svg-icons";

const Feedback = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("/feedback.txt")
      .then((res) => res.text())
      .then((data) => {
        setText(data);
      });
  }, []);

  const datas = [];

  const people = text.split("[]"); // Separate each feedback block

  for (let i = 0; i < people.length; i++) {
    const lines = people[i].trim().split("\n"); // Split each block into lines
    const obj = {};

    for (let line of lines) {
      const [key, ...valueParts] = line.split("=");
      const keyTrimmed = key.trim();
      const value = valueParts.join("=").trim(); // Join in case value has '=' in it
      if (keyTrimmed && value) {
        obj[keyTrimmed] = value;
      }
    }

    if (Object.keys(obj).length > 0) {
      datas.push(obj);
    }
  }

  let number = 1;
  const paddingX = 5;
  const ratingStars = [1,2,3,4,5];

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    position: "",
    email: "",
    feedback: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMsg = async () => {
    setMsg("Submitted successfully!")
  };

  return (
    <>
      <Container>
        {/* Feedback form section */}
        <div className="flex justify-between items-start gap-5 my-10">
          {/* Content section */}
          <div>
            <FontAwesomeIcon icon={faComments} className="text-9xl mb-5" />
            <h1 className="text-7xl font-bold uppercase">
              Client <br />
              Feedback <br /> Form{" "}
            </h1>
          </div>

          {/* Feedback Form */}
          <div className="w-full border border-gray-300 p-5 max-w-5xl mx-auto">
            <div className="border border-gray-300">
              <h1
                className={`bg-black text-white text-4xl font-bold uppercase p-${paddingX}`}
              >
                Client feedback form
              </h1>
              <p className={`p-${paddingX} border-b border-gray-300`}>
                Please take a few moments to fill out this form.
              </p>
              <div className="grid grid-cols-2">
                {/* Full Name */}
                <div
                  className={`grid grid-cols-3 border-b border-r border-gray-300`}
                >
                  <label
                    htmlFor="fullName"
                    className={`col-span-1 p-${paddingX} border-r border-gray-300 bg-gray-100`}
                  >
                    Full name :
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`col-span-2 p-${paddingX} w-full text-md`}
                    placeholder="[Insert Name]"
                  />
                </div>

                {/* Organization */}
                <div className={`grid grid-cols-3 border-b border-gray-300`}>
                  <label
                    htmlFor="organization"
                    className={`col-span-1 p-${paddingX} border-r border-gray-300 bg-gray-100`}
                  >
                    Organization :
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={`col-span-2 p-${paddingX} w-full text-md`}
                    placeholder="[Insert Org]"
                  />
                </div>

                {/* Position */}
                <div className={`grid grid-cols-3 border-r border-gray-300`}>
                  <label
                    htmlFor="position"
                    className={`col-span-1 p-${paddingX} border-r border-gray-300 bg-gray-100`}
                  >
                    Position :
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    value={formData.position}
                    onChange={handleChange}
                    className={`col-span-2 p-${paddingX} w-full text-md`}
                    placeholder="[Insert Position]"
                  />
                </div>

                {/* Email */}
                <div className={`grid grid-cols-3`}>
                  <label
                    htmlFor="email"
                    className={`col-span-1 p-${paddingX} border-r border-gray-300 bg-gray-100`}
                  >
                    Email :
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`col-span-2 p-${paddingX} w-full text-md`}
                    placeholder="[Insert Email]"
                  />
                </div>
              </div>
            </div>

            {/* Rating (visual only, not stored) */}
            <div className="grid grid-cols-3 my-5 border border-gray-300">
              <h1
                className={`p-${paddingX} col-span-2 border-r border-gray-300`}
              >
                Do you satisfied on Ku Kue?
              </h1>
              <div
                className={`flex justify-center gap-5 col-span-1 p-${paddingX}`}
              >
                {ratingStars.map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                ))}
              </div>
            </div>

            {/* Feedback Textarea */}
            <div className="border border-gray-300">
              <h1 className={`p-${paddingX} bg-gray-100`}>
                You can give feedback freely.
              </h1>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                className={`w-full h-60 resize-none p-${paddingX}`}
              ></textarea>
            </div>

            {/* Submit Button + Message */}
            <div className="flex justify-start items-center mt-5 gap-5">
              <button
                className="py-4 px-8 bg-black text-white cursor-pointer"
                onClick={handleMsg}
              >
                Submit
              </button>
              <h1>{msg}</h1>
            </div>
          </div>
        </div>

        {/* Showing feedback section */}
        <div className="grid grid-cols-2 gap-5">
          {datas.map((data) => (
            <FeedbackCard key={data.id} data={data} number={number++} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Feedback;
