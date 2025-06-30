import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import Agencies from './pages/Agencies';
import News from './pages/News';
import Career from './pages/Career';
import Commerce from './pages/Commerce';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
          <Route path="/commerce" element={<Commerce />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;