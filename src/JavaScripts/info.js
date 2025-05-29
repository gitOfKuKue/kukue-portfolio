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

const date = new Date();

const infos = {
  details: [
    {
      id: "d1",
      type: "name",
      info: "Thu Htet Naing @ Ku Kue",
      icon: faChessKing,
    },
    {
      id: "d2",
      type: "birthday",
      info: {
        birthDay: 14,
        birthMonth: 11,
        birthYear: 2003,
      },
      icon: faCakeCandles,
    },
    {
      id: "d3",
      type: "phone",
      info: "+84 898 247 910",
      icon: faPhone,
    },
    {
      id: "d4",
      type: "email",
      info: "kukue014@gmail.com",
      icon: faEnvelope,
    },
    {
      id: "d5",
      type: "address",
      info: "M18, Duong D7, Phu My Ward, District 7, Ho Chi Minh City",
      icon: faLocation,
    },
    {
      id: "d6",
      type: "github",
      info: "https://github.com/gitOfKukue",
      icon: faAddressBook,
    },
    {
      id  : "d7",
      type: "position",
      info: "Software Engineer",
      icon: faUser,
    },
  ],

  objective:
    "Motivated and detail-oriented Software Engineer seeking an opportunity to leverage my skills in touching to the main point and concertration of writing to contribute to succeed while continuing professional development.",
  schools: [
    {
      schoolId: "YKPT-22348",
      schoolName: "University of Computer Studies, Yangon (UCSY)",
      startMonth: 5,
      startYear: 2022,
      endMonth: 12,
      endYear: 2024,
      major: "Knowledge Engineering",
    },
    {
      schoolId: "SBS25010150",
      schoolName: "Saigon Business School, Ho Chi Minh (SBS)",
      startMonth: 1,
      startYear: 2025,
      endMonth: date.getMonth() + 1,
      endYear: date.getFullYear(),
      major: "Computer Science",
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
  activities: [
    {
      activityId: "a1",
      activityName: "Great Future Academy (GFA)",
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
      activityId: "a2",
      activityName: "Table Tennis Competition (Nay Pyi Taw)",
      position: "Athlete (Double Playing)",
      description: "Got many friends & experiences away from home",
      startDay: 4,
      startMonth: 1,
      startYear: 2024,
      endDay: 20,
      endMonth: 1,
      endYear: 2024,
    },
    {
      activityId: "a3",
      activityName: "Computer Science Show (Nay Pyi Taw)",
      position: "Web developer",
      description:
        "Participated as a developer of 'Information Assistance Website'",
      startDay: 10,
      startMonth: 2,
      startYear: 2024,
      endDay: 23,
      endMonth: 2,
      endYear: 2024,
    },
    {
      activityId: "a4",
      activityName: "Dream Education Organization",
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
      activityId: "a5",
      activityName: "Aspire Now Organization",
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
      workExperienceId: "w1",
      workName: "Paing Paing Phyo - Mobile Phone & Computer Sales & Services",
      position: "Repair man/ Sales man",
      description: "Handling mobile phone & computer well",
      startDay: 1,
      startMonth: 1,
      startYear: 2021,
      endDay: 31,
      endMonth: 3,
      endYear: 2022,
    },
    {
      workExperienceId: "w2",
      workName: "Yadanabon Cyber City, Pyin Oo Lwin (Crypto Trading Web)",
      position: "Frontend Developer",
      description: "Proficiency in creating User Interface (UI) of a website",
      startDay: 9,
      startMonth: 11,
      startYear: 2024,
      endDay: 27,
      endMonth: 1,
      endYear: 2025,
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
