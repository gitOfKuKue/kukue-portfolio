import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import MethodsContext from "../Context/MethodsContext";

const Services = ({ service }) => {
  const date = new Date();
  const { selectedCategory, portfolioFilter, categoryMenuHandler } = useContext(MethodsContext);

  const handlePortfolioFilter = (e) => {
    portfolioFilter(e);
    categoryMenuHandler(e);
  }


  return (
    <HashLink
      to={`#${service.toSection}`}
      className="service-card bg-aboutme text-font hover:text-background md:p-10 xs:p-5 xl:w-[350px] lg:w-[280px] xl:h-[340px] lg:h-[300px] flex flex-col justify-start items-start rounded-md"
      data-aos="fade-up"
      onClick={() => handlePortfolioFilter("all")}
    >
      <FontAwesomeIcon
        icon={service.icon}
        className="service-card-icon xl:text-7xl md:text-3xl xs:text-6xl mb-5 text-iconic"
      />
      <p className="text-sm text-font-light">
        {date.getFullYear() - service.experience} yr+ experience of{" "}
      </p>
      <h1 className="xl:text-2xl lg:text-xl sm:text-2xl md:my-0 sm:mb-3 font-bold">
        {service.title}
      </h1>
      <p className="mt-auto text-font-light xl:text-18 lg:text-sm line-clamp-3">
        {service.description}
      </p>
    </HashLink>
  );
};

export default Services;
