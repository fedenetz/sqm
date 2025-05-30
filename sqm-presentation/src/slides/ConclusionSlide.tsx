import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { technicalReferences } from '../data/processData';
import { FaBookOpen, FaQuoteLeft, FaExternalLinkAlt, FaChartLine, FaLightbulb, FaCheckCircle, FaRegHandshake } from 'react-icons/fa';

const ConclusionSlide: React.FC = () => {
  const [activeReference, setActiveReference] = useState<number | null>(null);
  
  // Key findings from the study
  const keyFindings = [
    {
      title: "Relación Exceso-Eficiencia",
      icon: <FaChartLine />,
      content: "El exceso de lechada de cal entre 15-20% ofrece el mejor equilibrio entre eficiencia de reacción (96-98%) y generación de residuos. Los excesos superiores al 20% presentan retornos marginales decrecientes."
    },
    {
      title: "Viabilidad Económica",
      icon: <FaLightbulb />,
      content: "La optimización propuesta permite aumentar el margen de ganancia del 23.9% al 32.9%, con un retorno de inversión menor a 2 años, incluso en escenarios de fluctuación de precios del litio."
    },
    {
      title: "Sostenibilidad Ambiental",
      icon: <FaCheckCircle />,
      content: "La integración de tecnologías de monitoreo y el sistema de reciclaje de agua reduce el consumo hídrico en un 65% y mejora la gestión de residuos, alineando el proceso con los estándares ambientales más exigentes."
    },
    {
      title: "Calidad del Producto",
      icon: <FaRegHandshake />,
      content: "El hidróxido de litio obtenido mediante el proceso optimizado cumple con las especificaciones de pureza requeridas por los fabricantes de baterías para vehículos eléctricos (>99.5% LiOH·H₂O)."
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="slide-container bg-gradient-to-br from-white to-blue-50">
      <motion.div 
        className="max-w-6xl mx-auto" 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl font-bold text-sqm-blue mb-8 text-center" 
          variants={itemVariants}
        >
          Conclusiones y Referencias
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left column - Conclusions */}
          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold text-sqm-blue mb-6 flex items-center">
                <FaLightbulb className="text-sqm-green mr-3" /> 
                Hallazgos Principales
              </h3>
              
              <div className="space-y-6">
                {keyFindings.map((finding, idx) => (
                  <motion.div 
                    key={idx}
                    className="p-4 bg-blue-50 rounded-lg"
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start">
                      <div className="text-sqm-blue text-xl mt-1 mr-3">
                        {finding.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-sqm-blue mb-2">{finding.title}</h4>
                        <p className="text-gray-700">{finding.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div className="bg-white p-6 rounded-lg shadow-md" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-sqm-blue mb-4 flex items-center">
                <FaChartLine className="text-sqm-green mr-3" /> 
                Proyección Futura
              </h3>
              
              <div className="p-4 bg-green-50 rounded-lg mb-4">
                <p className="text-gray-700">
                  La demanda global de hidróxido de litio para baterías seguirá creciendo a una tasa anual del 25% hasta 2030, 
                  impulsada por la electrificación del transporte y el almacenamiento de energía renovable.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <h4 className="font-semibold text-sqm-blue mb-2">Aumento de Capacidad</h4>
                  <p className="text-4xl font-bold text-sqm-green">3x</p>
                  <p className="text-sm text-gray-600 mt-1">Para 2030</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg text-center">
                  <h4 className="font-semibold text-sqm-blue mb-2">Reducción de Huella de Carbono</h4>
                  <p className="text-4xl font-bold text-sqm-green">-40%</p>
                  <p className="text-sm text-gray-600 mt-1">Meta para 2027</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right column - References */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-sqm-blue mb-4 flex items-center">
                <FaBookOpen className="text-sqm-green mr-3" /> 
                Referencias Técnicas
              </h3>
              
              <div className="space-y-3 mb-6">
                {technicalReferences.map((ref, idx) => (
                  <div 
                    key={idx} 
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      activeReference === idx 
                        ? 'bg-sqm-blue text-white' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveReference(idx)}
                  >
                    <h4 className="font-semibold truncate">{ref.title}</h4>
                    <p className={`text-sm ${activeReference === idx ? 'text-blue-100' : 'text-gray-500'}`}>
                      {ref.authors} ({ref.year})
                    </p>
                  </div>
                ))}
              </div>
              
              {activeReference !== null && (
                <motion.div 
                  className="p-4 bg-blue-50 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  key={activeReference}
                >
                  <div className="flex items-start">
                    <FaQuoteLeft className="text-sqm-blue opacity-20 text-xl mr-3 mt-1" />
                    <div>
                      <h4 className="font-semibold text-sqm-blue">{technicalReferences[activeReference].title}</h4>
                      <p className="text-sm text-gray-700 mt-1">
                        {technicalReferences[activeReference].authors} ({technicalReferences[activeReference].year}). 
                        <em>{technicalReferences[activeReference].journal}</em>.
                      </p>
                      <a 
                        href={technicalReferences[activeReference].url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center mt-3 text-sm text-sqm-green hover:underline"
                      >
                        Ver documento completo
                        <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
            
            <motion.div 
              className="mt-8 p-6 bg-gradient-to-br from-sqm-blue to-sqm-green rounded-lg shadow-md text-white"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4">Mensaje Final</h3>
              <p className="italic">
                "La optimización del proceso de producción de hidróxido de litio no solo mejora la rentabilidad, 
                sino que también contribuye a la sostenibilidad de la cadena de suministro de baterías y al desarrollo 
                de la electromovilidad a nivel global."
              </p>
              <div className="text-right mt-2 font-light text-sm">
                - Equipo de Investigación y Desarrollo, SQM
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 text-center text-sm text-gray-500"
          variants={itemVariants}
        >
          <p>Presentación desarrollada con datos basados en investigación actual sobre procesos de producción de hidróxido de litio.</p>
          <p>© SQM 2025. Todos los derechos reservados.</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConclusionSlide;
