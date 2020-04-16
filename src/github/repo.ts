import { getAuthenticatedHttp } from '../http';

export async function getRepoListByUserRole (token,user,role) {

    if(!token || !user || !role) return;

    const request = getAuthenticatedHttp(token);

    const response = await request({
        method: 'GET',
        url: `/users/${user}/repos?type=${role}`
      });

  return response.data;
}