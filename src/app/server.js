const express = require('express');
const workos = require('./workos');

const app = express();

app.get('/auth/login', async (req, res) => {
  const authorizationUrl = await workos.sso.getAuthorizationUrl({
    domain: 'your_domain.com',
    redirectURI: 'http://localhost:3000/auth/callback',
  });

  res.redirect(authorizationUrl);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
