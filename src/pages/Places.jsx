import React, { useState, useEffect } from "react";
import "../styles/style.css";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Places = () => {
  const country = localStorage.getItem("country");
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const allPlaces = JSON.parse(localStorage.getItem("places")) || [];
    const filtered = allPlaces.filter(p => p.country === country);
    setSelectedPlaces(filtered);
  }, [country]);

  const openDetails = (place) => {
    localStorage.setItem("place", JSON.stringify(place));
    navigate("/details");
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
    navigate("/countries");
  };

  return (
    <div className="countries-page">
      <div className="countries-header">
        <button className="back-btn-text" onClick={goBack}>
          — Back
        </button>
        <h1 className="countries-title">{country}</h1>
        <button className="logout-btn-top" onClick={handleLogout}>Logout</button>
      </div>

      <div className="places-grid">
        {selectedPlaces.length === 0 && <p style={{ color: 'white' }}>No places available for {country}. Please ask an admin to add some.</p>}
        {selectedPlaces.map((place, index) => {
          const imageSrc = place.image1 || (place.images && place.images[0]) || "";
          const totalPrice = place.price || (Number(place.travel) + Number(place.stay) + Number(place.food));

          return (
            <div
              key={index}
              className="place-item-card"
              onClick={() => openDetails(place)}
            >
              <div className="place-img-wrap">
                <img src={imageSrc} alt={place.name} />
              </div>

              <div className="place-info">
                <h3 className="place-name">{place.name}</h3>

                <div className="place-price-row">
                  <span>From ₹{totalPrice}</span>
                  <span className="place-arrow">›</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Places;