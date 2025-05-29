import React from 'react'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <>
    <Navigation />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout