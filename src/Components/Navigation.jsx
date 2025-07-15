import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenuBtn from "./NavMenuBtn";
import {
  faBars,
  faBriefcase,
  faCircleInfo,
  faCircleUser,
  faClover,
  faCode,
  faComments,
  faContactBook,
  faFaceSmile,
  faHandPeace,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faDochub } from "@fortawesome/free-brands-svg-icons";
import Dropdowns from "./Dropdowns";

const Navigation = ({ current }) => {
  const menuBtns = {
    type: "Personal",
    icon: faUser,
    menus: [
      {
        btnId: 1,
        menu: "Hello",
        link: "/",
        icon: faHandPeace,
      },
      {
        btnId: 2,
        menu: "About",
        link: "/#about",
        icon: faCircleInfo,
      },
      {
        btnId: 3,
        menu: "Skills",
        link: "/#skills",
        icon: faClover,
      },
      {
        btnId: 4,
        menu: "Portfilio",
        link: "/#portfolio",
        icon: faBriefcase,
      },
      {
        btnId: 5,
        menu: "Contact",
        link: "contact-me",
        icon: faContactBook,
      },
      // {
      //   btnId: 6,
      //   menu: "Feedbacks",
      //   link: "feedback",
      //   icon: faComments,
      // }
    ],
  };

  const docMenus = {
    type: "DOC",
    icon: faDochub,
    menus: [
      {
        btnId: 1,
        menu: "Versions",
        link: "versions",
        icon: faCode,
      },
    ],
  };

  const [menuOpen, setMenuOpen] = React.useState(false);

  let menuIcon = menuOpen ? faXmark : faBars;

  const openMenuBtn = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuOpen = () => {
    setMenuOpen(false);
  };

  React.useEffect(() => {
    const handleClickOutside = (e) => {
      const menuBox = document.getElementById("menuBox");
      const menuBtn = document.getElementById("menuToggle");
      if (
        menuOpen &&
        !menuBox.contains(e.target) &&
        !menuBtn.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="flex justify-between items-center p-4 z-10" id="navigation">
      <Link to={"/"}>
        <img src={logo} alt="Logo Pic" className="md:w-30 xs:w-20" />
      </Link>

      <div
        className={`text-xl flex justify-end items-center gap-3 text-font z-10`}
        id="menuBox"
      >
        <Dropdowns menus={docMenus} className="z-10" />
        <Dropdowns menus={menuBtns} className={`xs:hidden lg:block z-10`} />
        <div
          className={`lg:flex justify-between items-center gap-4 ${
            menuOpen
              ? "flex flex-col justify-start items-start absolute top-18 right-0 w-[95%] left-[50%] -translate-x-[50%] h-fit p-5 bg-white/10 backdrop-blur-md shadow-lg rounded-xl border-border border-1"
              : "hidden"
          }`}
        >
          <div className="flex justify-between items-center gap-3">
            <Link
              to={"/cv"}
              className="bg-button hover:bg-border hover:text-background border-1 border-border text-font lg:text-sm md:text-lg sm:text-md xs:text-xs cursor-pointer sm:px-4 xs:px-2 sm:py-2 xs:py-1 rounded-md"
              onClick={handleMenuOpen}
            >
              Curriculum Vitae
            </Link>
            <a
              href="tel:+84898247910"
              className="hover:bg-button hover:text-font border-1 hover:border-border sm:px-4 sm:py-2 xs:px-2 xs:py-1 lg:text-sm md:text-lg sm:text-md xs:text-xs cursor-pointer rounded-md"
            >
              Let's Talk!
            </a>
            <Link to="profile">
              <FontAwesomeIcon
                icon={faCircleUser}
                className="xl:text-5xl xs:text-3xl md:text-4xl text-border"
                onClick={handleMenuOpen}
              />
            </Link>
          </div>
          <div className={`w-full flex-col justify-between gap-5 xs:flex lg:hidden`}>
            {menuBtns.menus.map((menuBtn) => (
              <NavMenuBtn
                key={menuBtn.btnId}
                menuBtn={menuBtn}
                setMenuOpen={setMenuOpen}
              />
            ))}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-7 text-font xs:block lg:hidden duration-300 transition-transform ${
            menuOpen && "text-accent rotate-90 scale-110"
          }`}
          onClick={openMenuBtn}
          id="menuToggle"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              !menuOpen
                ? "M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                : "M6 18 18 6M6 6l12 12"
            }
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navigation;
