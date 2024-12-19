import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import Resume from './pages/Resume';
import Sidebar from './pages/Sidebar';

const App: React.FC = () => {
  return (
    <Router>
      <Sidebar />
      {/* Main content with padding to avoid overlap */}
      <div style={{ paddingTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
