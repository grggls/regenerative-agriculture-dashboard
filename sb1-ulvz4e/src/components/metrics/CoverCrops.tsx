import React from 'react';
import { Leaf } from 'lucide-react';
import { MetricCard } from '../ui/MetricCard';

export function CoverCrops() {
  return (
    <MetricCard
      title="Zwischenfrüchte"
      icon={<Leaf className="h-6 w-6 text-green-600" />}
    >
      <div className="space-y-4">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-3xl font-bold text-green-600">65%</div>
          <div className="text-sm text-gray-600 mt-1">Flächen mit Zwischenfrüchten</div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-600">Hauptzwischenfrüchte</div>
          <div className="grid grid-cols-2 gap-2">
            {['Senf', 'Phacelia', 'Ölrettich', 'Wicken'].map((crop) => (
              <div
                key={crop}
                className="bg-white px-3 py-2 rounded border border-gray-200 text-sm"
              >
                {crop}
              </div>
            ))}
          </div>
        </div>
      </div>
    </MetricCard>
  );
}