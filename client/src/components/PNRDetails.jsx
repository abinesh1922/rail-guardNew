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
      <table>
        <tbody>
          <tr>
            <th>PNR Number:</th>
            <td>{pnrNumber}</td>
          </tr>
          <tr>
            <th>Date of Journey:</th>
            <td>{dateOfJourney}</td>
          </tr>
          <tr>
            <th>Train Number:</th>
            <td>{trainNumber}</td>
          </tr>
          <tr>
            <th>Train Name:</th>
            <td>{trainName}</td>
          </tr>
          <tr>
            <th>Source Station:</th>
            <td>{sourceStation}</td>
          </tr>
          <tr>
            <th>Destination Station:</th>
            <td>{destinationStation}</td>
          </tr>
          <tr>
            <th>Reservation Upto:</th>
            <td>{reservationUpto}</td>
          </tr>
          <tr>
            <th>Boarding Point:</th>
            <td>{boardingPoint}</td>
          </tr>
          <tr>
            <th>Class:</th>
            <td>{journeyClass}</td>
          </tr>
          <tr>
            <th>Number of Passengers:</th>
            <td>{numberOfpassenger}</td>
          </tr>
          <tr>
            <th>Chart Status:</th>
            <td>{chartStatus}</td>
          </tr>
          <tr>
            <th>Booking Fare:</th>
            <td>₹{bookingFare}</td>
          </tr>
          <tr>
            <th>Ticket Fare:</th>
            <td>₹{ticketFare}</td>
          </tr>
          <tr>
            <th>Quota:</th>
            <td>{quota}</td>
          </tr>
          <tr>
            <th>Booking Date:</th>
            <td>{bookingDate}</td>
          </tr>
          <tr>
            <th>Arrival Date:</th>
            <td>{arrivalDate}</td>
          </tr>
          <tr>
            <th>Distance:</th>
            <td>{distance} km</td>
          </tr>
        </tbody>
      </table>

      <h2>Passenger Details</h2>
      <table>
        <tbody>
          {passengerList.map((passenger, index) => (
            <tr key={index}>
              <th>Passenger {passenger.passengerSerialNumber}:</th>
              <td>
                <strong>Booking Status:</strong> {passenger.bookingStatusDetails}<br />
                <strong>Current Status:</strong> {passenger.currentStatusDetails}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PNRDetails;
