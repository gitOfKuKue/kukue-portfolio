import React, { useEffect, useState } from "react";
import FeedbackCard from "../Components/FeedbackCard";
import Container from "../Components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

import feedbacks from "../../server/public/feedback.json";

const Feedback = () => {
  let number = 1;
  const ratingStars = [1, 2, 3, 4, 5];

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

  const handleMsg = () => {
    setMsg("Submitted successfully!");
  };
  
  return (
    <>
      <Container>
        {/* Feedback form section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 my-10">
          {/* Content section */}
          <div className="text-center lg:text-left">
            <FontAwesomeIcon
              icon={faComments}
              className="text-7xl md:text-8xl lg:text-9xl mb-5 text-gray-800"
            />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
              Client <br />
              Feedback <br /> Form
            </h1>
          </div>

          {/* Feedback Form */}
          <div className="w-full border border-gray-300 p-5 max-w-5xl mx-auto">
            <div className="border border-gray-300">
              <h1 className="bg-black text-white text-2xl md:text-4xl font-bold uppercase p-5">
                Client feedback form
              </h1>
              <p className="p-5 border-b border-gray-300 text-sm md:text-base">
                Please take a few moments to fill out this form.
              </p>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Full Name */}
                <div className="grid grid-cols-3 border-b border-r border-gray-300">
                  <label
                    htmlFor="fullName"
                    className="col-span-1 p-3 md:p-5 border-r border-gray-300 bg-gray-100 text-sm md:text-base"
                  >
                    Full name:
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="col-span-2 p-3 md:p-5 w-full text-md"
                    placeholder="[Insert Name]"
                  />
                </div>

                {/* Organization */}
                <div className="grid grid-cols-3 border-b border-gray-300">
                  <label
                    htmlFor="organization"
                    className="col-span-1 p-3 md:p-5 border-r border-gray-300 bg-gray-100 text-sm md:text-base"
                  >
                    Organization:
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="col-span-2 p-3 md:p-5 w-full text-md"
                    placeholder="[Insert Org]"
                  />
                </div>

                {/* Position */}
                <div className="grid grid-cols-3 border-r border-gray-300">
                  <label
                    htmlFor="position"
                    className="col-span-1 p-3 md:p-5 border-r border-gray-300 bg-gray-100 text-sm md:text-base"
                  >
                    Position:
                  </label>
                  <input
                    type="text"
                    name="position"
                    id="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="col-span-2 p-3 md:p-5 w-full text-md"
                    placeholder="[Insert Position]"
                  />
                </div>

                {/* Email */}
                <div className="grid grid-cols-3">
                  <label
                    htmlFor="email"
                    className="col-span-1 p-3 md:p-5 border-r border-gray-300 bg-gray-100 text-sm md:text-base"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="col-span-2 p-3 md:p-5 w-full text-md"
                    placeholder="[Insert Email]"
                  />
                </div>
              </div>
            </div>

            {/* Rating Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 my-5 border border-gray-300">
              <h1 className="p-5 col-span-2 border-b md:border-b-0 md:border-r border-gray-300">
                Are you satisfied with Ku Kue?
              </h1>
              <div className="flex justify-center gap-5 p-5">
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
              <h1 className="p-5 bg-gray-100 text-sm md:text-base">
                You can give feedback freely.
              </h1>
              <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                className="w-full h-40 md:h-60 resize-none p-5 text-sm md:text-base"
                placeholder="[Your feedback here]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mt-5 gap-4">
              <button
                className="py-3 px-6 bg-black text-white text-sm md:text-base"
                onClick={handleMsg}
              >
                Submit
              </button>
              <h1 className="text-green-600 text-sm md:text-base">{msg}</h1>
            </div>
          </div>
        </div>

        {/* Feedback Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
          {feedbacks.map((feedback) => (
            <FeedbackCard
              key={feedback.id}
              feedback={feedback}
              number={number++}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Feedback;
