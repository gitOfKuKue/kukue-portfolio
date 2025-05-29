import React from "react";
import myPic3 from "../assets/images/my-pic3.jpg";
import Container from "../Components/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import infos from "../JavaScripts/info";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";
import Activities from "../Components/Activities";
import months from "../JavaScripts/months";
import Education from "../Components/Education";
import Certifications from "../Components/Certifications";
import WorkExperience from "../Components/WorkExperience";
import SkillBarChart from "../Components/skillBarChart";
import Detail from "../Components/Detail";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const CurriculumVitae = () => {
  // Print function
  const printCV = () => {
    window.print();
  };
  return (
    <>
      <section className="my-10">
        <Container>
          <div className="w-full">
            <button
              onClick={printCV}
              className="bg-iconic text-font text-md py-3 px-5 cursor-pointer rounded-sm mb-3"
            >
              <FontAwesomeIcon icon={faPrint} className="mr-2" />
              Print
            </button>
          </div>

          <div className="border border-font bg-aboutme" id="print-section">
            <div className="p-10 bg-iconic flex justify-between items-stretch">
              <div className="">
                <div className="w-50 h-50 overflow-hidden mb-5">
                  <img
                    src="./src/assets/images/my-pic3.jpg"
                    alt="My Profile"
                    className="my-[-60px]"
                  />
                </div>
                <h1 className="text-3xl font-bold text-background">
                  {infos.details[0]["info"]}
                </h1>
                <p className="text-background ">
                  {infos.details[infos.details.length - 1]["info"]}
                </p>
              </div>

              <div>
                <h1 className="text-center font-bold text-2xl text-background mb-5">
                  CONTACT INFORMATION
                </h1>
                <div className="flex flex-col justify-between gap-2 items-start">
                  {/* {infos.details.map((item, index) => {
                  }) */}
                  {infos.details
                    .slice(1, infos.details.length - 1)
                    .map((detail) => (
                      <Detail key={detail.id} detail={detail} />
                    ))}
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="p-10 grid grid-cols-2 grid-rows-1 gap-10 text-justify text-font">
              <div className="row-span-1 border-b-2 border-b-iconic py-3">
                <h1 className="text-2xl font-bold mb-2">OBJECTIVE</h1>
                <p>{infos["objective"]}</p>
              </div>

              <div className="row-span-2">
                <h1 className="text-2xl font-bold mb-2 row-span-1">
                  EDUCATION
                </h1>
                {infos["schools"].map((education) => (
                  <Education key={education.schoolId} education={education} />
                ))}
              </div>

              <div className="row-span-3">
                <h1 className="text-2xl font-bold mb-2 row-span-1">
                  CERTIFICATIONS
                </h1>
                {infos["certifications"].map((certificate) => (
                  <Certifications
                    key={certificate.certificateId}
                    certificate={certificate}
                  />
                ))}
              </div>

              <div className="row-span-3">
                <h1 className="text-2xl font-bold mb-2">ACTIVITIES</h1>
                {infos["activities"].map((activity) => (
                  <Activities key={activity.activityId} activity={activity} />
                ))}
              </div>

              <div className="row-span-1">
                <h1 className="text-2xl font-bold mb-2">WORK EXPERIENCE</h1>
                {infos["workExperience"].map((experience) => (
                  <WorkExperience
                    key={experience.workExperienceId}
                    experience={experience}
                  />
                ))}
              </div>
            </div>
            <div className="p-10 w-[90%] my-auto">
              <h1 className="text-2xl font-bold mb-2 text-font text-center">
                Personal Skills
              </h1>
              <SkillBarChart />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CurriculumVitae;
