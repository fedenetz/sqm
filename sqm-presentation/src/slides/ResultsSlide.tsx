import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProcessChart from '../components/ProcessChart';
import { costData, economicAnalysisData } from '../data/processData';
import { FaChartPie, FaChartLine, FaCalculator, FaDollarSign, FaAngleDoubleUp } from 'react-icons/fa';

const ResultsSlide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'costs' | 'margins' | 'roi'>('costs');
  
  // Prepare data for cost comparison
  const costChart = {
    type: 'bar' as const,
    series: [
      {
        name: 'Costo de Producción (USD/ton)',
        data: costData.optimizationScenarios.map(s => s.productionCost)
      }
    ],
    labels: costData.optimizationScenarios.map(s => s.name),
    colors: ['#003057', '#004d7a', '#0070a0', '#0091c7'],
    tooltipFormatters: {
      'y': (value: number) => `${value.toLocaleString()} USD/ton`
    }
  };
  
  // Prepare data for profit margin
  const marginChart = {
    type: 'line' as const,
    series: [
      {
        name: 'Margen de Ganancia (%)',
        data: [economicAnalysisData.profitMargin.current, economicAnalysisData.profitMargin.withOptimization, economicAnalysisData.profitMargin.projected2025, economicAnalysisData.profitMargin.projected2030]
      }
    ],
    labels: ['Actual', 'Optimizado', '2025', '2030'],
    colors: ['#00AA4F'],
    tooltipFormatters: {
      'y': (value: number) => `${value.toFixed(1)}%`
    }
  };
  
  // Prepare data for cost breakdown
  const costBreakdownChart = {
    type: 'pie' as const,
    series: [
      costData.rawMaterials.lithiumCarbonate,
      costData.rawMaterials.lime,
      costData.rawMaterials.water,
      costData.rawMaterials.energy,
      costData.rawMaterials.labor,
      costData.rawMaterials.maintenance
    ],
    labels: ['Carbonato de Litio', 'Cal', 'Agua', 'Energía', 'Mano de Obra', 'Mantenimiento'],
    colors: ['#003057', '#00457a', '#005a9e', '#0070c2', '#0085e6', '#00aa4f'],
    tooltipFormatters: {
      'y': (value: number) => `${value.toLocaleString()} USD`
    }
  };
  
  // Prepare data for ROI projections
  const roiProjectionChart = {
    type: 'area' as const,
    series: [
      {
        name: 'Inversión Acumulada',
        data: [
          economicAnalysisData.roi.investmentCost,
          economicAnalysisData.roi.investmentCost,
          economicAnalysisData.roi.investmentCost,
          economicAnalysisData.roi.investmentCost,
          economicAnalysisData.roi.investmentCost
        ]
      },
      {
        name: 'Ahorro Acumulado',
        data: [
          0,
          economicAnalysisData.roi.annualSavings,
          economicAnalysisData.roi.annualSavings * 2,
          economicAnalysisData.roi.annualSavings * 3,
          economicAnalysisData.roi.annualSavings * 4
        ]
      }
    ],
    labels: ['Año 0', 'Año 1', 'Año 2', 'Año 3', 'Año 4'],
    colors: ['#003057', '#00AA4F'],
    tooltipFormatters: {
      'y': (value: number) => `${value.toLocaleString()} USD`
    }
  };
  
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
  
  // Helper function to render the active tab content
  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'costs':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-sqm-blue mb-4 flex items-center">
                  <FaChartLine className="mr-2" /> Costos por Escenario
                </h3>
                <ProcessChart 
                  type={costChart.type} 
                  series={costChart.series} 
                  labels={costChart.labels} 
                  title="Costos de Producción por Escenario" 
                  height={260}
                  colors={costChart.colors}
                  yAxisTitle="USD/ton"
                  tooltipFormatters={costChart.tooltipFormatters}
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-sqm-blue mb-4 flex items-center">
                  <FaChartPie className="mr-2" /> Desglose de Costos
                </h3>
                <ProcessChart 
                  type={costBreakdownChart.type} 
                  series={costBreakdownChart.series} 
                  labels={costBreakdownChart.labels} 
                  title="Distribución de Costos por Insumo" 
                  height={260}
                  colors={costBreakdownChart.colors}
                  tooltipFormatters={costBreakdownChart.tooltipFormatters}
                />
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sqm-blue mb-4 flex items-center">
                <FaCalculator className="mr-2" /> Análisis de Costos Detallado
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-sqm-blue text-white">
                    <tr>
                      <th className="px-4 py-2 text-left">Escenario</th>
                      <th className="px-4 py-2 text-center">Exceso de Cal</th>
                      <th className="px-4 py-2 text-center">Recuperación</th>
                      <th className="px-4 py-2 text-center">Costo (USD/ton)</th>
                      <th className="px-4 py-2 text-center">Diferencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {costData.optimizationScenarios.map((scenario, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 font-medium">{scenario.name}</td>
                        <td className="px-4 py-2 text-center">{scenario.excessLime}%</td>
                        <td className="px-4 py-2 text-center">{scenario.recoveryRate}%</td>
                        <td className="px-4 py-2 text-center font-mono">{scenario.productionCost.toLocaleString()}</td>
                        <td className="px-4 py-2 text-center">
                          {idx === 0 ? (
                            <span className="text-gray-500">Línea base</span>
                          ) : (
                            <span className="text-red-500 flex items-center justify-center">
                              <FaAngleDoubleUp className="mr-1" />
                              {((scenario.productionCost - costData.optimizationScenarios[0].productionCost) / costData.optimizationScenarios[0].productionCost * 100).toFixed(1)}%
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Nota:</strong> Se observa un incremento en el costo directo de producción al aumentar el exceso de cal, 
                sin embargo, este aumento es compensado por la mayor eficiencia y recuperación de litio, lo que mejora la rentabilidad global.
              </p>
            </motion.div>
          </>
        );
        
      case 'margins':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-sqm-blue mb-4 flex items-center">
                  <FaChartLine className="mr-2" /> Tendencia de Márgenes
                </h3>
                <ProcessChart 
                  type={marginChart.type} 
                  series={marginChart.series} 
                  labels={marginChart.labels} 
                  title="Evolución del Margen de Ganancia" 
                  height={260}
                  colors={marginChart.colors}
                  yAxisTitle="Margen (%)"
                  tooltipFormatters={marginChart.tooltipFormatters}
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-sqm-blue mb-4 flex items-center">
                  <FaDollarSign className="mr-2" /> Análisis de Precios
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-sqm-blue mb-2">Precio de Venta (USD/ton)</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                        <span className="text-sm text-gray-500">Actual</span>
                        <span className="text-2xl font-bold text-sqm-blue">{economicAnalysisData.sellingPrice.current.toLocaleString()}</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                        <span className="text-sm text-gray-500">Proyectado 2025</span>
                        <span className="text-2xl font-bold text-sqm-blue">{economicAnalysisData.sellingPrice.projected2025.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-sqm-green mb-2">Costo de Producción (USD/ton)</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                        <span className="text-sm text-gray-500">Actual</span>
                        <span className="text-2xl font-bold text-sqm-green">{economicAnalysisData.productionCost.current.toLocaleString()}</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                        <span className="text-sm text-gray-500">Con Optimización</span>
                        <span className="text-2xl font-bold text-sqm-green">{economicAnalysisData.productionCost.withOptimization.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sqm-blue mb-4 flex items-center">
                <FaCalculator className="mr-2" /> Comparación de Márgenes
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-sqm-blue text-white">
                    <tr>
                      <th className="px-4 py-2 text-left">Escenario</th>
                      <th className="px-4 py-2 text-center">Precio Venta (USD/ton)</th>
                      <th className="px-4 py-2 text-center">Costo (USD/ton)</th>
                      <th className="px-4 py-2 text-center">Margen (%)</th>
                      <th className="px-4 py-2 text-center">Incremento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 font-medium">Actual</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.sellingPrice.current.toLocaleString()}</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.productionCost.current.toLocaleString()}</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.profitMargin.current.toFixed(1)}%</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-gray-500">Línea base</span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 font-medium">Con Optimización</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.sellingPrice.current.toLocaleString()}</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.productionCost.withOptimization.toLocaleString()}</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.profitMargin.withOptimization.toFixed(1)}%</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-green-500 flex items-center justify-center">
                          <FaAngleDoubleUp className="mr-1" />
                          {(economicAnalysisData.profitMargin.withOptimization - economicAnalysisData.profitMargin.current).toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                      <td className="px-4 py-2 font-medium">Proyección 2025</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.sellingPrice.projected2025.toLocaleString()}</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.productionCost.withOptimization.toLocaleString()}</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.profitMargin.projected2025.toFixed(1)}%</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-green-500 flex items-center justify-center">
                          <FaAngleDoubleUp className="mr-1" />
                          {(economicAnalysisData.profitMargin.projected2025 - economicAnalysisData.profitMargin.current).toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-2 font-medium">Proyección 2030</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.sellingPrice.projected2030.toLocaleString()}</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.productionCost.withOptimization.toLocaleString()}</td>
                      <td className="px-4 py-2 text-center font-mono">{economicAnalysisData.profitMargin.projected2030.toFixed(1)}%</td>
                      <td className="px-4 py-2 text-center">
                        <span className="text-green-500 flex items-center justify-center">
                          <FaAngleDoubleUp className="mr-1" />
                          {(economicAnalysisData.profitMargin.projected2030 - economicAnalysisData.profitMargin.current).toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </>
        );
        
      case 'roi':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-sqm-blue mb-4 flex items-center">
                  <FaChartLine className="mr-2" /> Proyección de Recuperación de Inversión
                </h3>
                <ProcessChart 
                  type={roiProjectionChart.type} 
                  series={roiProjectionChart.series} 
                  labels={roiProjectionChart.labels} 
                  title="Inversión vs. Ahorro Acumulado" 
                  height={260}
                  colors={roiProjectionChart.colors}
                  yAxisTitle="USD"
                  tooltipFormatters={roiProjectionChart.tooltipFormatters}
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-sqm-blue mb-4 flex items-center">
                  <FaCalculator className="mr-2" /> Detalles de la Inversión
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-sqm-blue mb-2">Inversión Total</h4>
                        <div className="flex flex-col p-3 bg-white rounded-md shadow-sm">
                          <span className="text-3xl font-bold text-sqm-blue">${economicAnalysisData.roi.investmentCost.toLocaleString()}</span>
                          <span className="text-sm text-gray-500">USD</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sqm-blue mb-2">Ahorro Anual</h4>
                        <div className="flex flex-col p-3 bg-white rounded-md shadow-sm">
                          <span className="text-3xl font-bold text-sqm-green">${economicAnalysisData.roi.annualSavings.toLocaleString()}</span>
                          <span className="text-sm text-gray-500">USD/año</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-sqm-green mb-2">Métricas de Retorno</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                        <span className="text-sm text-gray-500">Tiempo de Recuperación</span>
                        <span className="text-2xl font-bold text-sqm-blue">{economicAnalysisData.roi.paybackPeriod} años</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white rounded-md shadow-sm">
                        <span className="text-sm text-gray-500">ROI Anual</span>
                        <span className="text-2xl font-bold text-sqm-blue">{(economicAnalysisData.roi.annualSavings / economicAnalysisData.roi.investmentCost * 100).toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-sqm-blue mb-4 flex items-center">
                <FaDollarSign className="mr-2" /> Análisis de Sensibilidad
              </h3>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700 mb-4">
                  El análisis de sensibilidad muestra que la inversión sigue siendo rentable incluso con fluctuaciones en los precios 
                  del carbonato de litio y las variaciones en los costos de energía.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-3 bg-white rounded-md shadow-sm">
                    <h5 className="font-medium text-sm text-gray-500 mb-1">Escenario Pesimista</h5>
                    <span className="text-lg font-semibold text-red-500">2.4 años</span>
                    <p className="text-xs text-gray-500 mt-1">Tiempo de recuperación con caída de 20% en precios</p>
                  </div>
                  
                  <div className="p-3 bg-white rounded-md shadow-sm">
                    <h5 className="font-medium text-sm text-gray-500 mb-1">Escenario Base</h5>
                    <span className="text-lg font-semibold text-sqm-blue">{economicAnalysisData.roi.paybackPeriod} años</span>
                    <p className="text-xs text-gray-500 mt-1">Tiempo de recuperación con precios proyectados</p>
                  </div>
                  
                  <div className="p-3 bg-white rounded-md shadow-sm">
                    <h5 className="font-medium text-sm text-gray-500 mb-1">Escenario Optimista</h5>
                    <span className="text-lg font-semibold text-green-500">1.4 años</span>
                    <p className="text-xs text-gray-500 mt-1">Tiempo de recuperación con aumento de 10% en precios</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        );
        
      default:
        return null;
    }
  };
  return (
    <div className="slide-container bg-gray-50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2 
          className="text-4xl font-bold text-sqm-blue mb-6 text-center" 
          variants={itemVariants}
        >
          Análisis Económico y Resultados
        </motion.h2>
        
        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-8" 
          variants={itemVariants}
        >
          <div className="bg-white rounded-lg shadow-md p-1 flex space-x-1">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'costs' 
                  ? 'bg-sqm-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('costs')}
            >
              <span className="flex items-center">
                <FaCalculator className="mr-2" /> Costos
              </span>
            </button>
            
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'margins' 
                  ? 'bg-sqm-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('margins')}
            >
              <span className="flex items-center">
                <FaChartLine className="mr-2" /> Márgenes
              </span>
            </button>
            
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                activeTab === 'roi' 
                  ? 'bg-sqm-blue text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('roi')}
            >
              <span className="flex items-center">
                <FaDollarSign className="mr-2" /> ROI
              </span>
            </button>
          </div>
        </motion.div>
        
        {/* Tab Content */}
        {renderActiveTabContent()}
      </motion.div>
    </div>
  );
};

export default ResultsSlide;
