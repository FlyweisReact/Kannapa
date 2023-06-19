/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MyContextProvider } from "./Components/MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContextProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MyContextProvider>
);
