import { motion } from 'framer-motion';
import { ShieldAlert, FileCheck, Clock, CreditCard, XCircle, Lock, Edit3, AlertTriangle, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// UPDATED TERMS IMAGES - REPLACE THIS BLOCK
const termImages = {
    1: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800", // Documents
    2: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800", // Handshake
    3: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800", // Calendar/Planning
    4: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800", // Finance (Fixed)
    5: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", // Signing
    6: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800", // Security (Fixed)
    7: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800", // Planning
    8: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"  // Legal
};

const termsData = [
    { id: 1, title: "Service Scope", icon: FileCheck, text: "Royal Route Documents Clearing acts as a facilitator for government-related processes including but not limited to visas, licenses, approvals, renewals, typing services, and documentation assistance." },
    { id: 2, title: "Client Responsibility", icon: ShieldAlert, text: "Clients must provide accurate, complete, and genuine documents. We are not responsible for delays or rejections caused by incorrect or false information." },
    { id: 3, title: "Processing Time", icon: Clock, text: "All timelines provided are estimated and subject to approval from relevant UAE government authorities. Delays beyond our control may occur." },
    { id: 4, title: "Fees & Payments", icon: CreditCard, text: "All service charges must be paid in advance. Government fees are separate. Payments are non-refundable once processing has started." },
    { id: 5, title: "Approvals & Rejections", icon: XCircle, text: "Final decisions rest solely with UAE authorities. Royal Route Documents Clearing does not guarantee approvals." },
    { id: 6, title: "Confidentiality", icon: Lock, text: "All client information and documents are handled with strict confidentiality and used only for official processing purposes." },
    { id: 7, title: "Service Modifications", icon: Edit3, text: "We reserve the right to update service procedures, pricing, and terms without prior notice as per government rule changes." },
    { id: 8, title: "Liability", icon: AlertTriangle, text: "We are not liable for losses resulting from government decisions, policy changes, or third-party delays." }
];

const Terms = () => {
    return (
        <div style={{ paddingBottom: '100px' }}>

            {/* 1. Hero Section (Matches Services Page) */}
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
                    backgroundImage: 'url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1920&auto=format&fit=crop")', // Business Handshake/Agreement BG
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'brightness(0.3)'
                }}></div>

                <div style={{ position: 'relative', zIndex: 10, padding: '0 20px' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '20px', fontWeight: '800' }}
                    >
                        Terms of Service
                    </motion.h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.4rem' }}>
                        Please read our terms carefully before proceeding with our services.
                    </p>
                </div>
            </section>

            {/* 2. Detailed Terms List (Zig-Zag Layout) */}
            <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '100px', marginTop: '100px' }}>
                {termsData.map((term, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={term.id}
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
                                        <term.icon size={30} color="#60a5fa" />
                                    </div>
                                    <h2 style={{ fontSize: '2rem', margin: 0 }}>{term.id}. {term.title}</h2>
                                </div>

                                <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#cbd5e1', marginBottom: '30px' }}>
                                    {term.text}
                                </p>

                                <div style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '15px', borderLeft: '4px solid #2563eb' }}>
                                    <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <CheckCircle size={20} color="#2563eb" style={{ marginTop: '3px' }} />
                                        <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                                            By engaging Royal Route, you acknowledge and accept this clause fully.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div style={{ flex: 1, minWidth: '300px' }}>
                                <div className="glass-panel" style={{ padding: '10px', transform: isEven ? 'rotate(2deg)' : 'rotate(-2deg)' }}>
                                    <img
                                        src={termImages[term.id]}
                                        alt={term.title}
                                        style={{ width: '100%', borderRadius: '15px', display: 'block' }}
                                    />
                                </div>
                            </div>

                        </motion.div>
                    );
                })}
            </div>

            {/* 3. Final Footer Area */}
            <section style={{ marginTop: '100px', textAlign: 'center' }}>
                <p style={{ color: '#64748b' }}>Last updated: February 2026</p>
            </section>

        </div>
    );
};

export default Terms;