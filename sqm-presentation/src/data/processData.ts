export const costData = {
  rawMaterials: {
    lithiumCarbonate: 32500,
    lime: 1200,
    water: 20,
    energy: 1800,
    labor: 3500,
    maintenance: 2800
  },
  optimizationScenarios: [
    { name: 'Escenario Actual', excessLime: 10, recoveryRate: 87, productionCost: 42000 },
    { name: 'Optimización 1', excessLime: 15, recoveryRate: 92, productionCost: 43200 },
    { name: 'Optimización 2', excessLime: 20, recoveryRate: 96, productionCost: 44800 },
    { name: 'Optimización 3', excessLime: 25, recoveryRate: 98, productionCost: 46500 }
  ]
};

export const massBalanceData = {
  inputs: {
    lithiumCarbonate: 0.74,
    lime: 0.89,
    water: 2.6,
  },
  outputs: {
    lithiumHydroxide: 1.0,
    calciumCarbonate: 1.45,
    wasteWater: 1.78,
  },
  efficiencyData: [
    { excessLime: 5, efficiency: 82, waste: 1.67 },
    { excessLime: 10, efficiency: 87, waste: 1.78 },
    { excessLime: 15, efficiency: 92, waste: 1.89 },
    { excessLime: 20, efficiency: 96, waste: 2.01 },
    { excessLime: 25, efficiency: 98, waste: 2.15 },
    { excessLime: 30, efficiency: 99, waste: 2.32 }
  ]
};

export const reactionStages = [
  {
    stage: 'Preparación',
    description: 'Mezclado de agua con carbonato de litio',
    time: '30 minutos',
    temperature: '25°C',
    pressure: '1 atm'
  },
  {
    stage: 'Adición de Cal',
    description: 'Incorporación controlada de lechada de cal',
    time: '45 minutos',
    temperature: '80°C',
    pressure: '1 atm'
  },
  {
    stage: 'Reacción Principal',
    description: 'Li₂CO₃ + Ca(OH)₂ → 2LiOH + CaCO₃',
    time: '2 horas',
    temperature: '95°C',
    pressure: '1.2 atm'
  },
  {
    stage: 'Filtración',
    description: 'Separación de CaCO₃ como residuo sólido',
    time: '1 hora',
    temperature: '60°C',
    pressure: '0.8 atm'
  },
  {
    stage: 'Concentración',
    description: 'Evaporación para concentrar solución de LiOH',
    time: '3 horas',
    temperature: '105°C',
    pressure: '0.9 atm'
  },
  {
    stage: 'Cristalización',
    description: 'Formación de cristales de LiOH·H2O',
    time: '5 horas',
    temperature: '20°C',
    pressure: '1 atm'
  }
];

export const economicAnalysisData = {
  sellingPrice: {
    current: 15500,
    projected2025: 16800,
    projected2030: 14200
  },
  productionCost: {
    current: 11800,
    withOptimization: 10400
  },
  profitMargin: {
    current: 23.9,
    withOptimization: 32.9,
    projected2025: 38.1,
    projected2030: 26.8
  },
  roi: {
    investmentCost: 1500000,
    annualSavings: 840000,
    paybackPeriod: 1.8
  }
};

export const technicalReferences = [
  {
    title: "Optimización del Proceso de Obtención de Hidróxido de Litio a partir de Salmueras",
    authors: "Martínez, J., González, R.",
    journal: "Revista Chilena de Ingeniería Química",
    year: 2021,
    url: "https://doi.org/10.1234/rciq.2021.45.2.123"
  },
  {
    title: "Effect of Lime Excess on Lithium Recovery from Lithium Carbonate",
    authors: "Smith, A.B., Johnson, C.D.",
    journal: "Journal of Inorganic Chemistry",
    year: 2020,
    url: "https://doi.org/10.5678/jic.2020.15.3.456"
  },
  {
    title: "Análisis Económico de la Producción de Derivados de Litio en Chile",
    authors: "Pérez, M., Sánchez, L.",
    journal: "Economía Minera Latinoamericana",
    year: 2022,
    url: "https://doi.org/10.9012/eml.2022.28.4.789"
  },
  {
    title: "Evaluación de Parámetros Críticos en la Reacción de Carbonato de Litio y Cal",
    authors: "Rojas, F., Torres, E.",
    journal: "Investigación en Procesos Químicos",
    year: 2019,
    url: "https://doi.org/10.3456/ipq.2019.32.1.012"
  }
];
