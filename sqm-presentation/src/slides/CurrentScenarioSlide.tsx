import React from 'react';
import { motion } from 'framer-motion';

interface EfficiencyData {
  stage: string;
  value: number;
  unit: string;
}

interface CostAnalysis {
  theoreticalLimeConsumption: string;
  actualLimeConsumption: string;
  annualProduction: number;
  annualLimeConsumption: number;
  annualLimeCost: number;
  theoreticalAnnualCost: number;
  excessCost: number;
  excessPercentage: string;
  annualLiOHLost: string;
  annualLiOHLostValue: number;
  totalAnnualLoss: number;
  dailyPurgeLiOH: string;
  impuritiesInSolution: number;
}

interface CurrentScenarioSlideProps {
  costAnalysis: CostAnalysis;
}

const CurrentScenarioSlide: React.FC<CurrentScenarioSlideProps> = ({ costAnalysis }) => {
  // Datos para las gráficas de eficiencia
  const efficiencyData: EfficiencyData[] = [
    { stage: 'Conversión Li₂CO₃ a LiOH', value: 94, unit: '%' },
    { stage: 'Recuperación de Litio', value: 89.5, unit: '%' },
    { stage: 'Pérdidas en residuos', value: 6.5, unit: '%' }
  ];

  // Parámetros de operación
  // (all calculations are now handled in App.tsx and passed as props)
  const plantParams = {
    hourlyProduction: 3,
    operatingHoursPerDay: 24,
    operatingDaysPerYear: 330,
    recoveryRate: 0.90,
    purgeRate: 12,
    purgeLiOHConcentration: 0.09,
    purgeDensity: 1.2,
    limeCostPerTon: 250,
    LiOHPricePerTon: 25000,
    limeComposition: {
      CaO: 0.92,
      impurities: 0.08,
      impurityInLime: 0.15
    }
  };
  const dailyProduction = plantParams.hourlyProduction * plantParams.operatingHoursPerDay;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold text-sqm-blue mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Escenario Actual del Proceso
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sección de Producción y Consumos */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Producción y Consumos</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800">Capacidad de Producción</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex justify-between">
                  <span>Producción Horaria:</span>
                  <span className="font-semibold">{plantParams.hourlyProduction} t/h LiOH</span>
                </li>
                <li className="flex justify-between">
                  <span>Producción Diaria:</span>
                  <span className="font-semibold">{dailyProduction.toFixed(1)} t/día</span>
                </li>
                <li className="flex justify-between">
                  <span>Producción Anual:</span>
                  <span className="font-semibold">{costAnalysis.annualProduction} t/año</span>
                </li>
                <li className="flex justify-between">
                  <span>Eficiencia de Recuperación:</span>
                  <span className="font-semibold">{(plantParams.recoveryRate * 100).toFixed(0)}%</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-700">Consumo de Cal</h4>
              <div className="mt-2 space-y-2">
                <div className="bg-gray-50 p-3 rounded">
                  <div className="flex justify-between text-sm">
                    <span>Consumo Teórico:</span>
                    <span className="font-medium">{costAnalysis.theoreticalLimeConsumption} t cal/t LiOH</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-green-500 h-2 rounded-full" 
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <div className="flex justify-between text-sm">
                    <span>Consumo Real:</span>
                    <span className="font-medium">{costAnalysis.actualLimeConsumption} t cal/t LiOH</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div 
                      className="bg-red-500 h-2 rounded-full" 
                      style={{ width: '133%' }}
                    />
                  </div>
                  <p className="text-xs text-red-600 mt-1">
                    +{costAnalysis.excessPercentage}% sobre lo teórico
                  </p>
                </div>
                <div className="mt-2 text-sm">
                  <p className="flex justify-between">
                    <span>Consumo Anual de Cal:</span>
                    <span className="font-medium">{costAnalysis.annualLimeConsumption.toLocaleString()} t/año</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Sección de Eficiencia y Pérdidas */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold mb-4">Eficiencia y Pérdidas</h3>
          
          {/* Eficiencia del Proceso */}
          <div className="mb-6">
            <h4 className="font-medium text-gray-700 mb-3">Eficiencia del Proceso</h4>
            <div className="space-y-3">
              {efficiencyData.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>{item.stage}</span>
                    <span className="font-medium">{item.value}{item.unit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full" 
                      style={{ 
                        width: `${item.value}%`,
                        backgroundColor: index === efficiencyData.length - 1 ? '#EF4444' : '#3B82F6'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Análisis de Purga */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-red-700 mb-3">Pérdidas por Purga</h4>
            <div className="space-y-3">
              <div className="bg-red-50 p-3 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Volumen de Purga Diaria:</span>
                  <span className="font-medium">{plantParams.purgeRate} m³/día</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span>Concentración de LiOH en Purga:</span>
                  <span className="font-medium">{(plantParams.purgeLiOHConcentration * 100).toFixed(1)}%</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">Pérdida Diaria de LiOH:</span>
                  <span className="font-medium">{costAnalysis.dailyPurgeLiOH} t/día</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Pérdida Anual de LiOH:</span>
                  <span className="font-medium">{costAnalysis.annualLiOHLost} t/año</span>
                </div>
                <div className="flex justify-between font-semibold text-red-700">
                  <span>Valor del LiOH Perdido:</span>
                  <span>${costAnalysis.annualLiOHLostValue.toFixed(1)}M USD/año</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Impurezas */}
          <div className="mt-4 pt-4 border-t">
            <h4 className="font-medium text-amber-700 mb-2">Acumulación de Impurezas</h4>
            <div className="bg-amber-50 p-3 rounded-lg">
              <p className="text-sm text-amber-800">
                Se acumulan aproximadamente <span className="font-semibold">{costAnalysis.impuritiesInSolution} toneladas de impurezas</span> anualmente en la solución, principalmente Silicio y Sulfatos provenientes de la cal.
              </p>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default CurrentScenarioSlide;
