import React from 'react';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <div>
      <h1>Regenerative Agriculture Dashboard</h1>
      <Dashboard />
      {/* You can add other components here, like a Header or Footer */}
    </div>
  );
};

export default App;
