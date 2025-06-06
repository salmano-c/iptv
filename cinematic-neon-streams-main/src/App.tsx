import { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Lazy load pages for better performance
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Payment = lazy(() => import('./pages/Payment'));
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';
import './styles/customAnimations.css';
import './styles/loadingStyles.css';
import { Analytics } from "@vercel/analytics/react"

function App() {
  // Dark mode is always enabled for this design
  const [isDarkMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simple mobile detection
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <div className="relative min-h-screen font-sans">
        {/* Only show ParticleBackground on non-mobile for better INP */}
        {!isMobile && (
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        )}
        <LanguageProvider>
          <Router>
            <Suspense fallback={<div className="loading">Loading...</div>}>
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
