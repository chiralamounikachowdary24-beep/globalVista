import React, { useState, useEffect } from "react";
import "../styles/style.css";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [allPlaces, setAllPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCountries = JSON.parse(localStorage.getItem("countries")) || [];
    const storedPlaces = JSON.parse(localStorage.getItem("places")) || [];
    setCountries(storedCountries);
    setAllPlaces(storedPlaces);
  }, []);

  const selectCountry = (country) => {
    localStorage.setItem("country", country.name);
    navigate("/places");
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove("jwt_token");
      localStorage.removeItem("role");
      localStorage.removeItem("country");
      localStorage.removeItem("place");
      navigate("/", { replace: true });
    } catch (e) {
      console.error("Logout error:", e);
      Cookies.remove("jwt_token");
      localStorage.clear();
      navigate("/", { replace: true });
    }
  };

  const goBack = () => {
    navigate("/home");
  };

  return (
    <div className="countries-page">
      <div className="countries-header">
        <button className="back-btn-text" onClick={goBack}>
          <span className="back-arrow">←</span> Back
        </button>
        <h1 className="countries-title">Choose Your Destination</h1>
        <button className="logout-btn-top" onClick={handleLogout}>Logout</button>
      </div>

      <div className="countries-grid">
        {countries.length === 0 && <p style={{ color: 'white' }}>No countries available. Please ask an admin to add some.</p>}
        {countries.map((country, index) => {
          const countryPlaces = allPlaces.filter(p => p.country === country.name);
          const placesCount = countryPlaces.length;

          return (
            <div
              className="destination-card"
              key={index}
              onClick={() => selectCountry(country)}
            >
              <div className="card-image-wrapper">
                <img src={country.image} alt={country.name} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{country.name}</h3>
                <p className="card-subtitle">{placesCount} Places</p>
                <div className="card-footer">
                  <span className="explore-text">Explore Now</span>
                  <span className="explore-arrow">›</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Countries;