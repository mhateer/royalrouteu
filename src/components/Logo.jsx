import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width="45" height="45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Shield */}
        <motion.path 
          d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 L50 5Z" 
          fill="url(#blueGradient)" 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* The 'R' Initial */}
        <motion.path 
          d="M35 35 V65 M35 35 H55 C65 35 65 50 55 50 H35 M50 50 L65 65" 
          stroke="white" 
          strokeWidth="6" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        
        {/* Definitions for Gradients */}
        <defs>
          <linearGradient id="blueGradient" x1="10" y1="5" x2="90" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" /> {/* Royal Blue */}
            <stop offset="1" stopColor="#1e40af" /> {/* Darker Blue */}
          </linearGradient>
        </defs>
      </svg>
      
      <div style={{ lineHeight: '1' }}>
        <motion.h2 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1 }}
          style={{ margin: 0, fontSize: '1.5rem', color: '#60a5fa', fontWeight: '800', letterSpacing: '-0.5px' }}
        >
          ROYAL <span style={{ color: '#fff', paddingLeft: '4px' }}> ROUTE</span>
        </motion.h2>
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ fontSize: '0.75rem', color: '#64748b', letterSpacing: '1px', textTransform: 'uppercase' }}
        >
          Documents Clearing
        </motion.span>
      </div>
    </div>
  );
};

export default Logo;