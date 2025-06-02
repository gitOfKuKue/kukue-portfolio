import React from "react";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import contacts from "../JavaScripts/contact";
import ContactIcons from "./ContactIcons";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-iconic md:py-20 md:px-10 xs:py-10 xs:px-5 text-background mt-auto" id="footer">
      <h1 className="text-xl font-bold">Thu Htet Naing @ Ku Kue.</h1>
      <div className="grid grid-cols-5 border-b-1 border-dashed py-20">
        <ul className="md:col-span-1 sm:col-span-2 xs:col-span-2 h-full flex flex-col justify-evenly items-start">
          <li className="text-md">Hello!</li>
          <li className="text-md">Why me?</li>
          <li className="text-md">Services</li>
        </ul>
        <ul className="md:col-span-1 sm:col-span-2 xs:col-span-3 h-full flex flex-col justify-evenly items-start">
          <li className="text-md">Graphic Design</li>
          <li className="text-md">Content Writing</li>
          <li className="text-md">Web Development</li>
        </ul>
        <ul className="md:col-span-1 sm:col-span-2 xs:col-span-2 h-full flex flex-col justify-evenly items-start">
          <li className="text-md">Portfolio</li>
          <li className="text-md">Curriculum Vitae</li>
          <li className="text-md">Contact me</li>
        </ul>
        <div className="md:col-span-2 xs:col-span-5 md:mb-0 xs:mt-10">
          <p className="">GOT A POSITION IN MIND?</p>
          <a href={contacts[contacts.length - 1].link} className="2xl:text-8xl lg:text-6xl md:text-5xl sm:text-7xl xs:text-5xl font-bold">
            Let's talk
          </a>
        </div>
      </div>

      <div className="flex justify-start items-center gap-3 md:my-5 xs:my-10">
        <div className="bg-dark inline-block p-3 rounded-md">
          <img
            src={logo}
            alt="logo"
            className="2xl:w-50 lg:w-40 sm:w-30 xs:w-20"
          />
        </div>
        <ul className="md:text-md xs:text-sm">
          <li>Graphic Designer</li>
          <li>Content Writer</li>
          <li>Frontend Web Developer</li>
        </ul>
      </div>

      <div className="flex justify-between items-baseline md:flex-row xs:flex-col py-5">
        <p className="md:text-md xs:text-sm md:mb-0 xs:mb-5">© {date.getFullYear()} @ Ku Kue</p>
        <div className="flex justify-between items-center gap-5 flex-wrap">
          {contacts.map((contact) => (
            <ContactIcons key={contact.id} contact={contact} />
          ))}
          <HashLink
            to="/contact-me#compose-me"
            className="bg-background md:text-xl xs:text-sm text-iconic md:py-2 md:px-4 xs:py-1 xs:px-2 rounded-md cursor-pointer"
          >
            Compose
          </HashLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
