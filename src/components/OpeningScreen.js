import React from 'react';
import "./OpeningScreen.css";
import logo from "../victus_logo.jpg";

const OpeningScreen = () => {
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="name">
          <p className="Name">VICTUS</p>
        </div>
        <div className="lines">
        <p className="line">24x7</p>
        <p className="line">Changing lives for the better!</p>
      </div>
      </div>
    </div>
  );
};

export default OpeningScreen;
