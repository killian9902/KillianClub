// src/pages/Home.tsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Networking: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    // Make an Axios GET request
    axios.get<{ message: string }>('https://api.killians.club') // Specify the expected response type
      .then((response) => {
        setMessage(response.data.message); // Access the 'message' field from the JSON
      })
      .catch((error) => {
        console.error('Error:', error);
        setMessage('Error fetching data');
      });
  }, []);
  

  return (
    <div>
      <h1>Networking</h1>
      <p>{message}!</p>
    </div>
  );
};

export default Networking;
