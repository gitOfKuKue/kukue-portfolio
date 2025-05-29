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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.",
      bgColor: "bg-iconic",
    },
    {
      id: 2,
      icon: faPencil,
      experience: 2022,
      title: "Content Writing",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.",
      bgColor: "bg-service-card",
    },
    {
      id: 3,
      icon: faCode,
      experience: 2020,
      title: "Frontend Web Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quod.",
      bgColor: "bg-service-card",
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
