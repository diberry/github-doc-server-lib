import axios from 'axios';
import { getTimeout } from './timeout'

export function getAuthenticatedHttp (token: string) {

  if(!token) return;

    let config = {
      baseURL: 'https://api.github.com/',
      timeout: getTimeout(),
      headers: {
        'Authorization': 'token ' + token,
        'Accept': '*/*',
        'User-Agent':'dfberry-oauth-app',
        'Content-Type': 'application/json'
      }
    }


    return axios.create(config);
}