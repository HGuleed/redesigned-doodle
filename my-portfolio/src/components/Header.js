import React from "react";
import NavBar from "./NavBar";

function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="App-header ">
      <h1>Guleed, Hodan</h1>
      <NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </header>
  );
}

export default Header;
