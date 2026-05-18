import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Places from "./pages/Places";
import Details from "./pages/Details";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

import { useEffect } from "react";
import { defaultCountries, defaultPlaces, DATA_VERSION } from "./data/defaultData";

function App() {
  useEffect(() => {
    const storedVersion = localStorage.getItem("data_version");
    if (storedVersion !== DATA_VERSION) {
      localStorage.setItem("countries", JSON.stringify(defaultCountries));
      localStorage.setItem("places", JSON.stringify(defaultPlaces));
      localStorage.setItem("data_version", DATA_VERSION);
      window.location.reload();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Protected User Routes */}
        <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/places" element={<Places />} />
          <Route path="/details" element={<Details />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;