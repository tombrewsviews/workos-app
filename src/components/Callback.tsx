import React, { useEffect } from 'react';
import axios from 'axios';


const Callback = () => {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get('/auth/callback');
        console.log('Profile:', data);
        localStorage.setItem('authenticated', 'true'); // Set authenticated flag
      } catch (error) {
        console.error('Failed to handle callback:', error);
      }
    };
  
    fetchProfile();
  }, []);

  return (
    <div>
      Processing...
    </div>
  );
};

export default Callback;
