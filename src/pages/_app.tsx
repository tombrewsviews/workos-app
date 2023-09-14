import React from 'react';
import { useRouter } from 'next/router';
import Login from '../components/Login';
import Callback from '../components/Callback';

const App = () => {
  const router = useRouter();
  const { pathname } = router;
  
  if (pathname === '/auth/callback') {
    return <Callback />;
  }
  
  if (pathname === '/login' || pathname === '/') {
    return <Login />;
  }
  
  return (
    <div>
      Content page
    </div>
  );
};

export default App;