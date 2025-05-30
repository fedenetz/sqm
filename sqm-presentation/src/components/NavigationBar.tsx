import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface NavigationBarProps {
  slides: { id: number; title: string; component: React.ComponentType }[];
  currentSlide: number;
  goToSlide: (index: number) => void;
  isVisible: boolean;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ 
  slides, 
  currentSlide, 
  goToSlide, 
  isVisible 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-sqm-blue shadow-lg transition-all duration-300"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/Sociedad_Química_y_Minera_logo.svg.png"
              alt="SQM Logo"
              className="h-10 mr-4"
              onError={(e) => { e.currentTarget.src = '/Sociedad_Química_y_Minera_logo.svg.png'; }}
            />
          </div>
          
          {/* Desktop Navigation links */}
          <div className="hidden md:flex items-center space-x-2">
            {slides.map((slide) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(slide.id)}
                className={`nav-link ${currentSlide === slide.id ? 'nav-active' : ''}`}
              >
                {slide.title}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white p-2 flex items-center focus:outline-none"
            >
              <span className="mr-1">{slides[currentSlide].title}</span>
              <FaChevronDown 
                size={14} 
                className={`transform transition-transform duration-300 ${mobileMenuOpen ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-2 border-t border-sqm-blue-light"
          >
            <div className="flex flex-col">
              {slides.map((slide) => (
                <button
                  key={slide.id}
                  onClick={() => {
                    goToSlide(slide.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-2 px-4 text-left text-white hover:bg-sqm-blue-light transition-colors duration-200 ${
                    currentSlide === slide.id ? 'bg-sqm-blue-light font-medium' : ''
                  }`}
                >
                  {slide.title}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavigationBar;
