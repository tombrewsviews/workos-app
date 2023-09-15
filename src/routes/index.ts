import express, { Request, Response, Router } from 'express';
import WorkOS, { PasswordlessSession, ProfileAndToken } from '@workos-inc/node';

const workos: WorkOS = new WorkOS(process.env.WORKOS_API_KEY);
const clientID: string = process.env.WORKOS_CLIENT_ID || '';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.render('index.ejs', {
    title: 'Home',
  });
});

router.post('/auth/magic_link', async (req: Request, res: Response) => {
  const email: string = req.body.email;
  try {
    const session: PasswordlessSession = await workos.passwordless.createSession({
      email,
      type: 'MagicLink',
    });
    await workos.passwordless.sendSession(session.id);
    res.render('confirmation.ejs', {
      email: session.email,
      link: session.link,
    });
  } catch (error) {
    console.error('Failed to create magic link session:', error);
    res.status(500).send('Failed to create magic link session');
  }
});

router.get('/auth/callback', async (req: Request, res: Response) => {
  const code: string = typeof req.query.code === 'string' ? req.query.code : '';
  try {
    const profile: ProfileAndToken = await workos.sso.getProfileAndToken({
      code,
      clientID,
    });
    res.render('login_successful.ejs', {
      profile: JSON.stringify(profile, null, 4),
    });
  } catch (error) {
    console.error('Failed to handle callback:', error);
    res.status(500).send('Failed to handle callback');
  }
});

export default router;
