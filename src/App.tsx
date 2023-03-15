import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Page404 from 'pages/Page404';
import About from 'pages/About';
import Home from 'pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
