import React from "react";

const Confirmation = () => {
  const booking = JSON.parse(
    localStorage.getItem("bookingData")
  );

  const place = JSON.parse(localStorage.getItem("place"));

  return (
    <div>
      <h1>Booking Confirmed</h1>

      <h2>
        Thank you {booking.name}
      </h2>

      <p>Destination: {place.name}</p>

      <p>Travelers: {booking.people}</p>

      <p>Total: ₹{booking.total}</p>
    </div>
  );
};

export default Confirmation;