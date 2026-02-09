import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

// UPDATED IMAGE MAPPING TO MATCH YOUR NEW PDF SERVICES
const serviceImages = {
  "business-setup": "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800", // Skyscrapers
  "license-services": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800", // Documents/Renewal
  "immigration": "https://images.unsplash.com/photo-1569420078040-0275be132473?auto=format&fit=crop&q=80&w=800", // Passport/Travel
  "amer-tasheel": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800", // Handshake/Meeting
  "ejari-services": "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800", // Real Estate/Keys
  "govt-approvals": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800", // Government Building
  "attestation": "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800", // Stamp/Certificate
  "legal-translation": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" // Signing/Translation
};

const Services = () => {
  return (
    <div style={{ paddingBottom: '100px' }}>
      
      {/* 1. Page Header */}
      <section style={{ 
        position: 'relative',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}></div>

        <div style={{ position: 'relative', zIndex: 10, padding: '0 20px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '20px', fontWeight: '800' }}
          >
            Our Services
          </motion.h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.4rem' }}>
            Expert guidance through every government department in Dubai.
          </p>
        </div>
      </section>

      {/* 2. Detailed Service List */}
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginTop: '100px' }}>
        
        {/* MOBILE STYLES INJECTION */}
        <style>{`
          @media (max-width: 768px) {
            .service-row {
              flex-direction: column-reverse !important; /* Forces Image Top, Text Bottom */
              gap: 40px !important;
            }
            .service-text { width: 100% !important; min-width: 0 !important; }
            .service-image { width: 100% !important; min-width: 0 !important; }
          }
        `}</style>

        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              className="service-row"
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              style={{ 
                display: 'flex', 
                flexDirection: isEven ? 'row' : 'row-reverse', 
                alignItems: 'center', 
                gap: '50px',
                flexWrap: 'wrap' 
              }}
            >
              {/* Text Side */}
              <div className="service-text" style={{ flex: 1, minWidth: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                  <div style={{ background: 'rgba(37,99,235,0.2)', padding: '15px', borderRadius: '12px' }}>
                    <service.icon size={30} color="#60a5fa" />
                  </div>
                  <h2 style={{ fontSize: '2.2rem', margin: 0 }}>{service.title}</h2>
                </div>
                
                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '30px' }}>
                  {service.details}
                  <br /><br />
                  We ensure a streamlined process, minimizing delays and ensuring full compliance with UAE laws.
                </p>

                <div style={{ marginBottom: '30px' }}>
                  <h4 style={{ color: 'white', marginBottom: '15px' }}>Includes:</h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {['Document Verification', 'Application Typing', 'Submission & Tracking', 'Final Delivery'].map((item, i) => (
                      <li key={i} style={{ display: 'flex', gap: '10px', marginBottom: '10px', color: '#94a3b8' }}>
                        <CheckCircle size={18} color="#2563eb" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to={`/service/${service.id}`}>
                  <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    Learn More <ArrowRight size={18} />
                  </button>
                </Link>
              </div>

              {/* Image Side */}
              <div className="service-image" style={{ flex: 1, minWidth: '300px' }}>
                <div className="glass-panel" style={{ padding: '10px', transform: isEven ? 'rotate(2deg)' : 'rotate(-2deg)' }}>
                  <img 
                    src={serviceImages[service.id]} 
                    alt={service.title}
                    // Fallback to avoid broken images if ID doesn't match
                    onError={(e) => e.target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"} 
                    style={{ width: '100%', borderRadius: '15px', display: 'block' }} 
                  />
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>

      {/* 3. Final CTA */}
      <section style={{ marginTop: '150px', textAlign: 'center', padding: '0 20px' }}>
        <div className="glass-panel" style={{ maxWidth: '800px', margin: '0 auto', padding: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to get started?</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '40px' }}>Contact our team today for a free consultation on your requirements.</p>
          <Link to="/contact">
            <button className="btn-primary" style={{ padding: '15px 50px', fontSize: '1.2rem' }}>Contact Us</button>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Services;