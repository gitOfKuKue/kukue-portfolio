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
import react from "../assets/icons/react.png";
import bootstrap from "../assets/icons/bootstrap.png";
import java from "../assets/icons/java.png";

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
import { useState } from "react";

import React from "react";

const skillSets = () => {
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
        },
        {
          id: 2,
          name: "Adobe Illustrator",
          description:
            "Industry-standard software for vector graphics creation, ideal for designing logos, icons, illustrations, and scalable design components.",
          icon: adobeIllustrator,
          link: "https://www.adobe.com/vn_en/products/illustrator.html",
        },
        {
          id: 3,
          name: "Microsoft Office",
          description:
            "A suite of productivity tools including Word, Excel, and PowerPoint, essential for documentation, data analysis, and professional presentations.",
          icon: microsoftOffice,
          link: "https://www.office.com/",
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
        },
        {
          id: 2,
          name: "CSS",
          description:
            "A styling language used to design visually appealing websites with layout, colors, typography, and responsive elements.",
          icon: css3,
          link: "https://www.w3schools.com/css/",
        },
        {
          id: 3,
          name: "JavaScript",
          description:
            "A programming language that adds interactivity and dynamic behavior to web pages, enabling client-side logic and DOM manipulation.",
          icon: js,
          link: "https://www.w3schools.com/js/",
        },
        {
          id: 4,
          name: "Tailwind",
          description:
            "A utility-first CSS framework that allows rapid UI development with pre-defined classes, improving code maintainability and speed.",
          icon: tailwind,
          link: "https://tailwindcss.com/",
        },
        {
          id: 5,
          name: "React",
          description:
            "A popular JavaScript library for building reusable UI components and managing complex user interfaces with virtual DOM and state.",
          icon: react,
          link: "https://react.dev/",
        },
        {
          id: 6,
          name: "Bootstrap",
          description:
            "A responsive front-end framework offering pre-built components and grid systems for quickly developing modern web layouts.",
          icon: bootstrap,
          link: "https://getbootstrap.com/",
        },
        {
          id: 7,
          name: "Java",
          description:
            "Oracle Java is the #1 programming language and development platform. It reduces costs, shortens development timeframes, drives innovation, and improves application services. With millions of developers running more than 60 billion Java Virtual Machines worldwide, Java continues to be the development platform of choice for enterprises and developers.",
          icon: java,
          link: "https://www.oracle.com/java/",
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
        },
        {
          id: 2,
          name: "Team-work",
          description:
            "Working collaboratively with others to achieve common goals, resolve conflicts, and contribute positively to group dynamics.",
          icon: teamwork,
        },
        {
          id: 3,
          name: "Problem Solving",
          description:
            "The ability to identify issues, analyze root causes, and develop practical, creative solutions under pressure or constraints.",
          icon: problemSolving,
        },
        {
          id: 4,
          name: "Time Management",
          description:
            "Effectively planning and organizing tasks to meet deadlines, balance priorities, and maintain productivity in busy workflows.",
          icon: timeManagement,
        },
        {
          id: 5,
          name: "Concentration",
          description:
            "Maintaining focus on tasks for extended periods, even when faced with distractions or complex challenges.",
          icon: concentration,
        },
        {
          id: 6,
          name: "Quick Learner",
          description:
            "Able to rapidly grasp new concepts, tools, or technologies and apply them effectively in real-world tasks.",
          icon: fastLearning,
        },
        {
          id: 7,
          name: "Meeting Deadlines",
          description:
            "Demonstrates accountability and time awareness by delivering work on schedule and honoring commitments reliably.",
          icon: deadline,
        },
      ],
      text: "Key interpersonal skills that enhance collaboration, efficiency, and personal growth in the workplace.",
      isCurrent: false,
    },
  });
  return [skillSets, setSkillsSet];
};

export default skillSets;
