import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate('/symptoms');
    }, 500); 
  };

  return (
    <div>
      <div className="navbar">
        <button className="navbar-button1">Home</button>
        <button className="navbar-button2">Logout</button>
      </div>
      <div className={`container`}>
        <div className="centered-container" onClick={handleClick}>
          <h2>Services we offer -&gt;</h2>
          <div className={`centered-text ${isClicked ? 'clicked' : ''}`}>
            <p className="p1">Disease prediction based on symptoms</p>
            <p className="p2" style={{ textAlign: 'initial' }}>
              Just enter your symptoms and we will give you a list of possible diseases
              and the specialist doctor in that field
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
