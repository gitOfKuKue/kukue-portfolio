import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/icons/logo.svg";
import contacts from "../JavaScripts/contact";
import ContactIcons from "./ContactIcons";
import VersionContext from "../Context/VersionContext";

const Footer = () => {
  const date = new Date();
  const { versions } = useContext(VersionContext);

  return (
    <footer className="bg-border text-background mt-auto py-10 px-5 sm:px-10 md:py-20 md:px-20" id="footer">
      <h1 className="text-xl font-bold mb-5">Thu Htet Naing @ Ku Kue.</h1>

      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-x-5 border-b border-dashed pb-10">
        {/* Section 1 */}
        <ul className="flex flex-col space-y-2">
          <li className="text-md">Hello!</li>
          <li className="text-md">Why me?</li>
          <li className="text-md">Services</li>
        </ul>

        {/* Section 2 */}
        <ul className="flex flex-col space-y-2">
          <li className="text-md">Graphic Design</li>
          <li className="text-md">Content Writing</li>
          <li className="text-md">Web Development</li>
        </ul>

        {/* Section 3 */}
        <ul className="flex flex-col space-y-2">
          <li className="text-md">Portfolio</li>
          <li className="text-md">Curriculum Vitae</li>
          <li className="text-md">Contact me</li>
        </ul>

        {/* Call to Action */}
        <div className="md:col-span-2">
          <p className="text-sm mb-2">GOT A POSITION IN MIND?</p>
          <a
            href={contacts[6].link}
            className="block text-3xl sm:text-4xl md:text-5xl font-bold"
          >
            Let’s talk
          </a>
        </div>
      </div>

      {/* Logo & Roles */}
      <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-5 mt-10">
        <HashLink to={"/#hello"} className="bg-button p-3 rounded-md">
          <img src={logo} alt="logo" className="w-16 sm:w-20 md:w-24" />
        </HashLink>
        <ul className="text-sm sm:text-md space-y-1">
          <li>Graphic Designer</li>
          <li>Content Writer</li>
          <li>Frontend Web Developer</li>
        </ul>
      </div>

      {/* Footer Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mt-10">
        <p className="text-sm sm:text-md">
          <Link to="versions">
            Version {versions[versions.length - 1].version}
          </Link>{" "}
          © {date.getFullYear()} @ Ku Kue
        </p>

        {/* Contact Icons */}
        <div className="flex flex-wrap gap-3">
          {contacts.slice(0, 5).map((contact) => (
            <ContactIcons key={contact.id} contact={contact} />
          ))}
          <HashLink
            to="/contact-me#compose-me"
            className="bg-button hover:bg-border text-font hover:text-aboutme border md:text-md text-sm px-3 py-2 rounded-md"
          >
            Compose
          </HashLink>
        </div>
      </div>

      {/* Developer Tag */}
      <div className="flex items-center justify-end gap-2 mt-8">
        <h1 className="font-bold text-sm">Developed by</h1>
        <img src={logo} alt="Logo" className="w-10 bg-iconic p-1 rounded-sm" />
      </div>
    </footer>
  );
};

export default Footer;
