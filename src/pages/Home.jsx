import { services } from '../data/services';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Quote, ShieldCheck, Zap, Globe, Clock } from 'lucide-react';

const serviceImages = {
  "dubai-court": "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
  "immigration": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
  "business-setup": "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&q=80&w=600", 
  "attestation": "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=600",
  "trakhees": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
  "amer-tasheel": "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600",
  "pro-services": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
  "legal-translation": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=600"
};

const testimonials = [
  { name: "Ahmed al Farid", role: "CEO, TechFlow", text: "Royal Route handled our company formation in Dubai Internet City with zero friction. Their digital-first approach saved us weeks of manual work." },
  { name: "David John", role: "Investor", text: "I was worried about the Golden Visa process, but their team handled everything. I didn't even have to visit a government office." },
  { name: "Zubair ibn Khalid", role: "Real Estate Developer", text: "For Trakhees approvals, they are the best. They know the exact requirements to get plans approved on the first submission." },
  { name: "Xi", role: "Entrepreneur", text: "Professional, fast, and transparent. The best PRO service I have used in the UAE in 5 years. Highly recommended." },
  { name: "Sarah Jenkins", role: "HR Director", text: "Processing 50+ employee visas used to be a nightmare. Royal Route automated the entire workflow for us." }
];

// Card Component for the Stacking Effect
const Card = ({ service, index, total }) => {
  return (
    <div 
      style={{ 
        position: 'sticky', 
        top: `${100 + index * 20}px`,
        marginBottom: `${(total - index) * 20}px`, 
        zIndex: index,
        paddingTop: '20px'
      }}
    >
      <Link to={`/service/${service.id}`} style={{ textDecoration: 'none' }}>
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-panel"
          style={{ 
            display: 'flex', height: '400px', overflow: 'hidden',
            background: '#1e3a8a', border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 -10px 40px rgba(0,0,0,0.5)' 
          }}
        >
          <div style={{ flex: 1, position: 'relative', display: 'none', md: { display: 'block' } }} className="desktop-image">
            <div style={{ 
              position: 'absolute', inset: 0, 
              backgroundImage: `url(${serviceImages[service.id] || serviceImages['business-setup']})`,
              backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%) brightness(0.7)' 
            }}></div>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 58, 138, 0.4)' }}></div>
          </div>
          <div style={{ flex: 1.5, padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'rgba(15, 23, 42, 0.95)' }}>
            <div style={{ marginBottom: '20px', color: '#60a5fa' }}><service.icon size={40} /></div>
            <h3 style={{ fontSize: '2rem', margin: '0 0 15px 0', color: 'white' }}>{service.title}</h3>
            <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '30px' }}>{service.description}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#60a5fa', fontWeight: 'bold' }}>
              VIEW DETAILS <ArrowRight size={18} />
            </div>
          </div>
          <style>{`@media (min-width: 768px) { .desktop-image { display: block !important; } }`}</style>
        </motion.div>
      </Link>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section style={{ 
        position: 'relative', height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
          backgroundImage: 'url("https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=1920&auto=format&fit=crop")',
          backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.35)'
        }}></div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 20px', maxWidth: '900px' }}
        >
          <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '50px', backdropFilter: 'blur(10px)', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
            <span style={{ fontSize: '0.85rem', color: '#fff', letterSpacing: '1px', fontWeight: '600' }}>PREMIUM DOCUMENT SERVICES</span>
          </div>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 6vw, 5.5rem)', margin: '0 0 20px 0', fontWeight: '800', lineHeight: 1.1,
            background: 'linear-gradient(180deg, #FFFFFF 0%, #94a3b8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>
            Royal Route <br /> To Success.
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#cbd5e1', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px auto' }}>
            The premier government liaison partner for global businesses expanding into the UAE.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
             <Link to="/contact"><button className="btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>Consult Now</button></Link>
          </div>
        </motion.div>
      </section>

      {/* 2. STACKING SERVICES SECTION */}
      <section className="container" style={{ padding: '100px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: '#60a5fa', fontWeight: 'bold', letterSpacing: '2px', textTransform: 'uppercase' }}>Our Capabilities</span>
          <h2 style={{ fontSize: '3rem', marginTop: '10px' }}>Comprehensive Solutions</h2>
        </div>
        <div style={{ position: 'relative' }}>
          {services.map((service, index) => (
            <Card key={service.id} service={service} index={index} total={services.length} />
          ))}
        </div>
      </section>

      {/* 3. NEW "WHY CHOOSE ROYAL ROUTE" SECTION */}
      <section style={{ padding: '100px 20px', background: 'rgba(0,0,0,0.2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ color: '#60a5fa', fontWeight: 'bold', letterSpacing: '1px' }}>THE ROYAL STANDARD</span>
              <h2 style={{ fontSize: '3rem', margin: '10px 0 30px 0', lineHeight: '1.1' }}>We Don't Just Process Documents. <br /> We Accelerate Growth.</h2>
              <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8', marginBottom: '30px' }}>
                In the fast-paced Dubai market, delays cost money. Traditional PRO services are slow, manual, and opaque. 
                <br /><br />
                Royal Route redefines the experience. We combine <strong>insider government knowledge</strong> with a <strong>fully digital workflow</strong>. 
                While others are standing in line, we are getting your approvals stamped. From complex corporate structuring to urgent visa clearances, we are the strategic partner you can trust.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { icon: ShieldCheck, title: "100% Compliance", text: "Zero risk of fines or rejections." },
                  { icon: Zap, title: "Express Processing", text: "VIP channels for urgent needs." },
                  { icon: Globe, title: "Remote Setup", text: "Launch from anywhere in the world." },
                  { icon: Clock, title: "24/7 Support", text: "Always available when you need us." },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '15px' }}>
                    <div style={{ color: '#60a5fa' }}><item.icon size={24} /></div>
                    <div>
                      <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1rem' }}>{item.title}</h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8' }}>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-panel" style={{ padding: '10px' }}>
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" alt="Meeting" style={{ width: '100%', borderRadius: '15px', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCROLLABLE TESTIMONIALS */}
      <section style={{ padding: '100px 0' }}>
        <div className="container" style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '10px' }}>Trusted By Leaders</h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          style={{ 
            display: 'flex', 
            gap: '30px', 
            overflowX: 'auto', 
            padding: '20px 5vw',
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none', // Hide scrollbar Firefox
            msOverflowStyle: 'none' // Hide scrollbar IE
          }}
          className="no-scrollbar" // Helper class we will define in styles
        >
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="glass-panel"
              style={{ 
                minWidth: '350px', 
                maxWidth: '400px',
                padding: '40px', 
                background: 'rgba(255,255,255,0.05)',
                scrollSnapAlign: 'center',
                flexShrink: 0
              }}
            >
              <Quote size={40} color="#2563eb" style={{ opacity: 0.5, marginBottom: '20px' }} />
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '30px', fontStyle: 'italic', minHeight: '100px' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#60a5fa', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0f172a', fontWeight: 'bold', fontSize: '1.2rem' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.9rem', color: '#60a5fa' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Scroll Hint */}
        <div style={{ textAlign: 'center', marginTop: '20px', color: '#64748b', fontSize: '0.9rem' }}>
          &larr; Swipe to see more &rarr;
        </div>

        {/* Hide Scrollbar CSS injection */}
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
        `}</style>
      </section>
    </div>
  );
};

export default Home;