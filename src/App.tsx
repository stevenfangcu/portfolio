import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
