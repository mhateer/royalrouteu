import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  
  // 1. UPDATE YOUR LINKS HERE so i added facebook link only, you can add more like instagram and linkedin by following the same structure
  const socialLinks = [
    { Icon: Facebook, url: "https://facebook.com/ahsanali.skmch" }
  ];

  return (
    <footer style={{ 
      background: '#020617', // Deep Midnight Blue
      color: 'white',
      paddingTop: '80px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container" style={{ paddingBottom: '60px', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '60px' 
        }}>
          
          {/* Column 1: Brand & About */}
          <div>
            <div style={{ marginBottom: '20px' }}>
              <Link to="/" style={{ textDecoration: 'none' }}><Logo /></Link>
            </div>
            <p style={{ color: '#94a3b8', lineHeight: '1.8', marginBottom: '30px', fontSize: '1rem' }}>
              Your trusted partner for government liaison and documentation solutions in Dubai. We simplify the complex so you can focus on growth.
            </p>
            
            {/* Social Icons (Now Clickable Links) */}
            <div style={{ display: 'flex', gap: '15px' }}>
              {socialLinks.map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    width: '40px', height: '40px', borderRadius: '50%', 
                    background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', transition: '0.3s', border: '1px solid rgba(255,255,255,0.1)',
                    color: '#cbd5e1'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#2563eb'; // Blue hover
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = '#cbd5e1';
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'white', fontWeight: '600' }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              
              <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                <div style={{ marginTop: '2px' }}><MapPin size={20} color="#60a5fa" /></div>
                <span style={{ color: '#cbd5e1', lineHeight: '1.6' }}>Virtual Office, Business Atrium Building, <br />Oud Metha, Dubai, UAE</span>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div><Phone size={20} color="#60a5fa" /></div>
                <span style={{ color: '#cbd5e1' }}>+971 54 589 0140</span>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <div><Mail size={20} color="#60a5fa" /></div>
                <span style={{ color: '#cbd5e1' }}>royalroute93@gmail.com</span>
              </div>

            </div>
          </div>

          {/* Column 3: Office Hours */}
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'white', fontWeight: '600' }}>Office Hours</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {[
                { label: "Mon - Sat", time: "9:00 AM – 8:00 PM" },
                { label: "Friday Break", time: "12:00 PM – 3:00 PM" },
                { label: "Sunday", time: "Closed", isClosed: true }
              ].map((item, i) => (
                <li key={i} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  borderBottom: '1px solid rgba(255,255,255,0.05)', 
                  paddingBottom: '10px' 
                }}>
                  <span style={{ color: '#94a3b8' }}>{item.label}</span>
                  <span style={{ color: item.isClosed ? '#f87171' : 'white', fontWeight: '500' }}>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div style={{ background: '#0f172a', padding: '25px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '20px', 
          padding: '0 20px',
          color: '#64748b', 
          fontSize: '0.9rem' 
        }}>
          <div>© {new Date().getFullYear()} Royal Route Documents Clearing. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '30px' }}>
            <Link to="/terms" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>
              Terms of Service
            </Link>
            <Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'white'} onMouseOut={(e) => e.target.style.color = '#94a3b8'}>
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;