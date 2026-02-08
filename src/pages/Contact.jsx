import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "971545890140";
    const whatsappMessage = 
      `*New Inquiry from Website* %0a` +
      `--------------------------- %0a` +
      `👤 *Name:* ${formData.name} %0a` +
      `📱 *Phone:* ${formData.phone} %0a` +
      `📧 *Email:* ${formData.email} %0a` +
      `💼 *Service:* ${formData.service} %0a` +
      `--------------------------- %0a` +
      `📝 *Message:* %0a${formData.message}`;

    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div style={{ padding: '40px 20px 80px' }}>
      <div className="container">
        
        {/* CSS for Mobile Stacking */}
        <style>{`
          @media (max-width: 600px) {
            .form-row { flex-direction: column !important; gap: 20px !important; }
            .contact-item { flex-direction: column; text-align: center; }
            .icon-box { margin: 0 auto; }
          }
        `}</style>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '10px' }}
          >
            Get in Touch
          </motion.h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Ready to start your business? Our consultants are available 9 AM - 8 PM.
          </p>
        </div>

        {/* Main Grid - Centered */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Safe width
          gap: '40px',
          justifyContent: 'center' // Ensures cards are centered
        }}>
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '500px', width: '100%', margin: '0 auto' }}
          >
            {/* Quick Actions */}
            <div className="glass-panel" style={{ padding: '30px', borderLeft: '5px solid #2563eb' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 0, justifyContent: 'center' }}>
                <MessageCircle size={24} color="#2563eb" /> Quick Chat
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '20px', textAlign: 'center' }}>Fastest response time via WhatsApp.</p>
              <a href="https://wa.me/971545890140" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <MessageCircle size={20} /> Chat on WhatsApp
                </button>
              </a>
            </div>

            {/* Location Details */}
            <div className="glass-panel" style={{ padding: '30px' }}>
              
              <div className="contact-item" style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'center' }}>
                <div className="icon-box" style={{ background: 'rgba(37,99,235,0.2)', padding: '12px', borderRadius: '10px', minWidth: '50px', textAlign: 'center' }}>
                  <Phone size={24} color="#60a5fa" />
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Call Us</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+971 54 589 0140</div>
                </div>
              </div>

              <div className="contact-item" style={{ display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'center' }}>
                <div className="icon-box" style={{ background: 'rgba(37,99,235,0.2)', padding: '12px', borderRadius: '10px', minWidth: '50px', textAlign: 'center' }}>
                  <Mail size={24} color="#60a5fa" />
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Email Us</div>
                  <div style={{ fontSize: '1rem', fontWeight: 'bold', wordBreak: 'break-all' }}>royalroute93@gmail.com</div>
                </div>
              </div>

              <div className="contact-item" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div className="icon-box" style={{ background: 'rgba(37,99,235,0.2)', padding: '12px', borderRadius: '10px', minWidth: '50px', textAlign: 'center' }}>
                  <MapPin size={24} color="#60a5fa" />
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Visit Us</div>
                  <div style={{ fontSize: '1.1rem', lineHeight: '1.4' }}>Business Atrium Building,<br />Oud Metha, Dubai, UAE</div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-panel"
            style={{ padding: '30px', maxWidth: '500px', width: '100%', margin: '0 auto' }}
          >
            <h2 style={{ marginTop: 0, textAlign: 'center' }}>Send a Message</h2>
            <p style={{ color: '#94a3b8', marginBottom: '30px', textAlign: 'center' }}>Fill out the form below to start a chat.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Name & Phone Row - Stacks on Mobile */}
              <div className="form-row" style={{ display: 'flex', gap: '20px' }}>
                <input type="text" name="name" placeholder="Full Name" required style={inputStyle} onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Mobile Number" required style={inputStyle} onChange={handleChange} />
              </div>
              
              <input type="email" name="email" placeholder="Email Address" required style={inputStyle} onChange={handleChange} />
              
              <select name="service" style={inputStyle} onChange={handleChange}>
                <option value="General Inquiry">Service Interested In...</option>
                <option value="Company Formation">Company Formation</option>
                <option value="Visa Assistance">Visa Assistance</option>
                <option value="Legal Translation">Legal Translation</option>
                <option value="Other">Other</option>
              </select>

              <textarea name="message" placeholder="Tell us about your requirements..." rows="4" required style={inputStyle} onChange={handleChange}></textarea>

              <button className="btn-primary" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px', width: '100%' }}>
                <Send size={18} /> Send via WhatsApp
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '15px',
  borderRadius: '10px',
  border: '1px solid rgba(255,255,255,0.2)',
  background: 'rgba(0,0,0,0.2)',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  fontFamily: 'inherit'
};

export default Contact;