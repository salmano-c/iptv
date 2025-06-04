
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Payment from './pages/Payment';
import ParticleBackground from './components/ParticleBackground';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';
import './styles/customAnimations.css';
import './styles/loadingStyles.css';

function App() {
  // Dark mode is always enabled for this design
  const [isDarkMode] = useState(true);

  return (
    <>
      <div className="relative min-h-screen font-sans">
        <ParticleBackground />
        <LanguageProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </div>
    </>
  );
}

export default App;
