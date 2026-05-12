import React from "react";
import "../styles/style.css";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Clear Firebase session
      await signOut(auth);
      
      // Clear Cookies
      Cookies.remove("jwt_token");
      
      // Clear LocalStorage
      localStorage.removeItem("role");
      localStorage.removeItem("country");
      localStorage.removeItem("place");
      
      // Navigate to Login page
      navigate("/", { replace: true });
    } catch (e) {
      console.error("Logout error:", e);
      // Fallback: still try to navigate if something fails
      Cookies.remove("jwt_token");
      localStorage.clear();
      navigate("/", { replace: true });
    }
  };
 
  return (
    <div className="home-hero-bg">
      <div className="top-nav">
        <button className="logout-btn-top" onClick={handleLogout}>Logout</button>
      </div>
      <div className="home-hero-content">
        <h1>Explore The World</h1>
        <p>Discover amazing destinations</p>
        <button
          className="explore-btn"
          onClick={() => navigate("/countries")}
        >
          Explore Destinations
        </button>
      </div>
    </div>
  );
};

export default Home;