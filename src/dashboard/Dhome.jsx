import React, { useState } from "react";
import "./css/dhome.css";

const Dhome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <h1>working</h1>
      <div className={`side-navbar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleNavbar}>
        {/* Add your toggle button or icon here */}
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      {/* Add your navigation links or components here */}
      <ul className="nav-links">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        {/* Add more links as needed */}
      </ul>
    </div>
    </>
  );
};

export default Dhome;
