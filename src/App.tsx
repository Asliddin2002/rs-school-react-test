import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Page404 from 'pages/404/Page404';
import About from 'pages/about/About';
import Home from 'pages/home/Home';
import Form from 'pages/form/Form';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/form" element={<Form />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
