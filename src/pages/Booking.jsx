import React, { useState } from "react";
import "../styles/booking.css";
import { useNavigate } from 'react-router-dom'
const Booking = () => {
  const navigate = useNavigate();
  const place = JSON.parse(localStorage.getItem("place"));

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState(1);
  const [people, setPeople] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  if (!place) {
    navigate("/places", { replace: true });
    return null;
  }

  const total = place.price * people;

  const handleBooking = (e) => {
    e.preventDefault();

    const bookingData = {
      name,
      phone,
      email,
      address,
      startDate,
      days,
      people,
      total,
      placeName: place.name,
      placeCity: place.city
    };

    localStorage.setItem(
      "bookingData",
      JSON.stringify(bookingData)
    );

    setShowPopup(true);
  };

  const closePopup = () => {
    navigate("/places", { replace: true });
  };

  return (
    <div className="booking-page-container">
      <div className="booking-right-pane">
        <h1 className="booking-title">Book Your Trip</h1>
        <p className="booking-subtitle">{place.name}, {place.city}</p>

        <form onSubmit={handleBooking}>
          <div className="booking-form-group">
            <label>Your Name</label>
            <input
              className="booking-input"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="booking-form-group">
            <label>Contact Number</label>
            <input
              className="booking-input"
              placeholder="Enter phone number"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="booking-form-group">
            <label>Email</label>
            <input
              className="booking-input"
              placeholder="Enter email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="booking-form-group">
            <label>Address</label>
            <textarea
              className="booking-textarea"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="booking-form-group">
            <label>Start Date</label>
            <input
              className="booking-input"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="booking-form-group">
            <label>Trip Duration (Days)</label>
            <input
              className="booking-input"
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              required
            />
          </div>

          <div className="booking-form-group">
            <label>Number of Travelers</label>
            <input
              className="booking-input"
              type="number"
              min="1"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              required
            />
          </div>

          <div className="booking-summary">
            <div className="summary-row">Cost per person ₹{place.price}</div>
            <div className="summary-row">Number of travelers x {people}</div>
            <div className="total-cost-row">Total Cost ₹{total}</div>
          </div>

          <button type="submit" className="confirm-booking-btn">
            Confirm Booking
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="booking-popup-overlay">
          <div className="booking-popup-card">
            <h2>Booking Confirmed!</h2>
            <p className="popup-thanks">
              Thank you, {name}! Your trip has been booked.
            </p>
            <div className="popup-details">
              <p><strong>Destination:</strong> {place.name}</p>
              <p><strong>Travelers:</strong> {people}</p>
              <p><strong>Start Date:</strong> {startDate}</p>
              <p><strong>Duration:</strong> {days} Days</p>
              <p><strong>Total Paid:</strong> ₹{total}</p>
            </div>
            <button className="popup-close-btn" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;