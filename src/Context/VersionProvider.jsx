import React from "react";
import VersionContext from "./VersionContext";

const VersionProvider = ({ children }) => {
  let version = "";

  const versions = [
    {
      version: "1.1.55",
      features: [
        "Initial version with structured layout and basic sections",
        "Set up navigation and static portfolio presentation",
      ],
      changes: [
        "Created homepage, about, and project sections",
        "Established responsive layout with basic CSS styles",
      ],
      releasedDate: new Date("2025-05-01"),
    },
    {
      version: "2.1.65",
      features: [
        "Redesigned entire UI interface",
        "Changed theme from dark mode to light mode",
        "Updated button colors and border styles for a cleaner look",
      ],
      changes: [
        "Overhauled color scheme and layout styles",
        "Enhanced visual consistency and improved readability",
      ],
      releasedDate: new Date("2025-06-17"),
    },
    {
      version: "3.1.65",
      features: [
        "Made portfolio section dynamic using JavaScript",
        "Grouped projects by category for better organization",
      ],
      changes: [
        "Integrated dynamic rendering of portfolio data",
        "Improved filtering and scalability of the project section",
      ],
      releasedDate: new Date("2025-06-17"),
    },
    {
      version: "3.2.65",
      features: [
        "Improved layout responsiveness across devices",
        "Refined grid and spacing system for better adaptability",
      ],
      changes: [
        "Fixed layout bugs on mobile viewports",
        "Resolved rendering errors and alignment issues",
      ],
      releasedDate: new Date("2025-06-20"),
    },
    {
      version: "3.3.65 (Beta)",
      features: [
        "Added the version page to know website features details",
        "Modified in scrolling up",
        "Created Version Provider, so we can control the version dymatically",
      ],
      changes: ["Clean the code and grouped systematically"],
      releasedDate: new Date("2025-06-27"),
    },
    {
      version: "3.4.65",
      features: [
        "Created dynamic dropdown button in navigation bar for vesion and other menus associated with website",
        "Modified navigation bar for dynamic dropdown buttons",
      ],
      changes: [
        "Changed into dropdowns style and more comfortable to check portfolio",
      ],
      releasedDate: new Date("2025-06-28"),
    },
    {
      version: "3.5.65",
      features: [
        "Shows only the selected project",
        "Next/Previous buttons to navigate through projects",
        "Automatically scrolls to top when project changes",
        "Fully responsive layout",
      ],
      changes: [
        "Replaced useNavigate with Link from react-router-dom for better semantic navigation.",
        "Removed the useNavigate hook since it's no longer used.",
        "Changed the 'Previous' navigation button from a <button> with onClick to a conditional <Link> component.",
        "Changed the 'Next' navigation button from a <button> with onClick to a conditional <Link> component.",
        "Disabled buttons were replaced with empty <div /> to maintain layout without active links.",
        "Improved button styling for consistency with other sections using bg-button and hover transitions.",
        "Simplified navigation logic by directly linking to the next and previous project URLs.",
      ],
      releasedDate: new Date("2025-06-30"),
    },
    {
      version: "4.1.75",
      features: ["Giving and viewing feedbacks upon me"],
      changes: ["Added feedbacks functions"],
      releasedDate: new Date("2025-07-01"),
    },
  ];

  return (
    <VersionContext.Provider value={{ versions }}>
      {children}
    </VersionContext.Provider>
  );
};

export default VersionProvider;
