import React from 'react';
import { motion } from 'framer-motion';


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

interface Props {
  costAnalysis: CostAnalysis;
}

const CurrentScenarioSlidePart2: React.FC<Props> = ({ costAnalysis }) => {
  return (
    <div className="p-6 mt-8 max-w-6xl mx-auto">
      <motion.h2 
        className="text-4xl font-bold text-sqm-blue mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Análisis de Exceso y Costos
      </motion.h2>
      <div className="grid grid-cols-1 gap-6">
        {/* Sección de Análisis de Costos */}
        <motion.div 
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold  mb-4 text-red-600">Análisis de Exceso de Lechada de Cal</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Consumo Actual vs Teórico</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Consumo Teórico de Cal</span>
                    <span className="font-medium">{costAnalysis.theoreticalLimeConsumption} t/t LiOH</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-green-500 h-2.5 rounded-full" 
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Consumo Actual de Cal</span>
                    <span className="font-medium">{costAnalysis.actualLimeConsumption} t/t LiOH</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-red-500 h-2.5 rounded-full" 
                      style={{ width: '133%' }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-yellow-700">
                  <span className="font-semibold">Exceso actual:</span> {costAnalysis.excessPercentage}% más de lo teóricamente necesario
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-3">Impacto Económico Anual</h4>
              <div className="space-y-2">
                <div className="flex justify-between border-b pb-2">
                  <span>Costo Teórico Anual:</span>
                  <span className="font-medium">${costAnalysis.theoreticalAnnualCost.toFixed(1)}M USD</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span>Costo Actual Anual:</span>
                  <span className="font-medium text-red-600">${costAnalysis.annualLimeCost.toFixed(1)}M USD</span>
                </div>
                <div className="flex justify-between font-semibold pt-2">
                  <span>Exceso de Costo:</span>
                  <span className="text-red-600">${costAnalysis.excessCost.toFixed(1)}M USD</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400">
                  <p className="text-blue-700">
                    <span className="font-semibold">Oportunidad de ahorro:</span> Reducir el exceso de cal podría ahorrar hasta ${costAnalysis.excessCost.toFixed(1)}M USD anuales
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-medium text-gray-700 mb-2">Causas del Exceso</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dosificación no optimizada de lechada de cal</li>
              <li>Pérdidas en el proceso de mezcla y reacción</li>
              <li>Falta de control en tiempo real de la estequiometría</li>
              <li>Inestabilidad en la calidad de la materia prima</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CurrentScenarioSlidePart2;
