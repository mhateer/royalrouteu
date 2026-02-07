import { motion } from 'framer-motion';

const AnimatedIcon = ({ children }) => {
  return (
    <motion.div
      animate={{ 
        y: [0, -8, 0], // Floats up and down
        scale: [1, 1.05, 1] // Pulses slightly
      }}
      transition={{ 
        duration: 3, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      style={{ 
        color: 'var(--primary)', 
        display: 'inline-block',
        background: 'rgba(37, 99, 235, 0.1)', 
        padding: '15px', 
        borderRadius: '12px'
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedIcon;