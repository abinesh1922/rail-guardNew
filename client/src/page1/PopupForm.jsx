import React, { useState } from 'react';
import PNRDetails from '../components/PNRDetails';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrackOpen, setIsTrackOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [complaintNumber, setComplaintNumber] = useState('');
  const [journeyDetailType, setJourneyDetailType] = useState('');
  const [pnr, setPnr] = useState('');
  const [utsNumber, setUtsNumber] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [journeyType, setJourneyType] = useState('');
  const [pnrDetails, setPnrDetails] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedOption('');
      setJourneyDetailType('');
      setJourneyType('');
      setPnr('');
      setUtsNumber('');
      setTrainNumber('');
    }
  };
  const toggleTrackPopup = () => {
    setIsTrackOpen(!isTrackOpen);
  };

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    console.log('Tracking complaint number:', complaintNumber);
    toggleTrackPopup(); // Close the form after submission
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setJourneyDetailType('');
    setJourneyType('');
  };

  const handleJourneyDetailTypeChange = (e) => {
    setJourneyDetailType(e.target.value);
    setJourneyType(''); // Reset journeyType when changing journeyDetailType
  };

  const handleJourneyTypeChange = (e) => {
    setJourneyType(e.target.value);
  };

  const getPnrDetails = async () => {
    const url = `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnr}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'e7d85cdc3amsh12ac87321ec5226p1ab1e4jsn925dd991d83a',
        'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the JSON response
      setPnrDetails(result.data); // Assuming the structure has 'data' inside the response
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Option:', selectedOption);
    if (journeyDetailType === 'PNR' && pnr) {
      getPnrDetails();
    } else if (journeyDetailType === 'UTS') {
      console.log('UTS Number:', utsNumber);
      console.log('Train Number:', trainNumber);
      console.log('Type:', journeyType);
    }
    togglePopup(); // Close the form after submission
  };

  return (
    <div>
      <div className="button-container">
        <button className="complaint-button" onClick={togglePopup}>
          Complaint
        </button>

        <button className="track-button" onClick={toggleTrackPopup}>
          Track Your Concern
        </button>
      </div>

      {isOpen && (
        <div className="overlay">
          <div className="form-container">
            <h2>Select Options</h2>
            {!selectedOption && (
              <>
                <button className="option-button" onClick={() => handleOptionSelect('Train')}>
                  Train
                </button>
                <button className="option-button" onClick={() => handleOptionSelect('Station')}>
                  Station
                </button>
              </>
            )}

            {selectedOption === 'Train' && (
              <div>
                <h3>Journey Details</h3>
                <label>
                  <select
                    value={journeyDetailType}
                    onChange={handleJourneyDetailTypeChange}
                    className="suggestion-box"
                  >
                    <option value="">Select</option>
                    <option value="PNR">PNR</option>
                    <option value="UTS">UTS</option>
                  </select>
                </label>

                {journeyDetailType === 'PNR' && (
                  <div>
                    <label>
                      Enter PNR:
                      <input
                        type="text"
                        value={pnr}
                        onChange={(e) => setPnr(e.target.value)}
                        className="text-box"
                        placeholder="Enter PNR"
                      />
                    </label>
                  </div>
                )}

                {journeyDetailType === 'UTS' && (
                  <div>
                    <label>
                      Enter UTS Number:
                      <input
                        type="text"
                        value={utsNumber}
                        onChange={(e) => setUtsNumber(e.target.value)}
                        className="text-box"
                        placeholder="Enter UTS Number"
                      />
                    </label>
                    <label>
                      Enter Train Number:
                      <input
                        type="text"
                        value={trainNumber}
                        onChange={(e) => setTrainNumber(e.target.value)}
                        className="text-box"
                        placeholder="Enter Train Number"
                      />
                    </label>
                  </div>
                )}

                <button type="button" className="submit-button" onClick={handleSubmit}>
                  Submit
                </button>
                <button type="button" className="cancel-button" onClick={togglePopup}>
                  Close
                </button>
              </div>
            )}

            {selectedOption === 'Station' && (
              <div>
                <p>Station functionality goes here.</p>
                <button type="button" className="cancel-button" onClick={togglePopup}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {isTrackOpen && (
        <div className="overlay">
          <div className="form-container">
            <h2>Track Your Concern</h2>
            <form onSubmit={handleTrackSubmit}>
              <div>
                <label>Complaint Number:</label>
                <input
                  type="text"
                  name="complaintNumber"
                  value={complaintNumber}
                  onChange={(e) => setComplaintNumber(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="submit-button">
                Track
              </button>
              <button type="button" className="cancel-button" onClick={toggleTrackPopup}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      {pnrDetails && <PNRDetails pnrData={pnrDetails} />}
    </div>
  );
};

export default PopupForm;
