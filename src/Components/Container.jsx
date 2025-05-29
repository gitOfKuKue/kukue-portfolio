import React from 'react'

const Container = ({children, className}) => {
  return (
    <div className={`m-auto 2xl:w-[1300px] xl:w-[1100px] lg:w-[900px] md:w-[800px] sm:w-[600px] xs:w-[300px] ${className}`}>{children}</div>
  )
}

export default Container