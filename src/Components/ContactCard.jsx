import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card bg-aboutme p-4 rounded-sm text-font cursor-pointer">
      <a href={contact.link} className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-4">
          <FontAwesomeIcon icon={contact.icon} className="text-6xl" />
          <div>
            <p className="text-sm text-font-light">{contact.description}</p>
            <h1 className="text-3xl ">{contact.platform}</h1>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </a>
    </div>
  );
};

export default ContactCard;
