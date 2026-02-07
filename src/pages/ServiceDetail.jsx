import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

const serviceImages = {
  "dubai-court": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
  "immigration": "https://images.unsplash.com/photo-1569420078040-0275be132473?auto=format&fit=crop&q=80&w=1200",
  "business-setup": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
  "attestation": "https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=1200",
  "trakhees": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200",
  "amer-tasheel": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200",
  "pro-services": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
  "legal-translation": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200"
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Responsive Check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!service) return <div style={{ padding: '100px', textAlign: 'center', color: 'white' }}>Service not found</div>;

  const Icon = service.icon;
  const bgImage = serviceImages[id] || serviceImages["business-setup"];

  return (
    <div style={{ paddingBottom: isMobile ? '100px' : '60px' }}> {/* Add padding on mobile for floating bar */}
      
      {/* 1. HERO HEADER */}
      <section style={{ 
        position: 'relative', height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', inset: 0, backgroundImage: `url("${bgImage}")`, 
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.3)'
        }}></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px' }}
        >
          <div style={{ display: 'inline-flex', padding: '20px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
            <Icon size={50} color="#60a5fa" />
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', margin: '0 0 10px 0', fontWeight: '800' }}>{service.title}</h1>
        </motion.div>
      </section>

      {/* 2. MAIN CONTENT AREA */}
      <div className="container" style={{ marginTop: '-60px', position: 'relative', zIndex: 20 }}>
        
        <Link to="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#cbd5e1', textDecoration: 'none', marginBottom: '30px', fontWeight: '500' }}>
          <ArrowLeft size={20} /> Back to All Services
        </Link>

        {/* Content Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr', 
          gap: '40px', alignItems: 'start'
        }}>
          
          {/* LEFT: Detailed Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="glass-panel" style={{ padding: '40px' }}
          >
            <h2 style={{ color: '#60a5fa', marginTop: 0, fontSize: '2rem' }}>Overview</h2>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '40px' }}>
              {service.details}
              <br /><br />
              At Royal Route, we understand the nuances of {service.title}. Our dedicated team ensures that your application is processed with zero errors, adhering strictly to the latest government regulations.
            </p>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>What We Handle For You</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {['Document Pre-Check', 'Application Typing', 'Government Fees Payment', 'Status Tracking', 'Final Collection', 'Doorstep Delivery'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '15px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}>
                  <CheckCircle size={20} color="#2563eb" /> <span style={{ color: '#e2e8f0' }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Desktop Sticky Sidebar (Hidden on Mobile) */}
          {!isMobile && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              style={{ position: 'sticky', top: '100px' }}
            >
              <div className="glass-panel" style={{ padding: '30px', border: '1px solid rgba(37, 99, 235, 0.3)' }}>
                <h3 style={{ marginTop: 0, fontSize: '1.5rem' }}>Need {service.title}?</h3>
                <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Skip the lines. Let our PRO experts handle it for you today.</p>
                
                <Link to="/contact">
                  <button className="btn-primary" style={{ width: '100%', marginBottom: '15px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <MessageCircle size={20} /> Get Free Quote
                  </button>
                </Link>

                <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                    <Phone size={20} color="#60a5fa" /> +971 54 589 0140
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      </div>

      {/* MOBILE: Floating Bottom Bar (Visible only on Mobile) */}
      {isMobile && (
        <motion.div
          initial={{ y: 100 }} animate={{ y: 0 }}
          style={{
            position: 'fixed', bottom: 0, left: 0, right: 0,
            background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.1)',
            padding: '15px 20px', zIndex: 100, display: 'flex', gap: '15px',
            boxShadow: '0 -10px 30px rgba(0,0,0,0.5)'
          }}
        >
          <a href="tel:+971545890140" style={{ flex: 1, textDecoration: 'none' }}>
            <button className="btn-glass" style={{ width: '100%', padding: '12px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <Phone size={18} /> Call
            </button>
          </a>
          <Link to="/contact" style={{ flex: 2, textDecoration: 'none' }}>
            <button className="btn-primary" style={{ width: '100%', padding: '12px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
              <MessageCircle size={18} /> Get Quote
            </button>
          </Link>
        </motion.div>
      )}

    </div>
  );
};

export default ServiceDetail;