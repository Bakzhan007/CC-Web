import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import Agencies from './pages/Agencies';
import News from './pages/News';
import Career from './pages/Career';
import Commerce from './pages/Commerce';
import Sale from './pages/Sale';
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
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
          <Route path="/commerce" element={<Commerce />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/sale" element={<Sale />} />
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