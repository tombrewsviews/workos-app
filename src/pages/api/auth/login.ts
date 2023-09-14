import { NextApiRequest, NextApiResponse } from 'next';
import workos from '../../../workos';  

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const clientID = req.query.client_id as string;

  const authorizationURL = await workos.sso.getAuthorizationURL({
    clientID,
    domain: 'workos-9qgdfegea-tomparandyk-neontech.vercel.app',
    redirectURI: 'http://localhost:3000/auth/callback',
  });

  res.redirect(authorizationURL);
}
