import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MethodsProvider from "../Context/MethodsProvider";
import Header from "./recycle-bin/Header";

const MainLayout = () => {
  return (
    <>
      <MethodsProvider>
        <Navigation />
        {/* <Header /> */}
        <Outlet />
        <Footer />
      </MethodsProvider>
    </>
  );
};

export default MainLayout;
