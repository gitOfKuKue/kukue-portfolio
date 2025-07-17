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
import Detail from "../Components/Detail";
import { faDownload, faPrint } from "@fortawesome/free-solid-svg-icons";
import SkillBarChart from "../Components/SkillBarChart";
import cvPic from "../assets/images/Account-pana.svg";

// import cvDocs from "../assets/docs/Thu Htet Naing's [General] CV.pdf";
import cvDocs from "../assets/docs/Thu Htet Naing's CV.pdf";
import contacts from "../JavaScripts/contact";
import { div } from "framer-motion/client";
import Methods from "../JavaScripts/methods";

const CurriculumVitae = () => {
  // Print function
  const printCV = () => {
    window.print();
  };

  const methods = new Methods();

  const selectedContact = [contacts[0], contacts[3]];
  return (
    <>
      <section className="my-10">
        <Container>
          <div className="xs:hidden sm:block">
            <div className="w-full noPrint flex justify-between items-center">
              <button
                onClick={printCV}
                className="bg-button border-border border-1 text-font text-md py-3 px-5 cursor-pointer rounded-sm mb-3"
              >
                <FontAwesomeIcon icon={faPrint} className="mr-2" />
                Print
              </button>
              <a
                href={cvDocs}
                download
                className="bg-button border-1 border-border text-font text-md py-3 px-5 cursor-pointer rounded-sm mb-3"
              >
                Download
                <FontAwesomeIcon icon={faDownload} className="ml-2" />
              </a>
            </div>

            <div
              className="border border-font bg-aboutme grid grid-cols-3 gap-10"
              id="print-section"
            >
              {/* Side Info */}
              <div className="col-span-1 bg-iconic p-5">
                {/* Profile Picture */}
                <div className="w-[200px] h-[200px] overflow-hidden m-auto">
                  <img
                    src={infos.details[infos.details.length - 1].info}
                    alt={infos.details[infos.details.length - 1].type}
                    className="w-[320px] h-[320px] object-cover object-[40%_top]"
                  />
                </div>
                {/* Name & Role */}
                <div className="mt-5 mb-10">
                  <h1 className="text-center text-aboutme text-2xl font-bold">
                    {infos.details[0].info}
                  </h1>
                  <p className="text-center text-background text-lg font-light">
                    {infos.details[5].info}
                  </p>
                </div>

                {/* Contact */}
                <div className="mb-10">
                  <h1 className="text-center text-aboutme text-3xl font-bold uppercase">
                    Contact
                  </h1>
                  {infos.details.slice(2, 5).map((detail) => (
                    <span key={detail.id} className="my-3 block">
                      <h3 className="text-center text-aboutme text-xl font-bold">
                        {detail.type}
                      </h3>
                      <p className="text-center text-background text-lg font-light">
                        {detail.info}
                      </p>
                    </span>
                  ))}
                </div>

                {/* Skills */}
                <div className="text-aboutme mb-10">
                  <h1 className="text-center text-3xl font-bold uppercase">
                    Skills
                  </h1>
                  <div className="my-3">
                    <h3 className="text-xl font-bold">Programming</h3>
                    <p className="text-background font-light">
                      Java (advanced), JavaScript
                    </p>
                  </div>
                  <div className="my-3">
                    <h3 className="text-xl font-bold">Tools</h3>
                    <p className="text-background font-light">
                      Adobe Illustrator, Adobe Photoshop, MS Office
                    </p>
                  </div>
                  <div className="my-3">
                    <h3 className="text-xl font-bold">Soft Skills</h3>
                    <p className="text-background font-light">
                      Communication, team-work, responsibility
                    </p>
                  </div>
                  <div className="my-3">
                    <h3 className="text-xl font-bold">Hard Skills</h3>
                    <p className="text-background font-light">
                      Front-end Dev, Graphic Design, Content Writing
                    </p>
                  </div>
                </div>

                {/* Connect */}
                <div>
                  <h1 className="text-center text-aboutme text-3xl font-bold uppercase">
                    Connect
                  </h1>
                  {selectedContact.map((contact) => (
                    <div
                      key={contact.id}
                      className="flex justify-start items-center gap-3 my-5"
                    >
                      <FontAwesomeIcon
                        icon={contact.icon}
                        className="text-5xl text-aboutme"
                      />
                      <h1 className="text-2xl text-aboutme font-bold">
                        {contact.platform}
                      </h1>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details Info */}
              <div className="col-span-2 p-5">
                {/* Objective */}
                <div className="mb-10">
                  <h1 className="text-font text-2xl font-light uppercase mb-3">
                    Objective
                  </h1>
                  <p className="text-font-light text-justify">
                    {infos.objective}
                  </p>
                </div>

                {/* Education */}
                <div className="mb-10">
                  <h1 className="text-font text-2xl font-light uppercase mb-3">
                    Education
                  </h1>
                  {infos.schools.reverse().map((school) => (
                    <div key={school.schoolId}>
                      <div className="my-5">
                        <p className="text-font-light text-lg font-light">
                          {months[school.startMonth - 1]} {school.endYear} -{" "}
                          {methods.checkingToday(
                            school.endMonth,
                            school.endYear
                          )
                            ? "Present"
                            : `${months[school.endMonth - 1]} ${
                                school.endYear
                              }`}{" "}
                          | {school.location}
                        </p>
                        <h1 className="text-2xl text-font font-bold">
                          {school.schoolName}
                        </h1>
                        <h3 className="text-font-light text-lg">
                          {school.major}
                        </h3>
                      </div>
                      <hr className={`${school.id === 1 ? "hidden" : "block"}`}/>
                    </div>
                  ))}
                </div>

                {/* Experience */}
                 <div className="mb-10">
                  <h1 className="text-font text-2xl font-light uppercase mb-3">
                    Experience
                  </h1>
                  {infos.workExperience.reverse().map((experience) => (
                    <div key={experience.workExperienceId}>
                      <div className="my-5">
                        <p className="text-font-light text-lg font-light">
                          {months[experience.startMonth - 1]} {experience.endYear} -{" "}
                          {methods.checkingToday(
                            experience.endMonth,
                            experience.endYear
                          )
                            ? "Present"
                            : `${months[experience.endMonth - 1]} ${
                                experience.endYear
                              }`}{" "}
                          | {experience.location}
                        </p>
                        <h1 className="text-2xl text-font font-bold">
                          {experience.workName}
                        </h1>
                        <h3 className="text-font-light text-lg">
                          {experience.position}
                        </h3>
                        <p className="text-font-light text-xl">{experience.description}</p>
                      </div>
                      <hr className={`${experience.id === 1 ? "hidden" : "block"}`}/>
                    </div>
                  ))}
                </div>

                {/* Project */}
                 <div className="mb-10">
                  <h1 className="text-font text-2xl font-light uppercase mb-3">
                    Project
                  </h1>
                  {infos.projects.reverse().map((project) => (
                    <div key={project.projectID}>
                      <div className="my-5">
                        <p className="text-font-light text-lg font-light">
                          {project.startDay}{methods.checkingSupercase(project.startDay)} {months[project.startMonth - 1]} {project.endYear} -{" "}
                          {methods.checkingToday(
                            project.endMonth,
                            project.endYear
                          )
                            ? "Present"
                            : `${project.endDay}${methods.checkingSupercase(project.endDay)} ${months[project.endMonth - 1]} ${
                                project.endYear
                              }`}{" "}
                          | {project.location}
                        </p>
                        <h1 className="text-2xl text-font font-bold">
                          {project.projectName}
                        </h1>
                        <h3 className="text-font-light text-lg">
                          {project.position}
                        </h3>
                        <p className="text-font-light text-xl">{project.description}</p>
                      </div>
                      <hr className={`${project.id === 1 ? "hidden" : "block"}`}/>
                    </div>
                  ))}
                </div>

                {/* Activities */}
                 <div className="mb-10">
                  <h1 className="text-font text-2xl font-light uppercase mb-3">
                    Activities
                  </h1>
                  {infos.activities.reverse().map((activity) => (
                    <div key={activity.activityId}>
                      <div className="my-5">
                        <p className="text-font-light text-lg font-light">
                          {activity.startDay}{methods.checkingSupercase(activity.startDay)} {months[activity.startMonth - 1]} {activity.endYear} -{" "}
                          {methods.checkingToday(
                            activity.endMonth,
                            activity.endYear
                          )
                            ? "Present"
                            : `${activity.endDay}${methods.checkingSupercase(activity.endDay)} ${months[activity.endMonth - 1]} ${
                                activity.endYear
                              }`}{" "}
                        </p>
                        <h1 className="text-2xl text-font font-bold">
                          {activity.activityName} <span>({activity.position})</span>
                        </h1>
                      </div>
                      <hr className={`${activity.id === 1 ? "hidden" : "block"}`}/>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden xs:block noPrint">
            <img src={cvPic} alt="CV Picture" />
            <a
              href={cvDocs}
              className="flex justify-between items-center bg-button border-1 border-border py-3 px-4 rounded-md m-auto w-[60%] text-font sm:text-xl xs:text-sm gap-5"
            >
              <h3>Download CV</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                />
              </svg>
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CurriculumVitae;
