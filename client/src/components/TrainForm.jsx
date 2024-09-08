// TrainForm.js
import React, { useState } from 'react';

const TrainForm = ({ onPnrDetails, togglePopup }) => {
  const [journeyDetailType, setJourneyDetailType] = useState('');
  const [pnr, setPnr] = useState('');
  const [utsNumber, setUtsNumber] = useState('');
  const [trainNumber, setTrainNumber] = useState('');
  const [journeyType, setJourneyType] = useState('');

  const getPnrDetails = async () => {
    const url = `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnr}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '124168e761mshdf34f56ed178e3ep16c86ejsn718459be533c',
        'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json(); // Parse the JSON response
      onPnrDetails(result.data); // Pass the details up to parent
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <h3>Journey Details</h3>
      <label>
        <select
          value={journeyDetailType}
          onChange={(e) => setJourneyDetailType(e.target.value)}
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
  );
};

export default TrainForm;
