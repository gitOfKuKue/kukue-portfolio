import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MethodsProvider from "../Context/MethodsProvider";

const MainLayout = () => {
  return (
    <>
      <MethodsProvider>
        <Navigation />
        <Outlet />
        <Footer />
      </MethodsProvider>
    </>
  );
};

export default MainLayout;
