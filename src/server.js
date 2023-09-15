import express from 'express';
import workos from './workos';

const app = express();

app.use(express.json());

app.post('/auth/magic_link', async (req, res) => {
  console.log("Received request for magic link", req.body); 
  const email = req.body.email;
  try {
    await workos.passwordless.createSession({
      email,
      type: 'MagicLink',
    });
    res.status(200).send('Magic link sent.');
  } catch (error) {
    console.error('Failed to send magic link:', error);
    res.status(500).send('Failed to send magic link.');
  }
});

app.get('/auth/callback', async (req, res) => {
  const code = req.query.code;
  try {
    // Comment out or remove the 'profile' variable if it's not being used
    // const profile = await workos.sso.getProfileAndToken({
    await workos.sso.getProfileAndToken({
      code,
      clientID: 'WORKOS_CLIENT_ID',
    });
    res.redirect('/'); // Redirect to the content page
  } catch (error) {
    console.error('Failed to handle callback:', error);
    res.status(500).send('Failed to handle callback.');
  }
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
