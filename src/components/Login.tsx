import React from 'react';

const Login: React.FC = () => {
  const handleLogin = () => {
    const clientId = process.env.NEXT_PUBLIC_WORKOS_CLIENT_ID;
    window.location.href = `/api/auth/login?client_id=${clientId}`;
  };

  return (
    <button onClick={handleLogin}>Login with WorkOS</button>
  );
};

export default Login;