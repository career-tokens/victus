import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src="" alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Predict Your Disease without stepping out of your home
          </h1>
          <p className="primary-text">
          AI does it all for you while going through loads of data.
          </p>
          <button onClick={()=>{navigate("/symptoms")} } className="secondary-button">
            Predict Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img className="image-1" src="https://t3.ftcdn.net/jpg/02/84/82/20/360_F_284822080_hfz9ROJ4zdQyWtva3nIqFs611aMe3GEa.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
