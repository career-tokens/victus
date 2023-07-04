import React from 'react';
import './Note.css';
import { useNavigate } from "react-router-dom";

const Note = () => {
    const navigate = useNavigate();

  return (
    <div className="note">
      <h2>Note:</h2>
      <h2>CALL AMBULANCE (108/112) IMMEDIATELY IF:</h2>
      <h3>Heart Attack Symptoms:</h3>
      <p>
        Chest pain or discomfort lasting for two minutes or more / Severe abdominal pain or pressure /
        Unusual headache / Sudden, severe pain anywhere in the body / Fainting or loss of consciousness /
        Bluish skin color (cyanosis)
      </p>

      <h3>Stroke Symptoms:</h3>
      <p>
        Change in mental status (such as unusual behavior, confusion, difficulty arousing) / Sudden dizziness,
        weakness, or change in vision / Inability to speak / Severe headache / Fainting or loss of consciousness /
        Numbness or weakness of the face, arm, or leg, especially on one side of the body / Trouble or abnormal breathing
      </p>

      <h3>Other Emergency Symptoms:</h3>
      <p>
        Bleeding that will not stop / Choking / Coughing up or vomiting blood / Weak or ineffective coughing /
        Sudden injury due to a motor vehicle accident, burns or smoke inhalation, near drowning, a deep or large wound,
        or other injuries / Swallowing a poisonous substance / Feeling of committing suicide or murder /
        Head or spine injury / Severe or persistent vomiting / Unusual headache / Swelling of the face, eyes, or tongue
      </p>

      <p>
        Note: If you or someone you know is experiencing any of these symptoms, it is important to seek immediate medical
        attention by calling emergency services in your country.
      </p>
      
      <hr style={{ backgroundColor: 'white', height: '3px', border: 'none', margin: '20px 0' }} />
      
      <h2 style={{ color: 'white' }}>If it is not an emergency, you can continue:</h2>
      <button className="continue-button" onClick={()=>{navigate("/login")}}>Continue</button>
    </div>
  );
}

export default Note;
