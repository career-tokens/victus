import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src="" alt="" />
      </div>
      <div className="about-section-image-container">
        <img style={{ border: "3px solid lightseagreen", borderRadius: "20px" }} src="https://img.freepik.com/premium-vector/humand-robot-doctor-robotic-technology-medical-industry-idea-healthcare-illustration_277904-2867.jpg?w=2000" alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Doctors and AI can work together
        </h1>
        <p className="primary-text">
          Doctor have collected over the years which is now processed by AI to give instant results based on your symptoms.
        </p>
        <p className="primary-text">
          When doctors and AI come together , it leads to something great for the humanity.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
