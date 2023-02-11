
import '../assets/App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useState } from 'react';


import Landing from './Landing.js';
import Scanner from './Scanner.js';
import Items from './Items.js';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        {/* <Route path="/scanner" element={<Scanner />} />
        <Route path="/items" element={<Items />} /> */}
    </Routes>


  );
}

export default App;
