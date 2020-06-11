import { Base64 } from 'js-base64';
import { getOctokit } from './octokit'

/*
export const readme = async (token, user, repoInfo, timeout = DEFAULT_TIMEOUT) => {

  if (!token || !user || !repoInfo || !repoInfo.owner || !repoInfo.repo || !repoInfo.path) return;

  const octokit = getOctoKit(token,timeout)

  const config = {
    owner: repoInfo.owner,
    repo: repoInfo.repo,
    path: repoInfo.path
  }
  const contents = await octokit.repos.getContents(config);

  return (contents && contents.data) ? contents.data : null;
}

export const readFile = async (token, user, repoInfo, timeout = DEFAULT_TIMEOUT) => {

  if (!token || !user || !repoInfo || !repoInfo.owner || !repoInfo.repo || !repoInfo.path) return;

  const octokit = getOctoKit(token,timeout)

  const config = {
    owner: repoInfo.owner,
    repo: repoInfo.repo,
    path: repoInfo.path
  }
  const contents = await octokit.repos.getContents(config);

  return (contents && contents.data) ? contents.data : null;

}
*/

export const writeFile = async (token: string, repo: any, fileInfo: any, timeout?: number): Promise<any> => {

    const octokit = getOctokit(token, timeout)

    const base64Content = Base64.encode(fileInfo?.content.trim());

    const newFile:any = {
      owner: repo?.owner ?? "",
      repo: repo?.name ?? "",
      path: repo?.path ?? "",
      message: fileInfo?.commitmessage ?? "",
      content: base64Content,
      committer: {
        name: fileInfo?.committername ?? "",
        email: fileInfo?.committeremail ?? ""
      }
    };

    return await octokit.repos.createOrUpdateFile(newFile)
}