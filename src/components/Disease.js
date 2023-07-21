import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Diseases } from '../Diseases';
import "./Disease.css"
import { useNavigate } from 'react-router-dom';

const Disease = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: selectedSymptoms } = location;
    console.log(selectedSymptoms);//this is one way of sending data using navigate's state and useLocation
    //another way is localStorage
  
    const getMatchingDiseases = () => {
        if (!selectedSymptoms || selectedSymptoms.length === 0) {
          return [];
        }
    
        const matchingDiseases = Object.entries(Diseases).filter(([disease, symptoms]) => {
          return selectedSymptoms.some((symptom) => symptoms.includes(symptom));
        });
    
        return matchingDiseases.map(([disease]) => disease);
      };
    
      const matchingDiseases = getMatchingDiseases();
    
      // ... Rest of the component code
    
      return (
          <div className="main">
              <div className="heading">Matching Diseases:</div>
              <div className="diseases">
            {matchingDiseases.length > 0 ? (
              <div className="box">
                
                  {matchingDiseases.map((disease) => (
                      <div className="list-item">{disease}</div>
                  ))}
               
              </div>
            ) : (
              <div>No matching diseases found.</div>
            )}
          </div>
          <div className="home" onClick={()=>{navigate("/home")}}>
            Go to Home
          </div>
        </div>
      );
    };
    
    export default Disease;
