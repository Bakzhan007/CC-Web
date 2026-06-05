import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import Agencies from './pages/Agencies';
import Career from './pages/Career';
import Partner from './pages/Partner';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import SalesOffice from './pages/SalesOffice';
import Faq from './pages/Faq';
import AfterPurchase from './pages/AfterPurchase';
import Maintenance from './pages/Maintenance';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/career" element={<Career />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/sales-office" element={<SalesOffice />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/after-purchase" element={<AfterPurchase />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;