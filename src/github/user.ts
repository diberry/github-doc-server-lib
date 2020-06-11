import { getOctokit } from './octokit'

/*
Get profile
*/
export async function getProfile(token, username, timeout?: number): Promise<any> {

  if (!token || !username) return;

  const octokit = getOctokit(token, timeout)


  return await octokit.users.getByUsername({
    username
  });

}

/*
Get profile of authenticated user (token)
*/
export async function getPrivateProfile(token, timeout?: number): Promise<any> {

  if (!token) return;

  const octokit = getOctokit(token, timeout)

  return await octokit.users.getAuthenticated();

}
