import express from 'express';
import workos from './workos';

const app = express();

app.get('/auth/login', async (req, res) => {
  const authorizationUrl = await workos.sso.getAuthorizationUrl({
    domain: 'placeholder.com',
    redirectURI: 'http://localhost:3000/auth/callback',
  });

  res.redirect(authorizationUrl);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-undef
  console.log('Server running on http://localhost:3000');
});