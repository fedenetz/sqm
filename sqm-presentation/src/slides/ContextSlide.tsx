import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaIndustry, FaFlask, FaChartLine, FaBalanceScale } from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';

const ContextSlide: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="slide-container bg-gradient-to-br from-gray-50 to-sqm-blue-50">
      <div className="max-w-6xl w-full px-4">
        <motion.h2 
          className="text-4xl font-bold text-sqm-blue mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Análisis del Proceso de Producción
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sección de Reacción Química */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <GiChemicalDrop className="text-sqm-blue text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-sqm-blue">Reacción Química Principal</h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mb-6">
              <div className="bg-sqm-blue-50 p-4 rounded-lg border border-sqm-blue-100">
                <p className="text-center text-xl font-mono text-sqm-blue">
                  Li₂CO₃ + Ca(OH)₂ → 2LiOH + CaCO₃↓
                </p>
              </div>
              <p className="text-sm text-gray-500 text-center mt-2">
                Reacción de metátesis con rendimiento teórico del 100%
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-start">
                <div className="bg-sqm-blue-100 p-2 rounded-full mr-3">
                  <FaFlask className="text-sqm-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Reactivos Principales</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>Carbonato de Litio (Li₂CO₃) - Materia prima principal</li>
                    <li>Hidróxido de Calcio (Ca(OH)₂) - Agente de conversión</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sqm-green-100 p-2 rounded-full mr-3">
                  <FaChartLine className="text-sqm-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Productos</h4>
                  <ul className="list-disc list-inside text-gray-700 text-sm">
                    <li>Hidróxido de Litio (LiOH) - Producto deseado</li>
                    <li>Carbonato de Calcio (CaCO₃) - Subproducto sólido</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Sección de Balance de Masa */}
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="flex items-center mb-6">
              <FaBalanceScale className="text-sqm-green text-2xl mr-3" />
              <h3 className="text-2xl font-semibold text-sqm-blue">Balance de Masa</h3>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-sqm-blue mb-2">Base de Cálculo</h4>
                <p className="text-gray-700 text-sm mb-3">
                  Para 1 tonelada de LiOH producido:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500">Li₂CO₃ requerido</p>
                    <p className="font-bold text-sqm-blue">1.14 t</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500">Ca(OH)₂ requerido</p>
                    <p className="font-bold text-sqm-blue">0.99 t</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-sqm-blue-50 p-4 rounded-lg border border-sqm-blue-100">
                <h4 className="font-semibold text-sqm-blue mb-2">Eficiencia del Proceso</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Conversión de Li₂CO₃ a LiOH</span>
                      <span className="font-medium">92-95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sqm-green h-2 rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Recuperación de Litio</span>
                      <span className="font-medium">88-91%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-sqm-blue h-2 rounded-full" style={{ width: '89.5%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Sección de Parámetros de Operación */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-6">
            <FaIndustry className="text-sqm-blue text-2xl mr-3" />
            <h3 className="text-2xl font-semibold text-sqm-blue">Parámetros de Operación Óptimos</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants} className="bg-sqm-blue-50 p-4 rounded-lg border border-sqm-blue-100">
              <h4 className="font-semibold text-sqm-blue mb-2">Temperatura</h4>
              <p className="text-3xl font-bold text-sqm-blue">85-95°C</p>
              <p className="text-sm text-gray-600 mt-1">Rango óptimo de reacción</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-sqm-green-50 p-4 rounded-lg border border-sqm-green-100">
              <h4 className="font-semibold text-sqm-green mb-2">Tiempo de Reacción</h4>
              <p className="text-3xl font-bold text-sqm-green">2-3 horas</p>
              <p className="text-sm text-gray-600 mt-1">Para conversión completa</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <h4 className="font-semibold text-purple-700 mb-2">Exceso de Ca(OH)₂</h4>
              <p className="text-3xl font-bold text-purple-700">5-10%</p>
              <p className="text-sm text-gray-600 mt-1">Sobre estequiometría</p>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="mt-6 pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-sqm-blue mb-3">Consideraciones Clave</h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start">
                <FaArrowRight className="text-sqm-green mt-1 mr-2 flex-shrink-0" />
                <span>La calidad de la cal utilizada afecta directamente la eficiencia de la reacción.</span>
              </li>
              <li className="flex items-start">
                <FaArrowRight className="text-sqm-green mt-1 mr-2 flex-shrink-0" />
                <span>El control de pH es crítico para maximizar la conversión a LiOH.</span>
              </li>
              <li className="flex items-start">
                <FaArrowRight className="text-sqm-green mt-1 mr-2 flex-shrink-0" />
                <span>La filtración del CaCO₃ debe realizarse a temperatura controlada para evitar pérdidas de LiOH.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContextSlide;
