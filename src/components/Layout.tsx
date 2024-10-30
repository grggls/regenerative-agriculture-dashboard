import React from 'react';
import { Sprout, Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      <nav className="bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Regenerative Landwirtschaft
              </span>
            </div>
            <div className="flex items-center">
              <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}