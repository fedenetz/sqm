import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCogs, FaChartLine, FaWater, FaRecycle, FaFilter, FaIndustry, FaInfoCircle } from 'react-icons/fa';
import ProcessChart from '../components/ProcessChart';

const ProposalSlide: React.FC = () => {
  const [activeProposal, setActiveProposal] = useState<number | null>(null);
  
  // Optimization proposals with detailed information
  const proposals = [
    {
      id: 1,
      title: 'Ajuste de exceso de cal',
      icon: <FaCogs />,
      description: 'Implementar control automático para mantener el exceso de cal entre 15-20%, mejorando eficiencia y reduciendo residuos.',
      details: 'El análisis de los datos de operación muestra que un exceso de cal del 15-20% proporciona el mejor equilibrio entre eficiencia de conversión y generación de residuos. Se implementará un sistema de control PID con mediciones en línea de la concentración de litio para ajustar la dosificación de cal.',
      benefits: ['Aumento de eficiencia al 96-98%', 'Reducción del consumo de cal en 8%', 'Menor variabilidad en el proceso', 'Menor generación de residuos'],
      investment: '320,000 USD'
    },
    {
      id: 2,
      title: 'Mejoras en filtración',
      icon: <FaFilter />,
      description: 'Incorporar filtros de mayor precisión para minimizar la pérdida de litio en el residuo sólido.',
      details: 'La implementación de filtros prensa de última generación con tecnología de membranas de alta presión permite recuperar hasta un 4% adicional de litio que actualmente se pierde en el proceso de filtración con los carbonatos de calcio.',
      benefits: ['Recuperación adicional de 4% de litio', 'Reducción de pérdidas en residuos', 'Menor necesidad de materia prima', 'Producto final más puro'],
      investment: '450,000 USD'
    },
    {
      id: 3,
      title: 'Recuperación de agua',
      icon: <FaWater />,
      description: 'Instalar sistemas de reciclaje de agua residual para reducir el consumo total y los costos asociados.',
      details: 'El sistema de ósmosis inversa propuesto permite recuperar hasta el 80% del agua utilizada en el proceso, lo que reduce significativamente el consumo de agua fresca y minimiza la generación de aguas residuales que requieren tratamiento.',
      benefits: ['Reducción del 65% en consumo de agua', 'Menor impacto ambiental', 'Reducción de costos operativos', 'Cumplimiento de normativas ambientales'],
      investment: '380,000 USD'
    },
    {
      id: 4,
      title: 'Monitoreo en línea',
      icon: <FaChartLine />,
      description: 'Integrar sensores IoT para monitoreo en tiempo real de variables críticas (pH, temperatura, concentración).',
      details: 'La implementación de un sistema de monitoreo en tiempo real con sensores industriales IoT permitirá detectar desviaciones en los parámetros críticos del proceso, facilitando ajustes inmediatos que mejoran la eficiencia y reducen variaciones en la calidad del producto.',
      benefits: ['Control de proceso en tiempo real', 'Detección temprana de desviaciones', 'Mejor trazabilidad', 'Análisis de datos para mejora continua'],
      investment: '280,000 USD'
    },
    {
      id: 5,
      title: 'Capacitación continua',
      icon: <FaIndustry />,
      description: 'Programas de formación para operadores enfocados en eficiencia y seguridad.',
      details: 'Desarrollo de un programa integral de capacitación que incluye formación teórica y práctica en el manejo óptimo de equipos, interpretación de datos de proceso y procedimientos de respuesta ante contingencias.',
      benefits: ['Reducción de errores operativos', 'Mayor productividad', 'Mejora en seguridad industrial', 'Menor rotación de personal'],
      investment: '70,000 USD'
    }
  ];
  
  // Prepare data for comparison chart
  const optimizationImpactChart = {
    type: 'bar' as const,
    series: [
      {
        name: 'Escenario Actual',
        data: [87, 100, 100, 100]
      },
      {
        name: 'Con Optimización',
        data: [97, 88, 35, 92]
      }
    ],
    labels: ['Eficiencia (%)', 'Consumo Agua (%)', 'Generación Residuos (%)', 'Consumo Energía (%)'],
    colors: ['#003057', '#00AA4F']
  };
  
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
    <div className="slide-container  bg-gradient-to-br from-white to-green-50">
      <motion.div 
        className="max-w-6xl mx-auto" 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl mt-80 font-bold text-sqm-green mb-6 text-center" 
          variants={itemVariants}
        >
          Propuesta de Optimización del Proceso
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Proposals list */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-semibold text-sqm-blue mb-4 flex items-center">
                <FaCogs className="mr-2" /> Mejoras Propuestas
              </h3>
              
              <div className="space-y-4">
                {proposals.map((proposal) => (
                  <motion.div 
                    key={proposal.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeProposal === proposal.id
                        ? 'bg-sqm-blue text-white shadow-md'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveProposal(proposal.id)}
                    whileHover={{ scale: 1.02 }}
                    variants={itemVariants}
                  >
                    <div className="flex items-center">
                      <div className={`text-xl mr-3 ${activeProposal === proposal.id ? 'text-white' : 'text-sqm-green'}`}>
                        {proposal.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{proposal.id}. {proposal.title}</h4>
                        <p className={`${activeProposal === proposal.id ? 'text-blue-100' : 'text-gray-600'}`}>
                          {proposal.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Comparison chart */}
            <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-sqm-blue mb-4 flex items-center">
                <FaChartLine className="mr-2" /> Impacto de la Optimización
              </h3>
              <ProcessChart 
                type={optimizationImpactChart.type}
                series={optimizationImpactChart.series}
                labels={optimizationImpactChart.labels}
                title="Comparación: Escenario Actual vs. Optimizado"
                height={260}
                colors={optimizationImpactChart.colors}
                yAxisTitle="Porcentaje (%)"
              />
            </motion.div>
          </motion.div>
          
          {/* Right column - Detailed information */}
          <motion.div variants={itemVariants}>
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              {activeProposal ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  key={activeProposal}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-2xl text-sqm-green mr-3">
                      {proposals[activeProposal-1].icon}
                    </div>
                    <h3 className="text-xl font-bold text-sqm-blue">
                      {proposals[activeProposal-1].title}
                    </h3>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg mb-4">
                    <p className="text-gray-800">{proposals[activeProposal-1].details}</p>
                  </div>
                  
                  <h4 className="font-semibold text-sqm-green mb-2 flex items-center">
                    <FaInfoCircle className="mr-2" /> Beneficios:
                  </h4>
                  <ul className="list-disc pl-5 mb-4 space-y-1">
                    {proposals[activeProposal-1].benefits.map((benefit, idx) => (
                      <li key={idx} className="text-gray-700">{benefit}</li>
                    ))}
                  </ul>
                  
                  <div className="bg-green-50 p-3 rounded-lg flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Inversión estimada:</span>
                    <span className="font-mono font-bold text-sqm-green">{proposals[activeProposal-1].investment}</span>
                  </div>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <FaInfoCircle className="text-3xl text-sqm-blue mb-3 opacity-60" />
                  <p className="text-gray-500">Seleccione una propuesta para ver detalles</p>
                </div>
              )}
            </div>
            
            <motion.div variants={itemVariants} className="mt-8 bg-sqm-green bg-opacity-10 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sqm-green mb-3 flex items-center">
                <FaRecycle className="mr-2" /> Resultado Global
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center p-2 border-b border-green-100">
                  <span>Eficiencia esperada:</span>
                  <span className="font-semibold text-sqm-blue">96-98%</span>
                </li>
                <li className="flex justify-between items-center p-2 border-b border-green-100">
                  <span>Reducción de residuos:</span>
                  <span className="font-semibold text-sqm-blue">12%</span>
                </li>
                <li className="flex justify-between items-center p-2 border-b border-green-100">
                  <span>Ahorro de agua:</span>
                  <span className="font-semibold text-sqm-blue">65%</span>
                </li>
                <li className="flex justify-between items-center p-2 border-b border-green-100">
                  <span>Inversión total:</span>
                  <span className="font-semibold text-sqm-blue">1.5M USD</span>
                </li>
                <li className="flex justify-between items-center p-2">
                  <span>Tiempo de recuperación:</span>
                  <span className="font-semibold text-sqm-blue">1.8 años</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProposalSlide;
