import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaArrowRight } from 'react-icons/fa';

const ContextSlidePart2: React.FC = () => {
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
        {/* Sección de Objetivos */}
        <motion.div 
          className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-6">
            <FaSearch className="text-sqm-green text-2xl mr-3" />
            <h3 className="text-2xl font-semibold text-sqm-blue">Objetivos del Análisis</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-sqm-blue-50 to-white p-5 rounded-lg border border-sqm-blue-100">
              <h4 className="font-semibold text-sqm-blue text-lg mb-3">Técnicos</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-sqm-blue-100 p-1 rounded-full mr-3 mt-1">
                    <FaArrowRight className="text-sqm-blue text-xs" />
                  </div>
                  <p className="text-gray-700">
                    Determinar la relación óptima Li₂CO₃/Ca(OH)₂ para maximizar la conversión
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-sqm-blue-100 p-1 rounded-full mr-3 mt-1">
                    <FaArrowRight className="text-sqm-blue text-xs" />
                  </div>
                  <p className="text-gray-700">
                    Optimizar parámetros de operación (T°, tiempo, agitación)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-sqm-blue-100 p-1 rounded-full mr-3 mt-1">
                    <FaArrowRight className="text-sqm-blue text-xs" />
                  </div>
                  <p className="text-gray-700">
                    Evaluar la calidad del producto final (pureza, humedad, tamaño de partícula)
                  </p>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-50 to-white p-5 rounded-lg border border-green-100">
              <h4 className="font-semibold text-sqm-green text-lg mb-3">Económicos</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <FaArrowRight className="text-sqm-green text-xs" />
                  </div>
                  <p className="text-gray-700">
                    Reducir el consumo de reactivos (especialmente cal de alta pureza)
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <FaArrowRight className="text-sqm-green text-xs" />
                  </div>
                  <p className="text-gray-700">
                    Minimizar pérdidas de litio en los residuos de CaCO₃
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
                    <FaArrowRight className="text-sqm-green text-xs" />
                  </div>
                  <p className="text-gray-700">
                    Optimizar el consumo energético del proceso
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div variants={itemVariants} className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <span className="font-medium">Nota importante:</span> Este análisis se basa en datos operativos históricos y pruebas de laboratorio realizadas en condiciones controladas. Los resultados pueden variar según las condiciones específicas de operación.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
        {/* Right column - Objetivos del Estudio y Relevancia Estratégica */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="flex items-center mb-4">
            <FaSearch className="text-sqm-green text-xl mr-3" />
            <h3 className="text-2xl font-semibold">Objetivos del Estudio</h3>
          </motion.div>
          <motion.ul variants={itemVariants} className="space-y-4 mb-6">
            <li className="flex items-start">
              <FaArrowRight className="text-sqm-green mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                Analizar el efecto del exceso de lechada de cal en la eficiencia 
                de conversión de carbonato a hidróxido de litio.
              </p>
            </li>
            <li className="flex items-start">
              <FaArrowRight className="text-sqm-green mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                Optimizar el balance de masa del proceso para maximizar la recuperación 
                de litio y minimizar los residuos generados.
              </p>
            </li>
            <li className="flex items-start">
              <FaArrowRight className="text-sqm-green mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                Evaluar el impacto económico de diferentes escenarios de operación 
                considerando los costos promedio de insumos en Chile.
              </p>
            </li>
            <li className="flex items-start">
              <FaArrowRight className="text-sqm-green mt-1 mr-2 flex-shrink-0" />
              <p className="text-gray-700">
                Proponer mejoras al proceso actual para incrementar el margen 
                de ganancia y la competitividad de la operación.
              </p>
            </li>
          </motion.ul>
          <motion.div variants={itemVariants} className="bg-blue-50 p-4 rounded-md border-l-4 border-sqm-blue">
            <h4 className="font-semibold text-sqm-blue mb-2">Relevancia Estratégica</h4>
            <p className="text-gray-700">
              El hidróxido de litio es un componente clave en la fabricación de baterías 
              de alto rendimiento para vehículos eléctricos, cuya demanda se proyecta que 
              crezca a una tasa anual del 25% hasta 2030.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContextSlidePart2;
