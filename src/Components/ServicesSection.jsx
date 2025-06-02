import React from "react";
import Services from "./Services";
import { faPenNib, faPencil, faCode } from "@fortawesome/free-solid-svg-icons";
import Container from "./Container";
import { Element } from "react-scroll";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      icon: faPenNib,
      experience: 2021,
      title: "Graphic Design",
      description:
        "After my matriculation exam, I have been interested in graphic design and I studied the ideas, designs and theories.",
      bgColor: "bg-iconic",
      toSection: "graphic-design",
    },
    {
      id: 2,
      icon: faPencil,
      experience: 2022,
      title: "Content Writing",
      description:
        "My family career is traders. Sometimes, I had to post the advertisements on social media and I have learned a lot from it.",
      bgColor: "bg-service-card",
      toSection: "content-writing",

    },
    {
      id: 3,
      icon: faCode,
      experience: 2020,
      title: "Frontend Web Development",
      description:
        "Related to the graphic design, I also interested in web development. I have learned HTML, CSS, Bootstrap, JavaScript, ReactJS and TailwindCSS.",
      bgColor: "bg-service-card",
      toSection: "frontend-web-development",

    },
  ];
  return (
    <>
      <section className="mb-8" id="portfolio">
        <Container>
          <p className="text-font text-center tracking-widest">
            What I can do for you,
          </p>
          <h1 className="text-iconic text-5xl font-bold text-center mb-8">
            Services
          </h1>
          <div className="flex sm:flex-row xs:flex-col justify-between gap-3">
            {services.map((service) => (
              <Services key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default ServicesSection;
