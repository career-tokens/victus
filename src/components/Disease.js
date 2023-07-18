import React, { useState, useEffect } from 'react';
import '.././Diseases';
import { Symptoms } from '.././Symptoms';
import "./Disease.css"

const Disease = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filteredSymptoms, setFilteredSymptoms] = useState([]);

  useEffect(() => {
    setFilteredSymptoms(filterSymptoms(Symptoms));
  }, [filterText]);//make sure the dependency is there or on the change of input text , the dropdown array
  //will not get updated and hence no re render 
  

  const filterSymptoms = (symptomsData) => {
    if (filterText === '') {
      return symptomsData;
    }
  
    return symptomsData.filter((symptom) =>
      symptom.toLowerCase().startsWith(filterText.toLowerCase())
    );
  };
   

  const handleInputChange = (e) => {
    setFilterText(e.target.value);
    //setFilteredSymptoms(filterSymptoms(Symptoms));
    //u cant place two state changes together since they get piled 
    //here first filtertext executed and render dn but array not updated but on goin gback to null
    // the piled down filtered symptoms get executed such that the req search array (like "barking cough",...)
    //is shown so signs of piling up yet a prob since it should be simultaneous
  };

  const handleSymptomSelect = (selectedSymptom) => {
    if (selectedSymptoms.includes(selectedSymptom)) {
      setSelectedSymptoms((prevSelectedSymptoms) =>
        prevSelectedSymptoms.filter((symptom) => symptom !== selectedSymptom)
      );
    } else {
      setSelectedSymptoms((prevSelectedSymptoms) => [...prevSelectedSymptoms, selectedSymptom]);
    }
  };
  
  

  const handleSymptomDeselect = (deselectedSymptom) => {
    setSelectedSymptoms((prevSelectedSymptoms) =>
      prevSelectedSymptoms.filter((symptom) => symptom !== deselectedSymptom)
    );
  };

  //see how the css checkbox is working

  return (
    <div>
      <div className="middle">
      <div class="inputbox">
          <input  required="required" type="text"  value={filterText} onChange={handleInputChange} />
          <span>Search Symptoms</span>
          <i></i>
      </div>
        <div className="symptoms-list">
          {filteredSymptoms.map((symptom) => (
            <div className="check-symp">
            <label class="container">
            <input
                type="checkbox"
                checked={selectedSymptoms.includes(symptom)}
                onChange={() => handleSymptomSelect(symptom)}
              />
            <div class="checkmark"></div>
          </label>
            <div
              className="single"
              key={symptom}
              onClick={() => handleSymptomSelect(symptom)}
              style={{ cursor: 'pointer' }}
            >
              {symptom}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {selectedSymptoms.length > 0 && (
          <div className="selec-symp">
            <button className="custom-btn btn-1">Selected Symptoms</button>
            {selectedSymptoms.map((symptom) => (
              <div key={symptom} onClick={() => handleSymptomDeselect(symptom)}>
                {symptom}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Disease;
