import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressBook,
  faAddressCard,
  faCakeCandles,
  faChessKing,
  faEnvelope,
  faLocation,
  faLocationArrow,
  faLocationDot,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import profilePic from "../assets/images/profile-pic.jpg";

const date = new Date();

const infos = {
  details: [
    {
      id: "d1",
      type: "Name",
      info: "Thu Htet Naing @ Ku Kue",
      icon: faChessKing,
    },
    {
      id: "d2",
      type: "Birthday",
      info: {
        birthDay: 14,
        birthMonth: 11,
        birthYear: 2003,
      },
      icon: faCakeCandles,
    },
    {
      id: "d3",
      type: "Phone",
      info: "+84 898 247 910",
      icon: faPhone,
    },
    {
      id: "d4",
      type: "Email",
      info: "kukue014@gmail.com",
      icon: faEnvelope,
    },
    {
      id: "d5",
      type: "Address",
      info: "M18, Duong D7, Phu My Ward, District 7, Ho Chi Minh City",
      icon: faLocationDot,
    },
    {
      id: "d6",
      type: "Position",
      info: "Student",
      icon: faUser,
    },
    {
      id: "d7",
      type: "Profile Picture",
      info: profilePic,
      icon: faUser,
    },
  ],

  objective:
    "Passionate and detail-oriented computer science student with hands-on experience in web development and UI design. Seeking a frontend developer internship to apply my skills in HTML, CSS, JavaScript, and responsive design while gaining real-world experience in collaborative and agile environments.",
  schools: [
    {
      id: 1,
      schoolId: "YKPT-22348",
      schoolName: "University of Computer Studies, Yangon (UCSY)",
      startMonth: 5,
      startYear: 2022,
      endMonth: 12,
      endYear: 2024,
      major: "Knowledge Engineering",
      location: "Yangon",
    },
    {
      id: 2,
      schoolId: "SBS25010150",
      schoolName: "Saigon Business School, Ho Chi Minh (SBS)",
      startMonth: 1,
      startYear: 2025,
      endMonth: date.getMonth() + 1,
      endYear: date.getFullYear(),
      major: "Computer Science",
      location: "Ho Chi Minh City",
    },
  ],
  certifications: [
    {
      certificateId: "c1",
      certificateName: "Silver Award of Table Tennis",
      place: "Youth Table Tennis Club, Daik-U",
    },
    {
      certificateId: "c2",
      certificateName: "JavaSE (advanced)",
      place: "CodeWall Technology",
    },
    {
      certificateId: "c3",
      certificateName: "International Certificate in English - ICBE",
      place: "Parami Education Center",
    },
    {
      certificateId: "c4",
      certificateName: "English (Pre-Intermediate)",
      place: "International House - Yangon",
    },
    {
      certificateId: "c5",
      certificateName: "English 4 Skills for Everyday",
      place: "Street English Center",
    },
  ],
  projects: [
    {
      id: 1,
      projectID: "p1",
      projectName: "Info Assistance(Computer Science Show)",
      position: "Front-end Web developer",
      description:
        "Participated as a front-end developer on the IA Website project, using HTML, CSS, and JavaScript to build a responsive user interface.",
      startDay: 10,
      startMonth: 2,
      startYear: 2024,
      endDay: 23,
      endMonth: 2,
      endYear: 2024,
      location: "Nay Pyi Taw",
    },
    {
      id: 2, 
      projectID: "p2",
      projectName: "XOXO (Career-Up Project Show)",
      position: "Front-end Web developer",
      description:
        "Utilized HTML, CSS, and JavaScript to create a clean, accessible, and efficient web interface.",
      startDay: 17,
      startMonth: 8,
      startYear: 2024,
      endDay: 23,
      endMonth: 9,
      endYear: 2024,
      location: "Yangon",
    }
  ],
  activities: [
    {
      id: 1,
      activityId: "a1",
      activityName: "Great Future Academy Org",
      position: "Graphic Designer",
      description: "Knew the color pattern & created masterpieces",
      startDay: 1,
      startMonth: 2,
      startYear: 2023,
      endDay: 31,
      endMonth: 5,
      endYear: 2023,
    },
    {
      id: 2,
      activityId: "a2",
      activityName: "Dream Education Org",
      position: "Content Writer",
      description:
        "Well known on the types of contents and the management skill",
      startDay: 26,
      startMonth: 4,
      startYear: 2025,
      endDay: date.getDate(),
      endMonth: date.getMonth() + 1,
      endYear: date.getFullYear(),
    },
    {
      id: 4,
      activityId: "a4",
      activityName: "Aspire Now Org",
      position: "Content Writer",
      description: "Well built friendship environment",
      startDay: 27,
      startMonth: 4,
      startYear: 2025,
      endDay: date.getDate(),
      endMonth: date.getMonth() + 1,
      endYear: date.getFullYear(),
    },
  ],
  workExperience: [
    {
      id: 1,
      workExperienceId: "w1",
      workName: "Paing Paing Phyo - Mobile Phone & Computer Sales & Services",
      position: "Repair man/ Sales man",
      description:
        "Delivered technical support for smartphones and computers, handling both hardware repairs and customer sales inquiries.",
      startDay: 1,
      startMonth: 1,
      startYear: 2021,
      endDay: 31,
      endMonth: 3,
      endYear: 2022,
      location: "Daik-U",
    },
    {
      id: 2,
      workExperienceId: "w2",
      workName: "Yadanabon Cyber City, Pyin Oo Lwin (Crypto Trading Web)",
      position: "Frontend Developer",
      description:
        "Developed responsive and dynamic websites using HTML, CSS, JavaScript, and PHP.",
      startDay: 9,
      startMonth: 11,
      startYear: 2024,
      endDay: 27,
      endMonth: 1,
      endYear: 2025,
      location: "Pyin Oo Lwin",
    },
  ],
  skills: [
    {
      skillName: "creativity",
      skillLevel: 3.8,
    },
    {
      skillName: "teamwork",
      skillLevel: 4.8,
    },
    {
      skillName: "great responsibility",
      skillLevel: 4.5,
    },
    {
      skillName: "english skill",
      skillLevel: 3.5,
    },
    {
      skillName: "communication skill",
      skillLevel: 4.3,
    },
    {
      skillName: "microsoft office",
      skillLevel: 4,
    },
    {
      skillName: "computer hardware",
      skillLevel: 4.5,
    },
    {
      skillName: "computer skill",
      skillLevel: 4.8,
    },
  ],
};

export default infos;
