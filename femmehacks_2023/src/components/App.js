import "../assets/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useState } from 'react';

import Landing from "./Landing.js";
import Scanner from "./Scanner.js";
import Items from "./Items.js";
import Fridge from "./fridge.html";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/items" element={<Items />} />
        <Route path="/fridge" element={<Fridge />} />
      

      </Routes>
  );
}

export default App;
