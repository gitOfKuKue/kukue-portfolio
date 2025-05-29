import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenuBtn from "./NavMenuBtn";

const Navigation = ({ current }) => {

  const menuBtns = [
    { 
      btnId: 1,
      menu: "Hello", 
      link: "/",
    },
    {
      btnId: 2,
      menu: "About", 
      link: "/#about",
    },
    {
      btnId: 3,
      menu: "Portfilio", 
      link: "/#portfolio",
    },
    {
      btnId: 4,
      menu: "Work", 
      link: "#",
    },
    {
      btnId: 5,
      menu: "Blog", 
      link: "#",
    },
    {
      btnId: 6,
      menu: "Contact", 
      link: "contact-me",
    }
  ];
  return (
    <nav className="flex justify-between items-center p-4">
      <Link to={"/"}>
        <img src={logo} alt="Logo Pic" className="md:w-30 xs:w-20" />
      </Link>
      <div className="h-full text-xl lg:flex justify-between gap-5 text-font py-1 xs:hidden" >
        {menuBtns.map((menuBtn) => (
          <NavMenuBtn key={menuBtn.btnId} menuBtn={menuBtn} />
        ))}
      </div>

      <div className="flex justify-between items-center gap-4">
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
      </div>
    </nav>
  );
};

export default Navigation;
