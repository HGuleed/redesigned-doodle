import React, { useState } from "react";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function displayPage() {
  const [currentPage, setCurrentPage] = useState("About");

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

function PortfolioContainer() {
  return <div>{displayPage()}</div>;
}

export default PortfolioContainer;
