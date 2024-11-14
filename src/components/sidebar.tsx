import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/index.module.css'
import HomeIcon from '../assets/icons/home.svg';
import NetworkingIcon from '../assets/icons/networking.svg';
import MenuBarIcon from '../assets/icons/menu-bar.svg';
import CrossIcon from '../assets/icons/cross.svg';



const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      style={{
        width: isCollapsed ? '60px' : '150px',
      }}
    >
      {/* Collapse/Expand Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '20px',
          right: '-15px',
          transform: 'translateY(-50%)',
          backgroundColor: '#a99985',
          borderRadius: '50%',
          width: '30px',
          height: '30px',
          cursor: 'pointer',
          border: 'none',
          display: 'flex', // Center the icon
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0', // Remove default padding
       }}
      >
        <img
            src={isCollapsed ? MenuBarIcon : CrossIcon}
            alt={isCollapsed ? 'Menu Bar Icon' : 'Cross Icon'}
            style={{
              width: '15px', // Adjust icon size here
              height: '15px',
              objectFit: 'contain',
            }}
        />
      </button>




      {/* Navigation Items */}
      <div>
      <button onClick={() => navigate('/')} className={styles.buttonClass}>
        <img src={HomeIcon} alt="Home" aria-label="Home" style={{ width: '20px', height: '20px' }} />
        {!isCollapsed && <span style={{ marginLeft: '10px' }}>Home</span>}
      </button>

      <button onClick={() => navigate('/Networking')} className={styles.buttonClass}>
        <img src={NetworkingIcon} alt="Networking" aria-label="Networking" style={{ width: '20px', height: '20px' }} />
        {!isCollapsed && <span style={{ marginLeft: '10px' }}>Networking</span>}
      </button>

      </div>
    </nav>
  );
};



export default Sidebar;
