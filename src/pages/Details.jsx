import React, { useState, useEffect } from "react";
import "../styles/details.css";
import { useNavigate } from 'react-router-dom'
const Details = () => {
  const place = JSON.parse(localStorage.getItem("place"));
  const [weather, setWeather] = useState({ temp: null, desc: "Loading..." });
  const navigate = useNavigate();
  useEffect(() => {
    if (!place) return;
    // Admin uses 'name' for place name, sometimes 'city' wasn't captured, so fallback to 'name'
    const searchQuery = place.city || place.name;
    if (!searchQuery) return;

    const fetchWeather = async () => {
      try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(searchQuery)}&count=1`);
        const geoData = await geoRes.json();
        
        if (!geoData.results || geoData.results.length === 0) {
          setWeather({ temp: "--", desc: "Location not found" });
          return;
        }

        const { latitude, longitude } = geoData.results[0];

        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherRes.json();

        const w = weatherData.current_weather;
        
        const wmoMap = {
          0: "Clear sky",
          1: "Mainly clear", 2: "Partly cloudy", 3: "Overcast",
          45: "Fog", 48: "Depositing rime fog",
          51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle",
          61: "Light rain", 63: "Rain", 65: "Heavy rain",
          71: "Light snow", 73: "Snow", 75: "Heavy snow",
          80: "Rain showers", 81: "Heavy rain showers",
          95: "Thunderstorm"
        };
        
        const desc = wmoMap[w.weathercode] || "Variable conditions";
        setWeather({ temp: w.temperature, desc });

      } catch (err) {
        console.error(err);
        setWeather({ temp: "--", desc: "Weather unavailable" });
      }
    };

    fetchWeather();
  }, [place?.city, place?.name]);

  if (!place) {
    navigate("/places", { replace: true });
    return null;
  }

  const goBack = () => {
    navigate("/places", { replace: true });
  };

  const travelCost = place.travel ? Number(place.travel) : Math.floor(place.price * 0.7);
  const stayCost = place.stay ? Number(place.stay) : Math.floor(place.price * 0.2);
  const foodCost = place.food ? Number(place.food) : (place.price ? place.price * 0.1 : 0);
  const totalPrice = place.price || (travelCost + stayCost + foodCost);

  const imageSrc = place.image1 || (place.images && place.images[0]) || "";
  const description = place.description || `${place.name} is one of the most beautiful tourist destinations. Enjoy unforgettable experience with amazing views and culture.`;

  // We should also update the local storage with the total price if it was calculated from parts,
  // so Booking.jsx gets the correct price
  const handleBooking = () => {
    const placeToBook = {
      ...place,
      price: totalPrice,
      city: place.city || place.name
    };
    localStorage.setItem("place", JSON.stringify(placeToBook));
    navigate("/booking", { replace: true });
  };

  return (
    <div className="details-page-wrapper">
      <div className="details-header">
        <button className="back-btn-text" onClick={goBack}>
          <span className="back-arrow">←</span> Back to Places
        </button>
      </div>

      <div className="details-container">
        <div className="details-left">
          <img src={imageSrc} alt={place.name} />
        </div>

        <div className="details-right">
          <h1 className="details-title">{place.name}</h1>
          <p className="details-description">
            {description}
          </p>

          <div className="details-card">
            <h3 className="card-heading">Price Breakdown</h3>
            <div className="price-breakdown-box">
              <div className="price-row">
                <span>Travel Cost</span>
                <span>₹{travelCost}</span>
              </div>
              <div className="price-row">
                <span>Stay Cost</span>
                <span>₹{stayCost}</span>
              </div>
              <div className="price-row">
                <span>Food Cost</span>
                <span>₹{foodCost}</span>
              </div>
            </div>
            
            <div className="total-row">
              <span className="total-label">Total per Person</span>
              <span className="total-amount">₹{totalPrice}</span>
            </div>
          </div>

          <div className="details-card weather-card">
            <h3 className="card-heading">Current Weather</h3>
            <p>
              {weather.temp !== null ? `${weather.temp}°C | ${weather.desc}` : weather.desc}
            </p>
          </div>

          <button
            className="book-btn"
            onClick={handleBooking}
          >
            Book This Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;