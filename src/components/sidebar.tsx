import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      style={{
        width: isCollapsed ? '60px' : '200px',
      }}
    >
      {/* Collapse/Expand Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '20px',
          right: isCollapsed ? '-15px' : '-15px',
          transform: 'translateY(-50%)',
          backgroundColor: '#a99985',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
          border: 'none',
          color: '#fff',
        }}
      >
        {isCollapsed ? '☰' : '×'}
      </button>




      {/* Navigation Items */}
      <div>
        <button onClick={() => navigate('/')} style={buttonStyle()}>
          <span role="img" aria-label="Home">📊</span>
          {!isCollapsed && <span style={{ marginLeft: '10px' }}>Home</span>}
        </button>
        <button onClick={() => navigate('/Networking')} style={buttonStyle()}>
          <span role="img" aria-label="Networking">💼</span>
          {!isCollapsed && <span style={{ marginLeft: '10px' }}>Networking</span>}
        </button>

      </div>
    </nav>
  );
};

const buttonStyle = () => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'normal',
    textAlign: 'left' as const,
    color: '#333',
    marginBottom: '10px',
  });

export default Sidebar;
