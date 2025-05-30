import React from 'react';
import { motion } from 'framer-motion';

interface SlideIndicatorsProps {
  totalSlides: number;
  currentSlide: number;
  goToSlide: (index: number) => void;
  isVisible: boolean;
}

const SlideIndicators: React.FC<SlideIndicatorsProps> = ({
  totalSlides,
  currentSlide,
  goToSlide,
  isVisible
}) => {
  return (
    <motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-3 z-40 bg-black bg-opacity-20 px-4 py-2 rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      transition={{ duration: 0.3 }}
    >
      {Array.from({ length: totalSlides }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => goToSlide(index)}
          className={`slide-indicator ${currentSlide === index ? 'slide-indicator-active' : ''}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Go to slide ${index + 1}`}
          title={`Diapositiva ${index + 1}`}
        />
      ))}
    </motion.div>
  );
};

export default SlideIndicators;
