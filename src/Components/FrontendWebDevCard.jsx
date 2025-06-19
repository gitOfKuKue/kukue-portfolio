import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const FrontendWebDevCard = ({portfolio}) => {
  const id = portfolio.id;
  return (
    <div className="sm:p-5 xs:p-2 bg-aboutme flex flex-col justify-start items-start gap-3 text-font rounded-md">
      <img src={`${portfolio.images[0]}`} alt="Portfolio Card" className="w-full" />
      <div className="h-full flex flex-col items-start justify-start">
        <h1 className="text-2xl font-bold">{portfolio.title}</h1>
        <h3 className="text-font-light mb-4">{portfolio.type}</h3>
        <p className="line-clamp-3 mb-5">{portfolio.description}</p>
        <HashLink to={`/frontend-developments/${id}#frontend-web-dev-page`} className="bg-button  hover:bg-border hover:text-background border-1 border-border py-2 px-4 mt-auto rounded-md">More details</HashLink>
      </div>
    </div>
  )
}

export default FrontendWebDevCard