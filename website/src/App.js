import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage/Home';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Experience from './pages/Experience/Experience';
import './App.css';
import { ThemeProvider } from './components/Theme'; // Import your ThemeProvider here


export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
