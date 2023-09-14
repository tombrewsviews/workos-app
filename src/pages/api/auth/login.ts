import { NextApiRequest, NextApiResponse } from 'next';
import workos from '../../../workos';  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientId = req.query.client_id as string;

  const authorizationUrl = await workos.sso.getAuthorizationUrl({
    clientId,
    domain: 'placeholder.com',
    redirectURI: 'http://localhost:3000/auth/callback',
  });

  res.redirect(authorizationUrl);
}
