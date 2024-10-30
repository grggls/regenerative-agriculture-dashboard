import React from 'react';
import { Trees } from 'lucide-react';
import { MetricCard } from '../ui/MetricCard';

export function RegenerativeGrazing() {
  return (
    <MetricCard
      title="Regenerative Beweidung"
      icon={<Trees className="h-6 w-6 text-green-600" />}
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">500</div>
            <div className="text-sm text-gray-600 mt-1">Hektar unter Management</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">85%</div>
            <div className="text-sm text-gray-600 mt-1">Bodenbedeckung</div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-gray-600">Hauptvorteile</div>
          <div className="space-y-2">
            {[
              'Verbesserte Bodengesundheit',
              'Erhöhte Biodiversität',
              'CO₂-Speicherung',
              'Wasserspeicherung',
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center space-x-2 text-sm text-gray-600"
              >
                <div className="w-2 h-2 bg-green-600 rounded-full" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MetricCard>
  );
}