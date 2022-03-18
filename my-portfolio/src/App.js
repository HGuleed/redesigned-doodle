import React, { useState } from "react";
import PortfolioContainer from "./components/Portfolio";
import About from "./components/";

function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App container-fluid">
      <header className="App-header">
        <h1>Guleed, Hodan</h1>
        <PortfolioContainer />
      </header>
    </div>
  );
}

export default App;
