import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Services', 'About', 'Terms', 'Contact'];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{ 
          position: 'fixed', 
          top: 0, left: 0, right: 0, 
          zIndex: 50,
          // UPDATED BACKGROUND LOGIC:
          // If scrolled: Dark Glass Blue
          // If top: A subtle dark gradient fade so white text pops against any image
          background: scrolled 
            ? 'rgba(15, 23, 42, 0.9)' 
            : 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
          padding: '1rem 0',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
          
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Logo />
          </Link>

          {/* DESKTOP MENU */}
          <div className="desktop-menu" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
             <style>{`
               @media (max-width: 768px) { .desktop-menu { display: none !important; } .mobile-btn { display: block !important; } }
               @media (min-width: 769px) { .mobile-btn { display: none !important; } }
             `}</style>

            {navLinks.map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                style={{ 
                  textDecoration: 'none', 
                  color: 'white', 
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  opacity: location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`) ? 1 : 0.8,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)' // Added shadow for extra contrast
                }}
              >
                <motion.span whileHover={{ opacity: 1, y: -2, color: '#60a5fa' }}>
                  {item}
                </motion.span>
              </Link>
            ))}
            <Link to="/contact">
              <button className="btn-primary" style={{ boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }}>Get Started</button>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="mobile-btn"
            onClick={() => setIsOpen(true)} 
            style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}
          >
            <Menu size={32} style={{ filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.5))' }} />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE FULL SCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.98)', // Solid dark blue for readability
              backdropFilter: 'blur(20px)',
              zIndex: 60,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            <button 
              onClick={() => setIsOpen(false)} 
              style={{ position: 'absolute', top: '30px', right: '30px', background: 'none', border: 'none', color: 'white' }}
            >
              <X size={40} />
            </button>

            {navLinks.map((item) => (
              <Link 
                key={item} 
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', textDecoration: 'none' }}
              >
                <motion.div whileTap={{ scale: 0.9 }}>{item}</motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;