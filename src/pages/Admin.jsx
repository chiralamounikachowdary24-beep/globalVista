import React, { useState, useEffect } from "react";
import "../styles/admin.css";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { defaultCountries, defaultPlaces } from "../data/defaultData";

const Admin = () => {
  const navigate = useNavigate();
  // TAB STATE
  const [activeTab, setActiveTab] = useState("country");

  // COUNTRY FORM
  const [countryName, setCountryName] = useState("");
  const [countryImage, setCountryImage] = useState("");

  // PLACE FORM
  const [selectedCountry, setSelectedCountry] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [travel, setTravel] = useState("");
  const [stay, setStay] = useState("");
  const [food, setFood] = useState("");

  // DATA STORAGE
  const [countries, setCountries] = useState(() => {
    let saved = JSON.parse(localStorage.getItem("countries"));
    if (!saved || saved.length === 0) {
      saved = defaultCountries;
      localStorage.setItem("countries", JSON.stringify(saved));
    }
    return saved;
  });

  const [places, setPlaces] = useState(() => {
    let saved = JSON.parse(localStorage.getItem("places"));
    if (!saved || saved.length === 0) {
      saved = defaultPlaces;
      localStorage.setItem("places", JSON.stringify(saved));
    }
    return saved;
  });

  // SAVE TO LOCALSTORAGE ON CHANGE
  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  useEffect(() => {
    localStorage.setItem("places", JSON.stringify(places));
  }, [places]);

  // LOGOUT
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
      localStorage.removeItem("role");
      localStorage.removeItem("country");
      localStorage.removeItem("place");
      navigate("/", { replace: true });
    }
  };


  // ADD COUNTRY
  const addCountry = () => {
    if (!countryName || !countryImage) {
      alert("Please fill all fields");
      return;
    }

    const newCountry = {
      id: Date.now(),
      name: countryName,
      image: countryImage,
    };

    setCountries([newCountry, ...countries]); // Add to top

    setCountryName("");
    setCountryImage("");

    alert("Country Added Successfully");
  };

  // ADD PLACE
  const addPlace = () => {
    if (!selectedCountry || !placeName) {
      alert("Please fill required fields");
      return;
    }

    const newPlace = {
      id: Date.now(),
      country: selectedCountry,
      name: placeName,
      description,
      image,
      image2,
      travel,
      stay,
      food,
    };

    setPlaces([...places, newPlace]);

    // CLEAR FORM
    setPlaceName("");
    setDescription("");
    setImage("");
    setImage2("");
    setTravel("");
    setStay("");
    setFood("");

    alert("Place Added Successfully");
  };

  return (
    <div className="admin-wrapper">
      {/* LOGOUT BUTTON */}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>

      <div className="container">
        {/* TAB BUTTONS */}
        <div className="tabs-container">
          <button
            className={`tab-btn ${activeTab === "country" ? "active" : ""}`}
            onClick={() => setActiveTab("country")}
          >
            Add Country
          </button>

          <button
            className={`tab-btn ${activeTab === "place" ? "active" : ""}`}
            onClick={() => setActiveTab("place")}
          >
            Add Place
          </button>
        </div>

        {/* COUNTRY FORM */}
        {activeTab === "country" && (
          <div className="card">
            <h2>Add New Country</h2>

            <input
              type="text"
              className="form-input"
              placeholder="Country Name"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
            />

            <input
              type="text"
              className="form-input"
              placeholder="Country Image URL"
              value={countryImage}
              onChange={(e) => setCountryImage(e.target.value)}
            />

            <button className="add-btn" onClick={addCountry}>
              + Add Country
            </button>
          </div>
        )}

        {/* PLACE FORM */}
        {activeTab === "place" && (
          <div className="card">
            <h2>Add New Place</h2>

            <select
              className="form-input"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              <option value="">Choose a country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>

            <input
              type="text"
              className="form-input"
              placeholder="Place Name"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
            />

            <textarea
              className="form-input"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <input
              type="text"
              className="form-input"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />

            <input
              type="text"
              className="form-input"
              placeholder="Image URL 2 (optional)"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
            />

            <div className="admin-price-row">
              <input
                type="number"
                className="form-input"
                placeholder="Travel ($)"
                value={travel}
                onChange={(e) => setTravel(e.target.value)}
              />

              <input
                type="number"
                className="form-input"
                placeholder="Stay ($)"
                value={stay}
                onChange={(e) => setStay(e.target.value)}
              />

              <input
                type="number"
                className="form-input"
                placeholder="Food ($)"
                value={food}
                onChange={(e) => setFood(e.target.value)}
              />
            </div>

            <button className="add-btn" onClick={addPlace}>
              + Add Place
            </button>
          </div>
        )}

        {/* CURRENT DESTINATIONS */}
        <div className="card">
          <h2>Current Destinations</h2>

          <div className="destination-list">
            {countries.length === 0 ? (
              <p>No destinations added yet</p>
            ) : (
              countries.map((country) => {
                const countryPlaces = places.filter(p => p.country === country.name);

                return (
                  <div key={country.id} className="destination-row">
                    <img
                      src={country.image || 'https://images.unsplash.com/photo-1488085061387-422e29b40080'}
                      alt={country.name}
                      className="dest-image"
                    />

                    <div className="dest-info">
                      <h3 className="dest-name">{country.name}</h3>
                      <p className="dest-count">{countryPlaces.length} places</p>

                      {countryPlaces.length > 0 && (
                        <div className="dest-badges">
                          {countryPlaces.map((place) => (
                            <span key={place.id} className="badge">
                              {place.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;