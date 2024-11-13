import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      style={{
        width: isCollapsed ? '60px' : '200px',
        height: '80vh',
        backgroundColor: '#f4f4f4',
        transition: 'width 0.3s',
      }}
    >
      {/* Collapse/Expand Button */}
      <button onClick={toggleSidebar} style={{ marginBottom: '20px' }}>
        {isCollapsed ? '>' : '<'}
      </button>

      {/* Navigation Items */}
      <div>
        <button
          onClick={() => navigate('/')}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            fontWeight: window.location.pathname === '/' ? 'bold' : 'normal',
          }}
        >
          <span role="img" aria-label="Home">🏠</span>
          {!isCollapsed && <span style={{ marginLeft: '10px' }}>Home</span>}
        </button>
        <button
          onClick={() => navigate('/Networking')}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            fontWeight: window.location.pathname === '/Networking' ? 'bold' : 'normal',
          }}
        >
          <span role="img" aria-label="Networking">🌐</span>
          {!isCollapsed && <span style={{ marginLeft: '10px' }}>Networking</span>}
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
