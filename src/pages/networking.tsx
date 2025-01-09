// src/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Networking: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    // Make an Axios GET request
    axios.get<string>('https://api.killians.club') // Replace with your server URL
      .then((response) => {
        setMessage(response.data); // Update the state with the response
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Error fetching data');
      });
  }, []); // Empty dependency array ensures the call runs only once

  return (
    <div>
      <h1>Networking</h1>
      <p>{message}!</p>
    </div>
  );
};

export default Networking;
