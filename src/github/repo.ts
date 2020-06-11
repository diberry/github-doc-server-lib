import { getOctokit } from './octokit'


/*
Type: all, owner, member
*/
export async function getRepoListByUserRole(token: string, username: string, type?, timeout?: number):Promise<any> {

  if (!token || !username || !type) return;

  const octokit = getOctokit(token, timeout)

  return await octokit.repos.listForUser({
    username, type
  });


}