// TrackForm.js
import React, { useState } from 'react';

const TrackForm = ({ toggleTrackPopup }) => {
  const [complaintNumber, setComplaintNumber] = useState('');

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    console.log('Tracking complaint number:', complaintNumber);
    toggleTrackPopup(); // Close the form after submission
  };

  return (
    <div>
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
  );
};

export default TrackForm;
