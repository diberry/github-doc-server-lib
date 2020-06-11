import {Octokit} from '@octokit/rest'
import { getTimeout } from '../timeout'

export const getOctokit = (token, timeout:number=getTimeout()) =>{

    if(!token) throw Error("Token parameter expected, but not received")

  return new Octokit({
    auth: token,
    request:{
        timeout,
        userAgent: 'github-doc-server-lib'
    }
  });
}
