import React from 'react';
import { Microscope } from 'lucide-react';
import { MetricCard } from '../ui/MetricCard';

export function SoilHealth() {
  return (
    <MetricCard
      title="Soil Health"
      icon={<Microscope className="h-6 w-6 text-green-600" />}
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Organic Matter</span>
          <span className="font-semibold text-gray-900">4.2%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '70%' }} />
        </div>
        
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">Carbon Content</span>
          <span className="font-semibold text-gray-900">2.8%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }} />
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">Microbial Activity</span>
          <span className="font-semibold text-gray-900">High</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }} />
        </div>
      </div>
    </MetricCard>
  );
}