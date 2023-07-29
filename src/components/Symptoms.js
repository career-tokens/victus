import React, { useState, useEffect } from 'react';
import '../Diseases';
import { Symptoms } from '../Symptoms';
import "./Symptoms.css"
import { CloseButton } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

const Disease = () => {
  const navigate = useNavigate();

  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filteredSymptoms, setFilteredSymptoms] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // New state for loading button

  useEffect(() => {
    setFilteredSymptoms(filterSymptoms(Symptoms));
  }, [filterText]);

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

  const handleSubmit = () => {
    setIsLoading(true); // Start loading state

    // Simulate an asynchronous operation
    setTimeout(() => {
      // Perform submission logic here

      navigate('/disease', { state: selectedSymptoms });
      setIsLoading(false); // End loading state
    }, 2000); // Simulating a 2-second delay before submission logic completes
  };

  return (
    <div>
      <div className="middle">
        <div className="inputbox">
          <input required="required" type="text" value={filterText} onChange={handleInputChange} />
          <span>Search Symptoms</span>
          <i></i>
        </div>
        <div className="symptoms-list">
          {filteredSymptoms.map((symptom) => (
            <div className="check-symp">
              <label className="container">
                <input
                  type="checkbox"
                  checked={selectedSymptoms.includes(symptom)}
                  onChange={() => handleSymptomSelect(symptom)}
                />
                <div className="checkmark"></div>
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
      <div className="sup-selec">
        
          <div className="selec-symp">
          <button className="custom-btn btn-1">Selected Symptoms</button>
          {selectedSymptoms.length === 0 && (
            <div className="none">
              Nothing selected yet!
            </div>
          )}
          {selectedSymptoms.length > 0 && (
            <div className="selected">
              {selectedSymptoms.map((symptom) => (
                <div  className="single2" onClick={() => handleSymptomDeselect(symptom)}>
                  <CloseButton size='lg' />
                  <div
                    className="single1"
                    key={symptom}
                    style={{ cursor: 'pointer' }}
                  >
                    {symptom}
                  </div>
                </div>
              ))}
            </div>
          )}
                   </div>
      </div>
      <div className="submit">
        <Button
          isLoading={isLoading} // Pass isLoading state to the button
          loadingText='Submitting'
          colorScheme='teal'
          variant='outline'
          onClick={handleSubmit} // Call handleSubmit function on button click
          isDisabled={selectedSymptoms.length === 0}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Disease;
