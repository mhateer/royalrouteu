import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90, scale: 0.9 }} // Start flipped 90deg
      animate={{ opacity: 1, rotateY: 0, scale: 1 }}    // Flip to flat (0deg)
      exit={{ opacity: 0, rotateY: -90, scale: 0.9 }}   // Flip away (-90deg)
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] // Custom "cubic-bezier" for smooth glass feel
      }}
      style={{ 
        perspective: '1000px', // Essential for 3D effect
        width: '100%',
        minHeight: '100vh',
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;