import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MethodsProvider from "../Context/MethodsProvider";
import Header from "./recycle-bin/Header";
import VersionProvider from "../Context/VersionProvider";
import ScrollToTop from "./ScrollToTop";

const MainLayout = ({ version }) => {
  return (
    <>
      <VersionProvider>
        <MethodsProvider>
          <ScrollToTop />
          <Navigation />
          {/* <Header /> */}
          <Outlet />
          <Footer version={version} />
        </MethodsProvider>
      </VersionProvider>
    </>
  );
};

export default MainLayout;
