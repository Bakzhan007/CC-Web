import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
// Главная грузится сразу (точка входа / LCP), остальные страницы — лениво
import Home from './pages/Home';

const Agencies = lazy(() => import('./pages/Agencies'));
const Apartments = lazy(() => import('./pages/Apartments'));
const Career = lazy(() => import('./pages/Career'));
const Partner = lazy(() => import('./pages/Partner'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const SalesOffice = lazy(() => import('./pages/SalesOffice'));
const Faq = lazy(() => import('./pages/Faq'));
const AfterPurchase = lazy(() => import('./pages/AfterPurchase'));
const Maintenance = lazy(() => import('./pages/Maintenance'));

const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-white">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-brand-600" />
  </div>
);

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agencies" element={<Agencies />} />
            <Route path="/apartments" element={<Apartments />} />
            <Route path="/career" element={<Career />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/sales-office" element={<SalesOffice />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/after-purchase" element={<AfterPurchase />} />
            <Route path="/maintenance" element={<Maintenance />} />
          </Routes>
        </Suspense>
      </Router>
    </LanguageProvider>
  );
}

export default App;
