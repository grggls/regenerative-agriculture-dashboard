import React from 'react';
import { Tractor } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MetricCard } from '../ui/MetricCard';

export function TillagePractices() {
  const { t } = useTranslation();
  const practices = [
    { name: t('tillage.noTill'), percentage: 35 },
    { name: t('tillage.reducedTill'), percentage: 40 },
    { name: t('tillage.conservation'), percentage: 25 },
  ];

  return (
    <MetricCard
      title={t('metrics.tillagePractices')}
      icon={<Tractor className="h-6 w-6 text-green-600" />}
    >
      <div className="space-y-4">
        {practices.map((practice) => (
          <div key={practice.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">{practice.name}</span>
              <span className="font-semibold text-gray-900">
                {practice.percentage}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: `${practice.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </MetricCard>
  );
}