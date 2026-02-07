import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PageTransition from './components/PageTransition';
import Services from './pages/Services';
import About from './pages/About';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';

// Helper component to handle animations
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait" is CRITICAL: it ensures the old page leaves before the new one enters
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/service/:id" element={<PageTransition><ServiceDetail /></PageTransition>} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />

      </Routes>
    </AnimatePresence>
  );
};

// Scroll To Top Helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '80px' }}> {/* Add padding so content isn't hidden behind fixed navbar */}
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;