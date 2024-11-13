// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        {/* Sidebar always visible */}
        <Sidebar />

        {/* Main content area with page routing */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
