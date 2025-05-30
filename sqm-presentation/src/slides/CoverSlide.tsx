import React from 'react';
import { motion } from 'framer-motion';

const CoverSlide: React.FC = () => {
  return (
    <div className="slide-container bg-gradient-to-br from-sqm-blue to-blue-900">
      <motion.div 
        className="slide-content text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-48 flex justify-center mb-10">
          <img 
            src="/Sociedad_Química_y_Minera_logo.svg.png" 
            alt="SQM Logo" 
            className="h-48 mb-8"
            onError={(e) => {
              e.currentTarget.src = '/Sociedad_Química_y_Minera_logo.svg.png';
              e.currentTarget.alt = 'Logo SQM';
            }}
          />
        </div>
        
        <h1 className="slide-title text-white">
          Producción de Hidróxido de Litio
        </h1>
        <h2 className="slide-subtitle text-white mb-12">
          Optimización del proceso a partir de carbonato de litio
        </h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6 space-y-4 md:space-y-0 mt-12">
          <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg w-64 text-center">
            <p className="text-lg font-medium">Mayo 2025</p>
          </div>
          <div className="bg-white bg-opacity-20 px-6 py-3 rounded-lg w-64 text-center">
            <p className="text-lg font-medium">División de Procesos Químicos</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CoverSlide;
