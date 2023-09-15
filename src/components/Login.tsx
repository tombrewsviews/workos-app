import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');

  const handleMagicLink = async () => {
    try {
      await axios.post('../pages/api/magic_link', { email });
      alert('Magic link sent to your email.');
    } catch (error) {
      console.error('Failed to send magic link:', error);
      alert('Failed to send magic link.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => { e.preventDefault(); handleMagicLink(); }}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email for magic link"
        />
        <button type="submit">Send Magic Link</button>
      </form>
    </div>
  );
};

export default Login;
