import React, { useContext } from "react";
import Navigation from "../Components/Navigation";
import Container from "../Components/Container";
import Talking from "../assets/images/men-talking-pana.svg";
import contacts from "../JavaScripts/contact";
import ContactSection from "../Components/ContactSection";
import MethodsContext from "../Context/MethodsContext";
const ContactMe = () => {

  return (
    <>
      <section className="my-10" id="contact-me">
        <Container>
          <div className="">
            <div className="mb-8">
              <h1 className="2xl:text-6xl text-font text-center font-bold md:mb-8 xs:mb-5 xs:text-2xl">
                I'm so glad to see{" "}
                <span className="text-iconic">you here!</span>
              </h1>
              <p className="text-center md:w-[50%] xs:w-[80%] m-auto text-font-light mb-8">
                Welcome to my contact page. If you have any questions or would you like to contact me for any reason, feel free to reach out to me using the contact information provided below. I will do my best to respond to your message as soon as possible. Thank you for visiting my website!
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={contacts[0].link}
                  className="md:text-xl xs:text-md text-font bg-iconic md:py-2 md:px-6 xs:py-1 xs:px-4 rounded-sm"
                >
                  Facebook (Ku Kue)
                </a>
                <a
                  href={contacts[contacts.length - 2].link}
                  className="bg-transparent border border-iconic md:py-2 md:px-6 xs:py-1 xs:px-4 rounded-sm md:text-xl xs:text-md text-iconic"
                >
                  GitHub
                </a>
              </div>
            </div>

            <img src={Talking} alt="Talking men" className="md:w-100 xs:w-50 m-auto" />
          </div>

          <div className="">
            <ContactSection />
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactMe;
