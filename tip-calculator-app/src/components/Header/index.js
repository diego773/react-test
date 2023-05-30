import React from "react";
import "./style.css";

function Header() {
  const titleHeader = "splitter".toUpperCase();

  return (
    <header>
      <h1 className="header">{titleHeader}</h1>
    </header>
  );
}

export default Header;
