import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import NavigationBar from './components/NavigationBar';
import SlideIndicators from './components/SlideIndicators';
import NavigationArrows from './components/NavigationArrows';
import CoverSlide from './slides/CoverSlide';
import ContextSlide from './slides/ContextSlide';
import ContextSlidePart2 from './slides/ContextSlidePart2';
import CurrentScenarioSlide from './slides/CurrentScenarioSlide';
import CurrentScenarioSlidePart2 from './slides/CurrentScenarioSlidePart2';

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

import ProposalSlide from './slides/ProposalSlide';
import ResultsSlide from './slides/ResultsSlide';
import ConclusionSlide from './slides/ConclusionSlide';

// Define slide data with appropriate type definitions
// This matches what NavigationBar and other components expect


// Cost analysis logic moved from CurrentScenarioSlide
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
const annualProduction = dailyProduction * plantParams.operatingDaysPerYear;
const dailyPurgeLiOH = plantParams.purgeRate * plantParams.purgeDensity * plantParams.purgeLiOHConcentration;
const annualLiOHLost = dailyPurgeLiOH * plantParams.operatingDaysPerYear;
const annualLiOHLostValue = annualLiOHLost * plantParams.LiOHPricePerTon;
const theoreticalLimeConsumption = 1.5 / plantParams.limeComposition.CaO;
const actualLimeConsumption = theoreticalLimeConsumption / plantParams.recoveryRate;
const annualLimeConsumption = actualLimeConsumption * annualProduction;
const annualLimeCost = annualLimeConsumption * plantParams.limeCostPerTon;
const theoreticalAnnualLime = theoreticalLimeConsumption * annualProduction;
const theoreticalAnnualCost = theoreticalAnnualLime * plantParams.limeCostPerTon;
const excessCost = annualLimeCost - theoreticalAnnualCost;
const excessPercentage = ((actualLimeConsumption / theoreticalLimeConsumption) - 1) * 100;
const annualImpurities = annualLimeConsumption * plantParams.limeComposition.impurities;
const impuritiesInSolution = annualImpurities * plantParams.limeComposition.impurityInLime;
const totalAnnualLoss = excessCost + annualLiOHLostValue;
const costAnalysis: CostAnalysis = {
  theoreticalLimeConsumption: theoreticalLimeConsumption.toFixed(2),
  actualLimeConsumption: actualLimeConsumption.toFixed(2),
  annualProduction: Math.round(annualProduction),
  annualLimeConsumption: Math.round(annualLimeConsumption),
  annualLimeCost: annualLimeCost / 1000000,
  theoreticalAnnualCost: theoreticalAnnualCost / 1000000,
  excessCost: excessCost / 1000000,
  excessPercentage: excessPercentage.toFixed(0),
  annualLiOHLost: annualLiOHLost.toFixed(1),
  annualLiOHLostValue: annualLiOHLostValue / 1000000,
  totalAnnualLoss: totalAnnualLoss / 1000000,
  dailyPurgeLiOH: dailyPurgeLiOH.toFixed(2),
  impuritiesInSolution: Math.round(impuritiesInSolution)
};

const slideData = [
  { id: 0, title: 'Portada', component: CoverSlide },
  { id: 1, title: 'Contexto', component: ContextSlide },
  { id: 2, title: 'Objetivos', component: ContextSlidePart2 },
  { id: 3, title: 'Escenario Actual', component: (props: Record<string, unknown>) => <CurrentScenarioSlide costAnalysis={costAnalysis} {...props} /> },
  { id: 4, title: 'Costos y Exceso', component: (props: Record<string, unknown>) => <CurrentScenarioSlidePart2 costAnalysis={costAnalysis} {...props} /> },
  { id: 5, title: 'Propuesta', component: ProposalSlide },
  { id: 6, title: 'Resultados', component: ResultsSlide },
  { id: 7, title: 'Conclusión', component: ConclusionSlide }
];
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  
  // Handle mouse movement for navigation visibility
  useEffect(() => {
    const handleMouseMove = () => {
      setIsNavVisible(true);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        setIsNavVisible(false);
      }, 3000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    // Hide nav after initial delay
    timeoutRef.current = window.setTimeout(() => {
      setIsNavVisible(false);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Navigation functions
  const goToNextSlide = () => {
    if (currentSlide < slideData.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };
  // Animation variants for slide transitions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative' as const,
      zIndex: 2
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1
    })
  };
  return (
    <div className="min-h-screen bg-sqm-blue bg-opacity-5 overflow-hidden relative">
      <NavigationBar 
        slides={slideData} 
        currentSlide={currentSlide} 
        goToSlide={goToSlide} 
        isVisible={isNavVisible} 
      />
      <div className="relative h-screen w-screen flex justify-center items-center overflow-hidden bg-sqm-blue bg-opacity-5">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 }
            }}
            className="w-full h-full flex justify-center items-center p-4 box-border"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d',
              overflowY: 'auto'
            }}
          >
            <div className="w-full max-w-6xl h-full overflow-y-auto py-8">
              {React.createElement(slideData[currentSlide].component)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <NavigationArrows 
        goToPrev={goToPrevSlide} 
        goToNext={goToNextSlide} 
        isFirstSlide={currentSlide === 0} 
        isLastSlide={currentSlide === slideData.length - 1} 
        isVisible={isNavVisible}
      />
      <SlideIndicators 
        totalSlides={slideData.length} 
        currentSlide={currentSlide} 
        goToSlide={goToSlide} 
        isVisible={isNavVisible}
      />
    </div>
  );
}
export default App;

