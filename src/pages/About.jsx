import { motion } from 'framer-motion';
import { Target, Eye, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            {/* 1. Hero Section WITH BACKGROUND IMAGE */}
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
                    // UPDATED LINK BELOW:
                    backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1920&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.3)'
                }}></div>

                <div style={{ position: 'relative', zIndex: 10, padding: '0 20px', maxWidth: '800px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '20px', fontWeight: '800', color: 'white' }}
                    >
                        Who We Are
                    </motion.h1>
                    <p style={{ fontSize: '1.4rem', color: '#cbd5e1' }}>
                        Your strategic partner for government liaison and business success in the UAE.
                    </p>
                </div>
            </section>

            {/* 2. Main Content */}
            <div className="container" style={{ padding: '100px 20px' }}>

                {/* Intro */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center', marginBottom: '100px' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#60a5fa' }}>Our Story</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1', marginBottom: '20px' }}>
                            Royal Route Documents Clearing was founded with a single mission: to demystify the complex world of government bureaucracy for businesses and individuals.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#cbd5e1' }}>
                            Based in the heart of Dubai, we have grown from a small typing center to a full-service corporate services agency. We understand that time is money. That's why we have built a system that prioritizes speed, accuracy, and total compliance.
                        </p>
                    </div>
                    <div className="glass-panel" style={{ padding: '10px' }}>
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" alt="Dubai Architecture" style={{ width: '100%', borderRadius: '15px' }} />
                    </div>
                </div>

                {/* Mission & Vision Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '100px' }}>
                    <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '40px' }}>
                        <div style={{ color: '#60a5fa', marginBottom: '20px' }}><Target size={40} /></div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'white' }}>Our Mission</h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>To simplify complex procedures and save our clients time by handling all legal and administrative formalities efficiently and professionally.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '40px' }}>
                        <div style={{ color: '#60a5fa', marginBottom: '20px' }}><Eye size={40} /></div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'white' }}>Our Vision</h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>To be the undisputed leader in corporate services in Dubai, recognized for our digital innovation, integrity, and exceptional customer success rates.</p>
                    </motion.div>

                    <motion.div whileHover={{ y: -10 }} className="glass-panel" style={{ padding: '40px' }}>
                        <div style={{ color: '#60a5fa', marginBottom: '20px' }}><Award size={40} /></div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'white' }}>Our Values</h3>
                        <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>Transparency in pricing, Integrity in all dealings, and Speed in execution. We treat every application as if it were our own.</p>
                    </motion.div>
                </div>

                {/* Call to Action */}
                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'white' }}>Meet Our Team</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 40px auto', color: '#cbd5e1' }}>
                        Our team consists of former government relations officers, legal typists, and business setup consultants with decades of combined experience.
                    </p>
                    <Link to="/contact">
                        <button className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>Work With Us</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default About;