import Cors from 'cors';
import WorkOS from '@workos-inc/node';

// Initialize the WorkOS SDK
const workos = new WorkOS(process.env.WORKOS_API_KEY);

// Initialize the CORS middleware
const cors = Cors({
  methods: ['POST'],
  origin: 'https://workos-dx7rhclu0-tomparandyk-neontech.vercel.app/', // Replace with your actual frontend domain
});

// Helper method to wait for a middleware to execute before continuing
const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(req, res) {
  // Run the CORS middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    try {
      const { email } = req.body;
      const session = await workos.passwordless.createSession({
        email,
        type: 'MagicLink',
      });

      await workos.passwordless.sendSession(session.id);

      res.status(200).json({ message: 'Magic link sent', session });
    } catch (error) {
      console.error('Failed to send magic link:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}

