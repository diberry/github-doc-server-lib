import axios from 'axios';
import { getTimeout } from '../timeout'
import { createOAuthAppAuth } from "@octokit/auth-oauth-app";

export async function getAuthenticatedToken (clientId, clientSecret, code, timeout = getTimeout(), lib=true) {

    if(!code || !clientId || !clientSecret) return;

    if(lib){
      const auth = createOAuthAppAuth({clientId,clientSecret,code})

      const authentication = await auth({
        type: "token"
      });

      return authentication;
    } else {
      // http
      return await axios({
        timeout: timeout,
        method: 'post',
        url: `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
        headers: {
          accept: 'application/json'
        }

      });
    }
}