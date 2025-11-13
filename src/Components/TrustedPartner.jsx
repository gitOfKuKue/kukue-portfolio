import React from "react";
import Container from "./Container";

import gfa from "../assets/icons/great-future-academy.png";
import dreamEdu from "../assets/icons/dream-education.png";
import aspireNow from "../assets/icons/aspire-now.png";
import gutaCafe from "../assets/icons/GUTA-Cafe.png";
import { Link } from "react-router-dom";

const TrustedPartner = () => {
  const trustedPartners = [
    {
      id: 1,
      name: "Great Future Academy",
      logo: gfa,
      link: "https://www.facebook.com/GFAMM2023to2024",
    },
    {
      id: 2,
      name: "Dream Education",
      logo: dreamEdu,
      link: "https://www.facebook.com/dreameducation168",
    },
    {
      id: 3,
      name: "Aspire now",
      logo: aspireNow,
      link: "https://www.facebook.com/profile.php?id=61552851140427",
    },
    {
      id: 4,
      name: "GUTA Cafe",
      logo: gutaCafe,
      link: "https://www.facebook.com/profile.php?id=61552851140427",
    },
    // {
    //   id: 4,
    //   name: "Paing Paing Phyo",
    //   logo: "#",
    // },
  ];
  return (
    <section className="xs:my-10 md:my-30">
      <Container>
        <h1 className="text-heading font-bold text-iconic text-center">
          Trusted by
        </h1>
        <p className="text-center lg:w-200 md:w-150 xs:w-90 mx-auto">
          I have had the privilege of working with exceptional organizations that value innovation, quality, and excellence. These partnerships have allowed me to contribute my skills in design, development, and content creation to meaningful projects. Through collaboration with these trusted partners, I've gained valuable experience and helped deliver impactful solutions.
        </p>

        <div className="flex xs:flex-col md:flex-row justify-center items-center gap-10 mt-10 xs:mb-30 md:mb-50">
          {trustedPartners.map((partner) => (
            <Link
              to={partner.link}
              key={partner.id}
              className="flex items-center justify-center opacity-20"
              data-aos="fade-up"
            >
              <img src={partner.logo} alt={partner.name} className="h-20" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedPartner;
