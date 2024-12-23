import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Footer from './pages/Footer';
import Resume from './pages/Resume';
import Sidebar from './pages/Sidebar';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <Routes>
            {/* Default route */}
            <Route path="/" element={<Navigate to="/portfolio" replace />} />
            
            {/* Main routes */}
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            
            {/* Redirect uppercase routes to lowercase */}
            <Route path="/About" element={<Navigate to="/about" replace />} />
            <Route path="/Portfolio" element={<Navigate to="/portfolio" replace />} />
            <Route path="/Resume" element={<Navigate to="/resume" replace />} />
            
            {/* Catch all other routes */}
            <Route path="*" element={<Navigate to="/portfolio" replace />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
