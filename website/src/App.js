import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/Home';
import './App.css';
import './fonts/bettynoir.ttf'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
       </Route>
      </Routes>
    </BrowserRouter>
  );
}

