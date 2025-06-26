import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainPage from "./Pages/MainPage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import VersionProvider from "./Context/VersionProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <VersionProvider>
    <RouterProvider router={router} />
  </VersionProvider>
);
