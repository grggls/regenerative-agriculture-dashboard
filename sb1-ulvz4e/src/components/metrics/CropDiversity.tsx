import React from 'react';
import { Sprout } from 'lucide-react';
import { MetricCard } from '../ui/MetricCard';

export function CropDiversity() {
  const crops = [
    { name: 'Zwischenfrüchte', percentage: 30 },
    { name: 'Hülsenfrüchte', percentage: 25 },
    { name: 'Getreide', percentage: 25 },
    { name: 'Hackfrüchte', percentage: 20 },
  ];

  return (
    <MetricCard
      title="Kulturvielfalt"
      icon={<Sprout className="h-6 w-6 text-green-600" />}
    >
      <div className="space-y-4">
        {crops.map((crop) => (
          <div key={crop.name}>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{crop.name}</span>
              <span className="font-semibold text-gray-900">{crop.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${crop.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </MetricCard>
  );
}