import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage";
import MainPage from "../Pages/MainPage";
import CurriculumVitae from "../Pages/CurriculumVitae";
import MainLayout from "../Components/MainLayout";
import Testing from "../Components/Testing";
import ContactMe from "../Pages/ContactMe";
import GraphicDesignPage from "../Pages/GraphicDesignPage";
import ContentWritingPage from "../Pages/ContentWritingPage";
import FrontendDevPage from "../Pages/FrontendDevPage";
import Profile from "../Pages/Profile";
import UnderMaintenance from "../Pages/UnderMaintenance";
import Feedback from "../Pages/Feedback";
import TextLoader from "../Pages/TextLoader";
import { useContext } from "react";
import VersionNotes from "../Components/DOC/VersionNotes";
import PortfolioContainer from "../Pages/Portfolios_3_6_65/PortfolioContainer";

const isMaintenanceMode = false;

const router = isMaintenanceMode
  ? createBrowserRouter([
      {
        path: "*", // catch all routes
        element: <UnderMaintenance />,
      },
    ])
  : createBrowserRouter([
      {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <MainPage />,
          },
          {
            path: "cv",
            element: <CurriculumVitae />,
          },
          {
            path: "contact-me",
            element: <ContactMe />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "versions",
            element: <VersionNotes />
          },
          {
            path: "portfolio-container",
            element: <PortfolioContainer />
          },
          {
            path: "graphicDesign/:productId",
            element: <GraphicDesignPage />,
          },
          {
            path: "contentWriting/:productId",
            element: <ContentWritingPage />,
          },
          {
            path: "frontendWebDev/:productId",
            element: <FrontendDevPage />,
          },
          {
            path: "feedback",
            element: <Feedback />,
          },
          {
            path: "testing",
            element: <Testing />,
          },
        ],
      },
    ]);

export default router;
