import { getAuthenticatedHttp } from '../http';

export async function getProfile (token) {

    if(!token) return;

    const request = getAuthenticatedHttp(token);

    const userProfileResponse = await request({
        method: 'get',
        url: '/user'
      });

      return userProfileResponse.data;
}
