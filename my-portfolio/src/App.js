import React, { useState } from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  return (
    <div className="App ">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />

      <PortfolioContainer currentPage={currentPage} />

      <footer></footer>
    </div>
  );
}

export default App;
