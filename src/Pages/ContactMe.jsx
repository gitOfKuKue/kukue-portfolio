import React from "react";
import Navigation from "../Components/Navigation";
import Container from "../Components/Container";
import Talking from "../assets/images/men-talking-pana.svg";
import contacts from "../JavaScripts/contact";
import ContactSection from "../Components/ContactSection";
import Error from "../Components/ErrorAlert";
const ContactMe = () => {
  const errorObj = new Error();
  return (
    <>
      <section className="my-10" id="contact-me">
        <Container>
          <div className="h-screen">
            <div className="mb-8">
              <h1 className="text-6xl text-font text-center font-bold mb-8">
                I'm so glad to see{" "}
                <span className="text-iconic">you here!</span>
              </h1>
              <p className="text-center w-[50%] m-auto text-font-light mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                nam omnis in cum exercitationem? Eligendi blanditiis enim
                dolorem nemo eaque, fuga, ullam amet et suscipit itaque iste,
                aperiam quod reprehenderit.
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href={contacts[0].link}
                  className="text-xl text-font bg-iconic py-2 px-6 rounded-sm"
                >
                  Facebook (Ku Kue)
                </a>
                <a
                  href={contacts[contacts.length - 1].link}
                  className="bg-transparent border border-iconic py-2 px-6 rounded-sm text-xl text-iconic"
                >
                  GitHub
                </a>
              </div>
            </div>

            <img src={Talking} alt="Talking men" className="w-100 m-auto" />
          </div>

          <div className="">
            <ContactSection />
          </div>
        </Container>
      </section>
      <errorObj.ErrorAlert
        error={"Please, fill your name and message"}
        className="text-font"
      />
      ;
    </>
  );
};

export default ContactMe;
