import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import Agencies from './components/Agencies';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agencies" element={<Agencies />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;