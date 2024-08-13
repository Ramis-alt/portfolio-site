import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Info from './components/Info';
import Contact from './pages/Contact';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router basename="/portfolio-site">
        <div className="container">
          <Routes>
            <Route path="/" element={<><Info /><Footer /></>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
