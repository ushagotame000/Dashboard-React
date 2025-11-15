import React from "react";

interface TechBarChartProps {
  data: { language: string; percentage: number; color: string }[];
}

const TechBarChart: React.FC<TechBarChartProps> = ({ data }) => {
  return (
    <div className="space-y-4">
      {data.map((tech) => (
        <div key={tech.language} className="space-y-1">
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300">
            <span>{tech.language}</span>
            <span>{tech.percentage}%</span>
          </div>
          <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div
              style={{ width: `${tech.percentage}%`, backgroundColor: tech.color }}
              className="h-4 rounded-full transition-all duration-500"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechBarChart;
