import React from "react";
import contacts from "../JavaScripts/contact";
import ContactCard from "./ContactCard";
import Compose from "./Compose";

const ContactSection = () => {
  return (
    <>
      <div className="">
        <h1 className="md:text-2xl xs:text-xl text-font font-bold mb-3">Contact Freely</h1>
        <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-3 mb-3">
          {contacts.slice(2, contacts.length - 2).map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
        <Compose />
      </div>
    </>
  );
};

export default ContactSection;
