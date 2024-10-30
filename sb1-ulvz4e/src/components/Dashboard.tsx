import React from 'react';
import { SoilHealth } from './metrics/SoilHealth';
import { CropDiversity } from './metrics/CropDiversity';
import { CoverCrops } from './metrics/CoverCrops';
import { TillagePractices } from './metrics/TillagePractices';
import { RegenerativeGrazing } from './metrics/RegenerativeGrazing';
import { SuccessStories } from './metrics/SuccessStories';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-gray-900">Übersicht Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Überwachen und analysieren Sie Ihre regenerativen Landwirtschaftspraktiken
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SoilHealth />
        <CropDiversity />
        <CoverCrops />
        <TillagePractices />
        <RegenerativeGrazing />
        <SuccessStories />
      </div>
    </div>
  );
}