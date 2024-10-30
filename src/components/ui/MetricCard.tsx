import React from 'react';

interface MetricCardProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export function MetricCard({ title, icon, children }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {icon}
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}