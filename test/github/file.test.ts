import { GitHub } from '../../src/index';
require('dotenv').config()

describe('Octokit-File', () => {

    describe('writeFile', () => {

        it('writeFile Octokit', async (done) => {

            try {

                console.log(process.env);

                const TOKEN = "8626cc6f23dc451bef8a3d28f7e034d487226091"
                const FILENAME = `README-xyz-${+new Date}.md`

                const repo = {
                    owner: "diberry",
                    name: "public-test",
                    path: FILENAME
                }

                const fileInfo = {
                    commitmessage:"commmit message my commit message",
                    content:"Hello",
                    committername:"Dina Berry",
                    committeremail:"diberry@microsoft.com"
                }

                const octokitResponse = await GitHub.File.writeFile(TOKEN, repo, fileInfo)

                done()
            } catch (error) {
                done(JSON.stringify(error))
            }

        });
    });
});