import express from 'express';
import workos from './workos';  // Import your workos module

const app = express();

app.get('/auth/login', async (req, res) => {
  const authorizationURL = await workos.sso.getAuthorizationURL({
    clientId: 'client_01HAA4PTCS6PHQM5H3S4QE575C', // Replace with your actual client ID
    domain: 'placeholder.com',
    redirectURI: 'http://localhost:3000/auth/callback',
  });

  res.redirect(authorizationURL);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
