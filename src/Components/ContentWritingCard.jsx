import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';

const ContentWritingCard = ({portfolio}) => {
  const id = portfolio.id;
  return (
    <div className="p-3 bg-background flex flex-col justify-start items-start gap-3 text-font rounded-md">
      <img src={`${portfolio.images[0]}`} alt="Portfolio Card" className="w-full" />
      <div className="h-full flex flex-col items-start justify-start">
        <h1 className="2xl:text-2xl font-bold lg:text-xl sm:text-2xl">{portfolio.title}</h1>
        <h3 className="text-font-light 2xl:text-xl lg:text-sm sm:text-xl mb-2">{portfolio.type}</h3>
        <p className="mt-auto line-clamp-3 mb-5 sm:text-xl md:text-md">{portfolio.description}</p>
        <HashLink to={`/content-writings/${id}#content-writing-page`} className="bg-button  hover:bg-border hover:text-background border-1 border-border md:py-2 md:px-4 xs:py-2 xs:px-4 sm:text-xl md:text-md xs:text-sm rounded-md">More details</HashLink>
      </div>
    </div>
  )
}

export default ContentWritingCard