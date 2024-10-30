import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900">My App</h1>
        </div>
      </header>

      {/* Sidebar and Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-gray-800">
          <nav className="mt-5">
            <ul className="space-y-2">
              <li>
                <a href="/" className="block px-4 py-2 text-gray-200 hover:bg-gray-700">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/settings" className="block px-4 py-2 text-gray-200 hover:bg-gray-700">
                  Settings
                </a>
              </li>
              <li>
                <a href="/profile" className="block px-4 py-2 text-gray-200 hover:bg-gray-700">
                  Profile
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;