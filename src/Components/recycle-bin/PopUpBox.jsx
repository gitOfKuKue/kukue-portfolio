// import React from 'react'
// import error_pic from "../assets/images/Feeling-sorry-rafiki.svg"
// import success_pic from "../assets/images/Enthusiastic-amico.svg"
// import { Outlet } from 'react-router-dom'

const PopUpBox = ({className, msg, type, children}) => {
  return (
    <div className={`${className} flex flex-col items-center absolute translate-[-50%] left-[50%] top-[50%] bg-aboutme min-w-150 p-5 blur-none`}>
        <img src={type === "error" ? error_pic : success_pic} alt={type} className='w-50'/>
        <h1 className={`${type === "error" ? "text-red-500" : "text-green-500"} text-2xl`}>{msg}</h1>
        {children}
    </div>
  )
}

export default PopUpBox