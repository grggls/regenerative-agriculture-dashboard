import React from 'react';
import { Sprout } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MetricCard } from '../ui/MetricCard';

export function CropDiversity() {
  const { t } = useTranslation();
  const crops = [
    { name: t('crops.coverCrops'), percentage: 30 },
    { name: t('crops.legumes'), percentage: 25 },
    { name: t('crops.cereals'), percentage: 25 },
    { name: t('crops.rootCrops'), percentage: 20 },
  ];

  return (
    <MetricCard
      title={t('metrics.cropDiversity')}
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