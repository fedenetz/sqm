import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface NavigationArrowsProps {
  goToPrev: () => void;
  goToNext: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
  isVisible: boolean;
}

const NavigationArrows: React.FC<NavigationArrowsProps> = ({
  goToPrev,
  goToNext,
  isFirstSlide,
  isLastSlide,
  isVisible
}) => {
  return (
    <>
      {/* Left Arrow */}
      <motion.button
        className={`fixed left-6 md:left-10 top-1/2 -translate-y-1/2 bg-sqm-blue shadow-lg bg-opacity-80 hover:bg-opacity-100 text-white p-3 md:p-4 rounded-full z-40 transition-all duration-300 ${!isVisible && 'opacity-0'}`}
        onClick={goToPrev}
        disabled={isFirstSlide}
        initial={{ opacity: 0, x: -20 }}
        whileHover={{ scale: 1.1 }}
        animate={{ 
          opacity: isFirstSlide ? 0.4 : (isVisible ? 1 : 0), 
          x: isVisible ? 0 : -20 
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isVisible && !isFirstSlide ? 'auto' : 'none' }}
      >
        <FaChevronLeft size={20} className="md:text-xl" />
      </motion.button>
      
      {/* Right Arrow */}
      <motion.button
        className={`fixed right-6 md:right-10 top-1/2 -translate-y-1/2 bg-sqm-blue shadow-lg bg-opacity-80 hover:bg-opacity-100 text-white p-3 md:p-4 rounded-full z-40 transition-all duration-300 ${!isVisible && 'opacity-0'}`}
        onClick={goToNext}
        disabled={isLastSlide}
        initial={{ opacity: 0, x: 20 }}
        whileHover={{ scale: 1.1 }}
        animate={{ 
          opacity: isLastSlide ? 0.4 : (isVisible ? 1 : 0), 
          x: isVisible ? 0 : 20 
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isVisible && !isLastSlide ? 'auto' : 'none' }}
      >
        <FaChevronRight size={20} className="md:text-xl" />
      </motion.button>
    </>
  );
};

export default NavigationArrows;
