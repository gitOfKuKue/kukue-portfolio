import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenuBtn from "./NavMenuBtn";
import { faBriefcase, faCircleInfo, faCircleUser, faContactBook, faFaceSmile, faUser } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Navigation = ({ current }) => {
  const menuBtns = [
    {
      btnId: 1,
      menu: "Hello",
      link: "/",
      icon: faFaceSmile,
    },
    {
      btnId: 2,
      menu: "About",
      link: "/#about",
      icon: faCircleInfo,
    },
    {
      btnId: 3,
      menu: "Portfilio",
      link: "/#portfolio",
      icon: faBriefcase,
    },
    {
      btnId: 4,
      menu: "Contact",
      link: "contact-me",
      icon: faContactBook,
    },
  ];

  const [menuOpen, setMenuOpen] = React.useState(false);

  const openMenuBtn = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="flex justify-between items-center p-4" id="navigation">
      <Link to={"/"}>
        <img src={logo} alt="Logo Pic" className="md:w-30 xs:w-20" />
      </Link>
      

      <div className={`text-xl lg:flex justify-between gap-5 text-font py-1 ${menuOpen ? "flex flex-col absolute bg-aboutme top-15 right-0 gap-2 justify-start w-40 h-fit p-3" : "hidden"}`}>
        {menuBtns.map((menuBtn) => (
          <NavMenuBtn key={menuBtn.btnId} menuBtn={menuBtn} />
        ))}
      </div>

      <div className={`flex justify-between items-center gap-4`}>
        <Link
          to={"/cv"}
          className="bg-iconic sm:px-4 xs:px-2 text-font md:text-lg sm:text-md xs:text-sm cursor-pointer sm:py-2 xs:py-1"
        >
          Curriculum Vitae
        </Link>
        <a
          href="tel:+84898247910"
          className="hover:bg-iconic hover:text-font border border-iconic text-iconic sm:px-4 sm:py-2 xs:px-2 xs:py-1 sm:text-md md:text-lg xs:text-sm cursor-pointer"
        >
          Let's Talk!
        </a>
        <Link to="profile">
          <FontAwesomeIcon icon={faCircleUser} className="lg:text-5xl xs:text-3xl md:text-4xl text-iconic" />
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 text-font xs:block lg:hidden"
        onClick={openMenuBtn}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
    </nav>
  );
};

export default Navigation;
