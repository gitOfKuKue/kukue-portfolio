import React, { useState } from "react";
import Container from "./Container";
import SkillsSet from "./SkillsSet";
import {
  faBootstrap,
  faCss,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

// Icons

// Tools Icons
import adobePhotoshop from "../assets/icons/photoshop.png";
import adobeIllustrator from "../assets/icons/illustrator.png";
import microsoftOffice from "../assets/icons/office.png";

// Hard Skills Icons
import html5 from "../assets/icons/html-5.png";
import css3 from "../assets/icons/css-3.png";
import js from "../assets/icons/js.png";
import tailwind from "../assets/icons/tailwind.png";
import mongodb from "../assets/icons/mongodb.svg";
import expressjs from "../assets/icons/express.png";
import react from "../assets/icons/react.png";
import bootstrap from "../assets/icons/bootstrap.png";
import java from "../assets/icons/java.png";
import nodejs from "../assets/icons/nodejs.png";

// Soft Skills Icons
import communication from "../assets/icons/chat.png";
import teamwork from "../assets/icons/partnership.png";
import problemSolving from "../assets/icons/idea.png";
import fastLearning from "../assets/icons/growth.png";
import timeManagement from "../assets/icons/time.png";
import concentration from "../assets/icons/focus.png";
import deadline from "../assets/icons/deadline.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";

const SkillSetSection = () => {
  const [skillsSet, setSkillsSet] = useState({
    Tools: {
      items: [
        {
          id: 1,
          name: "Adobe Photoshop",
          description:
            "A powerful image editing tool used for creating visual assets, UI mockups, and optimizing graphics for web and print design.",
          icon: adobePhotoshop,
          link: "https://www.adobe.com/products/photoshop.html",
          onProcess: false,
        },
        {
          id: 2,
          name: "Adobe Illustrator",
          description:
            "Industry-standard software for vector graphics creation, ideal for designing logos, icons, illustrations, and scalable design components.",
          icon: adobeIllustrator,
          link: "https://www.adobe.com/vn_en/products/illustrator.html",
          onProcess: false,
        },
        {
          id: 3,
          name: "Microsoft Office",
          description:
            "A suite of productivity tools including Word, Excel, and PowerPoint, essential for documentation, data analysis, and professional presentations.",
          icon: microsoftOffice,
          link: "https://www.office.com/",
          onProcess: false,
        },
      ],
      text: "A set of essential creative and productivity tools used in design, documentation, and digital workflows.",
      isCurrent: true,
    },

    HardSkills: {
      items: [
        {
          id: 1,
          name: "HTML",
          description:
            "The foundational markup language for web development, used to structure content and create semantic layouts for websites.",
          icon: html5,
          link: "https://www.w3schools.com/html/",
          onProcess: false,
        },
        {
          id: 2,
          name: "CSS",
          description:
            "A styling language used to design visually appealing websites with layout, colors, typography, and responsive elements.",
          icon: css3,
          link: "https://www.w3schools.com/css/",
          onProcess: false,
        },
        {
          id: 3,
          name: "JavaScript",
          description:
            "A programming language that adds interactivity and dynamic behavior to web pages, enabling client-side logic and DOM manipulation.",
          icon: js,
          link: "https://www.w3schools.com/js/",
          onProcess: false,
        },
        {
          id: 4,
          name: "Tailwind",
          description:
            "A utility-first CSS framework that allows rapid UI development with pre-defined classes, improving code maintainability and speed.",
          icon: tailwind,
          link: "https://tailwindcss.com/",
          onProcess: false,
        },
        {
          id: 5,
          name: "MongoDB",
          description:
            "A NoSQL database that stores data in flexible, JSON-like documents, enabling scalable and efficient data management for modern web applications.",
          icon: mongodb,
          link: "https://www.mongodb.com/",
          onProcess: false,
        },
        {
          id: 6,
          name: "Express JS",
          description:
            "A minimal and flexible Node.js web application framework that provides a robust set of features for building RESTful APIs and web servers efficiently.",
          icon: expressjs,
          link: "https://expressjs.com/",
          onProcess: false,
        },
        {
          id: 7,
          name: "React",
          description:
            "A popular JavaScript library for building reusable UI components and managing complex user interfaces with virtual DOM and state.",
          icon: react,
          link: "https://react.dev/",
          onProcess: false,
        },
        {
          id: 8,
          name: "Node JS",
          description:
            "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.",
          icon: nodejs,
          link: "https://nodejs.org/en",
          onProcess: false,
        },
        {
          id: 9,
          name: "Bootstrap",
          description:
            "A responsive front-end framework offering pre-built components and grid systems for quickly developing modern web layouts.",
          icon: bootstrap,
          link: "https://getbootstrap.com/",
          onProcess: false,
        },
        {
          id: 10,
          name: "Java",
          description:
            "Oracle Java is the #1 programming language and development platform. It reduces costs, shortens development timeframes, drives innovation, and improves application services. With millions of developers running more than 60 billion Java Virtual Machines worldwide, Java continues to be the development platform of choice for enterprises and developers.",
          icon: java,
          link: "https://www.oracle.com/java/",
          onProcess: false,
        },
      ],
      text: "Core technical skills for building modern, responsive, and interactive web applications.",
      isCurrent: false,
    },

    SoftSkills: {
      items: [
        {
          id: 1,
          name: "Communication",
          description:
            "The ability to convey ideas clearly, collaborate effectively, and provide constructive feedback in both written and verbal forms.",
          icon: communication,
          onProcess: false,
        },
        {
          id: 2,
          name: "Team-work",
          description:
            "Working collaboratively with others to achieve common goals, resolve conflicts, and contribute positively to group dynamics.",
          icon: teamwork,
          onProcess: false,
        },
        {
          id: 3,
          name: "Problem Solving",
          description:
            "The ability to identify issues, analyze root causes, and develop practical, creative solutions under pressure or constraints.",
          icon: problemSolving,
          onProcess: false,
        },
        {
          id: 4,
          name: "Time Management",
          description:
            "Effectively planning and organizing tasks to meet deadlines, balance priorities, and maintain productivity in busy workflows.",
          icon: timeManagement,
          onProcess: false,
        },
        {
          id: 5,
          name: "Concentration",
          description:
            "Maintaining focus on tasks for extended periods, even when faced with distractions or complex challenges.",
          icon: concentration,
          onProcess: false,
        },
        {
          id: 6,
          name: "Quick Learner",
          description:
            "Able to rapidly grasp new concepts, tools, or technologies and apply them effectively in real-world tasks.",
          icon: fastLearning,
          onProcess: false,
        },
        {
          id: 7,
          name: "Meeting Deadlines",
          description:
            "Demonstrates accountability and time awareness by delivering work on schedule and honoring commitments reliably.",
          icon: deadline,
          onProcess: false,
        },
      ],
      text: "Key interpersonal skills that enhance collaboration, efficiency, and personal growth in the workplace.",
      isCurrent: false,
    },
  });

  const handleSkill = (selectedCategory) => {
    setSkillsSet((prevSkillsSet) => {
      const updatedSkills = {};

      Object.entries(prevSkillsSet).forEach(([category, data]) => {
        updatedSkills[category] = {
          ...data,
          isCurrent: category === selectedCategory,
        };
      });

      return updatedSkills;
    });
  };

  return (
    <>
      <section id="skills">
        <Container>
          <h1 className="text-iconic font-bold text-heading text-center">
            My Skills Set
          </h1>
          <p className="text-center tracking-wider">I'm proficient in </p>
          <div className="bg-gray-300 w-fit p-1 text-iconic rounded-md m-auto my-10">
            {Object.entries(skillsSet).map(([key, value]) => (
              <button
                key={key}
                className={`py-2 px-4 rounded-md ${
                  value.isCurrent
                    ? "bg-button border border-border text-font"
                    : "bg-transparent border-0"
                } cursor-pointer`}
                onClick={() => handleSkill(key)}
              >
                {key}
              </button>
            ))}
          </div>

          <div className="grid xl:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-5 mb-20">
            {Object.entries(skillsSet).map(
              ([key, value]) =>
                value.isCurrent && (
                  <SkillsSet key={key} collections={value} itemKey={key} />
                )
            )}
          </div>
          <p className="w-150 lg:w-120 md:w-100 xs:w-80 text-center mx-auto">
            {Object.entries(skillsSet).map(
              ([key, value]) => value.isCurrent && value.text
            )}
          </p>
          <HashLink to="#skills" className="h-fit w-full mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 animate-bounce mx-auto my-10 border-border border rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </HashLink>
        </Container>
      </section>
    </>
  );
};

export default SkillSetSection;
