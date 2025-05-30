import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import type { ApexOptions } from 'apexcharts';
import { motion } from 'framer-motion';

interface ProcessChartProps {
  type: 'line' | 'bar' | 'area' | 'pie' | 'radar' | 'heatmap';
  series: ApexOptions['series'];
  labels?: string[];
  title: string;
  height?: number;
  colors?: string[];
  isInteractive?: boolean;
  yAxisTitle?: string;
  xAxisTitle?: string;
  tooltipFormatters?: {[key: string]: (value: number) => string};
}

const ProcessChart: React.FC<ProcessChartProps> = ({
  type,
  series,
  labels,
  title,
  height = 350,
  colors = ['#003057', '#00AA4F', '#1A73E8', '#B7791F', '#6B46C1'],
  isInteractive = true,
  yAxisTitle,
  xAxisTitle,
  tooltipFormatters
}) => {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const options: ApexOptions = {
    chart: {
      type,
      toolbar: {
        show: isInteractive,
        tools: {
          download: isInteractive,
          selection: isInteractive,
          zoom: isInteractive,
          zoomin: isInteractive,
          zoomout: isInteractive,
          pan: isInteractive,
          reset: isInteractive,
        }
      },
      fontFamily: 'system-ui, sans-serif',
      events: {
        mouseMove: function(_event, _chartContext, config) {
          if (config.dataPointIndex !== undefined) {
            setHoveredPoint(config.dataPointIndex);
          }
        },
        mouseLeave: function() {
          setHoveredPoint(null);
        }
      },
      animations: {
        enabled: true,
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350
        }
      }
    },
    colors,
    title: {
      text: title,
      align: 'center',
      style: {
        fontSize: '16px',
        fontWeight: 600,
        color: '#003057'
      }
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 10,
        vertical: 5
      }
    },
    dataLabels: {
      enabled: type === 'pie',
      style: {
        fontSize: '14px',
        fontFamily: 'system-ui, sans-serif',
        fontWeight: 'bold'
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
      dashArray: type === 'area' ? [0, 8] : 0
    },
    grid: {
      borderColor: '#e2e8f0',
      row: {
        colors: ['#f8fafc', 'transparent'],
        opacity: 0.5
      }
    },
    xaxis: {
      labels: {
        style: {
          colors: '#718096',
          fontSize: '12px'
        }
      },
      title: {
        text: xAxisTitle,
        style: {
          fontSize: '14px',
          fontWeight: 500,
          color: '#003057'
        }
      },
      axisBorder: {
        show: true,
        color: '#e2e8f0'
      },
      axisTicks: {
        show: true,
        color: '#e2e8f0'
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#718096',
          fontSize: '12px'
        },
        formatter: function(value) {
          return tooltipFormatters && tooltipFormatters['y'] ? 
            tooltipFormatters['y'](value) : value.toString();
        }
      },
      title: {
        text: yAxisTitle,
        style: {
          fontSize: '14px',
          fontWeight: 500,
          color: '#003057'
        }
      }
    },
    tooltip: {
      theme: 'light',
      shared: true,
      intersect: false,
      y: {
        formatter: function(value) {
          return tooltipFormatters && tooltipFormatters['y'] ? 
            tooltipFormatters['y'](value) : value.toString();
        }
      }
    },
    markers: {
      size: 5,
      strokeColors: '#fff',
      strokeWidth: 2,
      hover: {
        size: 7,
      }
    },
    labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 280
          },
          legend: {
            position: 'bottom'
          }
        }
      }
    ]
  };

  return (
    <motion.div 
      className="bg-white p-4 rounded-lg shadow-md" 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ReactApexChart 
        options={options} 
        series={series} 
        type={type} 
        height={height}
      />
      {hoveredPoint !== null && type !== 'pie' && (
        <div className="mt-2 p-2 text-sm text-center text-gray-600 bg-gray-100 rounded">
          {labels && labels[hoveredPoint] ? `Seleccionado: ${labels[hoveredPoint]}` : ''}
        </div>
      )}
    </motion.div>
  );
};

export default ProcessChart;
