import express from 'express';
import workos from './workos';

const app = express();

app.get('/auth/login', async (req, res) => {
  const authorizationURL = await workos.sso.getAuthorizationURL({
    domain: 'placeholder.com',
    redirectURI: 'http://localhost:3000/auth/callback',
  });

  res.redirect(authorizationURL);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-undef
  console.log('Server running on http://localhost:3000');
});