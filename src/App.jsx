import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Info from './components/Info';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <Router basename="/portfolio-site">
      <div className="container">
        <Routes>
          <Route path="/" element={<><Info /><Footer /></>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
