import React from "react";
import contacts from "../JavaScripts/contact";
import ContactCard from "./ContactCard";
import Compose from "./Compose";

const ContactSection = () => {
  // Select specific contacts by index: 2, 3, and 8 (index 8 = contacts[7])
  const selectedContacts = [contacts[2], contacts[3], contacts[7]];

  return (
    <>
      <div className="">
        <h1 className="md:text-2xl xs:text-xl text-font font-bold mb-3">Contact Freely</h1>
        <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-3 mb-3">
          {selectedContacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
        <Compose />
      </div>
    </>
  );
};

export default ContactSection;
