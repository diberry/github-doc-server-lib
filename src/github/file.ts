import { getAuthenticatedHttp } from '../http';
import Octokit from "@octokit/rest";
import { Base64 } from 'js-base64';


const readme = async (token, user, repoInfo) => {

  if (!token || !user || !repoInfo || !repoInfo.owner || !repoInfo.repo || !repoInfo.path) return;

  const octokit = new Octokit.Octokit({
    auth: token
  });

  const config = {
    owner: repoInfo.owner,
    repo: repoInfo.repo,
    path: repoInfo.path
  }
  const contents = await octokit.repos.getContents(config);

  return (contents && contents.data) ? contents.data : null;
}

const readFile = async (token, user, repoInfo) => {

  if (!token || !user || !repoInfo || !repoInfo.owner || !repoInfo.repo || !repoInfo.path) return;

  const octokit = new Octokit.Octokit({
    auth: token
  });

  const config = {
    owner: repoInfo.owner,
    repo: repoInfo.repo,
    path: repoInfo.path
  }
  const contents = await octokit.repos.getContents(config);

  return (contents && contents.data) ? contents.data : null;

}

const writeFile = async (token,  repoInfo, fileInfo) => {

    const request = getAuthenticatedHttp(token)

    const base64Content = Base64.encode(fileInfo.content);

    const uri = `repos/${repoInfo.owner}/${repoInfo.repo}/contents/${repoInfo.path}`;

    const data = {
      "message": "commmit message " + fileInfo.commitMessage,
      "committer": {
        "name": fileInfo.committerName,
        "email": fileInfo.committerEmail
      },
      "content": base64Content
    }

    const contents = await request({
      method: 'PUT',
      url: uri,
      data
    });

    return (contents && contents.data) ? contents.data : null;

}

module.exports = {
  writeFile,
  readFile,
  readme
};