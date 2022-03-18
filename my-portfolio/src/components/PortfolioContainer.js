import React, { useState } from "react";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NavBar from "./NavBar";

function PortfolioContainer({ currentPage }) {
  function displayPage() {
    switch (currentPage) {
      case "Contact":
        return <Contact />;

      case "Resume":
        return <Resume />;

      case "Portfolio":
        return <Portfolio />;

      default:
        return <About />;
    }
  }
  return <div className="">{displayPage()}</div>;
}

export default PortfolioContainer;
