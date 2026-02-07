import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  // 1. State to hold form data
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  // 2. Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Handle Submit -> Open WhatsApp
  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "971545890140"; // Your Number

    // Create the formatted message
    const whatsappMessage = 
      `*New Inquiry from Website* %0a` +
      `--------------------------- %0a` +
      `👤 *Name:* ${formData.name} %0a` +
      `📱 *Phone:* ${formData.phone} %0a` +
      `📧 *Email:* ${formData.email} %0a` +
      `💼 *Service:* ${formData.service} %0a` +
      `--------------------------- %0a` +
      `📝 *Message:* %0a${formData.message}`;

    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <div style={{ padding: '40px 20px 80px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ fontSize: '3.5rem', marginBottom: '10px' }}
          >
            Get in Touch
          </motion.h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem' }}>
            Ready to start your business? Our consultants are available 9 AM - 8 PM.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {/* Quick Actions */}
            <div className="glass-panel" style={{ padding: '30px', borderLeft: '5px solid #2563eb' }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 0 }}>
                <MessageCircle size={24} color="#2563eb" /> Quick Chat
              </h3>
              <p style={{ color: '#94a3b8', marginBottom: '20px' }}>Fastest response time via WhatsApp.</p>
              <a 
                href="https://wa.me/971545890140" 
                target="_blank" 
                rel="noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                  <MessageCircle size={20} /> Chat on WhatsApp
                </button>
              </a>
            </div>

            {/* Location Details */}
            <div className="glass-panel" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
                <div style={{ background: 'rgba(37,99,235,0.2)', padding: '12px', borderRadius: '10px' }}>
                  <Phone size={24} color="#60a5fa" />
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Call Us</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+971 54 589 0140</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
                <div style={{ background: 'rgba(37,99,235,0.2)', padding: '12px', borderRadius: '10px' }}>
                  <Mail size={24} color="#60a5fa" />
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Email Us</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>royalroute93@gmail.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ background: 'rgba(37,99,235,0.2)', padding: '12px', borderRadius: '10px' }}>
                  <MapPin size={24} color="#60a5fa" />
                </div>
                <div>
                  <div style={{ color: '#94a3b8', fontSize: '0.9rem' }}>Visit Us</div>
                  <div style={{ fontSize: '1.1rem' }}>
                    Business Atrium Building,<br />Oud Metha, Dubai, UAE
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The WhatsApp Form */}
          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-panel"
            style={{ padding: '40px' }}
          >
            <h2 style={{ marginTop: 0 }}>Send a Message</h2>
            <p style={{ color: '#94a3b8', marginBottom: '30px' }}>Fill out the details below to start a WhatsApp chat with our team.</p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={{ display: 'flex', gap: '20px' }}>
                <input 
                  type="text" name="name" placeholder="Full Name" required 
                  style={inputStyle} onChange={handleChange} 
                />
                <input 
                  type="tel" name="phone" placeholder="Mobile Number" required 
                  style={inputStyle} onChange={handleChange} 
                />
              </div>
              
              <input 
                type="email" name="email" placeholder="Email Address" required 
                style={inputStyle} onChange={handleChange} 
              />
              
              <select name="service" style={inputStyle} onChange={handleChange}>
                <option value="General Inquiry">Service Interested In...</option>
                <option value="Company Formation">Company Formation</option>
                <option value="Visa Assistance">Visa Assistance</option>
                <option value="Legal Translation">Legal Translation</option>
                <option value="Other">Other</option>
              </select>

              <textarea 
                name="message" placeholder="Tell us about your requirements..." rows="4" required 
                style={inputStyle} onChange={handleChange}
              ></textarea>

              <button className="btn-primary" style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <Send size={18} /> Send via WhatsApp
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

// Reusable Input Style
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