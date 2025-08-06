import {
  faMugSaucer,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const timelineData = [
  {
    title: "Mobile & Computer Sale and Service",
    date: "1st Jan 2022",
    content:
      "Over the course of more than one year, I worked at a Mobile Phone and Computer Sale and Service Center, where I gained hands-on experience with both hardware and software troubleshooting. My responsibilities included diagnosing device issues, performing repairs, installing and configuring software, and providing post-service support. Additionally, I developed strong communication skills through daily interaction with customers, helping them understand technical problems and offering suitable solutions with patience and professionalism.",
    owner: "Aye Zaw Myat",
    icon: faScrewdriverWrench,
  },
  {
    title: "Barista at GUTA Coffee",
    date: "25th July 2025",
    content:
      "As a barista at GUTA Coffee, I became skilled in preparing a wide variety of espresso-based drinks and learned to work efficiently under pressure in a fast-paced environment. I consistently maintained high standards of cleanliness and customer service, ensuring that each customer received not just a quality drink, but also a welcoming and friendly experience. This role further strengthened my teamwork and time management skills, while allowing me to engage with people from diverse backgrounds on a daily basis.",
    owner: "Doan Huu Nghia",
    icon: faMugSaucer,
  },
];

const WorkExperiences = () => {
  return (
    <div className="py-10 px-4">
      <h1 className="text-3xl font-bold text-font text-center mb-12">
        Paided Work Experiences
      </h1>
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-iconic z-0" />

        <div className="space-y-12 relative z-10">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:justify-between relative"
            >
              {/* Left card */}
              <div
                className={`md:w-5/12 ${
                  index % 2 === 0 ? "" : "invisible md:visible"
                }`}
              >
                {index % 2 === 0 && (
                  <div className="bg-white p-6 rounded-md shadow-md relative z-10 text-font">
                    <div className="absolute top-2 right-4 text-sm text-gray-500">
                      {item.date}
                    </div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="mt-2 text-gray-600 line-clamp-4">{item.content}</p>
                    <button className="mt-4 px-4 py-2 text-aboutme rounded bg-iconic hover:bg-font-light">
                      Read more
                    </button>
                    <p className="text-right italic text-gray-500 mt-2">
                      {item.owner}
                    </p>
                  </div>
                )}
              </div>

              {/* Center icon (only current item) */}
              <div className="w-10 h-10 rounded-full bg-background border-4 border-iconic flex items-center justify-center text-iconic font-bold text-xl z-20 my-4 md:my-0">
                <FontAwesomeIcon icon={item.icon} />
              </div>

              {/* Right card */}
              <div
                className={`md:w-5/12 ${
                  index % 2 !== 0 ? "" : "invisible md:visible"
                }`}
              >
                {index % 2 !== 0 && (
                  <div className="bg-white p-6 rounded-md shadow-md relative z-10 text-font">
                    <div className="absolute top-2 right-4 text-sm text-gray-500">
                      {item.date}
                    </div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="mt-2 text-gray-600 line-clamp-4">{item.content}</p>
                    <button className="mt-4 px-4 py-2 text-aboutme rounded bg-iconic hover:bg-font-light">
                      Read more
                    </button>
                    <p className="text-right italic text-gray-500 mt-2">
                      {item.owner}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperiences;
