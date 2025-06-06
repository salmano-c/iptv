import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { Analytics } from '@vercel/analytics/react';

import './App.css';
import './styles/customAnimations.css';
import './styles/loadingStyles.css';

const Index = lazy(() => import('./pages/Index'));
const Payment = lazy(() => import('./pages/Payment'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

function App() {
  const [isDarkMode] = useState(true);

  return (
    <>
      <div className="relative min-h-screen font-sans">
        <Suspense fallback={<></>}>
          <ParticleBackground />
        </Suspense>
        <LanguageProvider>
          <Router>
            <Suspense fallback={<div className="text-white text-center pt-20">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Router>
        </LanguageProvider>
      </div>
      <Analytics />
    </>
  );
}

export default App;


