import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Login from '../components/Login';
import Callback from '../components/Callback';

const App = () => {
  const router = useRouter();
  const { pathname } = router;
  
  // Add a state variable to check if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (you can replace this with your own logic)
    const authStatus = localStorage.getItem('authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  if (pathname === '/auth/callback') {
    return <Callback />;
  }
  
  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <div>
      Content page
    </div>
  );
};

export default App;
