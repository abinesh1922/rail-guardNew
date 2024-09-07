import React from 'react';

const PNRDetails = ({ pnrData }) => {
  const {
    pnrNumber,
    dateOfJourney,
    trainNumber,
    trainName,
    sourceStation,
    destinationStation,
    reservationUpto,
    boardingPoint,
    journeyClass,
    numberOfpassenger,
    chartStatus,
    passengerList,
    bookingFare,
    ticketFare,
    quota,
    bookingDate,
    arrivalDate,
    distance,
  } = pnrData;

  return (
    <div className="pnr-details">
      <h1>PNR Details</h1>
      <p><strong>PNR Number:</strong> {pnrNumber}</p>
      <p><strong>Date of Journey:</strong> {dateOfJourney}</p>
      <p><strong>Train Number:</strong> {trainNumber}</p>
      <p><strong>Train Name:</strong> {trainName}</p>
      <p><strong>Source Station:</strong> {sourceStation}</p>
      <p><strong>Destination Station:</strong> {destinationStation}</p>
      <p><strong>Reservation Upto:</strong> {reservationUpto}</p>
      <p><strong>Boarding Point:</strong> {boardingPoint}</p>
      <p><strong>Class:</strong> {journeyClass}</p>
      <p><strong>Number of Passengers:</strong> {numberOfpassenger}</p>
      <p><strong>Chart Status:</strong> {chartStatus}</p>
      <p><strong>Booking Fare:</strong> ₹{bookingFare}</p>
      <p><strong>Ticket Fare:</strong> ₹{ticketFare}</p>
      <p><strong>Quota:</strong> {quota}</p>
      <p><strong>Booking Date:</strong> {bookingDate}</p>
      <p><strong>Arrival Date:</strong> {arrivalDate}</p>
      <p><strong>Distance:</strong> {distance} km</p>

      <h2>Passenger Details</h2>
      <ul>
        {passengerList.map((passenger, index) => (
          <li key={index}>
            <p><strong>Passenger {passenger.passengerSerialNumber}:</strong></p>
            <p><strong>Booking Status:</strong> {passenger.bookingStatusDetails}</p>
            <p><strong>Current Status:</strong> {passenger.currentStatusDetails}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PNRDetails;
