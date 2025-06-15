import React from "react";
import Container from "./Container";
import myPic2 from "../assets/images/my-pic2.png";
import infos from "../JavaScripts/info";


const AboutMe = () => {
  return (
    // About Me Section
    <section className="aboutme-section bg-aboutme mb-10" id="about">
      <div className="custom-shape-divider-top-1747829722">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Container className={"flex xs:flex-col-reverse md:flex-row justify-between items-center py-20"}>
        {/* Picture Section */}
        <img
          src={myPic2}
          alt="my pic 2"
          className="2xl:w-150 xl:w-120 lg:w-100 sm:w-90"
        />
        {/* Content Section */}
        <div className="text-font 2xl:w-[600px] xl:w-[500px] lg:w-[400px] sm:mb-10 md:mb-0">
          <p className="md:text-sm lg:text-xl">Let me introduce myself</p>
          <h1 className="lg:text-5xl xs:text-3xl text-iconic font-bold mb-5 md:mb-3">About me</h1>
          <div className="mb-5">
            <h3 className="text-font font-bold lg:text-xl md:text-md xs:text-lg">
              A story of hardwork and ability
            </h3>
            <p className="text-font-light text-justify lg:text-xl md:text-sm">
              I am a software developer with a passion for creating innovative
              solutions. I have a strong background in computer science and a
              deep understanding of programming languages and technologies. I am
              always looking for new challenges and opportunities to learn and
              grow as a developer. I strongly believe that I can interact with
              teammates and communicate well. Besides, my ability is easy to
              learn for new things.
            </p>
          </div>

          <div className="">
            <h3 className="text-font font-bold lg:text-xl md:text-md xs:text-lg">Contact</h3>
            <p className="text-font-light text-justify lg:text-xl md:text-sm">
              If you have any questions or would like to discuss a project,
              please feel free to contact me at{" "}
              <a
                href="mailto:kukue014@gmail.com"
                className="font-bold text-iconic"
              >
                {infos.details[3].info}
              </a>{" "}
              or{" "}
              <a href="#" className="font-bold text-iconic">
                Whatsapp
              </a>
              . I am always open to new opportunities and would love to hear
              from you!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
