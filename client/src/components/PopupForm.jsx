// PopupForm.js
import React, { useState } from 'react';
import PNRDetails from './PNRDetails';
import TrainForm from './TrainForm';
import TrackForm from './TrackForm';

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrackOpen, setIsTrackOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [pnrDetails, setPnrDetails] = useState(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setSelectedOption('');
    }
  };

  const toggleTrackPopup = () => {
    setIsTrackOpen(!isTrackOpen);
  };

  const handlePnrDetails = (details) => {
    setPnrDetails(details);
  };

  return (
    <div>
      <div className="sidebar">
        <button className="button complaint-button" onClick={togglePopup}>
          Complaint
        </button>
        <button className="button track-button" onClick={toggleTrackPopup}>
          Track Your Concern
        </button>
        <button className="button assist-button" onClick={toggleTrackPopup}>
          Assistance
        </button>
      </div>

      {isOpen && (
        <div className="overlay">
          <div className="form-container">
            <h2>Select Options</h2>
            {!selectedOption && (
              <>
                <button className="option-button" onClick={() => setSelectedOption('Train')}>
                  Train
                </button>
                <button className="option-button" onClick={() => setSelectedOption('Station')}>
                  Station
                </button>
              </>
            )}
            {selectedOption === 'Train' && (
              <TrainForm onPnrDetails={handlePnrDetails} togglePopup={togglePopup} />
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
            <TrackForm toggleTrackPopup={toggleTrackPopup} />
          </div>
        </div>
      )}

      {pnrDetails && <PNRDetails pnrData={pnrDetails} />}
    </div>
  );
};

export default PopupForm;
