import React from 'react';
import "./OpeningScreen.css";
import logo from "../victus_logo.jpg";
import { useNavigate } from "react-router-dom";

const OpeningScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="main1">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className="name">
          <p className="Name">𝕍𝕀ℂ𝕋𝕌𝕊</p>
        </div>
        <div className="lines">
        <p className="line">24x7</p>
        <p className="line">Changing lives for the better!</p>
        </div>
        <button className="btn" onClick={()=>{navigate("/login")}}>Try for free!</button>
      </div>
    </div>
  );
};

export default OpeningScreen;
