import React from 'react';
import { Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MetricCard } from '../ui/MetricCard';

export function SuccessStories() {
  const { t } = useTranslation();
  const stories = [
    {
      farmer: t('stories.farmer1.name'),
      location: t('stories.farmer1.location'),
      achievement: t('stories.farmer1.achievement'),
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=320&q=80',
    },
    {
      farmer: t('stories.farmer2.name'),
      location: t('stories.farmer2.location'),
      achievement: t('stories.farmer2.achievement'),
      image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c8b8b?auto=format&fit=crop&w=320&q=80',
    },
  ];

  return (
    <MetricCard
      title={t('metrics.successStories')}
      icon={<Award className="h-6 w-6 text-green-600" />}
    >
      <div className="space-y-4">
        {stories.map((story) => (
          <div
            key={story.farmer}
            className="bg-white rounded-lg overflow-hidden border border-gray-200"
          >
            <img
              src={story.image}
              alt={story.farmer}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <div className="font-medium text-gray-900">{story.farmer}</div>
              <div className="text-sm text-gray-600">{story.location}</div>
              <div className="mt-2 text-sm text-gray-600">{story.achievement}</div>
            </div>
          </div>
        ))}
      </div>
    </MetricCard>
  );
}