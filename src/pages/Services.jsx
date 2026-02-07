import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const serviceImages = {
  "dubai-court": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
  "immigration": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=800",
  "business-setup": "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=800",
  "attestation": "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800",
  "trakhees": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  "amer-tasheel": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
  "pro-services": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  "legal-translation": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
};

const Services = () => {
  return (
    <div style={{ paddingBottom: '100px' }}>
      
      {/* 1. Page Header WITH BACKGROUND IMAGE */}
      <section style={{ 
        position: 'relative',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image */}
        <div style={{ 
          position: 'absolute', inset: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop")', // Corporate Office BG
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
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '100px', marginTop: '100px' }}>
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
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
              <div style={{ flex: 1, minWidth: '300px' }}>
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
              <div style={{ flex: 1, minWidth: '300px' }}>
                <div className="glass-panel" style={{ padding: '10px', transform: isEven ? 'rotate(2deg)' : 'rotate(-2deg)' }}>
                  <img 
                    src={serviceImages[service.id]} 
                    alt={service.title} 
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